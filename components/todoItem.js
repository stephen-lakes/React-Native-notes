import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({item, pressHandler}) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <View style={styles.item}>
                <Text style={styles.itemText}>{item.text}</Text>
                <MaterialIcons name='delete' size={18} color='#333' />
            </View>
            
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'space-between',
    },
    itemText: {
        marginRight: 'auto',
    }
})