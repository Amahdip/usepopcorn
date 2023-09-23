import React, { useState } from "react";
import Button from "./Button";

function Box({ children }) {
	const [isOpen, setIsOpen] = useState(true);

	function handleToggle() {
		setIsOpen((isOpen) => !isOpen);
	}

	return (
		<div className='box'>
			<Button onClick={handleToggle}>{isOpen ? "–" : "+"}</Button>
			{isOpen && children}
		</div>
	);
}

export default Box;
