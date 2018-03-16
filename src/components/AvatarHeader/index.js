// Core
import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default class AvatarHeader extends Component {
  render() {
    return (
      <View style={styles.avatarHeader}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              'https://cdn.pixabay.com/photo/2018/03/11/17/22/cat-3217406_1280.jpg'
          }}
        />
        <Text style={styles.name}>React Native</Text>
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
    width: 200,
    height: 200,
    borderRadius: 100,
    borderColor: '#fff',
    borderWidth: 10
  },
  name: {
    color: '#005792',
    fontSize: 30,
    fontWeight: '300',
    marginTop: 10
  }
});
