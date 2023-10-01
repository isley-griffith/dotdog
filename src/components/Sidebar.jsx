"use client";
import React, { useState, useEffect } from "react";
import { UserButton, useAuth, useUser } from "@clerk/nextjs";
import { createLibrary, getLibrary } from "@/utils/supabaseRequests";
import { dark } from "@clerk/themes";

export default function Sidebar({ items }) {
  const { userId, getToken } = useAuth();
  const { isSignedIn, user, isLoaded } = useUser();
  const [library, setLibrary] = useState([]);

  useEffect(() => {
    const loadLibrary = async () => {
      const token = await getToken({ template: "supabase" });
      const libData = await getLibrary({ userId, token });
      if (libData.length) { 
        setLibrary(libData);
      } else {
        const newLib = { name: `${user.username}'s Library` };
        await createLibrary({ userId, token, library: newLib })
      }
    };
    
    if (isLoaded)
      loadLibrary();
  }, [isLoaded]);

  return (
    <div className="h-screen min-w-[256px] p-4 bg-gray-d border-r border-r-[#000000]">
      <div className="absolute bottom-4 left-4">
        <div>
          <UserButton appearance={dark} />
        </div>
      </div>
    </div>
  );
}
