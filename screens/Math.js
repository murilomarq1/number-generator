import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default class Math extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.points}>{"\n"} Instructions: to generate any number {"\n"} of your choice. Simply insert the {"\n"} numbers down below you would {"\n"} want to pick the number by. </Text>
        <Text> </Text>
        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate ('HomeScreen')}>
              <Text style={{ fontSize:20, color:"black"}}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{ 
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 100 
    },
  points:{
    fontSize: 17,
    color: "pink"
  },
    buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"white",
    margin: 10,
    width: 200,
    height: 50,
  }
})