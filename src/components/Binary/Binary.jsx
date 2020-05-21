import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring';
import styled from 'styled-components';
import theme from '../theme/theme';
import pSBC from '../utils/pSBC';

const CTRL = styled(animated.button)`
  margin: 5px;
  width: 200px;
  height: 3rem;
  left: 42px;
  top: 48px;
  border-radius: 13px;
  outline: none;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;

  cursor: pointer;
  overflow: hidden;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  color: ${theme.light.contrast};
`;

const Container = styled(animated.div)`
  /* padding: 5px 0 5px 5px; */
  width: 425px;
  height: auto;
  border: 0;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 5px;
  justify-content: center;
  align-items: center;
  align-content: center;
  outline: none;
  box-shadow: ${theme.pulled};
  background-color: ${theme.light.main};
  label {
    margin: 10px 0;
  }
  color: ${theme.light.contrast};
`;

const ControlWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Options = ({
  handleClick,
  springA,
  setA,
  springB,
  setB,
  options,
  title,
}) => {
  return (
    <Container>
      <label htmlFor="title">
        <span>{title}</span>
      </label>
      <ControlWrapper>
        <CTRL
          role="button"
          onClick={() => handleClick(options[0])}
          style={springA}
        >
          {options[0]}
        </CTRL>
        <CTRL
          role="button"
          onClick={() => handleClick(options[1])}
          style={springB}
        >
          {options[1]}
        </CTRL>
      </ControlWrapper>
    </Container>
  );
};
const BinaryExport = ({ options, handleClick, title }) => {
  const [active, setActive] = useState(undefined);
  let populatedOptions = ['', ''];

  const flat = {
    boxShadow: theme.flatDown,
    // filter: theme.filer_flat,
    border: `1px solid ${pSBC(-0.3, theme.light.main)}`,
    backgroundImage: `linear-gradient(
			150deg,
			${theme.light.main},
			${theme.light.main}
		  )`,
  };
  const pushed = {
    boxShadow: theme.pushed,
    border: `0px solid ${pSBC(-0.2, theme.light.main)}`,
    backgroundImage: `linear-gradient(
      150deg,
      ${pSBC(-0.1, theme.light.main)},
      ${pSBC(0.15, theme.light.main)}
      )`,
  };
  const [springA, setA] = useSpring((index) => ({
    from: flat,
    config: { ...config.stiff, precision: 0.1 },
  }));
  const [springB, setB] = useSpring((index) => ({
    from: flat,
    config: { ...config.stiff, precision: 0.1 },
  }));

  const handleState = (option) => {
    let newValue = undefined;
    if (active === option) {
      setActive(undefined);
      newValue = undefined;
    } else {
      setActive(option);
      newValue = option;
    }
    if (!option) {
      handleClick(null);
    }
  };

  // TODO: make the followinf IF statement actually validate that each of the items passed under the "options" prop are strings
  if (Array.isArray(options) && options.length === 2) {
    populatedOptions.map((variable, index) => {
      if (
        typeof options[index] === 'string' ||
        options[index] instanceof String
      ) {
        variable = options[index];
        return variable;
      }
    });
  }
  populatedOptions = options;
  if (active === populatedOptions[0]) {
    setA(pushed);
    setB(flat);
  } else if (active === populatedOptions[1]) {
    setA(flat);
    setB(pushed);
  } else {
    setA(flat);
    setB(flat);
  }
  return (
    <Options
      handleClick={handleState}
      springA={springA}
      setA={setA}
      springB={springB}
      setB={setB}
      options={populatedOptions}
      title={title}
    ></Options>
  );
};
export default BinaryExport;
