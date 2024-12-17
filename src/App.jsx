import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from "./components/HomePage";
import { Navbar } from "./components/Navbar";
import { Resturent } from "./components/Resturent";
import { RestaurantDetails } from './components/ResturantDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurants" element={<Resturent />} />
        <Route path="/RestaurantDetails" element={<RestaurantDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
