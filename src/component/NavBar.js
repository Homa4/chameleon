import React from "react"
import { Link } from "react-scroll";
import "./NavBar.css";

function NavBar({ params }) {
    const { dependencys } = params;

    return (
        <header className="navBarWrapper">
            <ul className="navBar">
                {
                    Object.keys(dependencys).map(element => (
                        <li key={element} className="sectionName">
                            <Link
                                to={element}
                                smooth={true}
                                duration={500} >

                                {dependencys[element]}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </header>
    )
}

export default NavBar