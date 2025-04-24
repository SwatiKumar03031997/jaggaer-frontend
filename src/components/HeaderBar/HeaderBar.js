import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Badge, Button, TextField, InputAdornment } from '@mui/material';
import FavoriteIcon from '../../icons/favorite.svg?react';
import GridIcon from '../../icons/facts-soft.svg?react';
import CartIcon from '../../icons/cart.svg?react';

const HeaderBar = ({ article, cartCount, animate, showFloatingButton, handleAddToCart, quantity, onQuantityChange }) => {
  const [elevate, setElevate] = useState(false);

  useEffect(() => {
    const handleScroll = () => setElevate(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuantityChange = (e) => {
    onQuantityChange(e.target.value);
  };

  return (
    <AppBar position="sticky" elevation={elevate ? 4 : 0} sx={{ background: '#fff', borderBottom: '1px solid #ccc', color: 'black' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" noWrap>{article.title}</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {showFloatingButton && (
            <>
            
                  <TextField
                        value={quantity}
                        onChange={handleQuantityChange}
                        type="number"
                        size="small"
                        sx={{ width: 100, mr: 2 }}
                        InputProps={{
                          endAdornment: <InputAdornment position="end">PCE</InputAdornment>
                        }}
                      />
              <Button variant="contained" color="error" size="small" onClick={handleAddToCart}>
                Add to cart
              </Button>
            </>
          )}
          <IconButton><FavoriteIcon width={24} height={24} /></IconButton>
          <IconButton><GridIcon width={24} height={24} /></IconButton>
          <IconButton sx={{ animation: animate ? 'bounce 0.5s ease' : 'none' }}>
            <Badge badgeContent={cartCount} color="error">
              <CartIcon width={24} height={24} />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
      <style>
        {`
          @keyframes bounce {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.3); }
          }
        `}
      </style>
    </AppBar>
  );
};

export default HeaderBar;
