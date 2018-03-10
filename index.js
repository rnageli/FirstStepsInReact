/*import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('albums', () => App);*/

//Import a lib to help create a component
import React from 'react';
import ReactNative from 'react-native';
//import is an ES6 feature.

//create a component
const App = () => {
     return (
          <Text>Some text</Text>
     );
};

//render it to the screen
ReactNative.AppRegistry.registerComponent('albums', () => App);
// Arrow func without {} implicitly returns App without return keyword
// albums is the name of the project/app to render the component
// Second argument is a func that returns the first comp to render to the app
//Must always register atleast one component in a react app 
