import {StyleSheet, View} from 'react-native';
import React from 'react';
import ChatInput from '@components/Chat/ChatInput';

const ChatScreen: React.FC = () => {
  return (
    <>
      <View style={styles.container}></View>
      <ChatInput />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatScreen;
