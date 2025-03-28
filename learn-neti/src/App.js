import { Routes, Route, Navigate } from 'react-router-dom';
import DecksList from './pages/decksList';
import DeckStart from './pages/deckStart';
import Sidebar from './components/sidebar/sidebar';
import Header from './components/header/header';
import ModulesPage from './pages/moduleList';
import FavouriteDecks from './pages/favouritesDeck';
import TestPage from './pages/testMode';
function App(props) {
  return (
      <div className="App">
        <Header></Header>
        <Sidebar></Sidebar>
        <main className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/deck/list" replace />} />
            <Route path="/deck/list" element={<DecksList />} />
            <Route path="/deck/start" element={<DeckStart />} />
            <Route path="/modules" element={<ModulesPage />} />
            <Route path="/favourites" element={<FavouriteDecks />} />
            <Route path="/test" element={<TestPage />} />
          </Routes>
        </main>
      </div>
    
  );
}

export default App;
