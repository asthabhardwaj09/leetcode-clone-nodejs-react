import { useRef } from 'react';
import Header from './components/Header/header';
import Prenium from './components/Prenium/prenium';
import Explore from './components/Explore/explore';
import Product from './components/Product/product';
import Developer from './components/Developer/developer';
import Playground from './components/Playground/Playground';

function App() {
  // ✅ Proper useRef usage
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

      {/* ✅ Correct ref usage */}
      <div ref={preniumref}><Prenium /></div>
      <div ref={exploreref}><Explore /></div>
      <div ref={productref}><Product /></div>
      <div ref={developerref}><Developer /></div>
      <div ref={playgroundref}><Playground/></div>
    </>
  );
}

export default App;
