import * as ActionTypes from './ActionTypes';

export const Score = (state = {score: 0}, action) => {
    switch (action.type) {
        case ActionTypes.UPDATE_SCORE:
            return {...state, score: state.score+action.payload};
        default:
            return state;
    }
};