import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ChatCard} from '@components/index';
import {scale} from '@utils/Scale';

interface ChatData {
  id: string;
  image: string;
  firstName: string;
  university: string;
  birthDate: string;
}

const Chat: React.FC<ChatData> = () => {
  const [users, setUsers] = useState<ChatData[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(json => setUsers(json?.users));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <ChatCard
            profilePic={item.image}
            name={item.firstName}
            message={item.university}
            time={item.birthDate}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(5),
  },
});

export default Chat;
