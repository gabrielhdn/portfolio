import ReactDOM from 'react-dom';
import { Overlay } from './styles';

interface Props {
  isLoading: boolean
}

const Loader: React.FC<Props> = ({ isLoading }) => {
  if (!isLoading) return null;

  return ReactDOM.createPortal(
    <Overlay>LOADER</Overlay>,
    document.getElementById('loader-root')!,
  );
};

export default Loader;
