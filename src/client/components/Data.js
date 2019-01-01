import React from 'react';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CodeIcon from '@material-ui/icons/Code';
import BookIcon from '@material-ui/icons/Book';
import CreateIcon from '@material-ui/icons/Create';
import WorkIcon from '@material-ui/icons/WorkOutline';
import IdIcon from '@material-ui/icons/PermIdentity';
import BookmarkIcon from '@material-ui/icons/Bookmarks';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import HomeIcon from '@material-ui/icons/Home';
import ContactIcon from '@material-ui/icons/ContactMail';

export const mailFolderListItems = (
  <div>
    <NavLink to="/">
      <ListItem button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </NavLink>
    <NavLink to="/mission">
      <ListItem button>
        <ListItemIcon>
          <CodeIcon />
        </ListItemIcon>
        <ListItemText primary="Mission" />
      </ListItem>
    </NavLink>
    <NavLink to="/skills">
      <ListItem button>
        <ListItemIcon>
          <CreateIcon />
        </ListItemIcon>
        <ListItemText primary="Skills" />
      </ListItem>
    </NavLink>
    <NavLink to="/experiance">
      <ListItem button>
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText primary="Experiance" />
      </ListItem>
    </NavLink>
    <NavLink to="/education">
      <ListItem button>
        <ListItemIcon>
          <BookIcon />
        </ListItemIcon>
        <ListItemText primary="Education" />
      </ListItem>
    </NavLink>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <NavLink to="/contact">
      <ListItem button>
        <ListItemIcon>
          <ContactIcon />
        </ListItemIcon>
        <ListItemText primary="Contact Me" />
      </ListItem>
    </NavLink>
    <NavLink to="/references">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="References" />
      </ListItem>
    </NavLink>
  </div>
);
