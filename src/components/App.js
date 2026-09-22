import React from 'react';
import Tooltip from './Tooltip';
import './../styles/App.css'; // Assuming you have some basic styling for the layout

function App() {
  return (
    <div className="App" style={{ padding: '50px', fontFamily: 'serif' }}>
      {/* First Tooltip Example */}
      <div style={{ marginBottom: '50px' }}>
        <Tooltip text="This is a tooltip">
          <h2 style={{ display: 'inline-block', cursor: 'pointer' }}>
            Hover over me
          </h2>
        </Tooltip>
      </div>

      <hr style={{ borderTop: '1px dotted #ccc', margin: '40px 0' }} />

      {/* Second Tooltip Example */}
      <div>
        <Tooltip text="This is another tooltip">
          <p style={{ display: 'inline-block', cursor: 'pointer', fontSize: '18px' }}>
            Hover over me to see another tooltip
          </p>
        </Tooltip>
      </div>
      
      <hr style={{ borderTop: '1px solid #ccc', marginTop: '40px' }} />
    </div>
  );
}

export default App;