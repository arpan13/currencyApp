import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000041,
};

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResults] = useState('0.0');
  const buttonPressed = (currency) => {
    if (input === '') {
      Alert.alert('Enter Some Value');
    }
    let result = parseFloat(input * currencyPerRupee[currency]);
    setResults(result.toFixed(2));
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <View style={[{marginTop: 25}, styles.screenview]}>
          <View style={styles.resultConatiner}>
            <Text style={styles.resultValue}>{result}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              selectionColor="#fff"
              keyboardType="number-pad"
              placeholder="Enter value"
              value={input}
              onChangeText={(inputValue) => setInput(inputValue)}
            />
          </View>
          <View style={styles.converterButtonContainer}>
            <TouchableOpacity
              onPress={() => buttonPressed('DOLLAR')}
              style={styles.converterButton}>
              <Text style={styles.converterText}>$</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => buttonPressed('EURO')}
              style={styles.converterButton}>
              <Text style={styles.converterText}>Euro</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => buttonPressed('POUND')}
              style={styles.converterButton}>
              <Text style={styles.converterText}>Pound</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => buttonPressed('AUSDOLLAR')}
              style={styles.converterButton}>
              <Text style={styles.converterText}>Aus</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => buttonPressed('CANDOLLAR')}
              style={styles.converterButton}>
              <Text style={styles.converterText}>Can</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => buttonPressed('YEN')}
              style={styles.converterButton}>
              <Text style={styles.converterText}>Yen</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => buttonPressed('DINAR')}
              style={styles.converterButton}>
              <Text style={styles.converterText}>Dinar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => buttonPressed('BITCOIN')}
              style={styles.converterButton}>
              <Text style={styles.converterText}>BIT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => buttonPressed('RUBEL')}
              style={styles.converterButton}>
              <Text style={styles.converterText}>Rubel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#535c68',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  screenview: {},
  resultConatiner: {
    height: 70,
    marginTop: 20,
    justifyContent: 'center',
    borderColor: '#c1c1c1',
    backgroundColor: '#0a79df',
    alignItems: 'center',
    borderWidth: 5,
  },
  resultValue: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  inputContainer: {
    height: 70,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c1c1c1',
    borderWidth: 2,
    backgroundColor: '#0a79df',
  },
  input: {
    color: '#ffffff',
    fontSize: 30,
  },
  converterButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    borderColor: '#c1c1c1',
    borderWidth: 2,
  },
  converterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a79df',
    height: 100,
    borderColor: '#c1c1c1',
    borderWidth: 2,
    width: '33.3%',
  },
  converterText: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
