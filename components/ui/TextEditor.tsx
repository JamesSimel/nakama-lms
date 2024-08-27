// components/TextEditor.tsx
import { useEffect, useRef } from 'react';
import 'quill/dist/quill.snow.css'; // Import Quill's theme CSS
import Quill from 'quill';

interface TextEditorProps {
  id: string;
}

const TextEditor: React.FC<TextEditorProps> = ({ id }) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const quillRef = useRef<Quill | null>(null); // Ref to store the Quill instance

  useEffect(() => {
    console.log('useEffect called'); // Debugging statement

    if (!editorRef.current) {
      console.warn('Editor ref is not set'); // Debugging statement
      return;
    }

    // Check if Quill has already been initialized
    if (!quillRef.current) {
      console.log('Initializing Quill'); // Debugging statement
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link'],
            [{ color: [] }, { background: [] }],
            ['clean'],
          ],
        },
      });
    }

    // Cleanup function to prevent repeated mounting
    return () => {
      console.log('Cleaning up Quill instance'); // Debugging statement
      if (quillRef.current) {
        quillRef.current = null; // Set Quill reference to null
      }
    };
  }, []); // Empty dependency array to ensure it only runs once

  return <div ref={editorRef} style={{ height: '300px' }}></div>;
};

export default TextEditor;
