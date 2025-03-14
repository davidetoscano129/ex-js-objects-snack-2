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

const secondBurger = structuredClone(hamburger);
const thirdBurger = structuredClone(hamburger);

*/

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// 9, perche' structuredClone crea una copia profonda dell'oggetto hamburger, quindi crea una copia di hamburger, una copia di maker e una copia di restaurant.