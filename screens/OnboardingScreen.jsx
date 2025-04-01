import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import CustomButton from "../components/CustomButton";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { bgColor, btnColor, fgColor, paginationColor } from "../SampleData/Color";

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.scrollBy(1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (swiperRef.current && currentIndex > 0) {
      swiperRef.current.scrollBy(-1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <View style={[styles.container,{backgroundColor: bgColor}]}>
      <StatusBar translucent={true} backgroundColor="#808080" />
      <Swiper
        ref={swiperRef}
        loop={false}
        paginationStyle={styles.paginationStyle}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        autoplay={false}
        onIndexChanged={(index) => setCurrentIndex(index)}
      >
        {/* First Screen */}
        <View style={styles.onboardingContainer}>
          <Image source={require("./../assets/ob1.png")} />
          <Text style={styles.title}>Choose Product</Text>
          <Text style={styles.description}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </Text>
          <View style={styles.navButtonsContainer}>
            <TouchableOpacity
              style={[styles.navButton, styles.disabledButton]}
              disabled={true}
            >
              <Text style={styles.navButtonText}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={handleNext}>
              <Text style={styles.navButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Second Screen */}
        <View style={styles.onboardingContainer}>
          <Image source={require("./../assets/ob2.png")} style={styles.on2Image} />
          <Text style={styles.title}>Make Payment</Text>
          <Text style={styles.description}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
          </Text>
          <View style={styles.navButtonsContainer}>
            <TouchableOpacity style={styles.navButton} onPress={handlePrevious}>
              <Text style={styles.navButtonText}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navButton} onPress={handleNext}>
              <Text style={styles.navButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Third Screen */}
        <View style={styles.onboardingContainer}>
          <Image source={require("./../assets/ob3.png")} />
          <Text style={styles.title}>Get Your Order</Text>
          <Text style={styles.description}>
            Seamless and transparent customer experience at every step of transfer.
          </Text>
          <View style={styles.twoButtonContainer}>
            <CustomButton
              title={"Register"}
              textColor={"white"}
              backgroundColor={btnColor}
              buttonStyle={styles.twoButton}
              onPress={() => navigation.navigate('signup')}
            />
            <CustomButton
              title={"Sign in"}
              textColor={"white"}
              backgroundColor={btnColor}
              buttonStyle={styles.twoButton}
              onPress={() => navigation.navigate('signin')}
            />
          </View>
        </View>
      </Swiper>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  onboardingContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 10,
  },
  on2Image: {
    width: 250,
    height: 260,
  },
  description: {
    fontSize: 14,
    color:fgColor,
    fontWeight: "400",
    textAlign: "center",
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    color: fgColor,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 30,
  },
  paginationStyle: {
    position: "absolute",
    top: 550,
  },
  dotStyle: {
    width: 20,
    height: 5,
    borderRadius: 6,
  },
  activeDotStyle: {
    width: 20,
    height: 5,
    borderRadius: 6,
    backgroundColor: paginationColor,
  },
  twoButtonContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 30,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  twoButton: {
    width: 157,
  },
  navButtonsContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 30,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  navButton: {
    width: 157,
    backgroundColor: btnColor,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "#A9A9A9",
  },
  navButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
