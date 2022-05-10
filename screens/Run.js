import {useState} from "react";
import {StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from "react-native";
import {Picker} from "@react-native-picker/picker";

const Run = () => {
  const [time, setTime] = useState({hours: 0, mins: 0, secs: 0})
  const [pace, setPace] = useState({hours: 0, mins: 0, secs: 0})
  const [distance, setDistance] = useState({km: 0, m: 0})

  const hoursGenerator = () => {
    const hours = []
    for(let i=0; i<11; i++){
      hours.push(<Picker.Item label={i<10? "0"+i.toString():i.toString()} value={i.toString()} />)
    }
    return hours
  }

  const minsSecGenerator = () => {
    const minSec = []
    for(let i=0; i<61; i++){
      minSec.push(<Picker.Item label={i<10? "0"+i.toString():i.toString()} value={i.toString()} />)
    }
    return minSec
  }

  const distanceGenerator = () => {
    const dist = []
    for(let i=0; i<101; i++){
      dist.push(<Picker.Item label={i<10? "0"+i.toString():i.toString()} value={i.toString()} />)
    }
    return dist
  }

  
    return (
      <View style={styles.container}>
          <Image style={styles.background} source={require("../assets/backgroundWithDotIIII.png")} />
         
          <ScrollView>
          <Text style={styles.titleText}>Set Your Run</Text>
  
          <View style={styles.suggestionGoalContainer}>
            <View style={styles.suggestedGoal}>
                <View style={styles.infoRow}>
                  <Image style={styles.runner} source={require("../assets/runner.png")}/>
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
            <View>
            <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>Time Goal</Text>
              <View style={styles.infoRow}>
                <View style={styles.pickerColumn}>
                <Picker selectedValue={time.hours} onValueChange={(value, index) => setTime({...time, hours: value})} mode="dropdown" style={styles.picker}>
                  {hoursGenerator()}
                </Picker>
                </View>
            <Text style={styles.delimiter}>:</Text>
            <View style={styles.pickerColumn}>
                <Picker selectedValue={time.mins} onValueChange={(value, index) => setTime({...time, mins: value})} mode="dropdown" style={styles.picker}>
                  {minsSecGenerator()}
                </Picker>
                </View>
            <Text style={styles.delimiter}>:</Text>
            <View style={styles.pickerColumn}>
                <Picker selectedValue={time.secs} onValueChange={(value, index) => setTime({...time, secs: value})} mode="dropdown" style={styles.picker}>
                  {minsSecGenerator()}
                </Picker>
                </View>
              </View>
              <Text style={styles.suggestedText}>Suggested:</Text>
              <Text style={styles.suggestedValue}>0h, 47m and 30s </Text>
              <Text>Confused? Click here for more info</Text>
            </View>
            </View>
            <Text></Text>
            <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>Pace Goal</Text>
            <View>
              <View style={styles.infoRow}>
                <View style={styles.pickerColumn}>
                <Picker selectedValue={pace.hours} onValueChange={(value, index) => setPace({...pace, hours: value})} mode="dropdown" style={styles.picker}>
                  {hoursGenerator()}
                </Picker>
                </View>
            <Text style={styles.delimiter}>:</Text>
            <View style={styles.pickerColumn}>
                <Picker selectedValue={pace.mins} onValueChange={(value, index) => setPace({...pace, mins: value})} mode="dropdown" style={styles.picker}>
                  {minsSecGenerator()}
                </Picker>
                </View>
            <Text style={styles.delimiter}>:</Text>
            <View style={styles.pickerColumn}>
                <Picker selectedValue={pace.secs} onValueChange={(value, index) => setPace({...pace, secs: value})} mode="dropdown" style={styles.picker}>
                  {minsSecGenerator()}
                </Picker>
                </View>
              </View>
              <Text style={styles.suggestedText}>Suggested:</Text>
              <Text style={styles.suggestedValue}>0h, 22m and 45s / km </Text>
              <Text>Confused? Click here for more info</Text>
            </View>
            </View>
            <Text></Text>
            <View style={styles.infoBox}>
            <Text style={styles.infoTitle}>Distance Goal</Text>
            <View>
              <View style={styles.infoRow}>
            <View style={styles.pickerColumn}>
                <Picker selectedValue={distance.km} onValueChange={(value, index) => setDistance({...distance, km: value})} mode="dropdown" style={styles.picker}>
                  {distanceGenerator()}
                </Picker>
                </View>
            <Text style={styles.delimiter}>:</Text>
            <View style={styles.pickerColumn}>
                <Picker selectedValue={distance.m} onValueChange={(value, index) => setDistance({...distance, m: value})} mode="dropdown" style={styles.picker}>
                  {distanceGenerator()}
                </Picker>
                </View>
              </View>
              <Text style={styles.suggestedText}>Suggested:</Text>
              <Text style={styles.suggestedValue}>1.52km</Text>
              <Text>Confused? Click here for more info</Text>
            </View>
            </View>
          </View>
          <View style={styles.spacer}></View>
          </ScrollView>
          </View>
      )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    fontFamily: "sf compact text",
  },

  tabBarContainer: {
    borderRadius: 25,
  },

  spacer: {
    marginBottom: 105
  },

  suggestedText: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },

  background: {
    zIndex: -1,
    position: "absolute",
    left: -20,
    right: 20,
    top: 0,
    width: "110%",
    height: undefined,
    aspectRatio: 0.4,
  },

  infoBox: {
    width: "98%",
    paddingVertical: 10,
    paddingLeft: 10,
    marginLeft: -10,
    borderWidth: 1,
    borderColor: "#fffffff2",
    borderRadius: 10,
    backgroundColor: "#fffffff2",
    shadowColor: "#171717",
    shadowOpacity: 0.1,
    shadowRadius: 7,
    shadowOffset: {width: -7, height: 7}
  },

  suggestedValue: {
    fontSize: 17,
    fontWeight: "600",
    color: "#0263FF",
    marginBottom: 5
  },  

  pickerColumn: {
    width: 110,
    height: 60,
    overflow: "hidden",
  },

  delimiter: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: "700"
  },

  picker: {
    top: -80,
    width: 110,
  },

  infoContainer: {
    paddingLeft: 30,
    paddingTop: 15    
  },

  runner: {
    marginLeft: 10,
    marginTop: 10,
    width: 45,
    height: 45
  },  

  suggestionGoalContainer: {
    alignItems: "center",
    width: "100%",
  },

  infoRow: {
    flexDirection:"row",
    marginBottom: 3,
  },

  infoTitle: {
    fontSize: 23,
    fontWeight: "600",
  },

  suggestedGoal: {
    marginTop: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fffffff2",
    width: "90%",
    height: 130,
    backgroundColor: "#fffffff2",
    shadowColor: "#171717",
    shadowOpacity: 0.1,
    shadowRadius: 7,
    shadowOffset: {width: -7, height: 7}
  },  

  titleText: {
    paddingLeft: 30,
    paddingTop: 60,   
    fontSize: 30,
    color: "#fff",
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

export default Run;
