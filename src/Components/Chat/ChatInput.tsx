import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '@constants/Colors';
import {scale} from '@utils/Scale';

const ChatInput: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Type something" />
      <TouchableOpacity>
        <Image source={require('@assets/Icons/send.png')} style={styles.send} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
    paddingTop: scale(15),
    backgroundColor: Colors.white,
    borderTopColor: Colors.gray_40,
    borderTopWidth: 0.2,
  },
  input: {
    flex: 1,
    backgroundColor: Colors.textColorSemiBold_10,
    padding: scale(15),
    marginRight: scale(10),
    borderRadius: scale(100),
  },
  send: {
    height: scale(35),
    width: undefined,
    aspectRatio: 1,
  },
});

export default ChatInput;
