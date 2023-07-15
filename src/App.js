import React, { useState } from 'react';

import DisplayEntriesForm from './Components/DisplayEntries/DisplayEntriesForm';


function App() {

  const [entries, setEntries] = useState([{name: 'bob', message: 'I love DevCodeCamp!'}]);
  
  return (
    <div>
      <DisplayEntriesForm></DisplayEntriesForm>
    </div>
  );
}

export default App;
