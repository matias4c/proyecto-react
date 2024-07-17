import data from "../src/productos.json"

export const pedirItem = () => {
    return new Promise((resolve) => {
        resolve(data);
    })
}

export const pedirItemPorCategoria = (categoria) => {
    return new Promise((resolve) => {
        resolve(data.filter((prod) => prod.categoria === categoria));
    })
}

export const pedirItemPorId = (id) => {
    return new Promise((resolve) => {
        resolve(data.find((prod) => prod.id === id));
    })
}