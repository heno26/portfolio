import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";

/**
 * HashRouter is used deliberately: GitHub Pages serves static files with no
 * server-side rewrite rules, so a BrowserRouter would 404 on refresh or on
 * direct links to any route other than "/". HashRouter keeps all routing
 * client-side (URLs look like /#/), which works reliably with zero extra
 * GitHub Pages configuration and no risk of a broken deep link.
 */

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </HashRouter>
  );
}