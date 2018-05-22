import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
     return (
          <Card>
               <CardSection style={styles.cardHeaderStyle}>
                    <View style={styles.cardHeaderAlbumIconStyle}>
                         <Text>Title: {props.albumData.title}</Text>
                    </View>
                    <View style={styles.cardHeaderTitleViewStyle}>
                         <Text>Title: {props.albumData.title}</Text>
                         <Text>Title: {props.albumData.artist}</Text>
                    </View>
               </CardSection>
          </Card>
     );
};

export default AlbumDetail;

const styles = {
     cardHeaderAlbumIconStyle: {
          padding: 3
     },
     cardHeaderTitleViewStyle: {
          flexDirection: 'column',
          justifyContent: 'space-around',
          padding: 5
     },
     cardHeaderStyle: {
          justifyContent: 'space-around',
          flexDirection: 'row'
     }

};
