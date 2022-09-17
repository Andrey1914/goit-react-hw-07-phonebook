import styled from '@emotion/styled';

export const Input = styled.input`
  width: 300px;
  height: 20px;
  margin-bottom: ${p => p.theme.space[4]}px;
  border-radius: ${p => p.theme.radii.small};
  background-color: transparent;
  border: none;
  border: 1px solid #ccc;
  outline-color: #ccc;
`;

export const Label = styled.label`
  font-weight: ${p => p.theme.fontWeigths[0]};
  display: flex;
  justify-content: space-between;
`;
