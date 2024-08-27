'use client';

import { useState } from 'react';
import CourseTitle from './CourseTitle';
import CourseIntroduction from './CourseIntroduction';
import CourseImage from './CourseImage';
import AddChapters from './AddChapters';
import NextButton from '../Common/NextButton';

export default function CreateCourse() {
  const [step, setStep] = useState(1);
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseImage, setCourseImage] = useState<File | null>(null);
  const [isChaptersAdded, setIsChaptersAdded] = useState(false);

  const handleNext = () => setStep(step + 1);

  return (
    <div className="p-4 sm:p-8 lg:p-12 xl:p-16 flex flex-col h-full">
      {step === 1 && (
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-center">Create a New Course</h2>
          <input
            type="text"
            placeholder="Enter course title"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            className="px-4 py-3 border rounded-md mb-6 w-full"
          />
          <NextButton onClick={handleNext} />
        </div>
      )}

      {step === 2 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
          <div className="flex flex-col gap-6 h-full">
            <CourseImage
              image={courseImage}
              setImage={setCourseImage}
              onNext={handleNext}
            />
            <CourseTitle
              title={courseTitle}
              setTitle={setCourseTitle}
              onNext={handleNext}
              isEditing={step === 2}
            />
            <CourseIntroduction
              description={courseDescription}
              setDescription={setCourseDescription}
              onNext={handleNext}
            />
          </div>
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-6 text-center">
              <AddChapters
                setIsChaptersAdded={setIsChaptersAdded}
              />
            </div>
            <button
              disabled={!isChaptersAdded}
              className={`px-6 py-3 rounded-md transition ${isChaptersAdded ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
            >
              Publish Course
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
