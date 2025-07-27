"use client";

import React from "react";
import Card from "./Card";

type UserCardProps = {
  name: string;
  email: string;
  avatarUrl?: string;
};

const UserCard: React.FC<UserCardProps> = ({ name, email, avatarUrl }) => {
  return (
    <Card className="flex items-center gap-4">
      <img
        src={avatarUrl || "/default-avatar.png"}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h4 className="text-lg font-semibold text-gray-800">{name}</h4>
        <p className="text-sm text-gray-600">{email}</p>
      </div>
    </Card>
  );
};

export default UserCard;
