"use client";

import React, { useState } from "react";

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (post: { title: string; content: string }) => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;

    onSubmit({ title, content });
    setTitle("");
    setContent("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <h2 className="text-xl font-bold mb-4">Create New Post</h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Post Title"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Post Content"
            className="w-full border border-gray-300 rounded px-3 py-2 h-24"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;
