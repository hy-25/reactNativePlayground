/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Card } from './src/components/Card';
import { useSharedValue, withTiming } from 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



const totalCards = 10

const getCardsInfo = () => {

  const returnArray = []

  for (let i = 0; i < totalCards; i++) {

    returnArray.push({
      content: "ssddaaojdkj"
    })
  }

  return returnArray

}


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1
  };

  const cards = getCardsInfo()



  const currentIndex = useSharedValue(0)





  console.log(JSON.stringify(cards))
  return (

    <SafeAreaView style={backgroundStyle}>
      <GestureHandlerRootView style={{ flex: 1 }} >
        <View style={{ alignItems: 'center', justifyContent: 'flex-end', flex: 1 }}>
          {cards.map((item, index) => {
            return <Card content={item.content + "   " + index} index={index} currentIndex={currentIndex} />
          })}
        </View>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
