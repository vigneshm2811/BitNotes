import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './routes/Layout';
import Notes from './pages/Notes/page';
import Archive from './pages/Archive/page';
import Trash from './pages/Trash/page';
import Login from './pages/Auth/Login';
import EditLabels from './pages/Edit-Labels/page';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Layout wrapper */}
          <Route element={<Layout />}>
            <Route path="Notes" element={<Notes />} /> {/* Default route */}
            <Route path="archive" element={<Archive />} />
            <Route path="trash" element={<Trash />} />
            <Route path="edit-labels" element={<EditLabels />} />
          </Route>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
