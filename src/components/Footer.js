import React from "react";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa"

// Creating a footer at the end of the entire application which will have my signature and quick links to social media
export default function Footer() {
    return (
        <footer>
            <div className="d-flex justify-content-center bg-secondary">
                <div className="m-3">Designed and Developed by Matthew Gaskins</div>
                <div className="m-3">
                    <a className="social-icon px-2" href="https://github.com/mgaskins17"><FaGithub size={28} /></a>
                    <a className="social-icon px-2" href="https://www.linkedin.com/in/mjgaskins/"><FaLinkedinIn size={28} /></a>
                    <a className="social-icon px-2" href="https://www.instagram.com/threepamperedpups/"><FaInstagram size={28} /></a>
                </div>
            </div>
        </footer>
    );
}