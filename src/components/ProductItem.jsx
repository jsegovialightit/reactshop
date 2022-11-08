import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@styles/ProductItem.scss';
import bt_add_to_cart from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
	// +++ ejemplo viejo para el uso de useState
	// const [cart, setCart] = useState([]);
	// const handleClick = () => {
	// 	setCart([]);
	// 	// if (cart == '')
	// 	// 	setCart('Hola Mundo');
	// 	// else
	// 	// 	setCart('');
	// }
	// --- ejemplo viejo para el uso de useState

	const { addToCart } = useContext(AppContext);

	const handleClick = itemProduct => {
		addToCart(itemProduct);
	}


	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				{/* {cart} */}
				<figure onClick={() => handleClick(product)}>
					<img className="btn-cart-image" src={bt_add_to_cart} alt="Add to cart" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
