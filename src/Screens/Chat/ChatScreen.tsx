import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import ChatInput from '@components/Chat/ChatInput';
import ChatMessageCard from '@components/Chat/ChatMessageCard';
import {scale} from '@utils/Scale';

const ChatScreen: React.FC = () => {
  const chats = {
    chatId: 'chat123',
    messages: [
      {
        messageId: 'msg001',
        senderId: 'user456',
        content: 'Hey!',
        timestamp: '2024-03-15T12:00:00Z',
      },
      {
        messageId: 'msg002',
        senderId: 'user123',
        content: 'Hi!',
        timestamp: '2024-03-16T08:00:00Z',
      },
      {
        messageId: 'msg003',
        senderId: 'user456',
        content: 'How are you?',
        timestamp: '2024-03-16T09:00:00Z',
      },
      {
        messageId: 'msg004',
        senderId: 'user123',
        content: "I'm good, thanks!",
        timestamp: '2024-03-16T10:00:00Z',
      },
      {
        messageId: 'msg005',
        senderId: 'user456',
        content: "That's great!",
        timestamp: '2024-03-16T11:00:00Z',
      },
      {
        messageId: 'msg006',
        senderId: 'user123',
        content: 'What have you been up to?',
        timestamp: '2024-03-16T12:00:00Z',
      },
      {
        messageId: 'msg007',
        senderId: 'user456',
        content: 'Just working on some projects.',
        timestamp: '2024-03-16T13:00:00Z',
      },
      {
        messageId: 'msg008',
        senderId: 'user123',
        content: 'Sounds interesting!',
        timestamp: '2024-03-16T14:00:00Z',
      },
      {
        messageId: 'msg009',
        senderId: 'user456',
        content: 'Yes, it is.',
        timestamp: '2024-03-16T15:00:00Z',
      },
      {
        messageId: 'msg010',
        senderId: 'user123',
        content: 'Goodbye!',
        timestamp: '2024-03-16T16:00:00Z',
      },
      {
        messageId: 'msg011',
        senderId: 'user456',
        content: 'See you later!',
        timestamp: '2024-03-16T17:00:00Z',
      },
      {
        messageId: 'msg012',
        senderId: 'user123',
        content: 'Bye!',
        timestamp: '2024-03-16T18:00:00Z',
      },
      {
        messageId: 'msg013',
        senderId: 'user456',
        content: 'Take care!',
        timestamp: '2024-03-16T19:00:00Z',
      },
      {
        messageId: 'msg014',
        senderId: 'user123',
        content: 'You too!',
        timestamp: '2024-03-16T20:00:00Z',
      },
      {
        messageId: 'msg015',
        senderId: 'user456',
        content: 'Goodbye!',
        timestamp: '2024-03-16T21:00:00Z',
      },
      {
        messageId: 'msg016',
        senderId: 'user123',
        content: 'See you soon!',
        timestamp: '2024-03-16T22:00:00Z',
      },
      {
        messageId: 'msg017',
        senderId: 'user456',
        content: 'Bye!',
        timestamp: '2024-03-16T23:00:00Z',
      },
      {
        messageId: 'msg018',
        senderId: 'user123',
        content: 'Take care!',
        timestamp: '2024-03-17T00:00:00Z',
      },
      {
        messageId: 'msg019',
        senderId: 'user456',
        content: 'You too!',
        timestamp: '2024-03-17T01:00:00Z',
      },
      {
        messageId: 'msg020',
        senderId: 'user123',
        content: 'Goodbye!',
        timestamp: '2024-03-17T02:00:00Z',
      },
    ],
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={chats.messages}
          renderItem={({item}) => (
            <ChatMessageCard
              messageId={item.messageId}
              senderId={item.senderId}
              content={item.content}
              timestamp={item.timestamp}
              isCurrentUser={item.senderId === 'user123'}
            />
          )}
          keyExtractor={item => item.messageId}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <ChatInput />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(20),
  },
});

export default ChatScreen;
