import React,{Fragment} from 'react';
import Item from './components/Item';
import Buttons from './components/Buttons';
import Form from './components/Form';

export default function App() {
  return (
    <Fragment>
      <Form />
      <Item />
      <Buttons />
    </Fragment>
  )
}

