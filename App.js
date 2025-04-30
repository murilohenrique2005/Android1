import { AppRegistry } from "react-native";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function App() {
    const [primeiroNumero, setPrimeiroNumero] = useState('');
    const [segundoNumero, setSegundoNumero] = useState('');
    const [resultado, setResultado] = useState(0);

    function somar() {
        setResultado(parseFloat(primeiroNumero) + parseFloat(segundoNumero));
    }

    function subtrair() {
        setResultado(parseFloat(primeiroNumero) - parseFloat(segundoNumero));
    }

    function multiplicar() {
        setResultado(parseFloat(primeiroNumero) * parseFloat(segundoNumero));
    }

    function dividir() {
        if (parseFloat(segundoNumero) === 0) {
            setResultado("Impossível dividir por zero!");
        } else {
            setResultado(parseFloat(primeiroNumero) / parseFloat(segundoNumero));
        }
    }

    function limpar() {
        setPrimeiroNumero('');
        setSegundoNumero('');
        setResultado(0);
    }

    return (
        <View style={styles.tela}>
            <Text style={styles.tituloPrograma}>Calculadora</Text>

            
            <View style={styles.primeiroCampo}>
                <TextInput
                    style={styles.input}
                    value={primeiroNumero}
                    onChangeText={setPrimeiroNumero}
                    placeholder="Informe um número"
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.segundoCampo}>
                <TextInput
                    style={styles.input}
                    value={segundoNumero}
                    onChangeText={setSegundoNumero}
                    placeholder="Informe outro número"
                    keyboardType="numeric"
                />
            </View>

            <View style={styles.areaBotoes}>
                <TouchableOpacity style={styles.botao} onPress={somar}>
                    <Text style={styles.texto}>Somar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={subtrair}>
                    <Text style={styles.texto}>Subtrair</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.areaBotoes}>
                <TouchableOpacity style={styles.botao} onPress={multiplicar}>
                    <Text style={styles.texto}>Multiplicar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={dividir}>
                    <Text style={styles.texto}>Dividir</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.arealimpar}>
                <TouchableOpacity style={styles.botao} onPress={limpar}>
                    <Text style={styles.texto}>Limpar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.areaResultado}>
                <Text style={styles.textoResultado}>{resultado}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tela: {
        backgroundColor: "#e0f7fa",
        height: "100%",
        width: "100%",
        padding: 20,
    },
    tituloPrograma: {
        marginTop: 50,
        textAlign: "center",
        fontSize: 50,
        fontWeight: "bold",
        color: "#007acc",
    },
    primeiroCampo: {
        backgroundColor: "#b3e5fc",
        margin: 10,
        padding: 10,
        borderRadius: 100,
        marginTop: 25,
        width: "90%",
        alignSelf: "center",
    },
    segundoCampo: {
        backgroundColor: "#b3e5fc",
        margin: 10,
        padding: 10,
        borderRadius: 100,
        marginTop: 5,
        width: "90%",
        alignSelf: "center",
    },
    input: {
        textAlign: "center",
        fontSize: 15,
        color: "#01579b",
    },
    botao: {
        marginTop: 20,
        backgroundColor: "#b3e5fc",
        padding: 20,
        alignItems: "center",
        width: "45%",
        marginHorizontal: 5,
        borderColor: "#4dd0e1",
        borderWidth: 2,
    },
    areaBotoes: {
        flexDirection: "row",
        justifyContent: "center",
    },
    areaResultado: {
        marginTop: 40,
        borderWidth: 2,
        borderColor: "#0288d1",
        width: "100%",
        padding: 30,
    },
    textoResultado: {
        color: "#0277bd",
        fontSize: 30,
        textAlign: "center",
    },
    arealimpar: {
        marginTop: 10,
        alignItems: "center",
    },
    texto: {
        textAlign: "center",
        fontSize: 15,
        color: "#01579b",
    },
});

AppRegistry.registerComponent('main', () => App);
