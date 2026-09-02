import { Home } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  return (
    <main className="not-found">
      <div className="container not-found-inner">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p className="not-found-copy">
          The page you're looking for doesn't exist or may have moved. Head back to the homepage to
          keep exploring the portfolio.
        </p>
        <Button as={Link} to="/" icon={Home} iconPosition="leading">
          Back to Home
        </Button>
      </div>
    </main>
  );
}
