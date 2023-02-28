import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Title() {
    return (
        <View>
            <Text style={styles.textTitle}>HealthApp</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    textTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: '10%',
        marginBottom: 30,
        textAlign: 'center'
    },
});