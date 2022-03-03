import React from 'react';
import IndexNavbar from "../../components/Navbars/IndexNavbar";
import IndexHeader from "../../components/Headers/IndexHeader";
import DarkFooter from "../../components/Footers/DarkFooter";

const ContactUs = () => {

    React.useEffect(() => {
        document.body.classList.add("index-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
          document.body.classList.remove("index-page");
          document.body.classList.remove("sidebar-collapse");
        };
      });

    return(
        <>
        <IndexNavbar type="contactUs"/>
        <IndexHeader imgType="contactUs"/>
        <DarkFooter/>            
        </>
    );
}

export default ContactUs;