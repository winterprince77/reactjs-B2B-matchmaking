import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Logo from "../../components/header/Logo";
import NavMenuTen from "../../components/header/NavMenuTen";
import IconGroupTen from "../../components/header/IconGroupTen";
import MobileMenu from "../../components/header/MobileMenu";
import HeaderTopTen from "../../components/header/HeaderTopTen";

const HeaderTen = ({
  layout,
  top,
  borderStyle,
  headerPaddingClass,
  headerPositionClass,
  headerBgClass
}) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".sticky-bar");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header
      className={`header-area clearfix ${headerBgClass ? headerBgClass : ""} ${
        headerPositionClass ? headerPositionClass : ""
      }`}
    >      
      {/* <div
        className={`${headerPaddingClass ? headerPaddingClass : ""} ${
          top === "visible" ? "d-none d-lg-block" : "d-none"
        } header-top-area ${
          borderStyle === "fluid-border" ? "border-none" : ""
        }`}
      > */}
          {/* <div className={layout === "container-fluid" ? layout : "container"}> */}
            {/* header top */}
            {/* <hr/>
            <HeaderTopTen borderStyle={borderStyle} />
          </div> */}

        {/* </div> */}

      <div
        className={` ${
          headerPaddingClass ? headerPaddingClass : ""
        } sticky-bar header-res-padding clearfix ${
          scroll > headerTop ? "stick" : ""
        }`}
      >
        <div className={layout === "container-fluid" ? layout : "container"}>
          <div className="row">
            <div className="col-xl-1 col-lg-1 col-md-6 col-4">
              {/* header logo */}
              <Logo imageUrl="/assets/img/logo/logo.png" logoClass="logo" />
            </div>
            <div className="col-xl-9 col-lg-9 d-none d-lg-block">
              {/* Nav menu */}
              <NavMenuTen />
            </div>         
            <div className="col-xl-1 col-lg-1 col-md-6 col-8">
              {/* Icon group */}
              <IconGroupTen />
            </div>

            <div className="col-xl-1 col-lg-1 col-md-6 col-8">
              <div className={layout === "container-fluid" ? layout : "container"} style={{ marginLeft:"-3vw" }}>          
                <HeaderTopTen borderStyle={borderStyle} />             
              </div>
            </div>
         
          </div>
        </div>
        {/* mobile menu */}
        <MobileMenu />

     

      </div>
    </header>
  );
};

HeaderTen.propTypes = {
  borderStyle: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerPositionClass: PropTypes.string,
  layout: PropTypes.string,
  top: PropTypes.string
};

export default HeaderTen;