import { useEffect, useState } from 'react';
import styled from 'styled-components';
import NewChatHeader from 'pages/newChat/NewChatHeader';
import NewChatBody from 'pages/newChat/NewChatBody';
import { ClipLoader } from 'react-spinners';

const NewChat = () => {
  const [query, setQuery] = useState<string>(''); // 검색어
  const [selected, setSelected] = useState<number | null>(null); // 선택된 유저
  const [isLoading, setIsLoading] = useState<boolean>(false); // 로딩 flag

  // 탐색중 효과(그냥 기분만 내봄)
  useEffect(() => {
    if (query) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 700);
    }
  }, [query]);

  return (
    <NewChatContainer>
      <NewChatHeader
        query={query}
        selected={selected}
        handleChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      {isLoading ? (
        <ClipLoader
          size={40}
          cssOverride={{
            display: 'flex',
            margin: '0 auto',
            marginTop: '30px',
            textAlign: 'center',
          }}
        />
      ) : (
        <NewChatBody
          query={query}
          selected={selected}
          setSelected={setSelected}
        />
      )}
    </NewChatContainer>
  );
};

const NewChatContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px 12px 0 12px;
  background-color: var(--Background-White);
`;

export default NewChat;
