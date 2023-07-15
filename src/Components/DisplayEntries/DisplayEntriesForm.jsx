import { useState } from "react";

const DisplayEntriesForm = (prop) => {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    return ( 
    
        <form>
            <label>Name</label>
            <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
        
            <label>Post:</label>
            <input
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                maxLength={300}
                required
            />
        </form>
    
     );

}
 
export default DisplayEntriesForm;
