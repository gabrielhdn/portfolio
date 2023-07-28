import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';

import { buttons } from './data';
import { fadeIn } from '../../utils/animations';

import Switch from '../Switch';
import Button from '../Button';
import Socials from './components/Socials';
import * as S from './styles';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

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
            <Button
              key={label}
              origin="header"
              onClick={() => navigate(link)}
              selected={pathname.includes(label)}
            >
              <span>{label}</span>
            </Button>
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
