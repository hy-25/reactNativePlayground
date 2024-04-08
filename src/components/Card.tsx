import { Text, View } from "react-native"
import React from "react"
import Animated, { SharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated"
import { Gesture, GestureDetector } from "react-native-gesture-handler"

export const Card = ({ content, index, currentIndex }: { content: string, index: number, currentIndex: SharedValue<number> }) => {

    //total remaining = 9 - currentIndex.value 



    const ssx = useAnimatedStyle(() => {
        const totalRemaining = 10 - currentIndex.value

        //  1 - (index - currentIndex.value)/totalRemaning

        return {
            opacity: currentIndex.value - index > 0 ? 0 : 1 - (index - currentIndex.value) / totalRemaining,
            transform: [
                {
                    translateY: -1 * index * 20
                },
                {
                    scale: 1 - (index - currentIndex.value) / 10
                }
            ]
        }
    })

    const pan = Gesture.Pan()
        .onChange((event) => {
        })
        .onFinalize((event) => {
            console.log(event.translationY)
            if (event.translationY >= 0) {
                currentIndex.value = withTiming(currentIndex.value + 1, {
                    duration: 1000
                })
            }
            else {
                currentIndex.value = withTiming(currentIndex.value + 1, {
                    duration: 1000
                })
            }
        });

    return <GestureDetector gesture={pan}>
        <Animated.View
            style={[{
                width: 300, height: 300, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center', borderRadius: 8, position: 'absolute',
                borderColor: "black", borderWidth: 1,
                zIndex: -1 * index,



            }, ssx]}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>{content}</Text>
        </ Animated.View>
    </GestureDetector>
}