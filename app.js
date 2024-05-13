// import { createStore } from " redux"
let createStore = require('redux').createStore;

/* 
     Actions = los actions son acciones que se envian al store, en este caso para comprar un producto.
*/

/* buy_pokemon_action en una accion que se va mandar al store 
y ese lo va mandar a su trabajador el reducer, es como una carta que le manda */

// Actions

const BUY_POKEMON = 'BUY_POKEMON';// <--Este es el TIPO DE ACCION BUY_POKEMON.
const RETURN_POKEMON = 'RETURN_POKEMON';

const buy_pokemon_action = (cant) => { // <-- Este es la accion de comprar un pokemon.
    return {
        type: BUY_POKEMON,
        payload: cant
    }
}

const return_pokemon_action = (cant) => { // <-- Este es la accion de comprar un pokemon.
    return {
        type: RETURN_POKEMON,
        payload: cant
    }
}

// Reducers = Los reducers ordenan el almacen.
const default_games_state = {
    pokemon: 10,
    yoshi: 10 // <- 10 unidades de yoshi.
}

// games_reducer tiene un estado
const games_reducer = (state = default_games_state, action) => {
    switch(action.type){
        case BUY_POKEMON: {
            return {
                ...state, // Devolvemos el estado anterior y hacemos la modificacion pertinente
                pokemon: state.pokemon - action.payload
            }
        }
        case RETURN_POKEMON: {
            return {
                ...state, // Devolvemos el estado anterior y hacemos la modificacion pertinente
                pokemon: state.pokemon + action.payload
            }
        }
        default: return state;
    } 
}

// Store = caja que almacena los Almacen de nuestra tienda.
const store = createStore(games_reducer);
//store.getState() devuelve el estado inicial
console.log('Estado Inicial:', store.getState());

store.subscribe(() => {
    console.log('Cambio de estado:', store.getState());
});

// dispatch reparte los mensajes del store
store.dispatch(buy_pokemon_action(3));
store.dispatch(return_pokemon_action(2));