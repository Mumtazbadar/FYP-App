import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Col, Container, Navbar } from "shards-react";

import SidebarMainNavbar from "./SidebarMainNavbar";
import SidebarSearch from "./SidebarSearch";
import SidebarNavItems from "./SidebarNavItems";

import { Store } from "../../../flux";
 
class MainSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuVisible: false,
      sidebarNavItems: Store.getSidebarItems()
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    Store.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    Store.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      ...this.state,
      menuVisible: Store.getMenuState(),
      sidebarNavItems: Store.getSidebarItems()
    });
  }

  render() {
    const classes = classNames(
      "main-sidebar",
      // "main-navbar",
      "px-0",
      "col-12",
      
      // "main-navbar",
      // "bg-white",
      // stickyTop && "sticky-top",
      
      this.state.menuVisible && "open"
    );

    return (
      // <div className={classes}>
      //     <Container className="p-4"
      //     lg={{ size: 2 }}
      //      md={{ size: 3 }}
      //     >
      //   <Navbar type="light" className="align-items-stretch flex-md-nowrap ">
      //   <SidebarMainNavbar hideLogoText={this.props.hideLogoText} />
      //   <SidebarSearch />
      //   <SidebarNavItems />
      //   </Navbar>
      // </Container>
      // </div>
        // <div style={{width:"250px"}}>
      <Col
        tag="aside"
        className={classes}
        lg={{ size: 2 }}
        md={{ size: 3 }}
      
      >
        <SidebarMainNavbar hideLogoText={this.props.hideLogoText} />
        {/* <SidebarSearch /> */}
        <SidebarNavItems />
      </Col>
      // </div>
    );
  }
}

MainSidebar.propTypes = {
  /**
   * Whether to hide the logo text, or not.
   */
  hideLogoText: PropTypes.bool
};

MainSidebar.defaultProps = {
  hideLogoText: false
};

export default MainSidebar;



// const MainNavbar = ({ layout, stickyTop }) => {
//   const classes = classNames(
//     "main-navbar",
//     "bg-white",
//     stickyTop && "sticky-top",
    
//   );

//   return (
//     <div className={classes}>
//       <Container className="p-4">
//         <Navbar type="light" className="align-items-stretch flex-md-nowrap ">
//           {/* <NavbarSearch /> */}
//           <MainSidebar/>
//           {/* <NavbarNav /> */}
//           {/* <NavbarToggle /> */}
//         </Navbar>
//       </Container>
//     </div>
//   );
// };