import { Routes, Route, Navigate } from 'react-router-dom';
import DecksList from './pages/decksList';
import Sidebar from './components/sidebar/sidebar';
function App(props) {
  return (
      <div className="App">
        <Sidebar></Sidebar>
        <main className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/deck/list" replace />} />
            <Route path="/deck/list" element={<DecksList />} />
            <Route path="/deck/start" element={<DecksList />} />
          </Routes>
        </main>
      </div>
    
  );
}

export default App;
