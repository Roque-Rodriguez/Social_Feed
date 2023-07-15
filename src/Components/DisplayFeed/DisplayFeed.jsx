import React from "react";
import LikeDislikeCounter from "../LikeDisLikeCounter/LikeDislikeCounter";

const DisplayFeed = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Message</th>
          
        </tr>
      </thead>
      <tbody>
        {props.parentEntries.map((entry) => {
          return (
            <tr key={entry.name}>
              <td>{entry.name}</td>
              <td>{entry.message}</td>
              <td>
                <LikeDislikeCounter />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DisplayFeed;
