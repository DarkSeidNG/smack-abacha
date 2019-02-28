import { gameConstants } from '../helpers/gameConstants';

export function game(state = {}, action) {
    switch (action.type) {
        case gameConstants.HIT_SUCCESS:
            return {
                hit: true,
                hitIndex: getRandomInt(1000)
            };
        case gameConstants.HIT_FAILURE:
            return {
                hit: false,
            };
        default:
            return state
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
}