import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, config, animated } from 'react-spring';
import theme from '../theme/theme';
import pSBC from '../utils/pSBC';

const LabelContainer = styled.label`
  margin: 5px;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: inline-flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  span {
    display: table-cell;
    vertical-align: center;
  }
`;

const Icon = styled(animated.svg)`
  fill: none;
  stroke: ${(props) => pSBC(0.8, theme.light.main)};
  stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'radio' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled(animated.div)`
  width: 30px;
  height: 30px;
  max-width: 30px;
  max-height: 30px;
  border-radius: 50%;
  margin: 5px;
`;

export const RadioExport = ({
  className,
  checked,
  value,
  handleChange,
  ...props
}) => {
  const flat = {
    boxShadow: theme.flat,
    backgroundImage: `linear-gradient(
			150deg,
			${theme.light.main},
			${theme.light.main}
		  )`,
    opacity: 0,
    border: `1px solid ${pSBC(-0.4, theme.light.main)}`,
  };

  const pulled = {
    boxShadow: theme.checkboxUp,
    backgroundImage: `linear-gradient(
			150deg,
			${pSBC(-0.05, theme.light.main)},
			${pSBC(+0.05, theme.light.main)}
		  )`,
    opacity: 1,
    border: `0px solid ${pSBC(-0.2, theme.light.main)}`,
  };
  const [springA, setA] = useSpring((index) => ({
    from: checked ? pulled : flat,
    config: { ...config.wobbly, precision: 0.1 },
  }));

  const [springB, setB] = useSpring((index) => ({
    from: { opacity: 0 },
    config: { ...config.wobbly, precision: 0.1, clamp: true },
  }));

  const handleHover = () => {
    setB({ opacity: 1 });
  };
  const handleLeave = () => {
    if (!checked) {
      setB({ opacity: 0 });
    }
  };

  if (checked) {
    setA(pulled);
    setB({ opacity: 1 });
  } else {
    setA(flat);
    setB({ opacity: 0 });
  }

  return (
    <LabelContainer className={className}>
      <HiddenCheckbox
        value={value}
        onChange={(event) => handleChange(event)}
        name={name}
        checked={checked}
        {...props}
      />
      <StyledCheckbox
        checked={checked}
        style={{ ...springA, opacity: null }}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
        className="hello"
        value={value}
        name={value}
      >
        <Icon theme={theme} style={springB} viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
      <span>{value}</span>
    </LabelContainer>
  );
};

const Radio = ({ theme }) => {
  const [radio, setRadio] = useState(undefined);

  const list = ['OptionA', 'OptionB', 'OptionC'];

  return list.map((option) => (
    <RadioExport
      key={option}
      label={option}
      checked={radio === option}
      handleSet={setRadio}
      value={option}
      theme={theme}
    ></RadioExport>
  ));
};

export default RadioExport;
