import React from 'react'
import { useSpring, animated, config } from 'react-spring'
import styled, { withTheme } from 'styled-components'
import theme from '../theme/theme'
import pSBC from '../utils/pSBC'

const INP = styled(animated.input)`
  min-width: 150px;
  border: none;
  outline: none;
  padding: 20px 20px 20px 20px;
  margin: 5px;
  border: 1px solid ${(props) => pSBC(theme.light.main)};
  box-sizing: border-box;
  box-shadow: ${theme.pushed};
  border: 0;
  background-image: ${theme.backgroundImage};
  color: ${theme.light.contrast};

  ::placeholder {
    color: ${pSBC(0.4, theme.light.contrast)};
  }
`
const TextInput = ({ theme, name, value, handleChange, placeholderText }) => {
  const init = {
    borderRadius: '25px'
  }

  const [styles] = useSpring(() => ({
    from: init,
    config: config.wobbly,
    precision: 0.1
  }))

  return (
    <INP
      style={styles}
      placeholder={placeholderText}
      type='text'
      value={value}
      onChange={handleChange}
      name='text'
      theme={theme}
    ></INP>
  )
}
const TextInputExport = ({ value, handleChange, placeholderText }) => {
  return (
    <TextInput
      handleChange={handleChange}
      value={value}
      placeholderText={placeholderText}
    ></TextInput>
  )
}

export default TextInputExport
