'use client';

import { useState } from 'react';
import { Edit } from 'lucide-react';

interface CourseTitleProps {
  title: string;
  setTitle: (title: string) => void;
  onNext: () => void;
  isEditing: boolean;
}

export default function CourseTitle({
  title,
  setTitle,
  onNext,
  isEditing,
}: CourseTitleProps) {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [localTitle, setLocalTitle] = useState(title);

  const handleSave = () => {
    setTitle(localTitle);
    setIsEditingTitle(false);
  };

  return (
    <div className="mb-6">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-semibold flex-grow">{title}</h2>
        <button
          onClick={() => setIsEditingTitle(!isEditingTitle)}
          className="text-blue-600 hover:text-blue-800 transition"
        >
          <Edit size={20} />
        </button>
      </div>
      {isEditingTitle && (
        <div>
          <input
            type="text"
            value={localTitle}
            onChange={(e) => setLocalTitle(e.target.value)}
            maxLength={65}
            className="w-full px-4 py-2 border rounded-md mb-2"
          />
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
}
