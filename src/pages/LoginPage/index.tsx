import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {BG} from '../../assets/icons';
import Button from '../../components/atoms/Button';
import {Gap} from '../../components/atoms';
import TextInput from '../../components/moleculs/TextInput';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import {showMessage} from 'react-native-flash-message';

const LoginPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigation.navigate('Profile', {uid: user.uid});
      })
      .catch(error => {
        const errorMessage = error.message;
        showMessage({
          message: errorMessage,
          type: 'danger',
        });
      });
  };

  return (
    <ImageBackground source={BG} style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>FILKOM UNKLAB</Text>
        <View>
          <TextInput
            label="Email address"
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
          <Button label="Log In" textColor="#000000" onPress={onSubmit} />
          <Gap height={6} />
          <Button
            label="Back"
            onPress={() => navigation.navigate('ChoosePage')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginPage;

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
    marginTop: 40,
    opacity: 0.8,
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#FFFFFF',
    marginTop: 238,
    paddingTop: 20,
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom: 15,
    borderRadius: 15,
    opacity: 0.8,
    width: '80%',
  },
});
