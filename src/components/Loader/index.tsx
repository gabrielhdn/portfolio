import spinner from '../../assets/animations/loader.svg';
import { Overlay } from './styles';

interface Props {
  isLoading: boolean
}

const Loader: React.FC<Props> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <Overlay>
      <img src={spinner} alt="Spinner" />
    </Overlay>
  );
};

export default Loader;
