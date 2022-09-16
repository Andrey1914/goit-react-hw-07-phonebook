import PropTypes from 'prop-types';

export default function Section({ children, title }) {
  return (
    <section>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
