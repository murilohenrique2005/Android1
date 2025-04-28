import { AppRegistry } from "react-native";
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";
import { useState } from "react";
 
    export default function App(){
        const [primeiroNumero, setPrimeiroNumero] = useState(0);
        const [segundoNumero, setSegundoNumero] = useState(0);
        const [resultado, setResultado] = useState(0);
 
        return (
            <View style ={styles.tela}>
                <Text style = {styles.tituloPrograma}>Calculadora</Text>
 
                <View style ={styles.primeiroCampo}>
                    <TextInput style={styles.input} placeholder="Informe um número: "/>
                </View>
 
                <View style={styles.segundoCampo}>
                    <TextInput style={styles.input} placeholder="Informe outro número: "/>
                </View>
 
                <View style={styles.areaBotoes}>
 
                    <TouchableOpacity style={styles.botao}>
                        <Text>Somar</Text>
                    </TouchableOpacity>
 
                    <TouchableOpacity style={styles.botao}>
                        <Text>Subtrair</Text>
                    </TouchableOpacity>
 
                </View>
                {/*comentario*/ }
 
                <View style={styles.areaBotoes}>    
 
                    <TouchableOpacity style={styles.botao}>
                        <Text>Multiplicar</Text>
                    </TouchableOpacity>
 
                    <TouchableOpacity style={styles.botao}>
                        <Text>Dividir</Text>
                    </TouchableOpacity>
 
                </View>

                <View style={styles.areaBotoes}>
                <TouchableOpacity style={styles.botao}>
                        <Text>Limpar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.areaResultado}>
                    <Text style={styles.textoResultado}>{resultado}</Text>
                </View>
            </View>
        );
    }
 
    const styles = StyleSheet.create({
        tela:{
            backgroundColor: "#898989",
            height: "100%",
            width: "100%",
        },
        tituloPrograma:{
            marginTop: 50,
            textAlign: "center",
            fontSize: 50,
            fontWeight: 800,
            color:"#000aaa",
        },
        primeiroCampo:{
            backgroundColor: "#89af00",
            margin: 10,
            padding: 10,
            borderRadius: 100,
            marginTop: 25,
            width: "90%",
        },
        segundoCampo:{
            backgroundColor: "#89af00",
            margin: 10,
            padding: 10,
            borderRadius: 100,
            marginTop: 5,
            width: "90%",
        },
        input:{
            textAllign: "center",
            fontSize: 15 ,
            color: "#fff",
        },
        botao:{
            marginTop: 20,
            backgroundColor: "#444444",
            padding: 20,
            allignItens: "center",
            width: "50%",
            borderColor: "#94fabc",
            borderWidth: 2,
        },
        areaBotoes:{
            display:"flex",
            flexDirection: "row",
        },
        areaResultado:{
            marginTop: 40,
            borderWidth: 2,
            borderColor: "#fff",
            width: "100%",
            padding: 50,
        },

        textoResultado: {
            color: "#fff",
            fontSize: 30,
            textAlign: "center",
        }
    });
 
    AppRegistry.registerComponent('main', () => App);