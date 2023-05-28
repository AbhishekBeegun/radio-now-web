import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import LoginBtn from "./components/LoginBtn";
import LogoutBtn from "./components/LogoutBtn";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
    {user ?
      <div className="flex items-center gap-5 py-2">
        <img
        className="rounded-full w-10"
        src={user.picture} alt={user.name} />
        {/* <h2>{user.name}</h2> */}
        {/* <p>{user.email}</p> */}
        <LogoutBtn />
      </div>
      :
      <div className="flex items-center gap-5 py-2">
        <LoginBtn/>
      </div>
    }
    </>
  );
}