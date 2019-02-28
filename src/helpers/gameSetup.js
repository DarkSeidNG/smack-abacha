/**
 * A list of all gameSetup with their name and difficulty
 * note that the list will be displayed as it is without sorting so sorting should be done when creating the list
 * @stageName - The title of the stage
 * @difficulty - The difficulty multiplier, its advisable to keep this between 1 and 10
 * @type {{difficulty: number, stageName: string}[]}
 */
const stages = [
    { stageName: 'Bauchi', difficulty: 1},
    { stageName: 'Borno', difficulty: 2},
    { stageName: 'Jigawa', difficulty: 3},
    { stageName: 'Katsina', difficulty: 4},
    { stageName: 'Kano', difficulty: 5},
];

const numberOfDirtPerStage = 6;

export { stages };
export { numberOfDirtPerStage as dirtNumber };