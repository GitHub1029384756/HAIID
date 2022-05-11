import {StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Feather";

const Login = () => {

    return(
        <View style={styles.container}>
          <Image style={styles.background} source={require("../assets/backgroundWithDotVI.png")} />
          <ScrollView>
          <Text style={styles.titleText}>Settings & Account</Text>
          <TouchableOpacity>
              <View style={styles.infoContainer}>
                <Icon name="user" size={70} color={"#0263FF"} />
                <Text style={styles.infoTitle2}>Ryan Key</Text>
                <Text>Click on the card to view your settings</Text>
              </View>
          </TouchableOpacity>
          <Text style={styles.infoTitle}>Features</Text>
            <TouchableOpacity style={styles.setting}>
                <View style={styles.infoRow}>
                    <Text style={styles.settingText}>AI settings</Text>
                    <Icon style={styles.chevron} name="chevron-right" size={27} color={"#222"} />
                </View>
            </TouchableOpacity>            
            <Text style={styles.infoTitle}>Privacy</Text>
            <TouchableOpacity style={styles.setting}>
                <View style={styles.infoRow}>
                    <Text style={styles.settingText}>App settings</Text>
                    <Icon style={styles.chevron} name="chevron-right" size={27} color={"#222"} />
                </View>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.setting}>
                <View style={styles.infoRow}>
                    <Text style={styles.settingText}>Account settings</Text>
                    <Icon style={styles.chevron} name="chevron-right" size={27} color={"#222"} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.setting}>
                <View style={styles.infoRow}>
                    <Text style={styles.settingText}>Location services settings</Text>
                    <Icon style={styles.chevron} name="chevron-right" size={27} color={"#222"} />
                </View>
            </TouchableOpacity>
            <Text style={styles.infoTitle}>Data</Text>
            <TouchableOpacity style={styles.setting}>
                <View style={styles.infoRow}>
                    <Text style={{...styles.settingText, color: "#0263FF"}}>Export AI parameters</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.setting}>
                <Text style={{...styles.settingText, color: "#E10000"}}>Reset AI model</Text>
            </TouchableOpacity>
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

      chevron: {
          position: "absolute",
          left: 300,
          paddingTop: 1
      },

      spacer: {
        height: 110
      },

      settingText: {
        fontSize: 15,
        paddingTop: 5,
        fontWeight: "600"
      },

      infoRow: {
        flexDirection: "row"
      },

      setting: {
        width: "90%",
        height: 50,
        marginTop: 10,
        paddingVertical: 10,
        paddingLeft: 10,
        marginLeft: 20,
        borderWidth: 1,
        borderColor: "#fffffff2",
        borderRadius: 10,
        backgroundColor: "#fffffff2",
        shadowColor: "#171717",
        shadowOpacity: 0.1,
        shadowRadius: 7,
        shadowOffset: {width: -7, height: 7}
      },

     
      infoTitle2: {
        fontSize: 23,
        fontWeight: "600",
      },


      infoContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        width: "90%",
        height: 200,
        paddingVertical: 10,
        paddingLeft: 10,
        marginLeft: 20,
        borderWidth: 1,
        borderColor: "#fffffff2",
        borderRadius: 10,
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
        fontWeight: "700",
        letterSpacing: 1,
      },

      infoTitle: {
        paddingLeft: 30,
        paddingTop: 15,
        fontSize: 20,
        fontWeight: "600"
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
})

export default Login