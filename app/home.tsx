import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Home = () => {
    const router = useRouter();
    return (
        <View>
            <Text>Ventana home</Text>
            <TouchableOpacity onPress={() => router.push("/")}><Text>Registrate</Text></TouchableOpacity>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})