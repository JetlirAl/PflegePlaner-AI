
import React, { useState } from 'react';

function Pflegeplan() {
  const [name, setName] = useState('');
  const [bedarf, setBedarf] = useState('');

  const exportAsPDF = () => {
    alert('PDF wird exportiert... (Demo-Version)');
  };

  return (
    <div>
      <h3>Pflegeplan erstellen</h3>
      <input placeholder="Name der Person" value={name} onChange={e => setName(e.target.value)} /><br />
      <textarea placeholder="Pflegebedarf" value={bedarf} onChange={e => setBedarf(e.target.value)} /><br />
      <button onClick={exportAsPDF}>Als PDF exportieren</button>
    </div>
  );
}

export default Pflegeplan;
