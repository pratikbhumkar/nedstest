/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Text,
  StyleSheet
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { useSelector } from "react-redux";
import CategorySelect from "./src/components/CategorySelect";
import RaceRow from "./src/components/RaceRow.js";
import { filterRacesByCategory, sortRaces, activeRaces, top5Races } from "./src/utils/CategoryFilter";

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const Race = useSelector((state) => state.Race);
  const [filteredRaces, setFilteredRaces] = useState()
  const [selectedCategory, setSelectedCategory] = React.useState('9daef0d7-bf3c-4f50-921d-8e818c60fe61');
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    padding: 5
  };

  React.useEffect(() => {
    let unsortedFilteredRaces = filterRacesByCategory(Race?.RaceSummaries, selectedCategory)
    let sortedRaces = sortRaces(unsortedFilteredRaces)
    let activeSortedFilteredRaces = activeRaces(sortedRaces)
    let activeSortedFilteredTop5Races = top5Races(activeSortedFilteredRaces)
    setFilteredRaces(activeSortedFilteredTop5Races)
  }, [selectedCategory])

  if (Race?.RaceSummaries) {
    return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={'default'} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <CategorySelect selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <Text style={styles.raceHeader}>Races:</Text>
            <View style={styles.raceContainer}>
              <Text style={styles.raceStyle}>{"Race Number"}</Text>
              <Text style={styles.raceStyle}>{"Meeting Name"}</Text>
              <Text style={styles.raceStyle}>{"Countdown"}</Text>
            </View>
            {filteredRaces ?
              filteredRaces?.map((element) => <RaceRow seconds={element?.advertised_start?.seconds}
                race_number={element.race_number}
                meeting_name={element.meeting_name}
                key={element.race_number} />)
              :
              <Text> No Active Races </Text>
            }
          </View>
        </ScrollView>
      </SafeAreaView >
    );
  } else {
    return <React.Fragment>Loading</React.Fragment>
  }

};

const styles = StyleSheet.create({
  raceStyle: { flex: 1, textAlign: "center", fontWeight: "600", fontSize: 16 },
  raceContainer: { flex: 3, flexDirection: "row", padding: 0 },
  raceHeader: { fontWeight: "500", fontSize: 23, padding: 5 },
  raceTimer: { color: "red" },
  raceContainer: { flex: 3, flexDirection: "row" },
});

export default App;
