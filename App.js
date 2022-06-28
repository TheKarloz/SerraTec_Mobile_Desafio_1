import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function App() {
return (
    <View style={styles.container}>
      <View style={styles.primeiraDiv}/>
      <View style={styles.segundaDiv}/>
      <View style={styles.terceiraDiv}/>
      <View style={styles.caixa}>
        <View style={styles.quartaDiv}/>
        <View style={styles.quintaDiv}/>
      </View>
      <View style={styles.sextaDiv}/>
      <View style={styles.setimaDiv}>
        <View style={styles.caixas}></View>
        <View style={styles.caixas}></View>
        <View style={styles.caixas}></View>
        <View style={styles.caixas}></View>
        <View style={styles.caixas}></View>
        <View style={styles.caixas}></View>  
      </View> 
      <View style={styles.oitavaDiv}/>     
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: "column",
    flexWrap: "wrap"
  },

  primeiraDiv: {
      height: "10%",
      width: "100%",
      backgroundColor: "#50E3C2"
  },

  segundaDiv: {
      height: "10%",
      width: "20%",
      backgroundColor: "#F5A623",
      marginLeft: "40%",
      marginTop: "10%"
  },

  terceiraDiv: {
      backgroundColor: "#F5A623",
      height: "5%",
      width: "40%",
      marginTop: "10%",
      marginLeft: "30%"
  },

  caixa:{
    flexDirection: "row",
    height: "20%",
  },

  quartaDiv: {
      height: "75%",
      width: "50%",
      marginTop: "10%",
      backgroundColor: "#9013FE"
  },

  quintaDiv: {
      height: "75%",
      width: "50%",
      marginTop: "10%",
      backgroundColor: "#4A90E2",
  },

  sextaDiv: {
      height: "5%",
      width: "100%",
      backgroundColor: "#50E3C2"
  },

  setimaDiv:{
      height: "20%",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around"
  },

  caixas:{
      height: "50%",
      width: "30%",
      backgroundColor: "#F5A623",
      marginTop: "3%"
  },

  oitavaDiv: {
      height: "10%",
      marginTop: "10%",
      backgroundColor: "#4A90E2",
      flexDirection: "row",
      alignItems: "flex-end"
  }
});
