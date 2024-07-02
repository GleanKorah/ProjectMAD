import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({
  label,
  backgroundColor = '#FFFFFF',
  textColor = '#000000',
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.container(backgroundColor)}
      activeOpacity={0.5}
      onPress={onPress}>
      <Text style={styles.label(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: backgroundColor => ({
    backgroundColor: backgroundColor,
    paddingVertical: 5,
    borderRadius: 25,
    width: 200,
    borderWidth: 1,
  }),
  label: textColor => ({
    color: textColor,
    fontFamily: 'Poppins-Medium',
    fontSize: 21,
    textAlign: 'center',
  }),
});
