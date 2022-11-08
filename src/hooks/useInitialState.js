import { useState } from "react";

const initialState = {
    cart: [],
}//crea uno por defect

const useInitialState = () => {
    const [state, setState] = useState(initialState); // lo inicializa

    const addToCart = (payload) => {
        setState({
            ...state, //mantiene el estado, con todo lo que tiene actualmente, podria ser el cart, el usuario, etc... 
            cart: [...state.cart, payload] // al elemento cart, mantenele el estado y agregale una carga util... 
        });
    };

    const removeFromCart = (payload) => {
        setState({
            ...state, //mantiene el estado, con todo lo que tiene actualmente, podria ser el cart, el usuario, etc... 
            cart: state.cart.filter(items => items.id != payload)
        });
    };

    return {
        state,
        addToCart,
        removeFromCart
    } // retorna toda la info, enviando el estado conectado y la funcion para ser usada
}

export default useInitialState;