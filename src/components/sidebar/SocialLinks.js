import React from "react"
import {
    FaLinkedin,
    FaGithubSquare,
    FaStackOverflow,
    FaFreeCodeCamp,
    FaTwitterSquare,
    FaBehanceSquare,
} from "react-icons/fa"
import "./sidebar.css"


const SocialLinks = ({ contacts }) => {
    return (
        <div className="side-social-links float-left mt-3 mb-3">
            <a className="text-secondary p-2"
                href={contacts.linkedin}>
                <span title="Linked In">
                    <FaLinkedin size={24} style={{ color: "secondary" }} />
                </span>
            </a>
            <a className="text-secondary p-2"
                href={contacts.github}>
                <span title="GitHub">
                    <FaGithubSquare size={24} style={{ color: "secondary" }} />
                </span>
            </a>
            <a className="text-secondary p-2"
                href={contacts.stackoverflow}>
                <span title="Stack Overflow">
                    <FaStackOverflow size={24} style={{ color: "secondary" }} />
                </span>
            </a>
            <a className="text-secondary p-2"
                href={contacts.freecodecamp}>
                <span title="freeCodeCamp">
                    <FaFreeCodeCamp size={24} style={{ color: "secondary" }} />
                </span>
            </a>
            <a className="text-secondary p-2"
                href={contacts.twitter}>
                <span title="Twitter">
                    <FaTwitterSquare size={24} style={{ color: "secondary" }} />
                </span>
            </a>
            <a className="text-secondary p-2"
                href={contacts.behance}>
                <span title="Behance">
                    <FaBehanceSquare size={24} style={{ color: "secondary" }} />
                </span>
            </a>
        </div>
    )
}

export default SocialLinks