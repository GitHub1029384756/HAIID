import React, {useState, useEffect} from "react";
import {StyleSheet, View, Text, ActivityIndicator, TouchableOpacity} from "react-native";
import MapView, {Marker} from "react-native-maps";
import * as Location from "expo-location";
import Icon from "react-native-vector-icons/Feather";

const Go = () => {
    const [location, setLocation] = useState(null)
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync()
          if (status !== "granted") {
            setErrorMsg("Permission to access location was denied")
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({})
          setLocation(location)
          setLoaded(true)
        })();
      }, []);

  return (
    <View style={styles.container}>
        {
                loaded ? (
                        <>
                        <View style={styles.map}>
                            <MapView style={styles.map}
                                region={{
                                latitude: (location == null ? 0 : location.coords.latitude + 0.0075),
                                longitude: (location == null ? 0 : location.coords.longitude),
                                latitudeDelta: 0.005,
                                longitudeDelta: 0.005,
                                }}
                            >
                                <Marker coordinate={{ latitude : (location == null ? 0 : location.coords.latitude + 0.0075) , longitude : (location == null ? 0 : location.coords.longitude) }}>
                                    <Icon name="navigation" size={22} color={"#0263FF"} />
                                </Marker>
                            </MapView>
                        </View>
                        <View style={styles.topBar}>
                            <View style={styles.infoRow}>
                                <View style={styles.infoContainer}>
                                    <Text style={styles.infoTitle}>TIME</Text>
                                    <Text style={styles.currentInfo}>00:00:00</Text>
                                    <Text style={styles.expectedInfo}>00:47:30</Text>
                                </View>
                                <View style={styles.infoContainer}>
                                    <Text style={styles.infoTitle}>DISTANCE</Text>
                                    <Text style={styles.currentInfo}>00:00</Text>
                                    <Text style={styles.expectedInfo}>01:52</Text>
                                </View>
                                <View style={styles.infoContainer}>
                                    <Text style={styles.infoTitle}>PACE</Text>
                                    <Text style={styles.currentInfo}>00:00:00</Text>
                                    <Text style={styles.expectedInfo}>00:22:45</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.bottomBar}>
                            <TouchableOpacity style={styles.toggler}>
                                <Text style={styles.togglerText}>Let's Go!</Text>
                            </TouchableOpacity>
                        </View>
                        </>
                                
                ) : (
                    <View style={styles.loader}>
                        <ActivityIndicator size="large" />
                        <Text style={styles.loaderText}>Loading location</Text>
                    </View>
                )
                }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "sf compact text",
  },

  infoContainer: {
    paddingHorizontal: 10,
    alignItems: "center",
  },

  expectedInfo: {
    fontSize: 20,
    fontWeight: "600",
    color: "#0263FF"
  },

  infoTitle: {
    fontSize: 15,
    fontWeight: "600"
  },

  topBar: {
      height: "25%",
      alignItems: "center",
      justifyContent: "center"
  },

  infoRow: {
    flexDirection:"row",
    backgroundColor: "red",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ffffffcc",
    borderRadius: 10,
    backgroundColor: "#ffffffcc",
    shadowColor: "#171717",
    shadowOpacity: 0.1,
    shadowRadius: 7,
    shadowOffset: {width: -7, height: 7}
  },   

  currentInfo: {
    fontSize: 25,
    fontWeight: "600",
  },

  loader: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },

  loaderText: {
    paddingTop: 10,
    fontWeight: "600",
    fontSize: 20
  },

  map: {
    zIndex: -1,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    width: "100%",
    height: "100%"
  },  
  
  bottomBar: {
    width: "100%",
    alignItems: "center",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    bottom: 120,
  },

  toggler: {
      height: 50,
      width: 120,
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
        borderColor: "#ffffffcc",
        borderRadius: 25,
        backgroundColor: "#fffffff2",
        shadowColor: "#171717",
        shadowOpacity: 0.1,
        shadowRadius: 7,
        shadowOffset: {width: -7, height: 7}
  },
  
  togglerText: {
      fontSize: 15,
      fontWeight: "600"
  }

 
});

export default Go;
