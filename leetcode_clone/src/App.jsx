// App.jsx
import { useRef } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/header';
import Prenium from './components/Prenium/prenium';
import Explore from './components/Explore/explore';
import Product from './components/Product/product';
import Developer from './components/Developer/developer';
import Playground from './components/Playground/Playground';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Footer from './components/Footer/Footer'; // ✅ Added Footer import

// 🔐 Protected Route
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("leetcode_token"); // ✅ Match the key used in Login
  return token ? children : <Navigate to="/login" replace />;
};

function HomePage() {
  const preniumref = useRef();
  const exploreref = useRef();
  const productref = useRef();
  const developerref = useRef();

  return (
    <>
      <Header
        preniumref={preniumref}
        exploreref={exploreref}
        productref={productref}
        developerref={developerref}
      />
      <div ref={preniumref}><Prenium /></div>
      <div ref={exploreref}><Explore /></div>
      <div ref={productref}><Product /></div>
      <div ref={developerref}><Developer /></div>
      <Footer /> {/* ✅ Footer added here */}
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<><Signup /><Footer /></>} />
        <Route path="/login" element={<><Login /><Footer /></>} />
        <Route
          path="/playground"
          element={
            <ProtectedRoute>
              <>
                <Playground />
                <Footer /> {/* ✅ Footer on protected route */}
              </>
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
