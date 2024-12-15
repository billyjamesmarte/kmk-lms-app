import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { CameraView, Camera } from "expo-camera";
import Colors from "../constants/colors";

const { width } = Dimensions.get("window");
const qrSize = width * 0.7;

function QRCodeScannerScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    };

    getCameraPermissions();
  }, []);

  const handleBarcodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <CameraView
				zoom={0.8}
        CameraRatio="4:3"
        onBarcodeScanned={scanned ? undefined : handleBarcodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr", "pdf417"],
        }}
        style={StyleSheet.absoluteFillObject}
      />

      <View style={styles.overlay}>
        <View style={styles.topOverlay} />
        <View style={styles.middleOverlay}>
          <View style={styles.sideOverlay} />
          <View style={styles.viewfinder} />
          <View style={styles.sideOverlay} />
        </View>
        <View style={styles.bottomOverlay}>
          {scanned && (
            <TouchableOpacity
              style={styles.scanButton}
              onPress={() => setScanned(false)}
            >
              <Text style={styles.buttonText}>Tap to Scan Again</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  topOverlay: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.82)",
  },
  middleOverlay: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  sideOverlay: {
    flex: 1,
		height: qrSize,
    backgroundColor: "rgba(0, 0, 0, 0.82)",
  },
  viewfinder: {
    width: qrSize,
    height: qrSize,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 10,
  },
  bottomOverlay: {
    flex: 1,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.82)",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 50,
  },
  scanButton: {
    backgroundColor: Colors.primary500,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default QRCodeScannerScreen;
