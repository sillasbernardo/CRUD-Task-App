import React, { useRef, useEffect } from "react";

const HandleOutsideClick = (ref, onOusideClick) => {
	useEffect(() => {
		const handleClick = (event) => {
			if (ref.current && !ref.current.contains(event.target)){
				onOusideClick();
			}
		}

		document.addEventListener('mousedown', handleClick);
		return () => {
			document.removeEventListener('mousedown', handleClick);
		}

	}, [onOusideClick])
}

const OutsideClick = props => {
	const wrapperRef = useRef(null);
	HandleOutsideClick(wrapperRef, props.onOusideClick);

	return (
		<div ref={wrapperRef}>
			{props.children}
		</div>
	)
}

export default OutsideClick;