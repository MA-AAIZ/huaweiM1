import React, {useEffect, useState} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import PlayServices from 'react-native-play-services';

const status = PlayServices.checkPlayServicesStatus();
const GoogleAPIAvailability = require('react-native-google-api-availability-bridge');

function Body() {
    //gmsAvailable = GooglePlayServicesUtil.getInstance().isGooglePlayServicesAvailable(mContext);
    //hmsAvailable = HuaweiApiAvailability.getInstance().isHuaweiMobileServicesAvailable(mContext);
    const [statusValue, setStatusValue] = useState(0);

    useEffect(() => {
        PlayServices.sync().then(r => alert("Sync"));
        (async () => {

            switch (status) {
                case PlayServices.GooglePlayServicesStatus.AVAILABLE:
                    setStatusValue(10);
                    break;
                case PlayServices.GooglePlayServicesStatus.GMS_DISABLED:
                    setStatusValue(20);
                    break;
            }

        })();
        GoogleAPIAvailability.checkGooglePlayServices((result) => {
            if (result === 'success') {
                setStatusValue(10);
            }
            if (result === 'update') {
                GoogleAPIAvailability.promptGooglePlayUpdate(false);
                setStatusValue(30);
            }
            if (result === 'mssing') {
                GoogleAPIAvailability.promptGooglePlayUpdate(false);
                setStatusValue(20);
            }
        });
    }, [])

    return (
        <View style={styles.container}>
            <Text>{Platform.OS === 'ios' ? 'Device is IOS' : 'Device is Andriod'}</Text>
            <Text>{statusValue == 10 ? 'true' : 'false'}</Text>
            <Text>{statusValue}</Text>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Body;