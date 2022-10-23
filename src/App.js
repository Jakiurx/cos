import './App.css';
import { HashRouter, Route, Routes, Outlet} from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Error from './pages/Error';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="" element={<Main />}/>
          <Route path="about" element={<About />}/>
          <Route path="projects" element={<Projects />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;