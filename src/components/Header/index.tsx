import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';

import { buttons } from './data';
import { fadeIn } from '../../utils/animations';

import Switch from '../Switch';
import Socials from './components/Socials';
import * as S from './styles';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { pathname } = useLocation();

  return (
    <S.Container
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <Socials />

      <S.Navigation open={isMenuOpen}>
        <div className="link-container">
          {buttons.map(({ link, label }) => (
            <S.NavIcon
              to={link}
              key={label}
              selected={pathname.includes(label)}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>{label}</span>
            </S.NavIcon>
          ))}
        </div>

        <Switch />
      </S.Navigation>

      {!isMenuOpen
        ? (
          <AiOutlineMenu
            onClick={() => setIsMenuOpen(true)}
            className="menu-icon"
          />
        )
        : (
          <AiOutlineClose
            onClick={() => setIsMenuOpen(false)}
            className="menu-icon"
          />
        )}
    </S.Container>
  );
};

export default Header;
