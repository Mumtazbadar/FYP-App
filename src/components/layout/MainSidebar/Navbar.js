import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// import { NavLink as RouteNavLink } from "react-router-dom";
import { Col, Container, Navbar,} from "shards-react";

// import SidebarMainNavbar from "./SidebarMainNavbar";
// import SidebarSearch from "./SidebarSearch";
import SidebarNavItems from "./SidebarNavItems";
import NavbarToggle from "../MainNavbar/NavbarToggle";


import { Store } from "../../../flux";

const Navibar = ({ layout, stickyTop, item }) => {

    const classes = classNames(
        "main-navbar",
        "bg-white",
        stickyTop && "sticky-top",

    );
    return (

        <div className={classes}>
            <Container className="p-4">
                <Navbar type="light" className="align-items-stretch flex-md-nowrap p-0" style={{height:'70px' , width:'100%'}}>
                    
                    <SidebarNavItems/>
                    <NavbarToggle />
                
                </Navbar>
            </Container>
        </div>
    )

}


Navibar.propTypes = {
    /**
     * The layout type where the MainNavbar is used.
     */
    layout: PropTypes.string,
    /**
     * Whether the main navbar is sticky to the top, or not.
     */
    stickyTop: PropTypes.bool
};

Navibar.defaultProps = {
    stickyTop: true
};


export default Navibar;