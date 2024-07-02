import {ImageBackground, StyleSheet, View} from 'react-native';
import React from 'react';
import {BG} from '../../assets/icons';
import Button from '../../components/atoms/Button';
import {Gap} from '../../components/atoms';

const ChoosePage = ({navigation}) => {
  return (
    <ImageBackground source={BG} style={styles.container}>
      <View style={styles.btn}>
        <Button
          label="Login"
          textColor="#000000"
          onPress={() => navigation.navigate('LoginPage')}
        />
        <Gap height={6} />
        <Button
          label="SignUp"
          onPress={() => navigation.navigate('SignUpPage')}
        />
      </View>
    </ImageBackground>
  );
};

export default ChoosePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  btn: {
    marginTop: 507,
    opacity: 0.8,
  },
});
