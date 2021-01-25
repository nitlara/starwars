import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const ToggleHeart = () => {
	const [fill, setFill] = useState(false);

	return (
		<div>
			{!fill && (
				<Button
					className="btn btn-warning"
					onClick={() => {
						setFill(!fill);
					}}>
					<i className="bi bi-heart" />
				</Button>
			)}
			{fill && (
				<Button
					className="btn btn-warning"
					onClick={() => {
						setFill(!fill);
					}}>
					<i className="bi bi-heart-fill" />
				</Button>
			)}
		</div>
	);
};

export default ToggleHeart;
