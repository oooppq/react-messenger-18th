import styled from 'styled-components';
import { TMessage } from 'types';
import { ReactComponent as HeartIcon } from 'static/images/heart-icon.svg';
import { ReactComponent as DefaultProfileIcon } from 'static/images/default-profile-icon.svg';
import { convertDayDateFormat, convertTimeFormat } from 'utils';

interface EachMessageProps {
  message: TMessage & { profileImage?: string };
  isOwnMessage: boolean;
  isNextDay: boolean;
  handleDoubleClickMessage: () => void;
}

const EachMessage = ({
  message,
  isOwnMessage,
  isNextDay,
  handleDoubleClickMessage,
}: EachMessageProps) => {
  // 나와 상대방을 구분하여 display하도록 order를 정한 후, flex를 통해 나열
  const orders = isOwnMessage ? [1, 0] : [0, 1];

  return (
    <EachMessageContainer>
      {isNextDay && (
        <DayDateContainer>
          {convertDayDateFormat(message.time)}
        </DayDateContainer>
      )}
      <MessageBody $isOwnMessage={isOwnMessage}>
        <div className="profile-image-outer">
          {!isOwnMessage &&
            (message.profileImage ? (
              <img src={message.profileImage} alt="profile" />
            ) : (
              <DefaultProfileIcon />
            ))}
        </div>

        <TextAndLikeOuter $order={orders[0]} $isOwnMessage={isOwnMessage}>
          <MessageText
            $isOwnMessage={isOwnMessage}
            onDoubleClick={handleDoubleClickMessage}
          >
            {message.text}
          </MessageText>
          {message.likeCount > 0 && (
            <LikeContainer>
              <HeartIcon />
              <div className="like-count">{message.likeCount}</div>
            </LikeContainer>
          )}
        </TextAndLikeOuter>

        <MessageExtraInfo $order={orders[1]} $isLiked={message.likeCount > 0}>
          {isOwnMessage && message.isRead && <div className="">Read</div>}
          <div className="">{convertTimeFormat(message.time)}</div>
        </MessageExtraInfo>
      </MessageBody>
    </EachMessageContainer>
  );
};

export default EachMessage;

// ############### 디자인 ###############

const EachMessageContainer = styled.div`
  margin-bottom: 8px;
`;

const MessageBody = styled.div<{ $isOwnMessage: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.$isOwnMessage ? 'end' : 'start')};
  .profile-image-outer {
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 11px;
    img,
    svg {
      width: 100%;
      object-fit: cover;
    }
  }
`;

const TextAndLikeOuter = styled.div<{ $order: number; $isOwnMessage: boolean }>`
  order: ${(props) => props.$order};
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.$isOwnMessage ? 'end' : 'start')};
`;

const MessageText = styled.div<{ $isOwnMessage: boolean }>`
  border-radius: 16px;
  background-color: ${(props) =>
    props.$isOwnMessage ? 'var(--Green)' : 'white'};
  padding: 8px 12px;
  font-size: 14px;
  line-height: 160%;
  max-width: 244px;
  word-break: break-all;
  white-space: break-spaces;
`;

const MessageExtraInfo = styled.div<{ $order: number; $isLiked: boolean }>`
  order: ${(props) => props.$order};
  margin: auto 10px 0 10px;
  margin-bottom: ${(props) => (props.$isLiked ? '31px' : '3px')};
  font-size: 10px;
  font-weight: 300;
  line-height: 160%;
  color: var(--Gray-3);
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const LikeContainer = styled.div`
  width: 40px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background-color: var(--gray-30);
  margin: 6px 0 2px 0;
  svg {
    margin-right: 3px;
  }
  .like-count {
    margin-left: 3px;
    font-size: 12px;
    font-weight: 300;
    line-height: 120%;
    color: white;
  }
`;

const DayDateContainer = styled.div`
  width: fit-content;
  margin: 4px 0 12px 0;
  margin-left: 50%;
  transform: translate(-50%, 0%);
  padding: 3px 8px;

  height: 20px;
  border-radius: 16px;
  background-color: var(--gray-30);
  font-size: 12px;
  font-weight: 300;
  line-height: 120%;
  color: white;
`;
