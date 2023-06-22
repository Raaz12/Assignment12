import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface IUserCard {
  onPress: any;
  picture?: string;
  age?: number;
  firstname?: string;
  surname?: string;
  gender?: string;
  company?: string;
  email?: string;
  phone?: string;
}
const UserCard = (auto: IUserCard) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        auto.onPress();
      }}>
      <View style={styles.imageContainer}>
        <Image source={{uri: auto.picture}} style={styles.image} />
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={styles.text}>{auto.firstname}</Text>
        <Text style={styles.text1}>{auto.surname}</Text>
        <Text style={styles.text1}>{auto.email}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginBottom: 1,
    shadowColor: '#000000',
    elevation: 5,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {height: 100, width: 100, justifyContent: 'center'},
  image: {height: 70, width: 70, borderRadius: 100},
  text: {color: '#000000', fontSize: 18, fontWeight: '500'},
  text1: {color: '#000000', fontSize: 16, fontWeight: '400'},
  text2: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
    flexWrap: 'wrap',
  },
});
export default UserCard;
