
//Import a lib to help create a component
import React from 'react';//React is used to convert JSX to a series of React calls
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';
//create a component
const App = () => {
     return (
          <View style={{ flex: 1 }}>
               <Header headerText='Albums!' />
               <AlbumList />
          </View>

     );
};
//Arrow function implicitly returns when on one liners.

//render it to the screen
AppRegistry.registerComponent('albums', () => App);
// Arrow func without {} implicitly returns App without return keyword
// albums is the name of the project/app to render the component
// Second argument is a func that returns the first comp to render to the app
//Must always register atleast one component in a react app
