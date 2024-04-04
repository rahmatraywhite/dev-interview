import React from 'react';
import { CreateRoomForm } from './create-room-form';

export default function CreateRoomPage() {
  return (
    <div className="flex min-h-screen space-y-3 flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Create Room</h1>
      <CreateRoomForm />
    </div>
  );
}
