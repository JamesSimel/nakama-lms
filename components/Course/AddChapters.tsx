// AddChapters.tsx

'use client';

import { useState } from 'react';
import TextEditor from '../ui/TextEditor';
import { Button } from '@/components/ui/button'; // Shadcn button component
import { X, Menu } from 'lucide-react'; // Icons from Lucide

interface AddChaptersProps {
  setIsChaptersAdded: (added: boolean) => void;
  onPrevious?: () => void;
}

export default function AddChapters({
  setIsChaptersAdded,
  onPrevious,
}: AddChaptersProps) {
  const [contentType, setContentType] = useState<'text' | 'pdf' | 'ppt' | 'video' | 'image'>('text');
  const [showEditor, setShowEditor] = useState(false);

  const handleContentTypeChange = (type: 'text' | 'pdf' | 'ppt' | 'video' | 'image') => {
    setContentType(type);
    if (type === 'text') {
      setShowEditor(true);
    } else {
      setShowEditor(false);
    }
  };

  const handleSave = () => {
    // Implement save logic
    alert('Chapter saved successfully');
    setIsChaptersAdded(true);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Add Chapter</h2>

      {/* Content Type Selection */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Select Content Type:</label>
        <div className="flex gap-4 mt-2">
          <Button variant="outline" onClick={() => handleContentTypeChange('text')}>Text</Button>
          <Button variant="outline" onClick={() => handleContentTypeChange('pdf')}>PDF</Button>
          <Button variant="outline" onClick={() => handleContentTypeChange('ppt')}>PPT</Button>
          <Button variant="outline" onClick={() => handleContentTypeChange('video')}>Video</Button>
          <Button variant="outline" onClick={() => handleContentTypeChange('image')}>Image</Button>
        </div>
      </div>

      {/* Only show TextEditor when needed */}
      {showEditor && (
        <div className="mb-4">
          <TextEditor id="editor1" />
        </div>
      )}

      {/* Save Button */}
      <div className="text-center">
        <Button onClick={handleSave}>Save Chapter</Button>
      </div>
    </div>
  );
}
