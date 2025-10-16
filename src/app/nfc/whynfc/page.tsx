"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Minus, Info, ChevronDown, ChevronUp, Sparkles } from "lucide-react";

/* ======================== types ======================== */
type Cell = boolean | "partial" | "na" | string;
type BoardKey = "nfc" | "pvc" | "plywood" | "mdf";

type Row = {
  id: string | number;
  label: string;
  hint?: string;
  category?: string;
  values: Record<BoardKey, Cell>;
};

type Data = {
  boards: { key: BoardKey; label: string; accent: string; description?: string }[];
  rows: Row[];
  title?: string;
  caption?: string;
};

/* ======================== UI atoms ======================== */
function Chip({ v, highlight = false }: { v: Cell; highlight?: boolean }) {
  const baseStyles = "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold transition-all duration-200";
  
  if (v === true)
    return (
      <span className={`${baseStyles} ${
        highlight 
          ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25" 
          : "bg-emerald-50 text-emerald-700 border border-emerald-200"
      }`}>
        <Check className="h-4 w-4" /> Yes
      </span>
    );
  if (v === false)
    return (
      <span className={`${baseStyles} ${
        highlight 
          ? "bg-rose-500 text-white shadow-lg shadow-rose-500/25" 
          : "bg-rose-50 text-rose-700 border border-rose-200"
      }`}>
        <X className="h-4 w-4" /> No
      </span>
    );
  if (v === "partial")
    return (
      <span className={`${baseStyles} ${
        highlight 
          ? "bg-amber-500 text-white shadow-lg shadow-amber-500/25" 
          : "bg-amber-50 text-amber-700 border border-amber-200"
      }`}>
        <Minus className="h-4 w-4" /> Limited
      </span>
    );
  if (v === "na")
    return (
      <span className={`${baseStyles} bg-slate-100 text-slate-500 border border-slate-200`}>
        N/A
      </span>
    );
  return (
    <span className={`${baseStyles} ${
      highlight 
        ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25" 
        : "bg-blue-50 text-blue-700 border border-blue-200"
    }`}>
      {v}
    </span>
  );
}

function ScoreIndicator({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-500"
          style={{ width: `${score}%` }}
        />
      </div>
      <span className="text-xs font-bold text-slate-700">{score}%</span>
    </div>
  );
}

