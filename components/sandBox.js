import React from 'react';
import { StyleSheet, Text, View, Image } from "react-native";

export default function Sandbox() {
    return (
        <View style={styles.container}>
            <Image style={styles.profilePic} source={require('../assets/profile-pic.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {        
        paddingTop: 40,
        paddingBottom: 40,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    profilePic: {
        width: 300,
        height: 300,
        borderRadius: 100,
    }   
});