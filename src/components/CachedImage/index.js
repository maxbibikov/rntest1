// Core
import React, { Component } from 'react';
import { View, Image } from 'react-native';
import RNFS from 'react-native-fs';
import SHA1 from '../../instruments/sha1';

export default class CachedImage extends Component {
  state = {
    path: ''
  };

  componentDidMount() {
    const { uri } = this.props;

    // parse filename from uri
    const filename = uri.substring(
      uri.lastIndexOf('/'),
      uri.indexOf('?') === -1 ? uri.length : uri.indexOf('?')
    );

    // parse extension from filename
    const extension =
      filename.indexOf('.') === -1
        ? '.jpg'
        : filename.substring(filename.lastIndexOf('.'));

    const path = RNFS.DocumentDirectoryPath + SHA1(uri) + extension;

    // check if path already exists
    RNFS.exists(path).then(res => {
      if (res) {
        this.setState({ path });
      } else {
        // if path doesn't exists cache image from uri
        RNFS.downloadFile({
          fromUrl: uri,
          toFile: path
        }).promise.then(res => {
          this.setState({ path });
        });
      }
    });
  }
  render() {
    const { path } = this.state;
    const { uri } = this.props;

    return (
      <View>
        <Image
          style={this.props.style}
          source={{
            uri: path ? `file://${path}` : uri
          }}
        />
      </View>
    );
  }
}
