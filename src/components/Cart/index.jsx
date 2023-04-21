import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import ItemCart from "../ItemCart/index";

const Cart = () => {
	const { cart, totalPrice } = useCartContext();

	const order = {
		buyer: {
			name: "Fernanda",
			email: "Fer@gmail.com",
			phone: "648966345",
			address: "Siempre viva 123",
		},
		items: cart.map((product) => ({
			id: product.id,
			title: product.title,
			price: product.price,
			quantity: product.quantity,
		})),
		total: totalPrice(),
	};

	const handleClick = () => {
		const db = getFirestore();
		const ordersCollection = collection(db, "orders");
		addDoc(ordersCollection, order).then(({ id }) => console.log(id));
	};

	if (cart.length === 0) {
		return (
			<>
				<p>El carrito está vacío</p>
				<Link to="/"style={{ backgroundColor:"rgb(131, 78, 147"}}>Realizar compras</Link>
			</>
		);
	}

	return (
		<>
			{cart.map((product) => (
				<ItemCart key={product.id} product={product} />
			))}
			<p className="finally">Total: €{totalPrice()}</p>
			<button className="pay" onClick={handleClick}>Pagar</button>
			<div className="container" style={{marginTop: "20px"}}>
            <form onSubmit={order} ref={order}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email2" className="form-label">Repetir Email</label>
                    <input type="email" className="form-control" name="email2" />
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Móbil" className="form-label">Número telefónico</label>
                    <input type="number" className="form-control" name="celular" />
                </div>
                <div className="mb-3">
                    <label htmlFor="dirección" className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="direccion" />
                </div>
                <button type="submit" className="btn btn-primary">Finalizar Compra</button>
            </form>

        </div>
		</>
	);
};

  
                

export default Cart;