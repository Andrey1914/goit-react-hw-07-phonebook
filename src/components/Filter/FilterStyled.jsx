import styled from '@emotion/styled';

export const Label = styled.label`
  font-weight: ${p => p.theme.fontWeigths[0]};
  display: flex;
  justify-content: space-between;
  margin-bottom: ${p => p.theme.space[5]}px;
`;
