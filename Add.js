import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { datasource } from "./Data.js";
import { TextInput, View, StatusBar, Button, Text } from "react-native";

const Add = ({ navigation }) => {
    const [letter, setletter] = useState("");
    const [type, setType] = useState("Vowel");

    return (
        <View>
            <StatusBar />
            <Text>Letter:</Text>
            <TextInput
                maxLength={1}
                style={{ borderWidth: 1 }}
                onChangeText={(text) => setletter(text)}
            />
            <Picker
                selectedValue={type}
                onValueChange={(value) => setType(value)}
            >
                <Picker.Item label="Vowel" value="Vowel" />
                <Picker.Item label="Consonants" value="Consonants" />
            </Picker>
            <Button title="Submit"
            onPress={() => {
                let item = {key: letter};
                let indexnum = 1;
                if (type == "Vowel") {
                    indexnum = 0;
                }
                datasource[indexnum].data.push(item);
                navigation.navigate("Home")
            }}/>
        </View>
    );
};

export default Add;
