import { ReactNode } from 'react';
import SearchBar from './SearchBar.tsx';
import Footer from './Footer.tsx';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between gap-8 px-6 py-4 border-b border-slate-200">
        <a href="/" className="text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0">
          Digital E-Book Store
        </a>
        <SearchBar />
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <a href="/store" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Store</a>
          <a href="/library" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">Library</a>
          <a href="/about" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">About</a>
        </nav>
        <div className="flex items-center gap-3 shrink-0">
          <button className="px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0">
            Sign In
          </button>
        </div>
      </header>
      <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
