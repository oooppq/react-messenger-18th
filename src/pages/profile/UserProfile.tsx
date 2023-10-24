import styled from 'styled-components';
import { ReactComponent as DefaultProfileIcon } from 'static/images/default-profile-icon.svg';

const UserProfile = () => {
  return (
    <UserProfileContainer>
      <ProfileImageConatiner>
        <DefaultProfileIcon />
      </ProfileImageConatiner>
      <div className="username">배수연</div>
      <div className="status-message">상태메시지</div>
    </UserProfileContainer>
  );
};
const UserProfileContainer = styled.div`
  margin-top: 66px;
  margin-bottom: 8px;
  width: 100%;
  padding: 0 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .username {
    margin-top: 20px;
    font-size: 20px;
    font-weight: 600;
    line-height: 160%;
  }
  .status-message {
    text-align: center;
    padding-bottom: 12px;
    width: 100%;
    margin-top: 4px;
    color: var(--Gray-2);
    font-size: 14px;
    line-height: 160%;
    border-bottom: 1px solid var(--Gray-2);
  }
`;

const ProfileImageConatiner = styled.div`
  width: 108px;
  height: 108px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  overflow: hidden;
  margin-top: 9px;
  margin-right: 4px;
  img,
  svg {
    width: 108px;
    height: 108px;
  }
`;
export default UserProfile;