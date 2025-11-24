
'use client';
import { useEffect } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import * as Y from 'yjs';
import { WebsocketProvider } from 'y-websocket';

export default function Editor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Design protocol steps here...</p>'
  });

  useEffect(() => {
    const ydoc = new Y.Doc();
    const url = (process.env.NEXT_PUBLIC_COLLAB_URL || 'ws://localhost:1234').replace('http', 'ws');
    const provider = new WebsocketProvider(url, 'protocols-room', ydoc);
    return () => { provider.destroy(); ydoc.destroy(); };
  }, []);

  return (
    <div style={{ border: '1px solid #eee', padding: 12 }}>
      <EditorContent editor={editor} />
    </div>
  );
}

