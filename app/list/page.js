"use client";

import { useState } from "react";

export default function List() {
	let 상품 = ["Tomatoes", "Pasta", "Coconut"];
	let [수량, set_수량] = useState([0, 0, 0]);

	return (
		<div>
			<h4 className="title">상품목록</h4>
			{상품.map((v, i) => (
				<div key={"상품" + i} className="food">
					{/* <Image src={"/food0.png"} width={300} height={300} className="food-img" alt="" /> */}
					{/* <Image src={작명} className="food-img" alt="" /> */}
					<img src={`food${i}.png`} className="food-img" alt="" />
					<h4>{v} $40</h4>
					<span>{수량[i]}</span>
					<button
						onClick={() => {
							수량[i]++;
							set_수량([...수량]);
						}}
					>
						+
					</button>
					<button
						onClick={() => {
							if (수량[i] > 0) {
								수량[i] = 수량[i] - 1;
								set_수량([...수량]);
							}
						}}
					>
						-
					</button>
				</div>
			))}
		</div>
	);
}
