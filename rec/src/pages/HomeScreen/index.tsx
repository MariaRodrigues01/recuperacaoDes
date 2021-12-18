import React from "react";
import Post from "../post";
import { useNavigation } from "@react-navigation/native";
import { StackNavigatorParamList } from "../../../types";
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const LinkItem=(props:any)=>{
  return<Text style={stylesLink.text}>{props.name}</Text>;
};

const LinksImportantes=()=>{
  return(
    <View style={stylesLinkImportantes.container}>
      <LinkItem name="Home"/>
      <LinkItem name="Videos"/>
      <LinkItem name="Photos"/>
      <LinkItem name="Community"/>
      <LinkItem name="Post"/>
    </View>
  );
};
type HomeProps = NativeStackNavigationProp<StackNavigatorParamList>;
const HomeScreen=()=>{
  const navigation=useNavigation<HomeProps>();
  function login(){
    navigation.navigate("Login");
  }
  return(
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity onPress={login}>
          <Image source={require("../../assets/arrow-left.png")}></Image>
        </TouchableOpacity>
        <View style={styles.inputMenu}>
          <Image source={require("../../assets/ei_search.png")}></Image>
          <TextInput style={styles.textoInput} placeholderTextColor="#F5FFFF" placeholder="Pesquise..."></TextInput>
        </View>
        <Image source={require("../../assets/share.png")}></Image>
      </View>
      <LinksImportantes/>
      <Post/>
    </View>
  );
};
const stylesLink=StyleSheet.create({
  text:{
    marginTop:10,
    color:"#4A4A4C",
    fontSize:13.71,
  },
});

const stylesLinkImportantes=StyleSheet.create({
  container:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:40,
    paddingVertical:10,
    borderBottomWidth:1,
  },
});

const styles=StyleSheet.create({
  container:{
    flex:1,
  },
  menu:{
    minHeight:93,
    backgroundColor:"#4369b0",
    paddingTop:40,
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:30
  },
  inputMenu:{
    flex:1,
    backgroundColor:"#2c4877",
    height:40,
    marginHorizontal:10,
    alignItems:"center",
    borderRadius:28,
    paddingLeft:10,
    flexDirection:"row",
  },
  textoInput:{
    color:"#F5FFFF",
    flex:1,
    paddingRight:10,
  },
  button:{
    backgroundColor:"#4369B0",
    height:40,
    justifyContent:"center",
    alignItems:"center",
    marginHorizontal:40,
    borderRadius:25,
  },
  conteudo:{
    flex:1,
    justifyContent:"flex-end",
    paddingVertical:40,
  },
  textoBotao:{
    color:"#F5FFFF",
    fontSize:18,
  },
});
export default HomeScreen;