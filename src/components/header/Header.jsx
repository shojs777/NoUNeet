import React, { useState } from 'react';
import firebase from '../../config/firebase';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from '../../util/MediaQuery';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import MapIcon from '@mui/icons-material/Map';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  text: {
    textTransform: 'capitalize',
  },
}));

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const classes = useStyles();

  const toggleOpen = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div id='a' className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ color: 'white' }}>
              NoUNeet
            </Link>
          </Typography>

          <SHumbuggerWrapper>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => setIsModalOpen(true)}
            >
              <MenuIcon />
            </IconButton>

            <Drawer anchor="right" open={isModalOpen} onClose={toggleOpen}>
              <SNavItem>
                <Link to="/">
                  <Button color="inherit" className={classes.text}>
                    <HomeIcon />
                  Home
                </Button>
                </Link>
              </SNavItem>
              <SNavItem>
                <Link to="/mapbox">
                  <Button color="inherit" className={classes.text}>
                    <MapIcon />
                    <Link to="/mapbox">Map</Link>
                  </Button>
                </Link>
              </SNavItem>
              <SNavItem>
                <Link to="/profile">
                  <Button color="inherit" className={classes.text}>
                    <AccountCircleIcon />
                  MyProfile
                </Button>
                </Link>
              </SNavItem>
              <SNavItem>
                <Link to="/login">
                  <Button
                    color="inherit"
                    className={classes.text}
                    onClick={() => firebase.auth().signOut()
                      .then(() => {
                        alert('サインアウトしました。')
                      })
                      .catch((error) => {
                        console.log(error);
                      })
                    }
                  >
                    <LogoutIcon />
                  LogOut
                </Button>
                </Link>
              </SNavItem>
            </Drawer>
          </SHumbuggerWrapper>

        </Toolbar>
      </AppBar>
    </div>
  );
};

const SNavWrapper = styled.div`
  ${media.tablet`  display: none`}
`;

const SHumbuggerWrapper = styled.div`
  ${media.desktop`  display: none`}
  ${media.tablet`  display: static`}
`;

const SNavItem = styled.div`
  width: 250px;
  font-size: 2rem;
  text-align: center;
  margin-top: 40px;
`;

const SLink = styled(Link)`
  ${media.desktop`  color: black`}
`;
