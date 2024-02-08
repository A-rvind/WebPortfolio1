import React from "react";
import "./Footer.css";

const Footer = ()=>{

    return (
        <footer className="footer-distributed" id="Footer">

        <div className="footer-left">
            <div className="logo">Arvind  Sharma</div>

            <p className="footer-links">
                <a href="#">Home</a>
                |
                <a href="#">About </a>
                |
                <a href="#">Skills</a> 
                |
                <a href="#">Projects</a>
            </p>

            <p className="footer-company-name">Copyright © 2024 <strong>Arvind Sharma</strong> All rights reserved</p>
        </div>

        <div className="footer-center">
            <div>
                <i className="fa fa-map-marker"></i>
                <p><span>Pune,</span>
                    Maharashtra</p>
            </div>

            <div>
                <i className="fa fa-phone"></i>
                <p>+91 9850984513</p>
            </div>
            <div>
                <i className="fa fa-envelope"></i>
                <p><a href="mailto:arvindgsharma985@gmail.com">arvindgsharma9850@gmail.com</a></p>
            </div>
        </div>
        <div className="footer-right">
            <p className="footer-company-about">
                <span>THANK YOU</span>
                <strong></strong> I hope you enjoy the website also checkout the below links to connect!
                
            </p>
            <div className="footer-icons">
                <a href="https://wa.me/+919850984513"><i className="fa-brands fa-whatsapp"></i></a>
                
                <a href="https://www.linkedin.com/in/s-arvind/"><i className="fa fa-linkedin"></i></a>
                <a href="https://as2.ftcdn.net/v2/jpg/00/89/55/15/1000_F_89551596_LdHAZRwz3i4EM4J0NHNHy2hEUYDfXc0j.jpg"><i className="fa fa-instagram"></i></a>
                <a href="https://www.theneweuropean.co.uk/wp-content/uploads/sites/2/2023/07/347_BALL_twitter-1536x864.jpg"><i className="fa-brands fa-x-twitter"></i></a>
                <a href="https://www.youtube.com/"><i className="fa fa-youtube"></i></a>
            </div>
        </div>
    </footer>
    )
}

export default Footer;