
'use client';
import { useEffect, useState } from 'react';
import Editor from '../components/Editor';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export default function Home() {
  const [protocols, setProtocols] = useState<any[]>([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetch(`${API_URL}/protocols`).then(r => r.json()).then(setProtocols).catch(console.error);
  }, []);

  async function createProtocol() {
    const res = await fetch(`${API_URL}/protocols`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    });
    const data = await res.json();
    setProtocols([data, ...protocols]);
    setTitle('');
  }

  return (
    <div>
      <h1>Protocols</h1>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="New protocol title" />
        <button onClick={createProtocol}>Create</button>
      </div>
      <ul>
        {protocols.map(p => (
          <li key={p.id} style={{ marginBottom: 8 }}>
            <strong>{p.title}</strong>
          </li>
        ))}
      </ul>
      <h2>Editor demo</h2>
      <Editor />
    </div>
  );
}

