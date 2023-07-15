import React from "react";
import LikeDislikeCounter from "../LikeDisLikeCounter/LikeDislikeCounter";

const DisplayFeed = (props) => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              {props.parentEntries.map((entry, index) => {
                return (
                  <div key={entry.name} className="mb-3 position-relative">
                    <h5 className="card-title">{entry.name}</h5>
                    <p className="card-text">{entry.message}</p>
                    <div
                      className="position-absolute bottom-0 end-0"
                      magin-bottom
                    >
                      <LikeDislikeCounter />
                    </div>
                    {index !== props.parentEntries.length - 1 && (
                      <hr className="my-3" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayFeed;
