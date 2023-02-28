import React from "react";
import { View, StyleSheet } from "react-native";
import Form from "./Form";

export default function Main() {
    return (
        <View style={styles.inputStyle}>
            <Form />
        </View>
    )
}
const styles = StyleSheet.create({
    inputStyle: {
        width: '90%'
    },
});