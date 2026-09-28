import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-muted">
        404
      </p>

      <h1 className="font-serif text-3xl text-[#151515]">Page not found</h1>

      <p className="max-w-sm text-sm text-[#777]">
        The page you are looking for does not exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-2 rounded-xl bg-[#151515] px-5 py-3 text-xs font-semibold text-white transition-colors duration-300 hover:bg-[#292929]"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
