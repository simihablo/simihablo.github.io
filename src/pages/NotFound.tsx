import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="site-page flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-3xl border border-emerald-900/10 bg-white p-10 text-center shadow-xl shadow-emerald-950/10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Lost trail</p>
        <h1 className="mb-4 text-5xl font-bold text-slate-900">404</h1>
        <p className="mb-6 text-xl text-slate-600">This page is not on the map.</p>
        <a href="/" className="font-medium text-emerald-700 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-900">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
