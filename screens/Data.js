import {useRef} from 'react';
import {StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions} from "react-native";
import Carousel from 'react-native-anchor-carousel';
import {AreaChart, Grid, YAxis, XAxis} from 'react-native-svg-charts'
import {Defs, LinearGradient, Stop} from 'react-native-svg'
import * as shape from 'd3-shape'

const Login = () => {

    const carouselRef = useRef(null);

    const images = [
        {
            uri: require('../assets/DSCard0.png')
        },
        {
            uri: require('../assets/DSCard2.png')
        },
        {
            uri: require('../assets/DSCard3.png')
        },
        {
            uri: require('../assets/DSCard1.png')
        },
    ]

    const data = [ 50, 10, 40, 95, 20, 24, 85]

    const days = ["mon", "tues", "wen", "thur", "fri", "sat", "sun"]

    const Gradient = ({ index }) => (
        <Defs key={index}>
            <LinearGradient id={'gradient'} x1={'0%'} y1={'0%'} x2={'0%'} y2={'100%'}>
                <Stop offset={'0%'} stopColor={'#FFB800'} stopOpacity={0.8}/>
                <Stop offset={'100%'} stopColor={'#9E2B2B'} stopOpacity={0.2}/>
            </LinearGradient>
        </Defs>
    )

    const contentInset = { top: 20, bottom: 20 }

    const renderItem = ({item, index}) => {
        return (
                <TouchableOpacity
                        style={styles.item}
                        onPress={() => {
                         carouselRef.current.scrollToIndex(index);
                        }}>
                            <Image style={styles.dsCard} source={images[index].uri} />
                </TouchableOpacity>
        );
       }

    return(
        <View style={styles.container}>
          <Image style={styles.background} source={require("../assets/backgroundWithDotV.png")} />
          <ScrollView>
          <Text style={styles.titleText}>Data at a glance</Text>
          <Text style={styles.infoTitle}>Daily suggestions</Text>
          <View style={styles.dailySuggestion}>
            <Carousel
                ref={carouselRef}
                data={Array(4).fill(0)}
                renderItem={renderItem}
                style={styles.carousel}
                itemWidth={Dimensions.get('window').width * 0.95}
                containerWidth={Dimensions.get('window').width}
                separatorWidth={0}
            />
          </View>
          <View style={styles.dataContainer}>
              <View style={styles.data}>
                <Text style={styles.infoTitle2}>Trends</Text>
                    <View style={styles.dataBox}>
                    <YAxis
                        data={data}
                        contentInset={contentInset}
                        svg={{
                            fill: 'grey',
                            fontSize: 10,
                        }}
                        numberOfTicks={10}
                        formatLabel={(value) => `${value}`}
                    />
                    <View style={styles.chartBox}>
                        <AreaChart
                            style={{height: 200, marginLeft: 5, marginBottom: 5}}
                            data={data}
                            curve={shape.curveNatural}
                            contentInset={{ top: 20, bottom: 20 }}
                            svg={{ fill: 'url(#gradient)' }}
                            >
                            <Grid/>
                            <Gradient/>
                            </AreaChart>
                            <XAxis
                            style={{ marginHorizontal: -10 }}
                            data={data}
                            formatLabel={(value, index) => days[index]}
                            contentInset={{ left: 10, right: 10 }}
                            svg={{ fontSize: 10, fill: 'black' }}
                        />

                    </View>
                    </View>
              </View>
          </View>
          <View style={styles.spacer}>
            
          </View>
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

      infoTitle2: {
        fontSize: 23,
        fontWeight: "600",
      },

      dataBox: {
        flexDirection: "row"
      },

      chartBox: {
        width: "90%"
      },

      dataContainer: {
        marginTop: 20,
        width: "100%",
        height: 500,
      },

      spacer: {
        marginBottom: 105
      },

      data: {

          height: 500,
          width: "90%",
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

      carousel: {
        paddingLeft: 20,
      },

      dailySuggestion: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 20
      },

      titleText: {
        paddingLeft: 30,
        paddingTop: 60,   
        fontSize: 30,
        fontWeight: "700",
        letterSpacing: 1,
      },

      dsCard: {
       width: 351,
       height: undefined,
       aspectRatio: 0.785
      },

      infoTitle: {
        paddingLeft: 30,
        paddingTop: 20,
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