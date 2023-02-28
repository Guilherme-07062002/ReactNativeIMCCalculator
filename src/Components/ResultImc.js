import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ResultImc(props) {
    return (
        <View style={styles.contextMsg} >
            <Text style={styles.msgStyle}>{props.messageResultImc}</Text>
            <Text style={styles.resultStyle}>{props.ResultImc}</Text>
            <Text style={{ textAlign: 'center', fontSize: 11 }}>{props.condicao}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    contextMsg: {
        marginTop: '30%',
        paddingBottom: '15%'
    },
    msgStyle: {
        textAlign: 'center'
    },
    resultStyle: {
        textAlign: 'center',
        fontSize: 50
    }
});