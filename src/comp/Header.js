
import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import { Home, Book, AccountBox } from '@material-ui/icons'
export default function Header() {
  return (
    <div>
        <AppBar color="primary" position="static">

<Toolbar>
        <h1>My header</h1>
        <List component="nav">
            <ListItem component="div" >
                <ListItemText inset>                    
                    <TypoGraphy color="inherit" variant="title">
                    <Home />   Home  
                    </TypoGraphy>                    
                </ListItemText>
                <ListItemText inset>                
                    <TypoGraphy color="inherit" variant="title">
                    <Book />
Posts 
                    </TypoGraphy>                   
                </ListItemText>

                <ListItemText inset>                
                    <TypoGraphy color="inherit" variant="title">
                    <AccountBox /> Contact
                    </TypoGraphy>                    
                </ListItemText>
            </ListItem >
        </List> 
        </Toolbar>
         </AppBar>
    </div>
  )
}