import React from 'react';
const Date = (props) => {

  const date = props.date;
  console.log(date,'date');
  const year = date.getFullYear();
  const newYear = new window.Date().getFullYear();
  let when;
  if (year < newYear) {
    when = newYear - year + ' years ago';
  } else if (year === newYear) {
    when = 'this year';
  } else if (year > newYear) {
    when = 'error';
  }

  return <p>{when}</p>;
};

export default Date;
