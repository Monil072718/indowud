import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

type JsonValue = string | number | boolean | null | JsonObject | JsonValue[];
type JsonObject = {[key: string]: JsonValue};
type ProductAliasMap = Record<string, string>;

const PRODUCT_KEY_ALIASES: ProductAliasMap = {
  'nfc-fluted': 'nfc-flute',
  'nfc-textured': 'nfc-textured-panels',
  'nfc-jalli': 'nfc-jaali',
  'nfc-decking': 'nfc-flooring'
};

/**
 * Deep clones a JSON-compatible object.
 */
function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Applies product aliases to the messages object without mutating the original.
 */
function applyProductAliases(messages: JsonObject): JsonObject {
  const result = deepClone(messages);

  const productDetails = result.ProductDetails;
  if (productDetails && typeof productDetails === 'object' && !Array.isArray(productDetails)) {
    const details = productDetails as JsonObject;
    for (const [aliasKey, canonicalKey] of Object.entries(PRODUCT_KEY_ALIASES)) {
      if (aliasKey in details && !(canonicalKey in details)) {
        details[canonicalKey] = details[aliasKey];
      } else if (canonicalKey in details && !(aliasKey in details)) {
        details[aliasKey] = details[canonicalKey];
      }
    }
  }

  const nfcProductsPage = result.NFCProductsPage;
  if (nfcProductsPage && typeof nfcProductsPage === 'object' && !Array.isArray(nfcProductsPage)) {
    const nfcObject = nfcProductsPage as JsonObject;
    const products = nfcObject.products;
    if (products && typeof products === 'object' && !Array.isArray(products)) {
      const productList = products as JsonObject;
      for (const [aliasKey, canonicalKey] of Object.entries(PRODUCT_KEY_ALIASES)) {
        if (aliasKey in productList && !(canonicalKey in productList)) {
          productList[canonicalKey] = productList[aliasKey];
        } else if (canonicalKey in productList && !(aliasKey in productList)) {
          productList[aliasKey] = productList[canonicalKey];
        }
      }
    }
  }

  return result;
}

/**
 * Deeply merges two message objects.
 */
function mergeMessages(base: JsonValue, override: JsonValue): JsonValue {
  if (
    base && typeof base === 'object' && !Array.isArray(base) &&
    override && typeof override === 'object' && !Array.isArray(override)
  ) {
    const merged: JsonObject = { ...base as JsonObject };
    for (const key in override as JsonObject) {
      const val = (override as JsonObject)[key];
      if (val !== undefined) {
        merged[key] = key in merged 
          ? mergeMessages(merged[key], val)
          : val;
      }
    }
    return merged;
  }
  return override !== undefined ? override : base;
}

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  // Validate locale
  if (!locale || !(routing.locales as readonly string[]).includes(locale)) {
    locale = routing.defaultLocale;
  }

  // Import base English messages
  const enMessages = (await import('../../messages/en.json')).default as JsonObject;
  
  // Import target locale messages
  const targetMessagesRaw = locale === 'en'
    ? enMessages
    : (await import(`../../messages/${locale}.json`)).default as JsonObject;

  // Apply aliases and merge with English fallback
  const processedTarget = applyProductAliases(targetMessagesRaw);
  
  return {
    locale,
    messages: mergeMessages(deepClone(enMessages), processedTarget) as JsonObject
  };
});
