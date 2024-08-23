function formatToReal(value) {
	return new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	}).format(value);
}

function calculateTotal(userCart) {
	const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
	return formatToReal(result);
}

function addItem(userCart, item) {
	userCart.push(item);
}

function deleteItem(userCart, name) {
	const index = userCart.findIndex((item) => item.name === name);
	if (index !== -1) {
		userCart.splice(index, 1);
	} else {
		console.log("Item not found in cart.");
	}
}

function removeItem(userCart, item) {
	const index = userCart.findIndex((cartItem) => cartItem.name === item.name);
	if (index === -1) {
		console.log("Item not found in cart.");
		return;
	}

	if (userCart[index].quantity > 1) {
		userCart[index].quantity -= 1;
	} else {
		userCart.splice(index, 1);
	}
}

function displayCart(userCart) {
	console.log("Current cart:");
	userCart.forEach((item, index) =>
		console.log(
			`${index + 1}. ${item.name} - ${formatToReal(item.price)} | ${
				item.quantity
			} | Subtotal: ${formatToReal(item.subtotal())}`
		)
	);
	console.log("Total:", calculateTotal(userCart));
}

export { addItem, deleteItem, removeItem, displayCart };
