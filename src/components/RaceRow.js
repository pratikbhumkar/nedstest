import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
const RaceRow = ({ seconds, race_number, meeting_name }) => {
    return (
        <React.Fragment>
            <View style={styles.raceContainer}>
                <Text style={styles.raceStyle}>{race_number}</Text>
                <Text style={styles.raceStyle}>{meeting_name}</Text>
                <Text style={styles.raceStyle}>{seconds}</Text>
            </View>
        </React.Fragment>
    )
}
const styles = StyleSheet.create({
    raceStyle: { flex: 1, textAlign: "center" },
    raceContainer: { flex: 3, flexDirection: "row", paddingHorizontal:5, paddingVertical: 10 },
    raceHeader: { fontWeight: "500", fontSize: 23, padding: 10 },
    raceTimer: { color: "red" }
});
export default RaceRow;
