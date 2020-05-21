A very simple button.

```jsx
import Surface from '../Surface/Surface';
import { useState } from 'react';

import Textinput from './Textinput';
const [value, setValue] = useState('');
const handleChange = (event) => {
  setValue(event.target.value);
};
<Surface width={250} height={60}>
  <Textinput
    name={'text'}
    value={value}
    handleChange={handleChange}
    placeholderText="This is a text input"
  ></Textinput>
</Surface>;
```
