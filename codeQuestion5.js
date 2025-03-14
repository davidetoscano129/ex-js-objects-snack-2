/*

const hamburger = {
    name: "Cheese Burger",
    weight: 250,
    maker: {
        name: "Anonymous Chef",
        restaurant: {
            name: "Hyur's Burgers",
            address: "Main Street, 123",
            isOpen: true,
        },
        age: 29
    }
};

const newRestaurant = {...hamburger.maker.restaurant};
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger = {...hamburger};
secondBurger.maker.restaurant = newRestaurant;
secondBurger.maker.name = "Chef Hyur";

console.log(hamburger.maker.name); // ?
console.log(secondBurger.maker.name); // ?
console.log(hamburger.maker.restaurant.name); // ?
console.log(secondBurger.maker.restaurant.name); // ?

*/

// 1. Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// 2. Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?

// 1. "Chef Hyur", "Chef Hyur", "Hyur's II", "Hyur's II"
// 2. 5. hamburger, maker, restaurant, newRestaurant, secondBurger. 