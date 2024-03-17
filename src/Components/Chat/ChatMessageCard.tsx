import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from '@utils/Scale';
import {Colors} from '@constants/Colors';
import {Fonts} from '@constants/Fonts';
import {formatMessageTime} from '@utils/Time';

interface ChatMessageCardProps {
  messageId: string;
  senderId: string;
  content: string;
  timestamp: string;
  isCurrentUser: boolean;
}

const ChatMessageCard: React.FC<ChatMessageCardProps> = ({
  messageId,
  senderId,
  content,
  timestamp,
  isCurrentUser,
}) => {
  const currentUser = {
    avatar:
      'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671132.jpg?w=826&t=st=1710682507~exp=1710683107~hmac=62c1328f2a0908948defb473bb470d08e2a8b5ab1972df507a548724d0938498',
    userName: 'Alex Bender',
  };
  const otherUser = {
    avatar:
      'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?w=826&t=st=1710440791~exp=1710441391~hmac=0ed20d967c19ed8947d89ac5f74558579582a23d376835588c49ab54a24182e6',
    userName: 'Arlene McCoy',
  };

  return (
    <View
      style={[
        styles.container,
        isCurrentUser ? styles.currentUserContainer : styles.otherUserContainer,
      ]}>
      <View style={styles.messageContainer}>
        <Text
          style={[styles.message, !isCurrentUser ? styles.otherMessage : {}]}>
          {content}
        </Text>
      </View>
      <Text style={styles.time}>{formatMessageTime(timestamp)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: scale(5),
    paddingHorizontal: scale(10),
    paddingVertical: scale(5),
    borderRadius: scale(12),
    minWidth: scale(80),
    maxWidth: '80%',
  },
  currentUserContainer: {
    alignSelf: 'flex-end',
    backgroundColor: Colors.pink,
  },
  otherUserContainer: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.white,
  },
  messageContainer: {
    marginBottom: scale(2),
  },
  message: {
    fontFamily: Fonts.SFProRegular,
    fontSize: scale(16),
    color: Colors.white,
  },
  otherMessage: {
    color: Colors.textColorSemiBold,
  },
  time: {
    fontFamily: Fonts.SFProRegular,
    fontSize: scale(10),
    color: Colors.textColorSemiBold,
    alignSelf: 'flex-end',
  },
});

export default ChatMessageCard;
