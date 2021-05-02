import React, { useState } from "react";
import { Picker } from '@react-native-picker/picker';
import { CategoryData } from "../utils/CategoryData";
const CategorySelect = ({setSelectedCategory, selectedCategory}) => {
    let keys = [...CategoryData.keys()]
    return (
        <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue, itemIndex) =>
                setSelectedCategory(itemValue)
            }>
            {
                keys.map((key, index) => <Picker.Item label={key} value={CategoryData.get(key)} key={index}/>)
            }
        </Picker>
    );
}
export default CategorySelect;