import React, { useState } from 'react';
import {
  Box, Typography, Rating, Button, TextField, Paper, InputAdornment, Stack, IconButton
} from '@mui/material';

// Inline SVGs
import PackageIcon from '../../icons/package.svg?react';
import StarIcon from '../../icons/star.svg?react';
import StarFilledIcon from '../../icons/star-filled.svg?react';
import ZoomInIcon from '../../icons/zoom-in.svg?react';
import ZoomOutIcon from '../../icons/zoom-out.svg?react';

const svgComponents = {
  'package.svg': PackageIcon,
  'star.svg': StarIcon,
  'star-filled.svg': StarFilledIcon,
};

const ProductDetails = ({ article, buttonRef, onAddToCart, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(article.images[0]);
  const [zoomed, setZoomed] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuantity(value);
    onQuantityChange(value);
  };

  const handleClick = () => {
    const qty = parseInt(quantity, 10);
    if (qty > 0) {
      onAddToCart(qty);
    }
  };

  const handleToggleZoom = () => {
    setZoomed((prev) => !prev);
  };

  const SelectedSvg = svgComponents[selectedImage];

  return (
    <Paper elevation={2} sx={{ p: 4, m: 2 }}>
      <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
        {/* Image section with vertical thumbnails */}
        <Box sx={{ display: 'flex' }}>
          <Stack spacing={1} sx={{ mr: 2 }}>
            {article.images.map((img, idx) => {
              const SvgThumb = svgComponents[img];
              return (
                <Box
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  sx={{
                    width: 60,
                    height: 60,
                    border: selectedImage === img ? '2px solid red' : '1px solid #ccc',
                    borderRadius: 1,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {SvgThumb && <SvgThumb width={40} height={40} />}
                </Box>
              );
            })}
          </Stack>

          {/* Main image with zoom */}
          <Box
            sx={{
              position: 'relative',
              width: 300,
              height: 300,
              border: '1px solid #ccc',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            {SelectedSvg && <SelectedSvg width={zoomed ? 380 : 200} height={zoomed ? 380 : 200} />}
            <IconButton
              onClick={handleToggleZoom}
              sx={{ position: 'absolute', bottom: 8, right: 8, backgroundColor: 'white' }}
              aria-label="Zoom toggle"
            >
              {zoomed ? <ZoomOutIcon width={20} height={20} /> : <ZoomInIcon width={20} height={20} />}
            </IconButton>
          </Box>
        </Box>

        {/* Product Info */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" gutterBottom>{article.title}</Typography>
          <Typography variant="subtitle2" color="text.secondary">by {article.supplier_name}</Typography>
          <Rating value={article.stars} precision={0.1} readOnly sx={{ mt: 1, mb: 2 }} />
          <Typography variant="h6" color="primary">
            {article.price.toLocaleString()} {article.currency}
          </Typography>
          <Typography variant="caption" display="block" color="text.secondary">
            + {article.transport_costs} {article.currency} shipping
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
            <TextField
              value={quantity}
              onChange={handleChange}
              type="number"
              size="small"
              sx={{ width: 100, mr: 2 }}
              InputProps={{
                endAdornment: <InputAdornment position="end">PCE</InputAdornment>
              }}
            />
            <Button variant="contained" color="error" ref={buttonRef} onClick={handleClick}>
              Add to cart
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default ProductDetails;
