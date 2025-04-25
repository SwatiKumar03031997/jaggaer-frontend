import React, { useCallback } from 'react';
import { Box } from '@mui/material';
import HeaderBar from '../templates/header-bar';
import ProductDetails from '../templates/product-details';
import Description from '../templates/product-description';
import DetailsAndPricing from '../templates/details-and-pricing';
import { useProductState } from '../hooks/useProductState';

const ProductPage = () => {
  const {
    article,
    quantity,
    setQuantity,
    cartCount,
    cartAnimate,
    showFloatingButton,
    handleAddToCart,
    buttonRef
  } = useProductState();

  const handleStickyAddToCart = useCallback(() => {
    handleAddToCart(quantity);
  }, [handleAddToCart, quantity]);

  return (
    <>
      <HeaderBar
        article={article}
        cartCount={cartCount}
        animate={cartAnimate}
        quantity={quantity}
        onQuantityChange={setQuantity}
        handleAddToCart={handleStickyAddToCart}
        showFloatingButton={showFloatingButton}
      />
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', px: 4, pr: '80px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
        <Box sx={{ maxWidth: '90%', width: '100%' }}>
          <ProductDetails
            article={article}
            buttonRef={buttonRef}
            onAddToCart={handleAddToCart}
            onQuantityChange={setQuantity}
            quantity={quantity}
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

export default ProductPage;
