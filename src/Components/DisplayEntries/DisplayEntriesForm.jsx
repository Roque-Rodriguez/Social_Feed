import { useState } from "react";

const DisplayEntriesForm = (props) => {

    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    function handlesSubmit(event){
        event.preventDefault();
        let newEntry = {
            name: name,
            message: message
        };
        console.log(newEntry);
        props.addNewEntryProperty(newEntry)

        setName('');
        setMessage('');
    }

    return ( 
    
        <form onSubmit={handlesSubmit}>
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
            <button type='submit'>Submit</button>
        </form>
    
     );

}
 
export default DisplayEntriesForm;
