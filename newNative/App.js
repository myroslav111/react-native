import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView, // новый импорт
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from 'react-native';
import React, { useState } from 'react';

// const loadFonts = async () => {
//   await Font.loadAsync({
//     'Roboto-Regulat': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
//     'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
//   });
// };

export default function App() {
  const [value, setValue] = useState('');
  const [isReady, setIsReady] = useState(false);
  const inputHandler = text => setValue(text);

  // if (!isReady) {
  //   return (
  //     <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)} />
  //   );
  // }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.textStyle}>Open up App.js to start working!</Text>

        <KeyboardAvoidingView // определяем ОС и настраиваем поведение клавиатуры
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        >
          <TextInput
            placeholder="Type text"
            value={value}
            onChangeText={inputHandler}
          />
        </KeyboardAvoidingView>

        <StatusBar style="auto" />
      </View>
      {/* <View style={styles.buttonContainer}>
        <Button onPress={this._onPressButton} title="Press Me" />
      </View> */}
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: '#000000',
      },
      android: {
        backgroundColor: '#ffffff',
      },
    }),
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    // marginTop: 16,
    // paddingVertical: 8,
    // borderWidth: 4,
    // borderColor: "#20232a",
    // borderRadius: 6,
    // backgroundColor: "#61dafb",
    paddingBottom: 50,
    color: '#20232a',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputStyle: {
    borderColor: '#6c736c',
  },
  buttonContainer: {
    color: 'red',
  },
});
