import styled from '@emotion/styled';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 0;
  width: ${p => p.theme.space[9]}px;
  height: ${p => p.theme.space[6]}px;
  cursor: pointer;
  border: 0.5px solid #a3a3a3;
  border-radius: ${p => p.theme.radii.big};
  transition: background-color 250ms linear, transform 250ms ease-in-out;
  background-color: #ccc;
  box-shadow: 0px 3px 5px 1px rgba(45, 90, 124, 0.2);
  :hover,
  :focus {
    color: ${p => p.theme.colors.muted};
    transform: scale(1.02);
  }
`;

export const DelButton = styled(StyledButton)`
  border-radius: 50%;
  width: ${p => p.theme.space[6]}px;
  height: ${p => p.theme.space[6]}px;
  background-color: transparent;
  border: none;
  :hover,
  :focus {
    background-color: transparent;
    transform: scale(1.3);
  }
`;
