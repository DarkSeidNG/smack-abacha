/**
 * A list of all gameSetup with their name and difficulty
 * note that the list will be displayed as it is without sorting so sorting should be done when creating the list
 * @levelName - The title of the stage
 * @difficulty - The difficulty multiplier, its advisable to keep this between 1 and 10
 * @type {{difficulty: number, levelName: string}[]}
 */
const stages = [
    { levelName: 'Pilot', difficulty: 1},
    { levelName: 'The Plot', difficulty: 2},
    { levelName: 'Lagos Standoff', difficulty: 3},
    { levelName: 'Abattoir', difficulty: 4},
    { levelName: 'Odessy', difficulty: 5},
];

const numberOfDirtPerStage = 6;

export { stages };
export { numberOfDirtPerStage as dirtNumber };