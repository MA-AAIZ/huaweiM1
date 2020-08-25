import React, {Component} from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Button,
    Alert,
} from 'react-native';

export default function Body({navigation}) {
    return <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={{fontSize: 16, marginBottom: 20}}>Test Google APIs</Text>
                <Button
                    title="Maps"
                    onPress={() => navigation.navigate('Maps')}
                />
                <Button
                    title="FCM"
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
            </View>
        </ScrollView>
    </SafeAreaView>
}

