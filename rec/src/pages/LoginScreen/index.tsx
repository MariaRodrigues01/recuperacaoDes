import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackNavigatorParamList } from '../../../types';
type LoginProps = NativeStackNavigationProp<StackNavigatorParamList>;
const LoginScreen=()=>{
	const navigation=useNavigation<LoginProps>();
	function home(){
		navigation.navigate('Home');
	}
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image style={styles.imgLogo} source={require("../../assets/facebook.png")}></Image>
				<Text style={styles.title}>Facebook</Text>
			</View>
			<View style={styles.formulario}>
				<TextInput style={styles.Input} placeholder="Email" placeholderTextColor="#A19FA1"></TextInput>
				<TextInput style={styles.Input} placeholder="Senha" placeholderTextColor="#A19FA1"></TextInput>
				<View style={styles.button}>
					<TouchableOpacity style={styles.button} onPress={home}>
						<Text style={styles.textoBotao}>Logar</Text>
					</TouchableOpacity>
				</View>
				<Text style={styles.criarConta}>Crie sua conta</Text>
			</View>
		</View>
	);
}
const styles=StyleSheet.create({
  container:{
    height:"100%",
    backgroundColor:"#395185",
    alignItems:"center",
  },
  header: {
    marginTop:180,
    flexDirection:"row",
    justifyContent:"space-evenly",
    height:100,
  },
  background:{
    backgroundColor:"#395185",
  },
  imgLogo:{
    width:60,
    padding:30,
    height:40,
  },
  title:{
    fontWeight:"bold",
    fontSize:50,
    fontFamily:"Roboto",
    marginLeft:10,
    color:"#fff",
  },
  Input:{
    marginVertical:20,
    paddingLeft:15,
    width:"80%",
    height:40,
    backgroundColor:"#fff",
  },
  formulario:{
    justifyContent:"center",
    alignItems:"center",
    width:"90%",
  },
  button:{
    width:"80%",
    height:48,
    backgroundColor:"#213873",
    justifyContent:"center",
    alignItems:"center",
  },

  textoBotao:{
    fontSize:25,
    color:"#fff",
    fontWeight:"bold",
  },
  criarConta:{
    marginVertical:25,
    fontSize:16,
    color:"#fff",
  },
});
export default LoginScreen;