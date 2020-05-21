A very simple button.

```jsx
import Surface from '../Surface/Surface';

import ButtonExport from './Button';
<Surface width={300} height={60}>
  <ButtonExport
    handleClick={() => {
      console.log('Felipe');
    }}
  >
    some text
  </ButtonExport>
</Surface>;
```
