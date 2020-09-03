/*
Copyright 2020. Huawei Technologies Co., Ltd. All rights reserved.

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/

import React, {Component} from 'react';
import View from 'react-native';
import {StyleSheet, Picker} from 'react-native';
import MapView from 'react-native-hms-map';


import MarkersExample from './src/MarkersExample';
import PolygonsExample from './src/PolygonsExample';
import PolylinesExample from './src/PolylinesExample';
import CirclesExample from './src/CirclesExample';
import OverlaysExample from './src/OverlaysExample';

import {region} from './src/exampleConstants';

export class App extends Component {
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
          <MapView style={styles.map} initialRegion={region}>
          {this.state.selectedPage === 'marker' ? (
              <MarkersExample isRender={this.state.selectedPage} />
            ) : null}
            {this.state.selectedPage === 'polygon' ? (
              <PolygonsExample isRender={this.state.selectedPage} />
            ) : null}
            {this.state.selectedPage === 'polyline' ? (
              <PolylinesExample isRender={this.state.selectedPage} />
            ) : null}
            {this.state.selectedPage === 'circle' ? (
              <CirclesExample isRender={this.state.selectedPage} />
            ) : null}
            {this.state.selectedPage === 'overlay' ? (
              <OverlaysExample isRender={this.state.selectedPage} />
            ) : null}
          </MapView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
