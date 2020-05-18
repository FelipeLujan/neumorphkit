import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import theme from '../theme/theme';
import pSBC from '../utils/pSBC';

const BTN = styled(animated.button)`
  min-width: 150px;
  height: 50px;
  left: 42px;
  top: 48px;
  border-radius: 25px;
  margin: 5px;
  box-sizing: border-box;
  outline: none;
  border: 0;
  color: ${({ color }) => color || theme.light.contrast};
`;

const ButtonComponent = ({
  children,
  handleClick,
  styles,
  color,
  handleMouseDown,
  handleMouseUp,
}) => {
  return (
    <BTN
      color={color}
      style={styles}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {children}
    </BTN>
  );
};
const pulled = {
  boxShadow: theme.pulled,
  backgroundImage: `linear-gradient(
			150deg,
			${(0, theme.light.main)},
			${(0, theme.light.main)}
		  )`,
};
const pressed = {
  boxShadow: theme.pushed,
  backgroundImage: `linear-gradient(
			150deg,
			${(-0.1, theme.light.main)},
			${(0.1, theme.light.main)}
		  )`,
};

const pressedFull = {
  // comment
  boxShadow: theme.flat,
  backgroundImage: `linear-gradient(
			150deg,
			${(-0.1, theme.light.main)},
			${(0.1, theme.light.main)} 
		  )`,
};
const ButtonExport = ({ active, handleClick, children, color }) => {
  const handleMouseDown = () => {
    if (!active) set(pressedFull);
  };

  const handleMouseUp = () => {
    if (!active) set(pulled);
  };
  const [styles, set] = useSpring(() => ({
    from: active ? pressed : pulled,
    config: { tension: 170, friction: 15, precision: 0.1 },
  }));

  return (
    <ButtonComponent
      handleClick={handleClick}
      handleMouseDown={handleMouseDown}
      handleMouseUp={handleMouseUp}
      styles={styles}
      color={color}
      active={active}
    >
      {children}
    </ButtonComponent>
  );
};

export default ButtonExport;
