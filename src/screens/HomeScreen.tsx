import {
  Alert,
  FlatList,
  Modal,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import UserCard from '../card/UserCard';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const url = 'https://run.mocky.io/v3/0bff210c-7fc8-4964-a555-8d93de3d5f17';
const HomeScreen = ({navigation}: {navigation: any}) => {
  const [data, setData] = useState<any>([]);
  const [data1, setData1] = useState<any>([]);
  const [name, setName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetch(url)
      .then(Response => Response.json())
      .then(json => {
        setData(json);
        setData1(json);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const Modals = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <TouchableOpacity
          style={styles.centeredView}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
          activeOpacity={0}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => {
                const tempList = data1.sort((a, b) =>
                  a.firstname > b.firstname ? 1 : -1,
                );
                setData1(tempList), setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Sort by name</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                const tempList = data1.sort((a, b) =>
                  a.surname > b.surname ? 1 : -1,
                );

                setData1(tempList), setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Sort by surname</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                const tempList = data1.sort((a, b) =>
                  a.firstname > b.firstname ? 1 : -1,
                );

                setData1(tempList), setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Ascending order</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                const tempList = data1.sort((a, b) =>
                  a.firstname < b.firstname ? 1 : -1,
                );

                setData1(tempList), setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>descending order</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };
  const searchPage = (text: string) => {
    let temp = data.filter(item => {
      return (
        item.firstname.toLowerCase().indexOf(text.toLocaleLowerCase()) > -1
      );
    });
    text ? setData(temp) : setData(data1);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <Modals />
      <View style={{flex: 1, marginHorizontal: 16}}>
        <View style={styles.container}>
          <Icon name="search" size={24} color={'#000'} />
          <TextInput
            style={{flex: 1, color: '#000000'}}
            placeholder="Search"
            placeholderTextColor="#000"
            cursorColor={'#000000'}
            selectionColor={'#000000'}
            value={name}
            onChangeText={e => {
              setName(e), searchPage(e);
            }}
          />
          <Icon
            name="filter"
            size={24}
            color={'#000'}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          />
        </View>
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <UserCard
                {...item}
                onPress={() => {
                  navigation.navigate('ProfileScreen', {...item});
                }}
              />
            );
          }}
          //   keyExtractor={item => item}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 22,
    alignItems: 'flex-end',
  },
  modalView: {
    width: 150,
    margin: 20,
    gap: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  container: {
    height: 40,
    borderRadius: 16,
    marginVertical: 5,
    borderWidth: 1,
    paddingHorizontal: 5,
    backgroundColor: '#edf1f2',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '700',
  },
});
export default HomeScreen;
