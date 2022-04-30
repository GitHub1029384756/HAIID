import {StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from "react-native";

const SignUp = () => {
  return (
    <View style={styles.container}>
        <Image style={styles.background} source={require("./assets/backgroundWithDotIII.png")} />
        <View style={styles.infoContainer}>
          <Text style={styles.titleText}>Sign Up</Text>
          <View>
            <Text style={styles.altText}>Name</Text>
            <TextInput style={styles.inputBox}></TextInput>
            <Text style={styles.altText}>Email</Text>
            <TextInput style={styles.inputBox}></TextInput>
            <Text style={styles.altText}>Password</Text>
            <TextInput secureTextEntry={true} style={styles.inputBox}></TextInput>
            <Text style={styles.altText}>Re-enter password</Text>
            <TextInput secureTextEntry={true} style={styles.inputBox}></TextInput>
          </View> 
        </View>
        <View style={styles.buttonBox}>
            <View style={styles.button}>
                  <TouchableOpacity>
                    <Text style={styles.defaultText}>Sign Up</Text>
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

  infoContainer: {
    paddingLeft: 30,
    paddingTop: 100
    
  },

  titleText: {
    fontSize: 50,
    fontWeight: "700",
    letterSpacing: 1,
  },

  altText: {
    color: "#000",
    fontSize: 17,
    marginTop: 20,
  },

  defaultText: {
    color: "#fff",
    fontSize: 17,
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
    position: "absolute",
    bottom: 150,
  },

  button: {
    marginTop: 7,
    width: 250,
    height: 50,
    borderRadius: 7,
    backgroundColor: "#0263FF",
    color: "white",
    alignItems: "center",
    justifyContent: "center"
  },

  background: {
    zIndex: -1,
    position: "absolute",
    left: 20,
    right: 20,
    top: 0,
    width: '100%',
    height: undefined,
    aspectRatio: 0.4,
  }
});

export default SignUp;
