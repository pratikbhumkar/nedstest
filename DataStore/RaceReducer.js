import RaceType from "./RaceTypes";
import Race from "./RaceModel";

const RaceReducer = (state=Race, action)=>{
    var newState= {...state};
    RaceType.forEach(element => {
        if (element.type === action.type) {
            newState= element.operation(newState);
        }
    });
    return newState;
}

export default RaceReducer;