import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Fonts} from '@constants/Fonts';
import {Colors} from '@constants/Colors';
import {scale} from '@utils/Scale';
import {push} from '@helpers/NavigatorHelper';
import {NavRoutes} from '@constants/NavRoutes';

interface ChatCardProps {
  profilePic: string;
  name: string;
  message: string;
  time: string;
}

const ChatCard: React.FC<ChatCardProps> = ({
  profilePic = 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?w=826&t=st=1710440791~exp=1710441391~hmac=0ed20d967c19ed8947d89ac5f74558579582a23d376835588c49ab54a24182e6',
  name = 'Marvin McKinney',
  message = 'Got it',
  time = 'December, 2019',
}) => {
  const onPressChatCard = () => {
    push(NavRoutes.ChatScreen);
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPressChatCard}>
      <Image source={{uri: profilePic}} style={styles.avatar} />
      <View style={styles.messageContainer}>
        <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
          {name}
        </Text>
        <Text style={styles.message} numberOfLines={1} ellipsizeMode="tail">
          {message}
        </Text>
      </View>
      <View>
        <Text style={styles.time}>{time}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: scale(15),
  },
  avatar: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(50),
    marginRight: scale(10),
  },
  messageContainer: {
    flex: 1,
    marginRight: scale(10),
  },
  name: {
    fontFamily: Fonts.SfProBold,
    fontSize: scale(15),
    color: Colors.textColorBold,
    marginBottom: scale(4),
  },
  message: {
    fontFamily: Fonts.SfProSemiBold,
    fontSize: scale(12),
    lineHeight: scale(17),
    color: Colors.textColorSemiBold,
  },
  time: {
    fontFamily: Fonts.SfProSemiBold,
    fontSize: scale(12),
    lineHeight: scale(17),
    color: Colors.textColorSemiBold,
  },
});

export default ChatCard;
