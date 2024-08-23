import * as cartService from "./services/cart.js";
import { createItem } from "./services/item.js";

async function run() {
	const myCart = [];
	const myWhishList = [];

	console.log("Welcome to the shopping cart!");

	const item1 = createItem("Shirt", 20.37, 2);
	const item2 = createItem("Pants", 37.54, 5);
	const item3 = createItem("Shoes", 50.87, 8);

	cartService.addItem(myCart, item1);
	cartService.addItem(myCart, item2);
	cartService.addItem(myCart, item3);

	// Uncomment to test other functionalities
	// cartService.addItem(myWhishList, item3);
	// cartService.deleteItem(myCart, item2.name);

	cartService.removeItem(myCart, item1);

	cartService.displayCart(myCart);
}

run();
