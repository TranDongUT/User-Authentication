import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';

// style
import { Colors } from '../../constants/styles';

export default function Input({ label, inputConfig, style, isInvalid }) {
  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, isInvalid && styles.labelIsInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputIsInvalid]}
        {...inputConfig}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },

  label: {
    color: Colors.primary100,
    fontSize: 16,
    marginBottom: 4,
  },

  labelIsInvalid: {
    color: Colors.error500,
  },

  input: {
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 6,
    fontSize: 16,
    backgroundColor: Colors.primary100,
  },

  inputIsInvalid: {
    backgroundColor: Colors.error100,
  },
});
