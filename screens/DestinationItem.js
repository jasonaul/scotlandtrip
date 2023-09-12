function DestinationItem({ item, index }) {
    const navigation = useNavigation();
  
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('EdinburghScreen')}>
            <Image
                source={item.image}
                style={{ width: CAROUSEL_IMAGE_WIDTH, height: CAROUSEL_IMAGE_HEIGHT, resizeMode: 'cover' }}
            />
        </TouchableOpacity>
      </View>
    );
  }
  