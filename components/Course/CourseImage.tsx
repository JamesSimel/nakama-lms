'use client';

import { useState } from 'react';
import { Edit } from 'lucide-react';

interface CourseImageProps {
  image: File | null;
  setImage: (image: File | null) => void;
  onNext: () => void;
}

export default function CourseImage({
  image,
  setImage,
  onNext,
}: CourseImageProps) {
  const [isEditingImage, setIsEditingImage] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleSave = () => setIsEditingImage(false);

  return (
    <div className="mb-6">
      <div className="flex items-center mb-4">
        <h2 className="text-xl font-semibold flex-grow">Course Image</h2>
        <button
          onClick={() => setIsEditingImage(!isEditingImage)}
          className="text-blue-600 hover:text-blue-800 transition"
        >
          <Edit size={20} />
        </button>
      </div>
      {isEditingImage ? (
        <div>
          <input
            type="file"
            onChange={handleImageChange}
            className="block w-full mb-2"
          />
          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="Course Image Preview"
              className="w-48 h-48 object-cover mb-2"
            />
          )}
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Save
          </button>
        </div>
      ) : (
        image && (
          <img
            src={URL.createObjectURL(image)}
            alt="Course Image Preview"
            className="w-48 h-48 object-cover mb-2"
          />
        )
      )}
    </div>
  );
}
