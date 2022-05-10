import {StyleSheet, Text, View, TouchableOpacity, Image} from "react-native";

const Splash = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.background} source={require("../assets/backgroundGradient.png")} />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Beginners?</Text>
          <Text style={styles.defaultText}>See what we can do for you.</Text>
        </View>
        <View style={styles.buttonBox}>
          <View style={styles.OKButton}>
              <TouchableOpacity>
                <Text style={styles.defaultText}>OK</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.dismissButton}>
              <TouchableOpacity>
                <Text style={styles.altText}>Dismiss</Text>
              </TouchableOpacity>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "sf compact text",
  },

  titleContainer: {
    paddingLeft: 30,
    paddingTop: 100
    
  },

  titleText: {
    color: "#fff",
    fontSize: 55,
    fontWeight: "700",
    letterSpacing: 1,
  },

  defaultText: {
    color: "#fff",
    fontSize: 17,
    marginTop: 2,
    fontWeight: "600",
  },

  altText: {
    color: "#000",
    fontSize: 17,
    marginTop: 2,
    fontWeight: "600",
  },

  buttonBox: {
    width: "100%",
    alignItems: "center",
    position: "absolute",
    bottom: 150,
  },

  OKButton: {
    width: 250,
    height: 50,
    borderRadius: 7,
    backgroundColor: "#0263FF",
    color: "white",
    alignItems: "center",
    justifyContent: "center"
  },

  dismissButton: {
    marginTop: 7,
    width: 250,
    height: 50,
    borderRadius: 7,
    backgroundColor: "#ffffff80",
    color: "white",
    alignItems: "center",
    justifyContent: "center"
  },

  background: {
    zIndex: -1,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%"
  }
});

export default Splash;
