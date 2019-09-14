import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Col } from "shards-react";

const PageTitle = ({ title, subtitle, className,News, ...attrs }) => {
  const classes = classNames(
    className,
    "text-center",
    "text-md-left",
    "mb-sm-0"
  );

  return (
    <Col xs="4" sm="2" className={classes} { ...attrs }>
      {/* <span className="text-uppercase page-subtitle">{subtitle}</span> */}
     {/* <Badge theme="info"> <h3 className="page-title" style={{color:'white',}}>{title}</h3></Badge> */}
     <div className="page-title" style={{backgroundColor:'#00b8d8', color:'white',fontSize:'20px',alignItems:'center' ,justifyContent:'center', padding:'10px', width:'125px' }}>{title}</div>
      {/* <h6 className="text-upercase"></h6> */}
    </Col>
  )
};

PageTitle.propTypes = {
  News: PropTypes.string,
  
  /**
   * The page title.
   */
  title: PropTypes.string,
  /**
   * The page subtitle.
   */
  subtitle: PropTypes.string
};

export default PageTitle;
