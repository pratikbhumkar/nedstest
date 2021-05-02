
import Race from "./RaceModel";

export const RaceUp= (Race=Race)=>{
    Race.count++;
    return Race;
}

export const RaceDown= (Race=Race)=>{
    Race.count--;
    return Race;
}