```jsx
import { useState } from 'react';

import Binary from '../Binary/Binary';
import Button from '../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import Surface from '../Surface/Surface';
import Textinput from '../TextInput/TextInput';
import Radio from '../Radio/Radio';

import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
`;
const Center = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: stretch;
  margin: 1rem;
  color: ##c6ceda;
`;
const [value, setValue] = useState('');
const [checks, setChecks] = useState([]);
const [radio, setRadio] = useState(undefined);

const items = ['1 Check', '2 Check', '3 Check'];
const list = ['Option A', 'Option B', 'Option C'];

const handleChecks = (event) => {
  console.log('event', event);
  const { name } = event.target;
  const newChecks = checks;
  if (checks.includes(name)) {
    const index = newChecks.indexOf(name);
    newChecks.splice(index, 1);
  } else {
    newChecks.push(name);
  }
  setChecks([...newChecks]);
};

const handleRadio = (event) => {
  const { value } = event.target;
  console.log('value', value);
  setRadio(value);
};

<Container>
  <Surface width={550}>
    <Center>
      <Button>Click me</Button>
      <Button active>Im pressed</Button>
    </Center>
    <Center>
      <Binary
        options={['Option A', 'Option B']}
        handleClick={(e) => console.log(e)}
        title="Pick one or none"
      ></Binary>
    </Center>
    <Center>
      <Textinput
        name={'text'}
        value={value}
        handleChange={(event) => {
          setValue(event.target.value);
        }}
        placeholderText="This is a text input"
      ></Textinput>
    </Center>
    <br />
    <Center>
      {items.map((number) => (
        <Checkbox
          key={number}
          label={number}
          checked={checks.includes(number)}
          handleChange={handleChecks}
          name={number}
        />
      ))}
    </Center>
    <br />
    <Center>
      {list.map((option) => (
        <Radio
          key={option}
          checked={radio === option}
          handleChange={handleRadio}
          value={option}
          label={option}
        ></Radio>
      ))}
    </Center>
  </Surface>
</Container>;
```
