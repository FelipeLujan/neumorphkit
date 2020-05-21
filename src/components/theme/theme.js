import vars from './vars';
import pSBC from '../utils/pSBC';

const { light } = vars;

const theme = {
  light: { ...light },
  inset0: `inset 0px 0px 0px rgba(0,0,0,0), inset -0px -0px 0px rgba(255,255,255,0)`,
  flatToPushed: `inset 0px 0px 0px rgba(0,0,0,0.18), inset -0px -0px 0px rgba(255,255,255,0.95)`,
  pulled: ` ${pSBC(0.3, light.main)} 1px 1px 1px 0px inset, ${pSBC(
    -0.15,
    light.main
  )} -1px -1px 1px 0px inset, ${pSBC(
    0.3,
    light.main
  )} -2px -2px 4px 1px, ${pSBC(-0.3, light.main)} 2px 4px 6px 1px`,

  pressed: ` ${pSBC(0.1, light.main)} 1px 1px 1px 0px inset, ${pSBC(
    -0.3,
    light.main
  )} -1px -1px 1px 0px inset, ${pSBC(
    0.2,
    light.main
  )} -2px -2px 2px 1px, ${pSBC(-0.3, light.main)} 2px 2px 2px 1px`,
  pushed: `${pSBC(-0.4, light.main)}  3px 3px 3px 0px inset,${pSBC(
    0.6,
    light.main
  )}  -1px -1px 2px 0px inset, ${pSBC(
    -0.05,
    light.main
  )} -1px -1px 2px 0px  ,  ${pSBC(0.3, light.main)} 1px 1px 3px 0px `,

  flat: ` ${pSBC(-0.3, light.main)} 1px 1px 1px 1px inset ,${pSBC(
    0.2,
    light.main
  )} -1px  -1px 1px 1px  inset ,${pSBC(
    0.2,
    light.main
  )} -1px -1px 0.4px 1px ,${pSBC(-0.3, light.main)} -1px -1px 0.4px 1px `,
  backgroundImage: `linear-gradient(
		150deg,
		${pSBC(0.03, light.main)},
		${pSBC(-0.03, light.main)}
	  );`,
  flatDown: `${pSBC(-0.3, light.main)} 0px 0px 0px 0px inset,${pSBC(
    0.1,
    light.main
  )}   -0px  -0px 0px 0px inset,${pSBC(
    0.2,
    light.main
  )} -0px -0px 0px 0px , ${pSBC(-0.3, light.main)} -0px -0px 0px 0px `,
  checkboxUp: `${pSBC(0.2, light.main)} 1px 1px 2px 0px inset, ${pSBC(
    -0.3,
    light.main
  )} -3px -4px 4px 2px inset, ${pSBC(
    0.2,
    light.main
  )} -2px -2px 3px 1px, ${pSBC(-0.3, light.main)} 2px 1px 4px 2px`,
};

export default theme;
