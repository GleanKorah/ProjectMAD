import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {BG} from '../../assets/icons';
import Button from '../../components/atoms/Button';
import {Gap} from '../../components/atoms';
import TextInput from '../../components/moleculs/TextInput';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {getDatabase, ref, set} from 'firebase/database';
import {showMessage} from 'react-native-flash-message';

const SignUpPage = ({navigation}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nim, setNIM] = useState('');
  const [regis, setRegis] = useState('');
  const [jurusan, setJurusan] = useState('');

  const onSubmit = () => {
    const data = {
      fullName: fullName,
      email: email,
      nim: nim,
      regis: regis,
      jurusan: jurusan,
    };

    const auth = getAuth();
    const db = getDatabase();
    createUserWithEmailAndPassword(auth, email, password, nim, regis, jurusan)
      .then(userCredential => {
        //signup
        const user = userCredential.user;
        showMessage({
          message: 'Registrasi berhasil',
          type: 'success',
        });
        //Simpan ke database
        const data = {
          uid: user.uid,
          fullName: fullName,
          email: email,
          nim: nim,
          regis: regis,
          jurusan: jurusan,
        };
        set(ref(db, 'users/' + data.uid), data);
        navigation.navigate('LoginPage');
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        showMessage({
          message: error.message,
          type: 'danger',
        });
      });
  };

  return (
    <ImageBackground source={BG} style={styles.container}>
      <ScrollView style={styles.box}>
        <Text style={styles.title}>FILKOM UNKLAB</Text>
        <View>
          <TextInput
            label="Nama Lengkap"
            placeholder="Masukkan nama lengkap anda"
            onChangeText={value => setFullName(value)}
          />
          <TextInput
            label="NIM"
            placeholder="Masukan NIM anda"
            onChangeText={value => setNIM(value)}
          />
          <TextInput
            label="Reg. Number"
            placeholder="Masukan nomor registrasi anda"
            onChangeText={value => setRegis(value)}
          />
          <TextInput
            label="Jurusan"
            placeholder="Masukan Jurusan anda"
            onChangeText={value => setJurusan(value)}
          />
          <TextInput
            label="Email"
            placeholder="Masukan email anda"
            onChangeText={value => setEmail(value)}
          />
          <TextInput
            label="Password"
            placeholder="Masukan password anda"
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.btn}>
          <Button
            label="Continue"
            textColor="#000000"
            onPress={onSubmit}
            // onPress={() => navigation.navigate('LoginPage')}
          />
          <Gap height={6} />
          <Button
            label="Back"
            // onPress={onSubmit}
            onPress={() => navigation.navigate('ChoosePage')}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 26,
    color: '#000000',
  },
  btn: {
    marginTop: 30,
    opacity: 0.8,
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#FFFFFF',
    marginTop: 60,
    paddingTop: 20,
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom: 15,
    borderRadius: 15,
    opacity: 0.8,
    width: '80%',
  },
});
