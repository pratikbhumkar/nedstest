import RaceType from "./RaceTypes";
import Race from "./RaceModel";

export const RaceReducer = (state=Race, action)=>{
    var newState= {...state};
    RaceType.forEach(element => {
        if (element.type === action.type) {
            newState= element.operation(action?.payload);
        }
    });
    return newState;
}

export async function fetchRaces(dispatch, getState) {
    var requestOptions = {
      method: 'GET'
    };
    fetch("https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=10", requestOptions)
      .then(response => response.json())
      .then(result => {
        dispatch({ type: 'SET_NEXT_TO_GO_RACE_IDS', payload: result?.data?.next_to_go_ids })
        dispatch({ type: 'SET_RACE_SUMMARIES', payload: result?.data?.race_summaries })
      })
      .catch(error => console.log('error', error));
  }