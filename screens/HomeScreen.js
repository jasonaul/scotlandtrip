import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import dayjs from 'dayjs';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// const navigation = useNavigation();

const windowWidth = Dimensions.get('window').width;
const DESTINATIONS = [
  {
    title: "Edinburgh",
    image: require('../assets/images/Home/edinburgh.jpeg'), 
    route: "EdinburghScreen", // name of the screen in the navigation stack
    },
    // {
    //   title: "Glasgow",
    //   image: require('./path_to_your_images/glasgow.jpg'),
    //   route: "GlasgowScreen",
    // },
    // {
    //   title: "York",
    //   image: require('./path_to_your_images/york.jpg'),
    //   route: "YorkScreen",
    // },
    // {
    //   title: "Oxford",
    //   image: require('./path_to_your_images/oxford.jpg'),
    //   route: "OxfordScreen",
    // },
    // {
    //   title: "Cotswolds",
    //   image: require('./path_to_your_images/cotswolds.jpg'),
    //   route: "CotswoldsScreen",
    // }
  ];
  

const ENTRIES = [
    {
      title: "Day 1: September 16th",
      overview: [
        "Explore a bit of Edinburgh on foot.",
        "Potential visit to a pub.",
        "Grab some pies for dinner, including extras for Andrew and Steven."
      ],
      accommodation: {
        name: "Hampton Inn Edinburgh West End",
        stayDuration: "Staying from September 16th-21st",
        address: "166 Fountainbridge, Edinburgh EH3 9RX, United Kingdom",
        contact: "+44 131 526 4530"
      },
      pointsOfInterest: [
        {
          name: "The Royal Mile",
          description:
            "The main artery of Edinburgh’s Old Town, stretching between Edinburgh Castle and the Palace of Holyroodhouse."
        },
        {
          name: "Piemakers",
          address: "38 South Bridge",
          hours: "M-TH: 10am-8pm, FRI-SAT: 10am-9pm, SUN: 11am-6:30pm"
        },
        {
          name: "Jolly Judge Pub",
          address: "7 James Court, Lawnmarket",
          description:
            "Historic pub located in the heart of Old Town, 2 minutes walk from the Castle.",
          hours: "Mon-Thu: 12pm-9pm, Fri-Sat: 12pm-10pm, Sun: 2pm-8pm"
        }
      ]
    }
    // ... More days can be added following the same structure.
  ];

  function MainHeader({ title }) {
    return (
      <View>
        <Text>{title}</Text>
      </View>
    );
  }
  
  function ScreenHeader({ mainTitle, secondTitle }) {
    return (
      <View>
        <Text>{mainTitle}</Text>
        <Text>{secondTitle}</Text>
      </View>
    );
  }

  function DestinationsCarousel({ data, renderItem }) {
    return (
        <Carousel
            data={data}
            renderItem={({ item, index }) => <DestinationItem item={item} index={index} />}
            sliderWidth={windowWidth}
            itemWidth={windowWidth - 60}
        />
    );
}
const CAROUSEL_IMAGE_WIDTH = Dimensions.get('window').width - 60; // or whatever width you desire
const CAROUSEL_IMAGE_HEIGHT = 200; // or whatever height you desire
function DestinationItem({ item, index }) {
    const navigation = useNavigation();
  
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity onPress={() => navigation.navigate(item.route)}>
            <Image
                source={item.image}
                style={{ width: CAROUSEL_IMAGE_WIDTH, height: CAROUSEL_IMAGE_HEIGHT, resizeMode: 'cover' }}
            />
        </TouchableOpacity>
      </View>
    );
  }
// const _renderDestinationItem = ({ item, index }) => {
//     return (
//         <View style={styles.slide}>
//             <Text style={styles.title}>{item.title}</Text>
//             <TouchableOpacity onPress={() => navigation.navigate('EdinburghScreen')}>
//                 <Image
//                     source={item.image}
//                     style={{ width: CAROUSEL_IMAGE_WIDTH, height: CAROUSEL_IMAGE_HEIGHT, resizeMode: 'cover' }}
//                 />
//             </TouchableOpacity>
//         </View>
//     );
// };




const _renderDailyEntry = (entry) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{entry.title}</Text>
        <Text style={styles.sectionTitle}>Evening Overview:</Text>
        {entry.overview.map((point, idx) => (
          <Text key={idx} style={styles.point}>{point}</Text>
        ))}

        <Text style={styles.sectionTitle}>Accommodation:</Text>
        <Text style={styles.point}>Name: {entry.accommodation.name}</Text>
        <Text style={styles.point}>Duration: {entry.accommodation.stayDuration}</Text>
        <Text style={styles.point}>Address: {entry.accommodation.address}</Text>
        <Text style={styles.point}>Contact: {entry.accommodation.contact}</Text>

        <Text style={styles.sectionTitle}>Points of Interest:</Text>
        {entry.pointsOfInterest.map((poi, idx) => (
          <View key={idx}>
            <Text style={styles.poiName}>{poi.name}</Text>
            <Text style={styles.point}>Address: {poi.address || "N/A"}</Text>
            <Text style={styles.point}>Description: {poi.description || "N/A"}</Text>
            <Text style={styles.point}>Hours: {poi.hours || "N/A"}</Text>
          </View>
        ))}
      </View>
    );
};
  

function HomeScreen() {
    const tripStartDate = dayjs('2023-09-16');
    const today = dayjs();
    const tripDay = today.diff(tripStartDate, 'day') + 1;
  
    return (
      <View style={styles.container}>
        <MainHeader title="Scotland Trip - September 10-23" />
        <ScreenHeader mainTitle="Scotland Trip" secondTitle="September 10 - 23, 2023" />
  
        <ScrollView showsVerticalScrollIndicator={false}>
          <DestinationsCarousel 
            data={DESTINATIONS}
          />
  
          {tripDay >= 1 && tripDay <= ENTRIES.length 
          ? (
            <>
              <Text style={styles.glanceText}>Today At A Glance: {ENTRIES[tripDay - 1].title}</Text>
              {_renderDailyEntry(ENTRIES[tripDay - 1])}
            </>
          )
          : tripDay < 1
          ? <Text style={styles.glanceText}>Trip hasn't started yet!</Text>
          : <Text style={styles.glanceText}>Trip has ended.</Text>
          }
  
          {/* Your Itinerary Details from previous code */}
        </ScrollView>
      </View>
    );
  }
  


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    slide: {
      backgroundColor: 'white',
      borderRadius: 8,
      padding: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    sectionTitle: {
      marginTop: 10,
      fontSize: 16,
      fontWeight: 'bold',
    },
    point: {
      fontSize: 14,
      marginLeft: 5,
    },
    poiName: {
      marginTop: 5,
      fontSize: 15,
      fontWeight: 'bold',
    },
    destinationImage: { // Moved inside the StyleSheet.create
        width: windowWidth - 60, 
        height: (windowWidth - 60) * 0.56, // 16:9 aspect ratio
        borderRadius: 8,
        marginBottom: 10,
    }
});


export default HomeScreen;
