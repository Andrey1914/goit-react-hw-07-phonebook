import { StyledButton } from './ButtonStyled';

export const Button = ({ type = 'button', onClick, children }) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};
