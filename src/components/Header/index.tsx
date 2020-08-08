import React, { useContext } from 'react';
import Switch from 'react-switch';
import { shade } from 'polished';
import { ThemeContext } from 'styled-components';
import { FiMoon, FiSun } from 'react-icons/fi';
import { Container, Content } from './styles';

interface HeaderProps {
  toggleTheme(): void;
}


const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {

  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Content>
        <h1>teste</h1>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={15}
          width={40}
          handleDiameter={20}
          onColor={colors.secondary}
          offColor={shade(0.8, colors.primary)}
        />
      </Content>
    </Container>
  );
}

export { Header };