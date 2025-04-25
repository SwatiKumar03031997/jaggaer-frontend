import { useCallback, useEffect, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import data from '../data/data.json';

export const useProductState = () => {
  const article = data.article;
  const buttonRef = useRef();
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(data.cart.items);
  const [cartAnimate, setCartAnimate] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  const handleAddToCart = useCallback((qty = 1) => {
    setCartCount(prev => prev + parseInt(qty, 10));
    setCartAnimate(true);
    setTimeout(() => setCartAnimate(false), 500);
  }, []);

  const handleScroll = useCallback(
    debounce(() => {
      const rect = buttonRef.current?.getBoundingClientRect();
      setShowFloatingButton(rect?.top < 0);
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return {
    article,
    quantity,
    setQuantity,
    cartCount,
    cartAnimate,
    showFloatingButton,
    handleAddToCart,
    buttonRef
  };
};
