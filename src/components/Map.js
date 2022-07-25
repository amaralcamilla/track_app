import React from "react";
import {Text, StyleSheet} from "react-native";
import MapView from 'react-native-maps';

const Map = () => {
    return <MapView
        style={styles.map}
        initialRegion={{
            latitude: -27.53461986539285,
            longitude: -48.508824904175064,
            latitudeDelta: 0.05,
            longitudeDelta: 0.01
        }}
    />
};

const styles = StyleSheet.create({
    map: {
        height: 300
    }
});

export default Map;