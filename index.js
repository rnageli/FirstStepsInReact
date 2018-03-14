
//Import a lib to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//create a component
const App = () => <Header headerText='Albums!' />;
//Arrow function implicitly returns when on one liners.

//render it to the screen
AppRegistry.registerComponent('albums', () => App);
// Arrow func without {} implicitly returns App without return keyword
// albums is the name of the project/app to render the component
// Second argument is a func that returns the first comp to render to the app
//Must always register atleast one component in a react app
