import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ children, onPressFunc }) => {
     // Refers to all the children standard object of props for this button
     const { buttonTextStyle, buttonStyle } = styles;
     return (
          <TouchableOpacity onPress={onPressFunc} style={buttonStyle}>
               <Text style={buttonTextStyle}>{children}</Text>
          </TouchableOpacity>
     );
};

const styles = {
     buttonStyle: {
          flex: 1,
          alignSelf: 'stretch',
          marginLeft: 5,
          marginRight: 5,
          backgroundColor: '#fff',
          borderColor: '#007aff',
          borderRadius: 2,
          borderWidth: 2
     },
     buttonTextStyle: {
          fontWeight: '600', //errored without the quotes
          fontSize: 20, //no need for the quotes
          color: '#007aff', //it is color and not fontColor
          alignSelf: 'center',
          paddingTop: 10,
          paddingBottom: 10
     }
};

export default Button;
