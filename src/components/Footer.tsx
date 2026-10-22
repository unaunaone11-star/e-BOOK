export default function Footer() {
  return (
    <footer className="border-t border-slate-200 px-6 py-8 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
        <p>© 2026 Digital E-Book Store. All rights reserved.</p>
        <nav className="flex gap-6">
          <a href="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
          <a href="/terms" className="hover:text-slate-900 transition-colors">Terms and Conditions</a>
          <a href="/refund" className="hover:text-slate-900 transition-colors">Refund Policy</a>
        </nav>
      </div>
    </footer>
  );
}
