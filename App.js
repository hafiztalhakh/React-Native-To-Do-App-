import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function App() {

    const [courseGoals, setCourseGoals] = useState('');

    // const courseGolasHandler = 

    const consoleDikhao = () => {
        console.log(courseGoals);
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Course Goals"
                    onChangeText={e => { setCourseGoals(e) }}
                    value={courseGoals}
                />
                <Button title="Add" style={styles.btn} onPress={consoleDikhao} />
            </View>
            <View />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        padding: 5,
        paddingLeft: 10,
        borderWidth: 1,
        borderRadius: 5,
    },
    btn: {
        height: 50,
    }
});
