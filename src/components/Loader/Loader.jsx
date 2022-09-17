import { Box } from 'components/Box';
import { ProgressBar } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Box display="flex" justifyContent="center">
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#3d3d3d"
        barColor="#777777"
      />
    </Box>
  );
}
