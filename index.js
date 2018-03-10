
//Import a lib to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';
//Import destructure

//create a component
const App = () => <Text>Some text</Text>;
//Arrow function implicitly returns when on one liners.

//render it to the screen
AppRegistry.registerComponent('albums', () => App);
// Arrow func without {} implicitly returns App without return keyword
// albums is the name of the project/app to render the component
// Second argument is a func that returns the first comp to render to the app
//Must always register atleast one component in a react app
