import { DelButton } from './ButtonStyled';

export const Button = ({ type = 'button', onClick, children }) => {
  return (
    <DelButton onClick={onClick} type={type}>
      {children}
    </DelButton>
  );
};
