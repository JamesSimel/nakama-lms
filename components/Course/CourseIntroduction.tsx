'use client';

import { useState } from 'react';
import { Edit } from 'lucide-react';

interface CourseIntroductionProps {
  description: string;
  setDescription: (description: string) => void;
  onNext: () => void;
}

export default function CourseIntroduction({
  description,
  setDescription,
  onNext,
}: CourseIntroductionProps) {
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [localDescription, setLocalDescription] = useState(description);

  const handleSave = () => {
    setDescription(localDescription);
    setIsEditingDescription(false);
  };

  return (
    <div className="mb-6">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-semibold flex-grow">Course Introduction</h2>
        <button
          onClick={() => setIsEditingDescription(!isEditingDescription)}
          className="text-blue-600 hover:text-blue-800 transition"
        >
          <Edit size={20} />
        </button>
      </div>
      {isEditingDescription ? (
        <div>
          <textarea
            value={localDescription}
            onChange={(e) => setLocalDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-md mb-2"
          />
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Save
          </button>
        </div>
      ) : (
        <p>{description}</p>
      )}
    </div>
  );
}
