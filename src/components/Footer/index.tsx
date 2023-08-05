import { Link } from 'react-router-dom';
import { Container } from './styles';

const Footer = () => (
  <Container>
    <div className="content">
      <span>
        2023 - Gabriel Herdina
      </span>

      <span>
        <Link to="https://github.com/gabrielhdn/portfolio">Portfolio</Link>
        {' '}
        created with React, Typescript, Styled Components and Framer Motion.
      </span>
    </div>
  </Container>
);

export default Footer;
