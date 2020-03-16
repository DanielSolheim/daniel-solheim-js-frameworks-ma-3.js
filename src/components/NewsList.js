import React from 'react';
import Heading from './Heading';


export default function NewsList(){

  return (
  <div className="NewsList">
    <Heading title="This is NewsList" />
    <ul>
      <li> This is the first list items</li>
      <li> This is the second list item </li>
      <li> This is the third list item</li>
    </ul>
  </div>
  );
}
