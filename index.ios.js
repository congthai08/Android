// index.ios.js - place code in here for iOS

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './scr/components/header';
import AlbumList from './scr/components/AlbumList';

// Create a component
const App = () => (
    <View>
        <Header headerText={'Xin chào mọi người'} />
        <AlbumList />
    </View>
);

// Render it to the device
AppRegistry.registerComponent('Thai', () => App);
