import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './shared/header';
import HomePage from './pages/HomePage';
import PetListPage from './pages/PetList';
import AdminPage from './pages/AdminPage';

function App() {
    return (
    <Router>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pets" element={<PetListPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
