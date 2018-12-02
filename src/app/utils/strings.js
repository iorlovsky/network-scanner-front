import uuidv1 from "uuid/v1";
import React from 'react';

export const addlinebreaks = str => {
  let strStart, strEnd, divider = '\n\r';
  for (let i = 75; i < str.length; i+=75) {
    strStart = str.substring(0, i);
    strEnd = str.substring(i);
    str = strStart + divider + strEnd;
  }

  return str
};

export const breakNewLines = (text, divider='\n\r') => {
  if (!text) return;

  return (
    text.split(divider).map((item) =>
      <span key={uuidv1()}>{item}<br/></span>
    )
  )
};