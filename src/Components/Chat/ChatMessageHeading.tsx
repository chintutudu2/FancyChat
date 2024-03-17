import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale} from '@utils/Scale';
import {Fonts} from '@constants/Fonts';
import {Colors} from '@constants/Colors';
import {pop} from '@helpers/NavigatorHelper';

//TODO: Remove optional parameters for chat heading
interface ChatMessageHeadingProps {
  profilePic?: string;
  myProfilePic?: string;
}

const ChatMessageHeading: React.FC<ChatMessageHeadingProps> = ({
  profilePic = 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671132.jpg?w=826&t=st=1710682507~exp=1710683107~hmac=62c1328f2a0908948defb473bb470d08e2a8b5ab1972df507a548724d0938498',
  myProfilePic = 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg?w=826&t=st=1710440791~exp=1710441391~hmac=0ed20d967c19ed8947d89ac5f74558579582a23d376835588c49ab54a24182e6',
}) => {
  const onPressback = () => {
    pop();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backContainer} onPress={onPressback}>
        <Image source={require('@assets/Icons/back.png')} style={styles.back} />
      </TouchableOpacity>
      <View style={styles.avatarContainer}>
        <Image source={{uri: profilePic}} style={styles.avatar} />
        <Image source={{uri: myProfilePic}} style={styles.myAvatar} />
      </View>
      <View style={styles.ctaContainer}>
        <TouchableOpacity style={styles.videoCallContainer}>
          <Image
            source={require('@assets/Icons/video.png')}
            style={styles.videoIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.audioCallContainer}>
          <Image
            source={require('@assets/Icons/phone.png')}
            style={styles.phoneIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: scale(80),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(20),
    borderBlockColor: Colors.gray_40,
    borderBottomWidth: 0.2,
    backgroundColor: Colors.white,
  },
  backContainer: {
    height: scale(35),
    width: scale(35),
    justifyContent: 'center',
  },
  back: {
    height: scale(20),
    width: undefined,
    aspectRatio: 1,
  },
  avatarContainer: {
    flexDirection: 'row',
  },
  avatar: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(40),
    top: -scale(10),
    right: -scale(5),
  },
  myAvatar: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(40),
    top: scale(10),
    right: scale(5),
    zIndex: -1,
  },
  ctaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  videoCallContainer: {
    width: scale(35),
    height: scale(35),
    borderRadius: scale(35),
    backgroundColor: Colors.pink,
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoIcon: {
    resizeMode: 'contain',
    height: scale(18),
  },
  audioCallContainer: {
    width: scale(35),
    height: scale(35),
    borderRadius: scale(35),
    backgroundColor: Colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scale(10),
  },
  phoneIcon: {
    resizeMode: 'contain',
    height: scale(18),
  },
});

export default ChatMessageHeading;
