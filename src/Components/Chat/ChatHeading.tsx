import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale} from '@utils/Scale';
import {Fonts} from '@constants/Fonts';
import {Colors} from '@constants/Colors';

//TODO: Remove optional parameters for chat heading
interface ChatHeadingProps {
  profilePic?: string;
  greeting?: string;
  name?: string;
}

const ChatHeading: React.FC<ChatHeadingProps> = ({
  profilePic = 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?w=826&t=st=1710440791~exp=1710441391~hmac=0ed20d967c19ed8947d89ac5f74558579582a23d376835588c49ab54a24182e6',
  greeting = 'Good morning',
  name = 'Alex bender',
}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: profilePic}} style={styles.avatar} />
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting} numberOfLines={1} ellipsizeMode="tail">
          {greeting}
        </Text>
        <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
          {name}
        </Text>
      </View>
      <View style={styles.ctaContainer}>
        <TouchableOpacity style={styles.searchContainer}>
          <Image
            source={require('@assets/Icons/search.png')}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addContainer}>
          <Image
            source={require('@assets/Icons/add.png')}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(20),
    paddingVertical: scale(10),
    marginTop: scale(10),
    borderBlockColor: Colors.gray_40,
    borderBottomWidth: 0.2,
  },
  avatar: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(40),
    marginRight: scale(10),
  },
  greetingContainer: {
    flex: 1,
    marginRight: scale(10),
  },
  greeting: {
    fontFamily: Fonts.SfProBold,
    fontSize: scale(12),
    lineHeight: scale(17),
    color: Colors.textColorSemiBold,
  },
  name: {
    fontFamily: Fonts.SfProHeavy,
    fontSize: scale(20),
    lineHeight: scale(28),
    color: Colors.textColorBold,
  },
  ctaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    width: scale(35),
    height: scale(35),
    borderRadius: scale(35),
    backgroundColor: Colors.pink,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    resizeMode: 'contain',
    height: scale(18),
  },
  addContainer: {
    width: scale(35),
    height: scale(35),
    borderRadius: scale(35),
    backgroundColor: Colors.blue,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scale(10),
  },
  addIcon: {
    resizeMode: 'contain',
    height: scale(14),
  },
});

export default ChatHeading;
