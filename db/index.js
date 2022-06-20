import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

export default function db() {
    const [ altura, setAltura] = useState("");
    const [ peso, setPeso] = useState("");   
    
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Altura</Text>
            <TextInput 
            style={styles.input}
            value={altura} 
            onChangeText={(text) => setAltura(text)} 
            />
            <Text style={styles.text}>Peso</Text>
            <TextInput 
            style={styles.input}
            value={peso} 
            onChangeText={(text) => setPeso(text)} 
            />
            <StatusBar style='auto' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        height: 54,
        width: "80%",
        backgroundColor: "#fff",
        borderRadius: 8,
        justifyContent: "center",
        paddingHorizontal: 16,
        marginTop: 4,
        borderWidth: 1,
        borderColor: "#000",
    },
    text: {
        alignItems: "baseline",
        justifyContent: "center",
    },
});