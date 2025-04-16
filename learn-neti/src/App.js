import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DecksList from './pages/decksList';
import DeckStart from './pages/deckStart';
import Sidebar from './components/sidebar/sidebar';
import Header from './components/header/header';
import ModulesPage from './pages/moduleList';
import FavouriteDecks from './pages/favouritesDeck';
import TestPage from './pages/testMode';

function App() {
  const [searchTerm, setSearchTerm] = useState(''); // Состояние поиска

  return (
    <div className="App">
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <Sidebar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/deck/list" replace />} />
          <Route 
            path="/deck/list" 
            element={<DecksList searchTerm={searchTerm} />} 
          />
          <Route path="/deck/start/:deckId" element={<DeckStart />} />
          <Route path="/test/:deckId" element={<TestPage />} />
          <Route path="/modules" element={<ModulesPage />} />
          <Route path="/favourites" element={<FavouriteDecks />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;