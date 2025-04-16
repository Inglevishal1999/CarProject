import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Dashboard from './Components/Dashborad';
import HomePage from './Pages/HomePage'; // use the correct path
import BecomeRenter from './Components/BecomeRenter';
import RentalDeals from './Components/RentalDeals';
import HowItWorks from './Components/HowItWorks';
import WhyChooseUs from './Components/WhyChooseUs';
import PopularRentalDeals from './Components/Home/PopularRentalDeals';
import AllVehicles from './Components/AllVehicles';
import CarDetail from './Components/CarDetail';

const ProtectedRoute = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }
  return children;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check the localStorage for authentication state
    const storedAuthStatus = localStorage.getItem('isAuthenticated');

    if (storedAuthStatus === 'true') {
      setIsAuthenticated(true);  // User is authenticated
    } else {
      setIsAuthenticated(false);  // User is not authenticated
    }

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/become-renter" element={<BecomeRenter />} />
            <Route path="/rental-deals" element={<RentalDeals />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/" element={<PopularRentalDeals />} />
            <Route path="/all-vehicles" element={<AllVehicles />} />
            <Route path="/car-detail/:id" element={<CarDetail />} /> {/* Route for car detail */}
            <Route
              path="/signin"
              element={
                isAuthenticated ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <SignIn setIsAuthenticated={setIsAuthenticated} />
                )
              }
            />
            <Route
              path="/signup"
              element={
                isAuthenticated ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <SignUp setIsAuthenticated={setIsAuthenticated} />
                )
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
