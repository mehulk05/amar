import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import StandardPortfolio from './pages/StandardPortfolio';
import MarketingPortfolio from './pages/MarketingPortfolio';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<StandardPortfolio />} />
        <Route path="/marketing" element={<MarketingPortfolio />} />
        {/* Catch-all redirect to standard portfolio */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
