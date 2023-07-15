import React, { useState } from 'react';
import DisplayFeed from './Components/DisplayFeed/DisplayFeed';
import DisplayEntriesForm from './Components/DisplayEntries/DisplayEntriesForm';
//import LikeDislikeCounter from './Components/LikeDisLikeCounter/LikeDislikeCounter';



function App() {

  const [entries, setEntries] = useState([{name: 'bob', message: 'I love DevCodeCamp!'}]);
  
  function addNewEntry(entry){
    let tempEntries = [...entries, entry]
    setEntries(tempEntries)
  }

  return (
    <div>
      <DisplayEntriesForm addNewEntryProperty={addNewEntry}></DisplayEntriesForm>
      <DisplayFeed parentEntries={entries}></DisplayFeed>
      
    </div>
  );
}

export default App;
