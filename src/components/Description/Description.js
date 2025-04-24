import React from 'react';
import { Box, Typography } from '@mui/material';

const Description = ({ article }) => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h6" gutterBottom>Description</Typography>
      <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>{article.description_long}</Typography>
    </Box>
  );
};

export default Description;