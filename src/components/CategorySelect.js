import React, { useState } from "react";
import { Picker } from '@react-native-picker/picker';
import { CategoryData } from "../utils/CategoryData";
const CategorySelect = () => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    let keys = [...CategoryData.keys()]
    return (
        <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
            }>
            {
                keys.map((key) => <Picker.Item label={key} value={CategoryData.get(key)} />)
            }
        </Picker>
    );
}
export default CategorySelect;