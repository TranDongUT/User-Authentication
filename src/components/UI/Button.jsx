import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

// style
import { Colors } from '../../constants/styles';

export default function Button({ children, onPress, style, flat }) {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.buttonContainer, flat && styles.flatButton]}>
          <Text style={[styles.text, flat && styles.flatText]}>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: Colors.primary500,
    elevation: 4,
    shadowColor: '#333',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },

  flatButton: {
    backgroundColor: 'transparent',
  },

  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },

  flatText: {
    fontSize: 14,
    color: Colors.primary100,
    fontWeight: 'normal',
  },

  pressed: {
    opacity: 0.75,
  },
});
