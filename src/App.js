import React,{Fragment} from 'react';
import Item from './components/Item';
import Button from './components/Button';
import Form from './components/Form';

export default function App() {
  return (
    <Fragment>
      <Form />
      <Item />
      <Button />
    </Fragment>
  )
}

