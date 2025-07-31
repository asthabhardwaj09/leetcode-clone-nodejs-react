// App.jsx
import { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/header';
import Prenium from './components/Prenium/prenium';
import Explore from './components/Explore/explore';
import Product from './components/Product/product';
import Developer from './components/Developer/developer';
import Playground from './components/Playground/Playground';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function HomePage() {
  const preniumref = useRef();
  const exploreref = useRef();
  const productref = useRef();
  const developerref = useRef();
  const playgroundref = useRef();

  return (
    <>
      <Header
        preniumref={preniumref}
        exploreref={exploreref}
        productref={productref}
        developerref={developerref}
        playgroundref={playgroundref}
      />
      <div ref={preniumref}><Prenium /></div>
      <div ref={exploreref}><Explore /></div>
      <div ref={productref}><Product /></div>
      <div ref={developerref}><Developer /></div>
      <div ref={playgroundref}><Playground /></div>
    </>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
