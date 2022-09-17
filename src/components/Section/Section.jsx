import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { Title } from './SectionStyled';

export default function Section({ children, title }) {
  return (
    <Box as="section" p={4}>
      <Title>{title}</Title>
      {children}
    </Box>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
