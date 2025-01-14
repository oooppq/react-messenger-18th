import { ReactNode } from 'react';
import styled from 'styled-components';

interface NavBarButtonProps {
  children: ReactNode;
  buttonName: string;
  handleClickButton?: (e?: React.MouseEvent | MouseEvent) => void;
}

const NavBarButton = ({
  children,
  buttonName,
  handleClickButton,
}: NavBarButtonProps) => {
  return (
    <NavBarButtonContainer onClick={handleClickButton}>
      {children}
      <ButtonName>{buttonName}</ButtonName>
    </NavBarButtonContainer>
  );
};

const NavBarButtonContainer = styled.button`
  svg {
    width: 24px;
    height: 24px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonName = styled.div`
  color: black;
  font-size: 12px;
  font-weight: 300;
  line-height: 120%;
  font-style: normal;
`;

export default NavBarButton;
