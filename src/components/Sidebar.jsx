"use client";
import React, { useState, useEffect } from "react";
import { UserButton, useAuth } from "@clerk/nextjs";
import { getLibrary } from "@/utils/supabaseRequests";
import { dark } from "@clerk/themes";

export default function Sidebar({ items }) {
  const { userId, getToken } = useAuth();
  const [library, setLibrary] = useState([]);
  useEffect(() => {
    const loadLibrary = async () => {
      const token = await getToken({ template: "supabase" });
      const libData = await getLibrary({ userId, token });
      setLibrary(libData);

      console.log("data:", libData);
    };

    loadLibrary();
  }, []);

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
