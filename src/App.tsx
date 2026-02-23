import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import StandardPortfolio from './pages/StandardPortfolio';
import MarketingPortfolio from './pages/MarketingPortfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StandardPortfolio />} />
        <Route path="/marketing" element={<MarketingPortfolio />} />
        {/* Catch-all redirect to standard portfolio */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
