# [Neumorphkit. 🕳](https://neu.felipelujan.com)

[![NPM](https://img.shields.io/npm/v/neumorphkit.svg)](https://www.npmjs.com/package/neumorphkit) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Neumorphkit is a set of beautiful React components themed after Neumorphic design (Soft Ui) animated with react-spring.

Check out this [DEMO](https://neu.felipelujan.com).
Demo repo [repo](https://github.com/FelipeLujan/neumorphkit-example).

The components are fairy-dusted with React-Spring making them look and feel even more... neumorphic.

The available components include.

- Neumorphic Binary
- Neumorphic Button
- Neumorphic Surface (Card)
- Neumorphic Radios
- Neumorphic Checkboxes

## Install

```bash
npm install --save neumorphkit
```

## Usage

```jsx
import React, { Component } from 'react';

import { Button } from 'neumorphkit';

const handleClick = () => {
  console.log('hi');
};

const Example = () => {
  return <Button handleClick={handleClick}>Click me</Button>;
};
```

## Components

| Component | Available props                            | Description                                                                                                                                                                                                                                                                                                              |
| --------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Button    | handleClick, active                        | handleClick: Callback function called when the user clicks the Neumorphic Button. active: default false. Setting to truthy value will put the button on its pressed appearance.                                                                                                                                          |
| Surface   | width, height                              | width: default none. width of the surface element. height: default. none. height of the surface element.                                                                                                                                                                                                                 |
| Binary    | handleClick, options, title                | Title: default none: Title of the binary component. options: default ["",""]. Array, the first 2 items must be type string. Each item will be displayed as an option handleClick: Callback function, receives as argument the option that the user has selected, if an option is deselected, null is passed as argument. |
| TextInput | name, value, handleChange, placeholderText | name: default none. name for the underlying text input. value: default none. value for the underlying text input. handleChange: default none: callback function assigned to the onChange prop for the underlying text input. placeholderText: default none: placeholder text assigned to the placeholder text input.     |
| Checkbox  | name, value, handleChange, label, checked  | name: default none. name for the underlying text input. handleChange: default none. Callback function passed to the underlying input type=text. label: default none. label displayed to the right of the text input. checked: default false. passed to the checkbox input on its checked prop                            |
| Radio     | name, handleChange, label, checked         | name: default none. name for the underlying radio input. handleChange: default none. Callback function passed to the underlying input type=text as onChange prop. label: default none. label displayed to the right of the radio input. checked: default false. passed to the radio input on its checked prop.           |

## License

MIT © [FelipeLujan](https://github.com/FelipeLujan)
