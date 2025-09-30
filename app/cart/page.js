import { age, name } from "./data";
import Hello from "./hello";

export default function Cart() {
	let 장바구니 = ["Tomatoes", "Pasta"];
	return (
		<div>
			<Hello />
			<h4 className="title">Cart</h4>
			{장바구니.map((v, i) => (
				<CartItem key={"장바구니" + i} 상품={v} />
			))}
			<Banner content={"현대"} />
			<Banner content={"롯데"} />
			<Banner content={"삼성"} />
			<Btn 버튼색상="#f00" />
			<Btn 버튼색상="#00f" />
		</div>
	);
}

function Banner({ content }) {
	return <h5>{content}카드 결제 행사중</h5>;
}

function CartItem({ 상품 }) {
	return (
		<div className="cart-item">
			<p>
				{상품} {age}
			</p>
			<p>$40</p>
			<p>1개</p>
		</div>
	);
}

function Btn({ 버튼색상 }) {
	return <button style={{ background: 버튼색상 }}>버튼임</button>;
}
