import './App.css';
import Layout from './components/layout/Layout';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {/* الصفحة الرئيسية */}
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />

      {/* صفحة الكونتاكت */}
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
