import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
//props is destructured to albumData
const AlbumDetail = ({ albumData }) => {
     const { title, artist, thumbnail_image } = albumData;
     //Destructuring of albumData
     return (
          <Card>
               <CardSection style={styles.cardHeaderStyle}>
                    <View style={styles.cardHeaderAlbumIconStyle}>
                         <Image
                              style={styles.thumbnailStyle}
                              source={{ uri: thumbnail_image }}
                         />
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
     },
     thumbnailStyle: {
          height: 50,
          width: 50
     }
     //Image is not visible without height and width specified, because of overlap. 

};
