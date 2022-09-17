import { Box } from 'components/Box';

export default function Container({ children }) {
  return (
    <Box
      maxWidth={512}
      mx="auto"
      my={5}
      borderRadius="small"
      border="0.5px solid #a3a3a3"
      background="radial-gradient(#fff 120px, #ccc)"
      boxShadow="0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);"
    >
      {children}
    </Box>
  );
}
