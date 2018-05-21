import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';


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
               album => <Text>{album.title}</Text>
          );
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
