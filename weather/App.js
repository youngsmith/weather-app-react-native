import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, StatusBar } from 'react-native';
import { Constants } from 'expo';
// You can import from local files


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import Weather from './Weather';

const API_KEY = "c43c6f3395ce509923fc23adbbf51eb2";


export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null,
    curPos: null,
    wind: null
  };
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      pos =>{
        //console.log(pos);
        this._getWeather(pos.coords.latitude, pos.coords.longitude);
      },
      err =>{
        this.setState({
          error: err
        });
      }
    )
  }
  _getWeather= (lat, long) =>{
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`)
    .then(res=> res.json())
    .then(json => {
      console.log(json);
      this.setState({
        temperature: json.main,
        name: json.weather[0].main,
        isLoaded: true,
        wind: json.wind.speed,
        curPos: json.name
      });
    });
  }
  render() {  
    const { isLoaded, error, temperature, name, wind, curPos } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? <Weather weatherName={name} temp={temperature} wind={wind} curPos={curPos}/> : <View style={styles.loading}>
        <Text style={styles.loadingText}>Getting the weater</Text>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  errorText:{
    color: "red",
    backgroundColor: "transparent",
    marginBottom: 40
  },
  loading: {
    flex: 1,
    backgroundColor:'#FDF6AA',
    justifyContent: 'flex-end',
    paddingLeft: 25
  },
  loadingText:{
    fontSize: 38,
    marginBottom:100
  }
});
