// import { createStore } from " redux"
const createStore = require('redux').createStore;
const combineReducers = require('redux').combineReducers; //importamos combineReducers

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

const return_pokemon_action = (cant) => { // <-- Este es el TIPO DE ACCION de retornar un pokemon.
    return {
        type: RETURN_POKEMON,
        payload: cant
    }
}

const BUY_SWITCH = 'BUY_SWITCH';// <-- Este es el tipo para comprar una switch.
const buy_switch_action = (cant) => { // <-- Este es la accion de comprar una switch.
    return {
        type: BUY_SWITCH,
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

const default_consoles_state = {
    ps5: 30,
    switch: 30
}

const consoles_reducer = (state = default_consoles_state, action) => {
    switch(action.type){
        case BUY_SWITCH: {
            return {
                ...state, // Devolvemos el estado anterior y hacemos la modificacion pertinente
                pokemon: state.switch - action.payload
            }
        }

        default: return state;
    }
}

// rutas de reducers
const rootReducers = combineReducers({// combina los reducers
    games_reducer, // games reducers
    consoles_reducer // consoles reducers
});

// Store = caja que almacena los Almacen de nuestra tienda.
const store = createStore(rootReducers);
//store.getState() devuelve el estado inicial
console.log('Estado Inicial:', store.getState());

store.subscribe(() => {
    console.log('Cambio de estado:', store.getState());
});
// 
// // dispatch reparte los mensajes del store
// store.dispatch(buy_pokemon_action(3));
// store.dispatch(return_pokemon_action(2));
store.dispatch(buy_switch_action(20));