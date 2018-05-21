import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

     state = { albums: [] };
     componentWillMount() {
          axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(
               response => {
                    this.setState({ albums: response.data });
          });
     }

     renderAlbums() {
          return this.state.albums.map(
               album => <AlbumDetail key={album.title} albumData={album} />
          );
          /*Added key to the iterator.
          Reasons: helps react to update each item. Cannot use a array index
          as it is not consistent for re-renders.

          /*
          Note on map function:
               It is used on arrays similar to foreach loop in java.
               it takes in an arrow funtion as argument which returns some data.
               So for every album map it to the returned data.
          */
          //Note use of JS inside jSX tag in {}
     }
     render() {
          console.log('Data:', this.state);
          return (<View>
               <Text>A list of Albums. </Text>
               {this.renderAlbums()}
          </View>);
          //Note use of JS inside jSX tag in {}
     }
}

export default AlbumList;
