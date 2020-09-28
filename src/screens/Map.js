import React, {Component} from 'react';
import {Picker, StyleSheet, View} from 'react-native';
import MapView from 'react-native-hms-map';

let mapView;

export default class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPage: 'marker',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.holder}>
          <Picker
            style={styles.picker}
            selectedValue={this.state.selectedPage}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({selectedPage: itemValue})
            }>
            <Picker.Item label="Markers + Callout" value="marker" />
            <Picker.Item label="Polygons" value="polygon" />
            <Picker.Item label="Polyline" value="polyline" />
            <Picker.Item label="Circle" value="circle" />
            <Picker.Item label="Overlay" value="overlay" />
          </Picker>
        </View>
        <View style={styles.map}>
          <MapView
              camera={{target: {latitude: 50, longitude: 50}}}
              ref={(e) => (mapView = e)}/>
        </View>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  holder: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 300,
    height: 40,
    backgroundColor: 'white',
    zIndex: 2,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 0},
    shadowOpacity: 1,
    shadowRadius: 15,
    elevation: 7,
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  picker: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 50,
    width: 300,
    color: '#000000',
  },
});
