/*

const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
}

const restaurant = {
    name: "Hyur's Burgers",
    address: {
        street: 'Main Street',
        number: 123,
    },
    openingDate: new Date(2025, 3, 11),
    isOpen: false,
};

*/

// 1. Qual è il metodo migliore per clonare l'oggetto chef, e perché?
// 2. Qual è il metodo migliore per clonare 'oggetto restaurant, e perché?

// 1. Il metodo migliore per copiare l'oggetto chef è utilizzare l'operatore di spread, poiché l'oggetto chef contiene una funzione annidata in una proprietà.
// 2. Il metodo migliore per copiare l'oggetto restaurant è utilizzare il metodo structuredClone, poiché l'oggetto restaurant contiene una data annidata in una proprietà.