import React from 'react';
import { Constants, Camera, FileSystem, Permissions, BarCodeScanner } from 'expo';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class CameraScreen extends React.Component {
  state = {
    autoFocus: 'on',
    type: 'back',
    ratio: '16:9',
    barcodeScanning: false,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ permissionsGranted: status === 'granted' });
  }

  componentDidMount() {
    FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'photos').catch(e => {
      console.log(e, 'Directory exists');
    });
  }

  toggleBarcodeScanning = () => this.setState({ barcodeScanning: !this.state.barcodeScanning });

  handleMountError = ({ message }) => console.error(message);

  onBarCodeScanned = code => {
    this.setState(
      { barcodeScanning: !this.state.barcodeScanning },
      Alert.alert(`君のバーコードは: ${code.data}`)
    );
  };

  renderTopBar = () => <View style={styles.topBar}></View>

  renderBottomBar = () =>
    <View
      style={styles.bottomBar}>
      <TouchableOpacity onPress={this.toggleBarcodeScanning}>
        <MaterialCommunityIcons name="barcode-scan" size={32} color={this.state.barcodeScanning ? "white" : "#858585" } />
      </TouchableOpacity>
    </View>

  renderCamera = () =>
    (
      <View style={{ flex: 1 }}>
        <Camera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.camera}
          type={this.state.type}
          autoFocus={this.state.autoFocus}
          onMountError={this.handleMountError}
          barCodeScannerSettings={{
            barCodeTypes: [
              BarCodeScanner.Constants.BarCodeType.qr,
              BarCodeScanner.Constants.BarCodeType.pdf417,
              BarCodeScanner.Constants.BarCodeType.ean8,
              BarCodeScanner.Constants.BarCodeType.ean13,
            ],
          }}
          onBarCodeScanned={this.state.barcodeScanning ? this.onBarCodeScanned : undefined}
          >
          {this.renderTopBar()}
          {this.renderBottomBar()}
        </Camera>
      </View>
    );

  render() {
    const content = this.renderCamera();
    return <View style={styles.container}>{content}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  camera: {
    flex: 1,
    justifyContent: 'space-between',
  },
  topBar: {
    flex: 0.2,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: Constants.statusBarHeight / 2,
  },
  bottomBar: {
    paddingBottom: 5,
    backgroundColor: 'transparent',
    alignSelf: 'center',
    justifyContent: 'space-between',
    flex: 0.12,
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
  },
});