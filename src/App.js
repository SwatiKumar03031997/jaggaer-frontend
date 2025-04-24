import React, { useEffect, useRef, useState } from 'react';
import HeaderBar from './components/HeaderBar/HeaderBar';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Description from './components/Description/Description';
import DetailsAndPricing from './components/DetailsAndPricing/DetailsAndPricing';
import data from './data/data.json';
import { Box } from '@mui/material';

const App = () => {
  const article = data.article;
  const buttonRef = useRef();
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [cartCount, setCartCount] = useState(data.cart.items);
  const [cartAnimate, setCartAnimate] = useState(false);
  const [lastAddedQty, setLastAddedQty] = useState(1);

  const handleAddToCart = (quantity = 1) => {
    setCartCount(prev => prev + parseInt(quantity, 10));
    setCartAnimate(true);
    setLastAddedQty(quantity);
    setTimeout(() => setCartAnimate(false), 500);
  };

  useEffect(() => {
    const handleScroll = () => {
      const rect = buttonRef.current?.getBoundingClientRect();
      setShowFloatingButton(rect?.top < 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <HeaderBar
        article={article}
        cartCount={cartCount}
        animate={cartAnimate}
        showFloatingButton={showFloatingButton}
        handleAddToCart={() => handleAddToCart(lastAddedQty)}
        quantity={lastAddedQty}
        onQuantityChange={setLastAddedQty}
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', px: 4, pr: '80px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
        <Box sx={{ maxWidth: '90%', width: '100%' }}>
          <ProductDetails
            article={article}
            buttonRef={buttonRef}
            onAddToCart={handleAddToCart}
            onQuantityChange={setLastAddedQty}
          />
          <Box sx={{ backgroundColor: '#f0f0f0', p: 4, borderRadius: 2 }}>
            <Description article={article} />
            <Box sx={{ mt: 4, backgroundColor: '#ffffff', p: 3, borderRadius: 2, boxShadow: 1 }}>
              <DetailsAndPricing article={article} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default App;