import * as constants from './constants';


const initialState = {
        champsName: ['Shen', 'Katarina', 'TahmKench'],
        resChamp: []
    };

export default function rootReducer(state=initialState, action){
    switch (action.type) {
        case constants.GET_CHAMP:
            return {
                ...state,
                champsName: state.champsName.concat(action.payload)
                }
        case constants.RES_CHAMP:
            return {
                ...state,
                resChamp: state.resChamp.concat(action.payload)
            }
        default:
            return state;
    }
}