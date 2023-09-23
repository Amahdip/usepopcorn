import React from "react";

function Navbar({ movies, children }) {
	return <nav className='nav-bar'>{children}</nav>;
}

export default Navbar;
