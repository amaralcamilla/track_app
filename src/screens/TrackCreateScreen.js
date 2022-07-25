import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from "react-native";
import Map from "../components/Map";

const TrackCreateScreen = () => {
    return (
        <SafeAreaView forceInset={{top: 'always'}}>
            <Text style={{fontSize: 48}}>TrackCreateScreen</Text>
            <Map/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({});

export default TrackCreateScreen;