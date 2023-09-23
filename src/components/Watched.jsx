import React, { useState } from "react";
import Button from "./Button";

function Watched({ children }) {
	const [isOpen2, setIsOpen2] = useState(true);

	function handleToggle2() {
		setIsOpen2((isOpen2) => !isOpen2);
	}

	return (
		<div className='box'>
			<Button onClick={handleToggle2}>{isOpen2 ? "–" : "+"}</Button>
			{isOpen2 && children}
		</div>
	);
}

export default Watched;
