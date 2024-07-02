import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {LogOut, Profil} from '../../assets/icons';
import {Gap} from '../../components/atoms';
import {getDatabase, ref, onValue} from 'firebase/database';

const Profile = ({navigation, route}) => {
  const {uid} = route.params;
  const [user, setUser] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const userRef = ref(db, 'users/' + uid);
    onValue(userRef, snapshot => {
      const data = snapshot.val();
      setUser(data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <View style={styles.out}>
          <Text style={styles.title}>Profile</Text>
          <LogOut onPress={() => navigation.navigate('LoginPage')} />
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.profileWrapper}>
            <TouchableOpacity activeOpacity={0.5}>
              <Image source={Profil} style={styles.avatar} />
            </TouchableOpacity>
          </View>
        </View>
        <Gap height={20} />
        <View style={styles.data}>
          <Text style={styles.nama}>{user.fullName}</Text>
          <Text style={styles.jurusan}>{user.jurusan}</Text>
        </View>
        <Gap height={30} />
      </View>
      <View style={styles.boxprofil}>
        <View>
          <Text style={styles.subprofil}>NIM</Text>
          <Text style={styles.supersub}>{user.nim}</Text>
          <View style={styles.garis} />
        </View>
        <Gap height={13} />
        <View>
          <Text style={styles.subprofil}>Reg. Number</Text>
          <Text style={styles.supersub}>{user.regis}</Text>
          <View style={styles.garis} />
        </View>
        <Gap height={13} />
        <View>
          <Text style={styles.subprofil}>Email</Text>
          <Text style={styles.supersub}>{user.email}</Text>
          <View style={styles.garis} />
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxContainer: {
    flexDirection: 'column',
    //alignItems: 'center',
    backgroundColor: '#796890',
    height: 333,
    paddingTop: 20,
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom: 15,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  out: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: '#000000',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 29,
  },
  profileWrapper: {
    height: 110,
    width: 110,
    borderWidth: 1,
    borderStyle: 'dotted',
    borderRadius: 110 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  avatar: {
    backgroundColor: 'grey',
    height: 90,
    width: 90,
    borderRadius: 90 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  data: {
    alignItems: 'center',
  },
  nama: {
    fontFamily: 'Poppins-Medium',
    fontSize: 30,
    color: '#FFFFFF',
  },
  jurusan: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: '#FFFFFF',
  },
  garis: {
    borderBottomWidth: 1,
    color: '#000000',
    marginTop: 18,
  },
  boxprofil: {
    padding: 15,
  },
  subprofil: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#000000',
  },
  supersub: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: '#000000',
  },
});
