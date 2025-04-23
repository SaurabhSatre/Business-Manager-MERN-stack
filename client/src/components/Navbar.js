import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AuthToken from '../helper/AuthToken';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    AuthToken.clearToken();
    navigate("/login");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#2575fc', padding: '0 20px' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
          Business Manager
        </Typography>

        {AuthToken.isValidToken() && (
          <Box>
            <Button
              onClick={handleLogout}
              sx={{
                color: 'white',
                backgroundColor: '#f44336',
                borderRadius: '20px',
                padding: '8px 20px',
                textTransform: 'none',
                fontWeight: 'bold',
                '&:hover': {
                  backgroundColor: '#d32f2f',
                },
              }}
            >
              Logout
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
