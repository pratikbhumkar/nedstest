import * as RaceOperation from "./RaceOperations";

const INCREMENT = {type:"Race_UP", operation: RaceOperation.RaceUp};
const DECREMENT = {type:"Race_DOWN", operation: RaceOperation.RaceDown};

var RaceType= [INCREMENT, DECREMENT];

export default RaceType;