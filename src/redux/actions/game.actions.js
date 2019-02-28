import { gameConstants } from '../helpers/gameConstants';

export const gameActions = {
    success,
    error,
};

function success() {
    return {
        type: gameConstants.HIT_SUCCESS,
    }
}

function error() {
    return {
        type: gameConstants.HIT_FAILURE,
    }
}

