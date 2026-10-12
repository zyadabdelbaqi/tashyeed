import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function BackLink() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined") {
      const hasHistory = window.history.length > 1;
      const fromInternal = sessionStorage.getItem("tasheed_from_internal") === "true";
      if (hasHistory && fromInternal) {
        e.preventDefault();
        window.history.back();
      }
    }
  };

  return (
    <Link to="/" className="back-link" onClick={handleClick}>
      <ArrowRight size={16} /> العودة للرئيسية
    </Link>
  );
}
