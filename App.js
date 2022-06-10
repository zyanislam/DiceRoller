import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Footer} from 'react-native';
import { useEffect } from 'react/cjs/react.production.min';

const dice1 = {
  1: require("./assets/Dice1.png"),
  2: require("./assets/Dice2.png"),
  3: require("./assets/Dice3.png"),
  4: require("./assets/Dice4.png"),
  5: require("./assets/Dice5.png"),
  6: require("./assets/Dice6.png")
}

const dice2 = {
  1: require("./assets/Dice7.png"),
  2: require("./assets/Dice8.png"),
  3: require("./assets/Dice9.png"),
  4: require("./assets/Dice10.png"),
  5: require("./assets/Dice11.png"),
  6: require("./assets/Dice12.png")
}

const whoWon = {
  1: "Player 1 won",
  2: "Player 2 won",
  3: "It's a draw!",
  4: "Let's Play!"
}

export default function App() {

  const [dice1s, setDice1] = useState("5")
  const [dice2s, setDice2] = useState("3")
  const [diceRes, setResult] = useState("4")
  

  function rollTheDice(){
    const dice1roll = (Math.floor(Math.random() * 6 + 1)).toString();
    const dice2roll = (Math.floor(Math.random() * 6 + 1)).toString();

    if (dice1roll > dice2roll) {
      setResult("1")
    }
    else if (dice1roll < dice2roll) {
      setResult("2")
    }
    else {
      setResult("3")
    }

    setDice1(dice1roll)
    setDice2(dice2roll)
    
    if (dice1roll > dice2roll) {
      console.log("Player 1 wins!")
    }
    else if (dice1roll < dice2roll) {
      console.log("Player 2 wins!")
    }
    else {
      console.log("It's a draw!")
    }
  }

  

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={{
          flexDirection: "row",
          marginTop: 30,
        }}>
          <Image
            style={styles.image}
            source={dice1[dice1s]}
          />

          <Image
            style={styles.image}
            source={dice2[dice2s]}
          />
        </View>
        <View>
          <Text style={styles.gameText}>
            {whoWon[diceRes]}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => 
            rollTheDice()
          }
        >
          <Text style={styles.text}>Roll The Dice!</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={{
            fontSize: 15,
            fontFamily: "notoserif",
            paddingBottom: 20,
          }}>
          Developed By Z | 2022
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBE0CE",
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonstyle: {
    backgroundColor: "#FF9431",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 18,
    marginTop: 50,
  },

  text: {
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: "notoserif"
  },

  image: {
    height: 120,
    width: 120,
    margin: 10,
  },

  gameText: {
    marginTop: 20,
    fontSize: 22,
    fontFamily: "notoserif",
    fontWeight: "bold",
    color: "#FF9431"
  },
});
