/**
 * A list of all gameSetup with their name and difficulty
 * note that the list will be displayed as it is without sorting so sorting should be done when creating the list
 * @levelName - The title of the stage
 * @difficulty - The difficulty multiplier, its advisable to keep this between 1 and 10
 * @type {{difficulty: number, levelName: string}[]}
 */
const stages = [
    { levelName: 'Bauchi', difficulty: 1},
    { levelName: 'Borno', difficulty: 2},
    { levelName: 'Jigawa', difficulty: 3},
    { levelName: 'Katsina', difficulty: 4},
    { levelName: 'Kano', difficulty: 5},
];

const numberOfDirtPerStage = 6;

export { stages };
export { numberOfDirtPerStage as dirtNumber };