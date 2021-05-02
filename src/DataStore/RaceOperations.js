
import Race from "./RaceModel";

export const SetNextToGoRaceIds= (payload)=>{
    Race.NextToGoRaceIds = payload;
    return Race;
}

export const SetRaceSummaries= (payload)=>{
    Race.RaceSummaries = payload;
    return Race;
}