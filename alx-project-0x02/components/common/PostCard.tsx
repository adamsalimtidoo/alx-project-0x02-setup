"use client";

import React from "react";
import Card from "./Card";

type PostCardProps = {
  title: string;
  excerpt: string;
  author: string;
  onClick?: () => void;
};

const PostCard: React.FC<PostCardProps> = ({
  title,
  excerpt,
  author,
  onClick,
}) => {
  return (
    <Card
      className="cursor-pointer hover:shadow-lg transition"
      onClick={onClick}
    >
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700 text-sm mb-4">{excerpt}</p>
      <span className="text-xs text-gray-500">By {author}</span>
    </Card>
  );
};

export default PostCard;
