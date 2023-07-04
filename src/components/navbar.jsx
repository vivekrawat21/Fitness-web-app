import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';
import { ThemeContext } from '../Context/Theme';
import React, { useState, useContext, useEffect } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Drawer from './Drawer';

const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [value, setValue] = useState('/');

  useEffect(() => {
    setValue(location.pathname);
  }, [location]);

  const handleTabChange = (newValue) => {
    setValue(newValue);
  };

  const handleExercisesClick = (event) => {
    event.preventDefault();
    const exercisesSection = document.getElementById('exercises');
    exercisesSection.scrollIntoView({ behavior: 'smooth' });
  };

  const Pages = [
    { label: 'Home', path: '/' },
    { label: 'Exercises', path: '/exercises' },
    { label: 'Blogs', path: '/blogs' },
  ];
const drawerPages = ['Home' , 'Exercises' ,'blogs']
  return (
    <>
      <AppBar
        sx={{
          backgroundColor: theme.color,
          opacity: '0.9',
          position: 'sticky',
          top: 0,
        }}
      >
        <Toolbar>
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              style={{
                width: '48px',
                height: '48px',
                margin: '0 20px',
              }}
            />
          </Link>

          <Tabs
            textColor="white"
            TabIndicatorProps={{ style: { background: '#6339f5', height: '3.5px' } }}
            value={value}
            onChange={handleTabChange}
            sx={{ marginLeft: 'auto', visibility: { lg: 'visible', xs: 'hidden' } }}
          >
            {Pages.map((page) => (
              <Tab
                key={page.path}
                label={page.label}
                value={page.path}
                sx={{
                  fontWeight: '900',
                  fontSize: '17px',
                  margin: '0px 15px',
                  color: theme.background,
                }}
                component={Link}
                to={page.path}
                onClick={page.path === '/exercises' ? handleExercisesClick : null}
              />
            ))}
          </Tabs>
          <Button
            onClick={toggleTheme}
            sx={{
              color: theme.background,
              borderRadius: '100px',
              marginLeft: 'auto',
            }}
          >
            {theme.icon}
          </Button>
          
          <Button
            sx={{
              backgroundColor: 'inherit',
              color: theme.background,
              width: '5px',
              borderRadius: '100px',
              marginLeft: '5px',
            }}
          >
          
            <GitHubIcon />
          </Button>
          

          <Drawer Pages={drawerPages} />
         
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