/* ======================== component ======================== */
export default function ComparisonMatrixPremium({ data }: { data?: Data }) {
  const [hoverCol, setHoverCol] = useState<BoardKey | null>(null);
  const [view, setView] = useState<"matrix" | "cards">("matrix");
  const [expandedRows, setExpandedRows] = useState<Set<string | number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const d = useMemo<Data>(() => data ?? SAMPLE, [data]);

  // Calculate scores for each board
  const boardScores = useMemo(() => {
    return d.boards.map(board => {
      const total = d.rows.length;
      let score = 0;
      
      d.rows.forEach(row => {
        const value = row.values[board.key];
        if (value === true) score += 1;
        else if (value === "partial") score += 0.5;
        else if (typeof value === "string" && !["na", "partial"].includes(value)) score += 0.75;
      });
      
      return Math.round((score / total) * 100);
    });
  }, [d]);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(d.rows.map(row => row.category).filter(Boolean)));
    return ["all", ...cats] as string[];
  }, [d.rows]);

  // Filter rows by category
  const filteredRows = useMemo(() => {
    if (selectedCategory === "all") return d.rows;
    return d.rows.filter(row => row.category === selectedCategory);
  }, [d.rows, selectedCategory]);

  const toggleRow = (id: string | number) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedRows(newExpanded);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/20 via-transparent to-blue-100/10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl" />
      
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-200 shadow-sm mb-6"
          >
            <Sparkles className="h-4 w-4 text-emerald-600" />
            <span className="text-sm font-medium text-slate-700">Material Comparison Matrix</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4"
          >
            {d.title ?? "Smart Material Comparison"}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            {d.caption ?? "Compare material properties with interactive insights and detailed analysis"}
          </motion.p>
        </div>

        {/* Controls */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col lg:flex-row gap-4 mb-8"
        >
          {/* Category Filter */}
          <div className="flex-1">
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-slate-900 text-white shadow-lg"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  {category === "all" ? "All Properties" : category}
                </button>
              ))}
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex gap-2">
            <button
              onClick={() => setView("matrix")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                view === "matrix"
                  ? "bg-slate-900 text-white shadow-lg"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              Matrix View
            </button>
            <button
              onClick={() => setView("cards")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                view === "cards"
                  ? "bg-slate-900 text-white shadow-lg"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              Card View
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {view === "matrix" ? (
            <motion.div
              key="matrix"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Board Headers with Scores */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {d.boards.map((board, index) => (
                  <motion.div
                    key={board.key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onMouseEnter={() => setHoverCol(board.key)}
                    onMouseLeave={() => setHoverCol(null)}
                    className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                      hoverCol === board.key
                        ? "scale-105 shadow-2xl border-emerald-200 bg-white"
                        : "shadow-lg border-slate-100 bg-white"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl ${board.accent} flex items-center justify-center mb-4`}>
                      <span className="text-white font-bold text-lg">
                        {board.label.charAt(0)}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{board.label}</h3>
                    
                    {board.description && (
                      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                        {board.description}
                      </p>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-500">Overall Score</span>
                      <ScoreIndicator score={boardScores[index]} />
                    </div>
                    
                    {hoverCol === board.key && (
                      <motion.div
                        layoutId="board-glow"
                        className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-blue-500/5 -z-10"
                      />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Comparison Table */}
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                {/* Table Header */}
                <div className="grid grid-cols-[2fr,repeat(4,1fr)] bg-slate-50 border-b border-slate-200">
                  <div className="p-6 font-semibold text-slate-900">Properties</div>
                  {d.boards.map(board => (
                    <div key={board.key} className="p-6 text-center font-semibold text-slate-900">
                      {board.label}
                    </div>
                  ))}
                </div>

                {/* Table Rows */}
                <div className="divide-y divide-slate-100">
                  {filteredRows.map((row, rowIndex) => (
                    <motion.div
                      key={row.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: rowIndex * 0.05 }}
                      className="grid grid-cols-[2fr,repeat(4,1fr)] hover:bg-slate-50/50 transition-colors duration-200"
                    >
                      {/* Property Name */}
                      <button
                        onClick={() => toggleRow(row.id)}
                        className="p-6 text-left flex items-start gap-4 group"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span className="font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                              {row.label}
                            </span>
                            {row.hint && (
                              <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform duration-200 ${
                                expandedRows.has(row.id) ? "rotate-180" : ""
                              }`} />
                            )}
                          </div>
                          
                          {row.hint && expandedRows.has(row.id) && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              className="text-sm text-slate-600 mt-2 leading-relaxed"
                            >
                              {row.hint}
                            </motion.div>
                          )}
                        </div>
                      </button>

                      {/* Property Values */}
                      {d.boards.map(board => (
                        <div
                          key={board.key}
                          className="p-6 flex items-center justify-center"
                        >
                          <Chip 
                            v={row.values[board.key]} 
                            highlight={hoverCol === board.key}
                          />
                        </div>
                      ))}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="cards"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6"
            >
              {d.boards.map((board, boardIndex) => (
                <motion.div
                  key={board.key}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: boardIndex * 0.1 }}
                  className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden"
                >
                  {/* Card Header */}
                  <div className={`p-6 ${board.accent} text-white`}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{board.label}</h3>
                      <ScoreIndicator score={boardScores[boardIndex]} />
                    </div>
                    {board.description && (
                      <p className="text-white/90 text-sm opacity-90">{board.description}</p>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    {filteredRows.map(row => (
                      <div
                        key={row.id}
                        className="p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors duration-200"
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                              <span className="font-medium text-slate-900 text-sm">
                                {row.label}
                              </span>
                            </div>
                            {row.hint && (
                              <p className="text-slate-600 text-xs leading-relaxed">
                                {row.hint}
                              </p>
                            )}
                          </div>
                          <Chip v={row.values[board.key]} />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-white rounded-2xl shadow-lg border border-slate-200 p-6"
        >
          <h3 className="font-semibold text-slate-900 mb-4">Legend</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-center">
                <Check className="h-4 w-4 text-emerald-600" />
              </div>
              <span className="text-sm font-medium text-slate-700">Yes / Available</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-rose-50 border border-rose-200 rounded-lg flex items-center justify-center">
                <X className="h-4 w-4 text-rose-600" />
              </div>
              <span className="text-sm font-medium text-slate-700">No / Not Available</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-amber-50 border border-amber-200 rounded-lg flex items-center justify-center">
                <Minus className="h-4 w-4 text-amber-600" />
              </div>
              <span className="text-sm font-medium text-slate-700">Limited / Partial</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-50 border border-blue-200 rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-blue-600">i</span>
              </div>
              <span className="text-sm font-medium text-slate-700">Specific Value</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ======================== sample data ======================== */
const SAMPLE: Data = {
  boards: [
    { 
      key: "nfc", 
      label: "NFC", 
      accent: "bg-gradient-to-br from-emerald-600 to-emerald-700",
      description: "Natural Fiber Composite - Eco-friendly alternative"
    },
    { 
      key: "pvc", 
      label: "PVC/WPC Foam", 
      accent: "bg-gradient-to-br from-indigo-600 to-purple-600",
      description: "Polymer-based foam boards"
    },
    { 
      key: "plywood", 
      label: "Plywood", 
      accent: "bg-gradient-to-br from-amber-600 to-orange-600",
      description: "Traditional wood-based material"
    },
    { 
      key: "mdf", 
      label: "MDF", 
      accent: "bg-gradient-to-br from-rose-600 to-pink-600",
      description: "Medium Density Fiberboard"
    },
  ],
  rows: [
    {
      id: 1,
      label: "Density",
      category: "Physical",
      hint: "Higher density typically indicates better durability and strength",
      values: { nfc: "700–800 kg/m³", pvc: "400–600 kg/m³", plywood: "650–750 kg/m³", mdf: "600–700 kg/m³" },
    },
    {
      id: 2,
      label: "Raw Material",
      category: "Composition",
      hint: "Base composition & binders used in manufacturing",
      values: {
        nfc: "Natural fibers + thermoplastics",
        pvc: "PVC + chemical fillers",
        plywood: "Softwood + Phenol",
        mdf: "Softwood + Urea",
      },
    },
    { 
      id: 3, 
      label: "Termite Proof", 
      category: "Durability",
      hint: "Resistance to termite and insect damage",
      values: { nfc: true, pvc: "partial", plywood: false, mdf: false } 
    },
    { 
      id: 4, 
      label: "Water Proof", 
      category: "Durability",
      hint: "Ability to withstand water exposure without damage",
      values: { nfc: true, pvc: true, plywood: "partial", mdf: false } 
    },
    {
      id: 5,
      label: "Screw Holding",
      category: "Mechanical",
      hint: "Ability to hold screws firmly without stripping",
      values: { nfc: "Excellent", pvc: "Poor", plywood: "Good", mdf: "Fair" },
    },
    { 
      id: 6, 
      label: "Conventional Tools", 
      category: "Workability",
      hint: "Compatibility with standard woodworking tools",
      values: { nfc: true, pvc: true, plywood: true, mdf: true } 
    },
    { 
      id: 7, 
      label: "Laminate/Veneer", 
      category: "Finish",
      hint: "Ease of applying surface finishes and laminates",
      values: { nfc: true, pvc: "partial", plywood: true, mdf: true } 
    },
    {
      id: 8,
      label: "Application Range",
      category: "Usage",
      hint: "Suitable environments and applications",
      values: { nfc: "Indoor & Outdoor", pvc: "Mostly Indoor", plywood: "Indoor", mdf: "Indoor only" },
    },
    { 
      id: 9, 
      label: "Dimensional Stability", 
      category: "Physical",
      hint: "Resistance to shrinking and swelling with humidity changes",
      values: { nfc: true, pvc: true, plywood: "partial", mdf: "partial" } 
    },
    { 
      id: 10, 
      label: "Weather Resistance", 
      category: "Durability",
      hint: "Long-term performance under weather exposure",
      values: { nfc: true, pvc: "partial", plywood: "partial", mdf: "partial" } 
    },
    { 
      id: 11, 
      label: "Flame Retardant", 
      category: "Safety",
      hint: "Availability of fire-resistant variants",
      values: { nfc: "Available", pvc: "Limited", plywood: "Optional", mdf: "Optional" } 
    },
    { 
      id: 12, 
      label: "Eco-friendly", 
      category: "Sustainability",
      hint: "Environmental impact and sustainability credentials",
      values: { nfc: true, pvc: "partial", plywood: "partial", mdf: false } 
    },
  ],
};