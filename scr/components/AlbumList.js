// Import libraries for making a component
import React, { Component } from 'react';
import { View } from 'react-native';
import akios from 'axios';
import AlbumDetail from './AlbumDetail';

// Make the component
class AlbumList extends Component {
    state = { albums: [] };

    componentDidMount() {
        akios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        return this.state.albums.map(album =>
             <AlbumDetail key={album.title} album={album} />
            );
    }

    render() {
        return (
            <View>
                {
                    this.renderAlbums()
                }
            </View>
        );
    }
}

// Make the component available for other parts of the app
export default AlbumList;
