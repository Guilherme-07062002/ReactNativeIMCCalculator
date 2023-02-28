import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import ResultImc from "./ResultImc";

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setmessageImc] = useState("Preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [condicaoIMC, setCondicao] = useState(null)

    function imcCalculator() {
        let calculatedImc = weight / (height * height);
        setImc(calculatedImc);
        analiseIMC(calculatedImc)
    }
    function analiseIMC(calculatedImc) {
        let imc = calculatedImc
        if (imc < 18.5) {
            setCondicao('(Baixo Peso)')
        } else if (imc >= 18.5 && imc <= 24.9) {
            setCondicao('(Intervalo Normal)')
        } else if (imc >= 25 && imc <= 29.9) {
            setCondicao('(Sobrepeso)')
        } else if (imc >= 30 && imc <= 34.9) {
            setCondicao('(Obesidade I)')
        } else if (imc >= 35 && imc <= 39.9) {
            setCondicao('(Obesidade II)')
        } else if (imc >= 40) {
            setCondicao('(Obesidade III)')
        }
    }

    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setmessageImc("Seu IMC é igual: ")
            setTextButton("Calcular novamente")
            let valorImc = null
            if (imc != null) {
                valorImc = imc
            }
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setmessageImc("Preencha o peso e altura")
        setCondicao(null)
    }

    return (
        <View style={styles.contextStyle}>
            <View>
                <Text style={styles.labelStyle}>Altura</Text>
                <TextInput
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                    style={styles.inputStyle}
                ></TextInput>
                <Text style={styles.labelStyle}>Peso</Text>
                <TextInput
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="75.365"
                    keyboardType="numeric"
                    style={styles.inputStyle}
                ></TextInput>
                <Button
                    onPress={() => validationImc()}
                    title={textButton} />
            </View>
            <ResultImc messageResultImc={messageImc} ResultImc={imc ? imc.toFixed(2) : ""} condicao={condicaoIMC} />
        </View>
    )
}

const styles = StyleSheet.create({
    contextStyle: {
        backgroundColor: 'white',
        paddingTop: 25,
        padding: 10,
        borderRadius: 10
    },
    labelStyle: {
        marginBottom: 10,
        fontWeight: 'bold'
    },
    inputStyle: {
        marginBottom: 30,
        paddingHorizontal: 10
    },
    msgStyle: {
        textAlign: 'center'
    }
});