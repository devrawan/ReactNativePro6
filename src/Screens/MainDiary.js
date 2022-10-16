import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
const MainDiary = ({navigation}) => {
  return (
    <SafeAreaView style={styles.cont}>
      <View style={styles.viewItems}>
        <View style={styles.viewImage}>
          <Image
            source={{
              uri: 'https://i.pinimg.com/originals/af/6b/f5/af6bf58dfc5182bbbc05f31313e7bbf3.png',
            }}
            style={styles.image}
          />
        </View>
        <TouchableOpacity style={styles.viewBtn}>
          <Button
            onPress={() => {
              navigation.navigate('Text Diary');
            }}
            title="Text Diary"
            color="white"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MainDiary;
const styles = StyleSheet.create({
  cont: {
    flex: 1,
    backgroundColor: '#EFBBFF',
  },
  viewItems: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  viewImage: {
    marginVertical: 20,
  },
  image: {
    height: 300,
    alignSelf: 'center',
    width: 300,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 3,
  },
  viewBtn: {
    alignSelf: 'center',
    justifyContent: 'center',
    width: 220,
    backgroundColor: '#9e17f4',
    marginVertical: 7,
    marginHorizontal: 7,
    borderRadius: 10,
    height: 55,
    paddingVertical: 4,
  },
});
