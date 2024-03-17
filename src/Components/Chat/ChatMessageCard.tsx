import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scale} from '@utils/Scale';
import {Colors} from '@constants/Colors';
import {Fonts} from '@constants/Fonts';

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
      <View style={styles.userContainer}>
        <Image
          source={{uri: isCurrentUser ? currentUser.avatar : otherUser.avatar}}
          style={styles.avatar}
        />
        <Text style={[styles.user, !isCurrentUser ? styles.otherUser : {}]}>
          {isCurrentUser ? currentUser.userName : otherUser.userName}
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <Text
          style={[styles.content, !isCurrentUser ? styles.otherContent : {}]}>
          {content}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: scale(5),
    paddingHorizontal: scale(18),
    paddingVertical: scale(9),
    borderRadius: scale(12),
  },
  currentUserContainer: {
    alignSelf: 'flex-end',
    backgroundColor: Colors.pink,
  },
  otherUserContainer: {
    alignSelf: 'flex-start',
    backgroundColor: Colors.white,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: scale(25),
    height: scale(25),
    borderRadius: scale(25),
    marginRight: scale(5),
  },
  user: {
    fontFamily: Fonts.SFProMedium,
    fontSize: scale(16),
    color: Colors.white,
  },
  otherUser: {
    color: Colors.textColorBold,
  },
  contentContainer: {
    marginTop: scale(4),
  },
  content: {
    fontFamily: Fonts.SFProRegular,
    fontSize: scale(16),
    color: Colors.white,
  },
  otherContent: {
    color: Colors.textColorSemiBold,
  },
});

export default ChatMessageCard;
