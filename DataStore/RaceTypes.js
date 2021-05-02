import * as RaceOperation from "./RaceOperations";

const SET_NEXT_TO_GO_RACE_IDS = {type:"SET_NEXT_TO_GO_RACE_IDS", operation: RaceOperation.SetNextToGoRaceIds};
const SET_RACE_SUMMARIES = {type:"SET_RACE_SUMMARIES", operation: RaceOperation.SetRaceSummaries};

var RaceType= [SET_NEXT_TO_GO_RACE_IDS, SET_RACE_SUMMARIES];

export default RaceType;