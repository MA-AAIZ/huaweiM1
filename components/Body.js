import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform
} from 'react-native';
import PlayServices, { GooglePlayServicesStatus } from 'react-native-play-services';

const status = PlayServices.checkPlayServicesStatus();
const GoogleAPIAvailability = require('react-native-google-api-availability-bridge');
const val = [0];
statusValue = 5;


GoogleAPIAvailability.checkGooglePlayServices((result) => {
  if(result === 'success') {
		statusValue = 10;
	}
	if(result === 'update') {
    GoogleAPIAvailability.promptGooglePlayUpdate(false);
    statusValue = 30;
  }
  if(result === 'mssing') {
    GoogleAPIAvailability.promptGooglePlayUpdate(false);
    statusValue = 20;
	}
});

PlayServices.sync();

(async () => {
  
  switch (status){
    case PlayServices.GooglePlayServicesStatus.AVAILABLE:
      statusValue = 10;
      break;
    case PlayServices.GooglePlayServicesStatus.GMS_DISABLED:
      statusValue = 20;
      break;  
  }
  
})();


class detectHmsOrGms extends Component{
    //gmsAvailable = GooglePlayServicesUtil.getInstance().isGooglePlayServicesAvailable(mContext);
    //hmsAvailable = HuaweiApiAvailability.getInstance().isHuaweiMobileServicesAvailable(mContext);

    render(){
        return(
            <View style={styles.container}>
            <Text>{Platform.OS === 'ios' ? 'Device is IOS' : 'Device is Andriod'}</Text>
            <Text>{statusValue  == 10 ? 'true' : 'false'}</Text>
            <Text>{statusValue}</Text>
            <Text>{}</Text>
            
            <StatusBar style="auto" />
            <View>
              <Text>
              
              </Text>
            </View>
          </View>
        );
    };
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default detectHmsOrGms;