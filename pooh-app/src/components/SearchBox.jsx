import { useState } from "react";

function SearchBox({query, setQuery}) {

    const [genre, setGenre] = useState('Sci-Fi');
    
  return (
    <div className="space-y-2 p-4">
      <input
        value={query}                              // 1. ค่าใน input มาจาก state
        onChange={(e) => setQuery(e.target.value)} // 2. พิมพ์แล้วอัปเดต state
        placeholder="ค้นหาหนัง..."
        className="rounded-lg border border-slate-300 px-3 py-2
                   focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />
      {/* 3. state เปลี่ยน ทุกที่ที่ใช้ query อัปเดตทันที */}
      <p className="text-sm text-slate-500">กำลังค้นหา: <strong>{query || '...'}</strong></p>
      <select value={genre} onChange={(e) => setGenre(e.target.value)}
        className="rounded-lg border border-slate-300 px-3 py-2">

        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Animation">Animation</option>
        <option value="Thriller">Thriller</option>
        <option value="Drama">Drama</option>
        </select>

    </div>
  );
}
export default SearchBox;