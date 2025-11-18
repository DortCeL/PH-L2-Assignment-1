function formatValue(
	value: string | number | boolean
): string | number | boolean {
	if (typeof value === "string") {
		return value.toUpperCase();
	} else if (typeof value === "number") {
		return value * 10;
	} else if (typeof value === "boolean") {
		return !value;
	}
	throw new Error("wrong input type");
}

function getLength(input: string | any[]): number {
	if (typeof input === "string") {
		return input.length;
	} else if (Array.isArray(input)) {
		return input.length;
	}
	throw new Error("Invalid input type");
}

class Person {
	name: string;
	age: number;

	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	getDetails() {
		return `'Name: ${this.name}, Age: ${this.age}'`;
	}
}

type MyObject = {
	title: string;
	rating: number;
};
function filterByRating(obj: MyObject[]): MyObject[] {
	const res: MyObject[] = obj.filter((o) => {
		if (o.rating >= 0 && o.rating <= 5) return o.rating >= 4;
		else throw new Error("Rating must be in range 0-5");
	});
	return res;
}

interface User {
	id: number;
	name: string;
	email: string;
	isActive: boolean;
}
function filterActiveUsers(users: User[]): User[] {
	const activeUsers: User[] = users.filter((u) => u.isActive);
	return activeUsers;
}

interface Book {
	title: string;
	author: string;
	publishedYear: number;
	isAvailable: boolean;
}
function printBookDetails(book: Book): void {
	console.log(
		`Title: ${book.title}, Author: ${book.author}, Published: ${
			book.publishedYear
		}, Available: ${book.isAvailable ? "Yes" : "No"}`
	);
}

function getUniqueValues(
	arr1: string[] | number[],
	arr2: string[] | number[]
): (string | number)[] {
	let res: (string | number)[] = [];

	for (let i = 0; i < arr1.length; i++) {
		let found_unique: boolean = true;
		for (let j = 0; j < res.length; j++) {
			if (arr1[i] === res[j]) {
				found_unique = false;
				break;
			}
		}
		if (found_unique) {
			res = [...res, arr1[i]];
		}
	}

	for (let i = 0; i < arr2.length; i++) {
		let found_unique: boolean = true;
		for (let j = 0; j < res.length; j++) {
			if (arr2[i] === res[j]) {
				found_unique = false;
				break;
			}
		}
		if (found_unique) {
			res = [...res, arr2[i]];
		}
	}

	return res;
}

interface Product {
	name: string;
	price: number;
	quantity: number;
	discount?: number;
}
function calculateTotalPrice(products: Product[]): number {
	const total = products.reduce((acc: number, item: Product) => {
		const total: number = item.price * item.quantity;
		if (item.discount) {
			if (item.discount > 100 || item.discount < 0)
				throw new Error("Discount must be below 100");
			const dscnt: number = total * (item.discount / 100);
			acc += total - dscnt;
		} else {
			acc += total;
		}
		return acc;
	}, 0);
	return total;
}
