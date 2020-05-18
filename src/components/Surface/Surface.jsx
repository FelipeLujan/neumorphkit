import React from 'react'
import { animated } from 'react-spring'
import styled from 'styled-components'
import theme from '../theme/theme'
import pSBC from '../utils/pSBC'

const Srf = styled(animated.div)`
  background: ${(props) => pSBC(0, theme.light.main)};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  padding: 1rem;
  border-radius: 40px;
  box-shadow: ${theme.pulled};
`
const SurfaceExport = ({ children, width, height }) => {
  return (
    <Srf width={width} height={height}>
      {children}
    </Srf>
  )
}

export default SurfaceExport
