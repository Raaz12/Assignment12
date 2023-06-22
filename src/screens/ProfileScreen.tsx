import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

const ProfileScreen = ({route, navigation}) => {
  const data = route.params;
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.View}>
        <View style={styles.View1}>
          <Image source={{uri: data.picture}} style={styles.image} />
        </View>
        <View>
          <Text style={styles.text}>
            Name: <Text style={styles.text1}> {data.firstname + '\n'}</Text>
            Age: <Text style={styles.text1}> {data.age + '\n'}</Text>
            Surname: <Text style={styles.text1}>{data.surname + '\n'}</Text>
            Gender: <Text style={styles.text1}>{data.gender + '\n'}</Text>
            Company:<Text style={styles.text1}> {data.company + '\n'}</Text>
            Email: <Text style={styles.text1}>{data.email + '\n'}</Text>
            Phone: <Text style={styles.text1}>{data.phone + '\n'}</Text>
            About:{' '}
            <Text style={styles.text2}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in,
              consectetur ratione fugiat illo sequi incidunt asperiores animi
              nihil omnis fugit deserunt numquam! Suscipit veniam quos
              doloribus, error, et provident officia aut maiores deserunt,
              libero deleniti culpa eos iusto nulla.
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text1: {
    color: '#0ca0eb',
    fontWeight: '700',
  },
  text: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
  },
  text2: {color: '#000000', fontSize: 12, fontWeight: '400'},
  SafeAreaView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  View: {
    margin: 16,
    alignItems: 'center',
    shadowColor: '#000000',
    elevation: 5,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  View1: {
    height: 105,
    width: 105,
    borderRadius: 100,
    shadowColor: '#000000',
    elevation: 20,
    backgroundColor: 'gray',
    marginTop: -70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {height: 100, width: 100, borderRadius: 100},
});
export default ProfileScreen;
