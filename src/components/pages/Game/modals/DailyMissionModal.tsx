import React from "react";

interface DailyMissionModalProps {
  onClose: () => void;
}

const DailyMissionModal: React.FC<DailyMissionModalProps> = ({ onClose }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-black text-xl mb-4">Daily Mission Modal Content</h2>

      <div className="mb-4">
        <h3 className="text-black text-lg">View videos:</h3>
        <ul className="list-disc list-inside pl-4">
          <li>
            <a
              href="https://example.com/video1"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Video 1
            </a>
          </li>
          <li>
            <a
              href="https://example.com/video2"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Video 2
            </a>
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-black text-lg">Follow on:</h3>
        <ul className="list-disc list-inside pl-4">
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://youtube.com"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              YouTube
            </a>
          </li>
        </ul>
      </div>

      <div className="mb-4">
        <h3 className="text-black text-lg">Task:</h3>
        <ul className="list-disc list-inside pl-4">
          <li>
            <a
              href="https://example.com/retweet"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Retweet
            </a>
          </li>
          <li>
            <a
              href="https://example.com/register"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              Register on VIP list
            </a>
          </li>
        </ul>
      </div>

      <button
        onClick={onClose}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Close
      </button>
    </div>
  );
};

export default DailyMissionModal;
