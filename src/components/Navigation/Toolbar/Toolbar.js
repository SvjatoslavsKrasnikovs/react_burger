import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = ( props ) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems auth={props.auth}/>
        </nav>
    </header>
);

const mapStateToProps = state => {
    return {
        authenticated: state.auth.token
    }
}

export default connect(mapStateToProps)(toolbar);