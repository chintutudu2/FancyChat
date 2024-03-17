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
        senderId: 'user123',
        content: 'Hello!',
        timestamp: '2023-12-14T10:00:00Z',
      },
      {
        messageId: 'msg002',
        senderId: 'user456',
        content: 'Hi there!',
        timestamp: '2023-12-14T10:05:00Z',
      },
      {
        messageId: 'msg003',
        senderId: 'user123',
        content: 'How are you?',
        timestamp: '2023-12-14T10:10:00Z',
      },
      {
        messageId: 'msg004',
        senderId: 'user456',
        content: "I'm good, thanks! How about you?",
        timestamp: '2023-12-14T10:15:00Z',
      },
      {
        messageId: 'msg005',
        senderId: 'user123',
        content: "I'm doing well too.",
        timestamp: '2023-12-14T10:20:00Z',
      },
      {
        messageId: 'msg006',
        senderId: 'user456',
        content: "That's great to hear!",
        timestamp: '2023-12-14T10:25:00Z',
      },
      {
        messageId: 'msg007',
        senderId: 'user123',
        content: 'Indeed!',
        timestamp: '2023-12-14T10:30:00Z',
      },
      {
        messageId: 'msg008',
        senderId: 'user456',
        content: "So, what's new?",
        timestamp: '2023-12-14T10:35:00Z',
      },
      {
        messageId: 'msg009',
        senderId: 'user123',
        content: 'Not much, just busy with work.',
        timestamp: '2023-12-14T10:40:00Z',
      },
      {
        messageId: 'msg010',
        senderId: 'user456',
        content: 'I understand. Work can be demanding sometimes.',
        timestamp: '2023-12-14T10:45:00Z',
      },
      {
        messageId: 'msg011',
        senderId: 'user123',
        content: 'Yeah, exactly!',
        timestamp: '2023-12-14T10:50:00Z',
      },
      {
        messageId: 'msg012',
        senderId: 'user456',
        content: 'Do you have any plans for the weekend?',
        timestamp: '2023-12-14T10:55:00Z',
      },
      {
        messageId: 'msg013',
        senderId: 'user123',
        content: 'Not really. Probably just relaxing at home.',
        timestamp: '2023-12-14T11:00:00Z',
      },
      {
        messageId: 'msg014',
        senderId: 'user456',
        content: "Sounds nice. Sometimes, it's good to have some downtime.",
        timestamp: '2023-12-14T11:05:00Z',
      },
      {
        messageId: 'msg015',
        senderId: 'user123',
        content: 'Definitely!',
        timestamp: '2023-12-14T11:10:00Z',
      },
      {
        messageId: 'msg016',
        senderId: 'user456',
        content: 'Anyway, I have to go now. Talk to you later!',
        timestamp: '2023-12-14T11:15:00Z',
      },
      {
        messageId: 'msg017',
        senderId: 'user123',
        content: 'Sure, take care!',
        timestamp: '2023-12-14T11:20:00Z',
      },
      {
        messageId: 'msg018',
        senderId: 'user456',
        content: 'You too!',
        timestamp: '2023-12-14T11:25:00Z',
      },
      {
        messageId: 'msg019',
        senderId: 'user123',
        content: 'Bye!',
        timestamp: '2023-12-14T11:30:00Z',
      },
      {
        messageId: 'msg020',
        senderId: 'user456',
        content: 'Goodbye!',
        timestamp: '2023-12-14T11:35:00Z',
      },
      {
        messageId: 'msg021',
        senderId: 'user123',
        content: 'See you!',
        timestamp: '2023-12-14T11:40:00Z',
      },
      {
        messageId: 'msg022',
        senderId: 'user456',
        content: 'Take care!',
        timestamp: '2023-12-14T11:45:00Z',
      },
      {
        messageId: 'msg023',
        senderId: 'user123',
        content: 'You too!',
        timestamp: '2023-12-14T11:50:00Z',
      },
      {
        messageId: 'msg024',
        senderId: 'user456',
        content: 'Thanks!',
        timestamp: '2023-12-14T11:55:00Z',
      },
      {
        messageId: 'msg025',
        senderId: 'user123',
        content: 'No problem!',
        timestamp: '2023-12-14T12:00:00Z',
      },
      {
        messageId: 'msg026',
        senderId: 'user456',
        content: 'Bye!',
        timestamp: '2023-12-14T12:05:00Z',
      },
      {
        messageId: 'msg027',
        senderId: 'user123',
        content: 'Goodbye!',
        timestamp: '2023-12-14T12:10:00Z',
      },
      {
        messageId: 'msg028',
        senderId: 'user456',
        content: 'See you!',
        timestamp: '2023-12-14T12:15:00Z',
      },
      {
        messageId: 'msg029',
        senderId: 'user123',
        content: 'Take care!',
        timestamp: '2023-12-14T12:20:00Z',
      },
      {
        messageId: 'msg030',
        senderId: 'user456',
        content: 'You too!',
        timestamp: '2023-12-14T12:25:00Z',
      },
      {
        messageId: 'msg031',
        senderId: 'user123',
        content: 'Thanks!',
        timestamp: '2023-12-14T12:30:00Z',
      },
      {
        messageId: 'msg032',
        senderId: 'user456',
        content: 'No problem!',
        timestamp: '2023-12-14T12:35:00Z',
      },
      {
        messageId: 'msg033',
        senderId: 'user123',
        content: 'Hey!',
        timestamp: '2023-12-14T12:40:00Z',
      },
      {
        messageId: 'msg034',
        senderId: 'user456',
        content: 'Hi!',
        timestamp: '2023-12-14T12:45:00Z',
      },
      {
        messageId: 'msg035',
        senderId: 'user123',
        content: "What's up?",
        timestamp: '2023-12-14T12:50:00Z',
      },
      {
        messageId: 'msg036',
        senderId: 'user456',
        content: 'Not much, just chilling.',
        timestamp: '2023-12-14T12:55:00Z',
      },
      {
        messageId: 'msg037',
        senderId: 'user123',
        content: 'Cool!',
        timestamp: '2023-12-14T13:00:00Z',
      },
      {
        messageId: 'msg038',
        senderId: 'user456',
        content: 'Yeah!',
        timestamp: '2023-12-14T13:05:00Z',
      },
      {
        messageId: 'msg039',
        senderId: 'user123',
        content: "So, what's new?",
        timestamp: '2023-12-14T13:10:00Z',
      },
      {
        messageId: 'msg040',
        senderId: 'user456',
        content: 'Nothing much, just the usual.',
        timestamp: '2023-12-14T13:15:00Z',
      },
      {
        messageId: 'msg041',
        senderId: 'user123',
        content: 'I see.',
        timestamp: '2023-12-14T13:20:00Z',
      },
      {
        messageId: 'msg042',
        senderId: 'user456',
        content: 'Yeah.',
        timestamp: '2023-12-14T13:25:00Z',
      },
      {
        messageId: 'msg043',
        senderId: 'user123',
        content: 'Anyway, gotta go now.',
        timestamp: '2023-12-14T13:30:00Z',
      },
      {
        messageId: 'msg044',
        senderId: 'user456',
        content: 'Sure, talk to you later!',
        timestamp: '2023-12-14T13:35:00Z',
      },
      {
        messageId: 'msg045',
        senderId: 'user123',
        content: 'Bye!',
        timestamp: '2023-12-14T13:40:00Z',
      },
      {
        messageId: 'msg046',
        senderId: 'user456',
        content: 'Goodbye!',
        timestamp: '2023-12-14T13:45:00Z',
      },
      {
        messageId: 'msg047',
        senderId: 'user123',
        content: 'See you!',
        timestamp: '2023-12-14T13:50:00Z',
      },
      {
        messageId: 'msg048',
        senderId: 'user456',
        content: 'Take care!',
        timestamp: '2023-12-14T13:55:00Z',
      },
      {
        messageId: 'msg049',
        senderId: 'user123',
        content: 'You too!',
        timestamp: '2023-12-14T14:00:00Z',
      },
      {
        messageId: 'msg050',
        senderId: 'user456',
        content: 'Thanks!',
        timestamp: '2023-12-14T14:05:00Z',
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
