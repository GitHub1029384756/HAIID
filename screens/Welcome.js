import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Image style={styles.background} source={require("../assets/backgroundWithDot.png")} />
        <View style={styles.buttonBox}>
            <View style={styles.loginButton}>
                  <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.altText}>Log In</Text>
                  </TouchableOpacity>
            </View>
            <View style={styles.signUpButton}>
                  <TouchableOpacity>
                    <Text style={styles.altText}>Sign up with Email</Text>
                  </TouchableOpacity>
            </View>
            <View style={styles.signUpButton}>
                  <TouchableOpacity>
                    <Text style={styles.altText}><Image style={styles.logos} source={require("../assets/facebookLogo.png")}/> Continue with Facebook</Text>
                  </TouchableOpacity>
            </View>
            <View style={styles.signUpButton}>
                  <TouchableOpacity>
                    <Text style={styles.altText}><Image style={styles.logos} source={require("../assets/googleLogo.png")}/> Continue with Google</Text>
                  </TouchableOpacity>
            </View>
            <View style={styles.signUpButton}>
                  <TouchableOpacity>
                    <Text style={styles.altText}><Image style={styles.logos} source={require("../assets/appleLogo.png")}/> Sign in with Apple</Text>
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
    alignItems: "center"
  },

  defaultText: {
    color: "#fff",
    fontSize: 17,
  },

  altText: {
    color: "#000",
    fontSize: 20,
  },

  logos: {
    width: 22,
    height: 22,
  },

  inputBox: {
    marginTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    backgroundColor: "#F5F5F5",
    width: "90%",
    height: 50,
    borderRadius: 10,
    fontSize: 20
  },

  buttonBox: {
    width: "100%",
    alignItems: "center",
    top: 300
  },

  loginButton: {
    marginBottom: 40,
    width: 250,
    height: 50,
    borderRadius: 7,
    backgroundColor: "#F5F5F5",
    color: "white",
    alignItems: "center",
    justifyContent: "center"
  },

  signUpButton: {
    marginTop: 20,
    width: 250,
    height: 50,
    alignItems: "center",
  },

  background: {
    zIndex: -1,
    position: "absolute",
    left: 0,
    right: 20,
    top: 0,
    width: '100%',
    height: undefined,
    aspectRatio: 0.4,
  }
});

export default Welcome;
