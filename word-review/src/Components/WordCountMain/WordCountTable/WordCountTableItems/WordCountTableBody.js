import React from 'react';
import './WordCountTable.css';

const wordCountTableBody = (props) => {
  return(
    <tbody>
    {
      props.array.map((entry, index) => (
      <tr key={index}>
        <td  key={index}
             className={(
               `${entry[1] === 1 ? "small" : ""}
                ${entry[1] === 2 ? "small-mid" : ""}
                ${entry[1] === 3 ? "mid" : ""}
                ${entry[1] === 4 ? "mid-large" : ""}
                ${entry[1]   > 4 ? "large" : ""}
                `
                )} >
          {entry[0]}
        </td>
        <td  key={entry[0]+index}>{entry[1]}</td>
      </tr>
    ))}
    </tbody>
  )
};

export default wordCountTableBody;
