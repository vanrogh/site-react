import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

// layouts
import RootLayout from './layouts/RootLayout';

// pages
import About from './pages/About'
import FirmStyle from './pages/FirmStyle'
import Design from './pages/Design'
import Vacancies from './pages/Vacancies'
import Contact from './pages/Contact'
import Development from './pages/Development';
import NotFound from './pages/NotFound'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<About />} />
      <Route path="development" element={<Development />} />
      <Route path="style" element={<FirmStyle />} />
      <Route path="design" element={<Design />} />
      <Route path="vacancies" element={<Vacancies />} />
      <Route path="contact" element={<Contact />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)



function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
