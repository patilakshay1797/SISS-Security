import { Link, useLocation } from "react-router-dom";
import "../assets/css/header.scss";
import logo from "../assets/images/Upscaled_LOGO.png";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useEffect, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import EmailIcon from "@mui/icons-material/Email";

const Header = ({ activePage, setPage }) => {
  // let url = useLocation();
  // const path = url.pathname.split("/")[1];
  // if (path != activePage) {
  //   setPage(path);
  // } else if (path == "") {
  //   setPage("home");
  // }
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [mobileMenuBurgerIconVisible, setMobileMenuBurgerIconVisible] =
    useState(false);

  const popoverRef = useRef(null);
  const triggerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target) &&
      triggerRef.current &&
      !triggerRef.current.contains(event.target)
    ) {
      setMobileMenuVisible(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      const header = document.querySelector("header");
      if (window.innerWidth <= 992) {
        header.style.height = "0px";
        setMobileMenuBurgerIconVisible(true);
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        header.style.height = "60px";
        setMobileMenuBurgerIconVisible(false);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const hideShowMobileMenu = (pageToOpen) => {
    // const url = useLocation();
    setPage(pageToOpen);
    if (window.innerWidth <= 992) {
      if (!mobileMenuVisible) {
        setTimeout(() => {
          document.querySelector("main").style.display = "none";
          document.querySelector("footer").style.display = "none";
        }, 500);
      } else {
        document.querySelector("main").style.display = "block";
        document.querySelector("footer").style.display = "flex";
      }
      setMobileMenuVisible(!mobileMenuVisible);
    }
  };
  return (
    <>
      <div className={`companyLogo ${mobileMenuVisible ? "scaleIogo" : ""}`}>
        <img src={logo} />
      </div>
      <header>
        <div
          ref={popoverRef}
          className={`navList ${
            mobileMenuVisible && mobileMenuBurgerIconVisible
              ? "mobileMenuVisible"
              : ""
          }`}
        >
          <ul>
            <li className={activePage == "home" ? "activePage" : ""}>
              <Link to="/" onClick={() => hideShowMobileMenu("home")}>
                Home
              </Link>
            </li>
            <li className={activePage == "aboutus" ? "activePage" : ""}>
              <Link to="/aboutus" onClick={() => hideShowMobileMenu("aboutus")}>
                About Us
              </Link>
            </li>
            <li
              className={activePage == "services" ? "activePage" : ""}
              onClick={() => hideShowMobileMenu("services")}
            >
              <Link to="/services">Services</Link>
            </li>
            <li
              className={activePage == "contactus" ? "activePage" : ""}
              onClick={() => hideShowMobileMenu("contactus")}
            >
              <Link to="contactus">Contact Us</Link>
            </li>
          </ul>
          {mobileMenuBurgerIconVisible && (
            <div className="mobilemenuContactSupport">
              <div className="reachUsWrapper">
                <div className="icon">
                  <EmailIcon></EmailIcon> <div>Contact Support</div>
                </div>
                <div className="reachToUs"></div>
                <a href="mailto:sisssecurity@gmail.com">
                  sisssecurity@gmail.com
                </a>
              </div>
            </div>
          )}
        </div>
        {mobileMenuBurgerIconVisible && (
          <div
            className="navListBurgerIcon"
            onClick={() => hideShowMobileMenu(activePage)}
          >
            {mobileMenuVisible ? (
              <CloseIcon ref={triggerRef} />
            ) : (
              <MenuIcon ref={triggerRef} />
            )}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
