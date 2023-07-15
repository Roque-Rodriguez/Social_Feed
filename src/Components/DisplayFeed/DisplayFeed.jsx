

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
                {props.parentEntries.map((entry) =>{
                    return (
                        <tr>
                            <td>{entry.name}</td>
                            <td>{entry.message}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

 
export default DisplayFeed;