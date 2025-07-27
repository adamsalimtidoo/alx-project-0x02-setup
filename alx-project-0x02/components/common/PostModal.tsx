"use client";

import React from "react";
import Button from "./Button";

type PostModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
};

const PostModal: React.FC<PostModalProps> = ({
  isOpen,
  onClose,
  title,
  content,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-xl max-w-lg w-full p-6">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{content}</p>
        <Button title="Close" onClick={onClose} variant="outline" />
      </div>
    </div>
  );
};

export default PostModal;
