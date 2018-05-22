import React from 'react';
import { View } from 'react-native';

//CardSection seperates sections within each album card. 
const CardSection = (props)  => {
     return (
          <View style={styles.styleCardSection}>{props.children}</View>
     );
};

const styles = {
     styleCardSection: {
          borderBottomWidth: 1,
          padding: 5,
          backgroundColor: '#fff',
          justifyContent: 'flex-start',
          flexDirection: 'row',
          borderColor: '#ddd',
          position: 'relative'
     }
};

export default CardSection;
