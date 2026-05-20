import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-void flex flex-col items-center justify-center text-center px-6">
      <div className="text-gold text-7xl mb-6">☽</div>
      <h1 className="font-cinzel text-3xl text-blush mb-4">Lost in the Void</h1>
      <p className="font-garamond text-xl text-blush/70 mb-8">
        This path leads nowhere. Return to the grimoire.
      </p>
      <button onClick={() => navigate("/")} className="btn-gold">
        Return Home
      </button>
    </div>
  );
}
