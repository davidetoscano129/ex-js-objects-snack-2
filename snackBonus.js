/*

Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni). 
Usa l’oggetto di Code Question 6 come test.

⚠️ Serve usare una funzione ricorsiva! (fai un po’ di ricerca).

*/

// funzione ricorsiva: funzione che richiama se stessa e che copia profondamente un oggetto

const chef = {
    name: "Chef Hyur",
    age: 29,
    makeBurger: (num = 1) => {
        console.log(`Ecco ${num} hamburger per te!`);
    },
    restaurant: {
        name: "Hyur's Burgers",
        welcomeClient: () => {
            console.log("Benvenuto!");
        },
        address: {
            street: 'Main Street',
            number: 123,
            showAddress: () => {
                console.log("Main Street 123");
            }
        },
        isOpen: true,
    }
}

function deepCopy(obj) {
    let newObj = {};
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            newObj[key] = deepCopy(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

const chefCopy = deepCopy(chef);
console.log(chefCopy);