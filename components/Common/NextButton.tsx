// components/Common/NextButton.tsx
import React from 'react';

interface NextButtonProps {
  onClick: () => void;
}

const NextButton: React.FC<NextButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    aria-label="Proceed to the next step"
    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
  >
    Next
  </button>
);

export default NextButton;
