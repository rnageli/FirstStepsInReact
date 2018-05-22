import React from 'react';
import { View, Text } from 'react-native';

const Card = (props) => {
     return (
          <View style={styles.styleCard}>{props.children}</View>
     );
};

const styles = {
     styleCard: {
          borderWidth: 1,
          borderRadius: 2,
          borderColor: '#ddd',
          borderBottomWidth: 0,
          shadowColor: '#000',
          shadowRadius: 2,
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 1 },
          elevation: 1,
          marginLeft: 5,
          marginRight: 5,
          marginTop: 10
     }
};

export default Card;
