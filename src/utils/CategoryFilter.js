export function filterRacesByCategory(races, categoryId) {
    var filteredRaces = []
    for (const key in races) {
        if (Object.hasOwnProperty.call(races, key)) {
            const element = races[key];
            element.category_id == categoryId && filteredRaces.push(element)
        }
    }
    return filteredRaces;
}

export function sortRaces(filteredRaces) {
    return filteredRaces.sort(function (firstElement, secondElement) {
        return firstElement?.advertised_start?.seconds - secondElement?.advertised_start?.seconds;
    })
}

export function activeRaces(sortedFilteredRaces) {
    var seconds = new Date().getTime() / 1000;
    seconds = Math.round(seconds)
    let activeRaces = sortedFilteredRaces?.filter((element)=> (element.advertised_start?.seconds+60) >= seconds)
    return activeRaces;
}
export function top5Races(activeFilteredSortedRaces) {
    return activeFilteredSortedRaces.slice(0,4)
}