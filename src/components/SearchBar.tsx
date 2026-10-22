import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="relative flex items-center w-full max-w-lg">
      <Search className="absolute left-3 w-4 h-4 text-slate-400" />
      <input
        type="text"
        placeholder="Search for anything..."
        className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-100 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all"
        onChange={(e) => console.log('Filtering:', e.target.value)}
      />
    </div>
  );
}
