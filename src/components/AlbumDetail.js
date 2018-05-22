import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ albumData }) => {
     const { title, artist, thumbnail_image } = albumData;
     return (
          <Card>
               <CardSection style={styles.cardHeaderStyle}>
                    <View style={styles.cardHeaderAlbumIconStyle}>
                         <Image source={{ uri: thumbnail_image }} />
                    </View>
                    <View style={styles.cardHeaderTitleViewStyle}>
                         <Text>Title: {title}</Text>
                         <Text>Artist: {artist}</Text>
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
