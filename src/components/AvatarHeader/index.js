// Core
import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import CachedImage from '../CachedImage';

export default class AvatarHeader extends Component {
  render() {
    return (
      <View style={styles.avatarHeader}>
        <CachedImage
          style={styles.avatar}
          uri={
            'https://images.pexels.com/photos/586040/pexels-photo-586040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
          }
        />
        <Text style={styles.name}>Elon Musk</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  avatarHeader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#D9FAFF'
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 5
  },
  name: {
    color: '#005792',
    fontSize: 30,
    fontWeight: '300',
    marginTop: 10
  }
});
