import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ buttonText }) => {
     const { buttonTextStyle, buttonStyle } = styles;
     return (
          <TouchableOpacity style={buttonStyle}>
               <Text style={buttonTextStyle}>{buttonText}</Text>
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
