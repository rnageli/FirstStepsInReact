import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
     return (
          <Card>
               <CardSection>
                    <Text>Title: {props.albumData.title}</Text>
               </CardSection>

               <CardSection>
                    <Text>Title: {props.albumData.title}</Text>
               </CardSection>

          </Card>
     );
};

export default AlbumDetail;
