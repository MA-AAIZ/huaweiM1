import React, {Component} from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Button,
    StyleSheet,
    Alert,
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

export default function Maps({navigation}) {
    return <SafeAreaView style={{backgroundColor: '#fff'}}>
        <View style={styles.mapContainer}>
            <MapView
                provider={PROVIDER_GOOGLE}
                region={{
                    longitude: 79.855683,
                    latitude: 6.927015,
                    latitudeDelta: 0.008043,
                    longitudeDelta: 0.038733,
                }}
                style={styles.map}
                loadingEnabled={true}
                showsUserLocation={true}
                zoomControlEnabled={true}
                toolbarEnabled={true}
                rotateEnabled={true}
                scrollEnabled={true}
                showsIndoors={true}
                showsBuildings={true}
                showsTraffic={true}
                showsMyLocationButton={true}
            />
        </View>
    </SafeAreaView>
}
const styles = StyleSheet.create({
    mapContainer: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
