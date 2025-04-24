import React from 'react';
import {
  Box, Typography, Divider, List, ListItem, ListItemText, Link, Chip
} from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const DetailsAndPricing = ({ article }) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, p: 4 }}>
      <Box sx={{ p: 2, borderRadius: 2, boxShadow: 1, backgroundColor: '#f9f9f9', flex: 1, minWidth: 300 }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom color="error">Details</Typography>
        <Typography variant="subtitle2">Features</Typography>
        <List dense sx={{ pl: 2 }}>
          {Object.entries(article.features).map(([label, value]) => (
            <ListItem key={label} sx={{ display: 'list-item', listStyleType: 'disc' }}>
              <ListItemText primary={`${label}: ${value}`} />
            </ListItem>
          ))}
        </List>
        <Typography variant="subtitle2" sx={{ mt: 2 }}>Attachments</Typography>
        <List dense>
          {article.attachments.map((file, index) => (
            <ListItem key={index} sx={{ display: 'flex', alignItems: 'center' }}>
              <AttachFileIcon fontSize="small" sx={{ mr: 1 }} />
              <Link href={file.file_link} target="_blank" rel="noopener">
                {file.file_label}
              </Link>
            </ListItem>
          ))}
        </List>
        <Typography variant="subtitle2" sx={{ mt: 2 }}>Keywords</Typography>
        <Box sx={{ mt: 1, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {article.keywords.map((keyword, index) => (
            <Chip key={index} label={keyword.toUpperCase()} variant="outlined" />
          ))}
        </Box>
      </Box>
      <Box sx={{ p: 2, borderRadius: 2, boxShadow: 1, backgroundColor: '#f9f9f9', flex: 1, minWidth: 300 }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom color="error">Pricing & Shipping</Typography>
        <Typography variant="body2">Minimum Order: {article.minimum_order_quantity} {article.unit}</Typography>
        <Typography variant="body2">Shipping: {article.transport_costs} {article.currency}</Typography>
        <Typography variant="body2">Delivery: {article.delivery_time} days</Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>Price Breaks:</Typography>
        {Object.entries(article.price_breaks).map(([qty, price]) => (
          <Typography key={qty} variant="body2">ex {qty} PCE: {price} {article.currency}</Typography>
        ))}
      </Box>
    </Box>
  );
};

export default DetailsAndPricing;