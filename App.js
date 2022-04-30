import {StyleSheet, Text, View, TouchableOpacity, Image} from "react-native";
import ScrollPicker from 'react-native-wheel-scrollview-picker';

const Login = () => {
  return (
    <View style={styles.container}>
      
       

        <Text style={styles.titleText}>Set Your Run</Text>

        <View style={styles.suggestionGoalContainer}>
          <View style={styles.suggestedGoal}>
              <View style={styles.infoRow}>
                <Image style={styles.runner} source={require("./assets/runner.png")}/>
                <View>
                  <Text style={styles.suggestionTitleText}>Need Suggested Goals?</Text>
                  <Text style={styles.suggestionText}>Based on your previous usage, we can give {"\n"}you suggested goals on time, pace and {"\n"}distance.</Text>
                </View>
              </View>
              <View style={styles.infoRow}>
                <View style={styles.noButton}>
                    <TouchableOpacity>
                      <Text style={styles.altText}>No</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.yesButton}>
                    <TouchableOpacity>
                      <Text style={styles.defaultText}>Yes</Text>
                    </TouchableOpacity>
                </View>
              </View>
          </View> 
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Time Goal</Text>
          <View>
          <ScrollPicker
        dataSource={['1', '2', '3', '4', '5', '6']}
        selectedIndex={1}
       
        // wrapperHeight={80}
        // wrapperWidth={20}
        wrapperColor='#FFFFFF'
        itemHeight={60}
        highlightColor='#d8d8d8'
        highlightBorderWidth={2}
      />
          </View>
        </View>
        

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    fontFamily: "sf compact text",
  },

  infoContainer: {
    paddingLeft: 30,
    paddingTop: 30    
  },

  runner: {
    marginLeft: 10,
    marginTop: 10,
    width: 45,
    height: 45
  },  

  suggestionGoalContainer: {
    alignItems: "center",
    width: '100%',
  },

  infoRow: {
    flexDirection:"row",
    marginBottom: 3
  },

  infoTitle: {
    fontSize: 23,
    fontWeight: "600",
  },

  suggestedGoal: {
    marginTop: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    width: "90%",
    height: 130,
    backgroundColor: "#fff",
    shadowColor: '#171717',
    shadowOpacity: 0.1,
    shadowRadius: 7,
    shadowOffset: {width: -7, height: 7}
  },  

  titleText: {
    paddingLeft: 30,
    paddingTop: 60,   
    fontSize: 30,
    fontWeight: "700",
    letterSpacing: 1,
  },

  suggestionTitleText: {
    color: "#000",
    fontSize: 15,
    fontWeight: "700",
    marginTop: 6,
    marginLeft: 10,
  },

  suggestionText: {
    marginTop: 4,
    marginLeft: 10,
  },

  defaultText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600"
  },

  altText: {
    color: "#000",
    fontSize: 17,
    fontWeight: "600"
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

  yesButton: {
    width: 100,
    height: 30,
    borderRadius: 7,
    backgroundColor: "#0263FF",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  noButton: {
    marginLeft: 120,
    marginRight: 5,
    width: 100,
    height: 30,
    borderRadius: 7,
    backgroundColor: "#E9E9E9",
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Login;
