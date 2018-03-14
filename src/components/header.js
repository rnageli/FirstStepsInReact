//import framework to use Component
import React from 'react';
import { Text, View } from 'react-native';

//Define the component
const Header = (props) => {
     //destrucuting used again. Can use styles.textStyle instead
     const { textStyle, viewStyle } = styles;
     return (
          <View style={viewStyle}>
               <Text style={textStyle}>{props.headerText}</Text>{/*assigning style object*/}
          </View>
     );
};

//Dealing with errors:

//define styles
const styles = {
     viewStyle: {
          backgroundColor: '#F8F8F8',
          justifyContent: 'center', //flex box prop for vertical placement
          alignItems: 'center', //flex box prop for horizontal placement
          height: 60,
          paddingTop: 15,
          elevation: 3,
          position: 'relative'
     },
     textStyle: {
          fontSize: 35 // not same as css font-size, remove dash and use camelCase
     }
};

//Make the component available to the app as only one component can be registered
export default Header;
