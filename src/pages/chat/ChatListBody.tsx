import ChatListElement from 'pages/chat/ChatListElement';
import { useMessageStore } from 'stores/messageStore';
import { useUserStore } from 'stores/userStore';
import styled from 'styled-components';
import { getLastMessages } from 'utils';
import userData from 'data/userData.json';
import { include } from 'utils/search';

interface ChatListBodyProps {
  query: string;
}

const ChatListBody = ({ query }: ChatListBodyProps) => {
  const user = useUserStore((state) => state.user);
  const messages = useMessageStore((state) => state.messages);
  // 각 유저와의 마지막 메시지
  const lastMessages = getLastMessages(user.id, messages);

  return (
    <ChatListBodyContainer>
      {lastMessages.map((message) => {
        // 해당 대화의 상대방 찾기
        const opponentId =
          user.id === message.fromUserId
            ? message.toUserId
            : message.fromUserId;
        const storedOpponent = localStorage.getItem(`user_${opponentId}`);
        const opponentUser = storedOpponent
          ? JSON.parse(storedOpponent)
          : userData.data.find((userToCheck) => userToCheck.id === opponentId)!;
        //만약 검색어가 있다면 검색어에 해당하는 채팅방만 display
        if (!include(opponentUser.name, query)) return null;
        return (
          <ChatListElement
            key={`${message.time}${message.id}`}
            chatRoomInfo={{
              id: opponentId,
              profileImage: opponentUser.profileImage,
              userName: opponentUser.name,
              message: message.text,
              time: message.time,
            }}
          />
        );
      })}
    </ChatListBodyContainer>
  );
};

const ChatListBodyContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`;
export default ChatListBody;
