import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t-2 border-sky-700 bg-sky-950 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-10 text-slate-100">
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="text-2xl font-semibold text-white">BulldogEx Shop</p>
            <p className="max-w-sm text-sm leading-7 text-sky-200">
              A simple campus marketplace for essentials, study gear, and school merch.
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">Explore</p>
            <Link to="/" className="block text-sm text-slate-300 transition hover:text-white">Home</Link>
            <Link to="/about" className="block text-sm text-slate-300 transition hover:text-white">About</Link>
            <Link to="/products" className="block text-sm text-slate-300 transition hover:text-white">Products</Link>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">Support</p>
            <Link to="/contact" className="block text-sm text-slate-300 transition hover:text-white">Contact</Link>
            <Link to="/faq" className="block text-sm text-slate-300 transition hover:text-white">FAQ</Link>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-300">Legal</p>
            <Link to="/privacy" className="block text-sm text-slate-300 transition hover:text-white">Privacy</Link>
            <Link to="/terms" className="block text-sm text-slate-300 transition hover:text-white">Terms</Link>
          </div>
        </div>

        <div className="border-t border-sky-800 pt-6 text-center text-[11px] uppercase tracking-[0.24em] text-sky-300">
          © 2026 BulldogEx Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
