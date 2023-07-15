import React, { useState } from 'react';
import DisplayFeed from './Components/DisplayFeed/DisplayFeed';
import DisplayEntriesForm from './Components/DisplayEntries/DisplayEntriesForm';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [entries, setEntries] = useState([{ name: 'bob', message: 'I love DevCodeCamp!' }]);

  function addNewEntry(entry) {
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }

  return (
    <div className="app-container">
      <header className="header">
        <Container>
          <h1 className="header-title">
            <span className="header-title-fade">SocialFeed</span>
          </h1>
        </Container>
      </header>
      <Container>
        <Row>
          <Col>
            <DisplayEntriesForm addNewEntryProperty={addNewEntry} />
          </Col>
        </Row>
        {entries.length > 0 && (
          <Row>
            <Col>
              <DisplayFeed parentEntries={entries} />
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default App;
