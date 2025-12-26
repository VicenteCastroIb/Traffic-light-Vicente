import React, { useState } from "react";

const TrafficLight = () => {
	const [color, setColor] = useState("rojo");
	return (
		<div className="contenedor">
			<div className="palito"></div>
			<div className="cajaLuces">
				<div
					onClick={() => setColor("rojo")}
					className={`luces rojo ${color === "rojo" ? "glow" : ""}`}
				></div>

				<div
					onClick={() => setColor("amarillo")}
					className={`luces amarillo ${color === "amarillo" ? "glow" : ""}`}
				></div>

				<div
					onClick={() => setColor("verde")}
					className={`luces verde ${color === "verde" ? "glow" : ""}`}
				></div>
			</div>
		</div>
	);
};

export default TrafficLight;

