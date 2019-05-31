import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types'


// export default class Weather extends Component{
//   render(){
//     return (
//       <LinearGradient 
//         colors={["#00C6FB", "#005BEA"]} 
//         style={styles.container}
//       >
//         <View 
//           style={styles.upper}>
//           <Ionicons color="white" size={144} name="ios-rainy"/>
//           <Text style={styles.temp}>35</Text>
//         </View>
//         <View 
//           style={styles.lower}>
//           <Text style={styles.title}>Raining</Text>
//           <Text style={styles.subtitle}>for more info look outside</Text>
//         </View>
//       </LinearGradient>
//     );
//   }
// }

const weatherCases = {
  Rain: {
    colors:["#00C6FB", "#005BEA"],
    title: "Raining",
    subtitle: "For more info look outside",
    icon: 'weather-rainy'
  },
  Clear: {
    colors:["#FEF253", "#FF7300"],
    title: "Sunny",
    subtitle: "feel so good!",
    icon: 'weather-sunny'
  },
  Thunderstorm: {
    colors:["#00ECBC", "#007ADF"],
    title: "Thunderstorm",
    subtitle: "Wow~",
    icon: 'weather-lightning'
  },
  Clouds: {
    colors:["#D7D2CC", "#304352"],
    title: "Clouds",
    subtitle: "boring~ :(",
    icon: 'weather-cloudy'
  },
  Snow: {
    colors:["#7DE2FC", "#B9B6E5"],
    title: "Snow",
    subtitle: "Do you want to build a snowman~? No!",
    icon: 'weather-snowy'
  },
  Drizzle: {
    colors:["#89F7FE", "#66A6FF"],
    title: "Drizzle",
    subtitle: "it's like rain...",
    icon: 'weather-hail'
  },
  Haze:{
    colors:["#89F7FE", "#66A6FF"],
    title: "Haze",
    subtitle: "Don't know what that is :(",
    icon: 'weather-fog'
  },
  Mist:{
    colors:["#D7D2CC", "#304352"],
    title: "Mist!",
    subtitle: "Don't need to wash :)",
    icon: 'weather-fog'
  }
}

function Weather({ weatherName, temp, curPos, wind }){
  console.log(weatherName);
  return(
    <LinearGradient 
        colors={weatherCases[weatherName].colors} 
        style={styles.container}
      >
        <View 
          style={styles.upper}>
          <Text style={styles.curPos}>{curPos}</Text>
          <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon}/>
          <Text style={styles.temp}>{Math.ceil(temp.temp - 273.15)}℃</Text>
        </View> 
        <View
          style={styles.middle}>
          <Text style={styles.addInfo}>최저/최고    {Math.ceil(temp.temp_min - 273.15)}/{Math.ceil(temp.temp_max - 273.15)}℃</Text>
          <Text style={styles.addInfo}>풍속         {wind}m/s</Text>
          <Text style={styles.addInfo}>습도         {temp.humidity}%</Text>
        </View>
        <View 
          style={styles.lower}>
          <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
          <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
        </View>
      </LinearGradient>
  )

}

Weather.PropTypes = {
  temp: PropTypes.object.isRequired,
  weatherName: PropTypes.string.isRequired,
  curPos: PropTypes.string.isRequired,
  wind: PropTypes.number.isRequired
};


export default Weather;

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    marginTop: 50
  },
  temp:{
    fontSize: 48,
    backgroundColor: "transparent",
    color: 'white',
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  title:{
    fontSize: 38,
    backgroundColor: "transparent",
    color: 'white',
    marginBottom: 10,
    fontWeight: '600'
  },
  subtitle:{
    fontSize: 24,
    backgroundColor: "transparent",
    color: 'white',
    marginBottom: 80
  },
  middle:{
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: 25,
    marginTop: 50
  },
  addInfo:{
    fontSize: 20,
    backgroundColor: "transparent",
    color: 'white',
    fontWeight: '600'
  },
  curPos : {
    fontSize: 30,
    color: 'white',
    fontWeight: '600'
  }
});