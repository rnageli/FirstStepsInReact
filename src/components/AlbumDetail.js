import React from 'react';
import { View, Text, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
//props is destructured to albumData
const AlbumDetail = ({ albumData }) => {
     const { title, artist, thumbnail_image, image } = albumData;
     //Destructuring of albumData
     const { cardHeaderStyle, thumbnailContainerStyle, thumbnailStyle,
          cardHeaderTitleViewStyle, headerTextStyle, albumCoverImageStyle } = styles;
     return (
          <Card>
               <CardSection style={cardHeaderStyle}>
                    <View style={thumbnailContainerStyle}>
                         <Image
                              style={thumbnailStyle}
                              source={{ uri: thumbnail_image }}
                         />
                    </View>
                    <View style={cardHeaderTitleViewStyle}>
                         <Text style={headerTextStyle}>
                              {title}
                         </Text>
                         <Text>{artist}</Text>
                    </View>
               </CardSection>
               <CardSection>
                    <Image style={albumCoverImageStyle} source={{ uri: image }} />
               </CardSection>
               <CardSection>
                    <Button buttonText='Buy' />
               </CardSection>
          </Card>
     );
};

export default AlbumDetail;

const styles = {
     thumbnailContainerStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          padding: 5
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
     },
     headerTextStyle: {
          fontSize: 20
     },
     albumCoverImageStyle: {
          height: 300,
          flex: 1, // to flex across the screen
          width: null //Required for 100% device width
     }
     //Image is not visible without height and width specified, because of overlap.

};
