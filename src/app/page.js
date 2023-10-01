"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Library() {
  function createDummyJournals(numJournals) {
    const dummyJournals = new Array(numJournals);
    const imgNames = [
      "/Journal.png",
      "/JournalColors.png",
      "/JournalBlack.png",
    ];
    for (let i = 1; i < numJournals; i++)
      dummyJournals[i] = {
        title: `Journal ${i}`,
        date: "2021-06-01",
        img: imgNames[Math.floor(Math.random() * imgNames.length)],
      };

    return dummyJournals;
  }

  const [journals, setJournals] = useState([]);

  useEffect(() => {
    setJournals(createDummyJournals(10));
  }, []);

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="flex flex-wrap gap-x-8 gap-y-12">
        <div className="flex flex-col items-center justify-end w-40 space-y-2 cursor-pointer">
          <div className="flex items-center justify-center text-action border border-action border-dashed w-36 h-48 rounded-xl text-[64px]">
            +
          </div>
          <span className=" text-action">New...</span>
        </div>

        {journals.map((journal, index) => (
          <div
            className="flex flex-col items-center space-y-2 bg-cover hover:scale-105 "
            key={index}
          >
            <div className="relative flex items-end justify-center w-40 cursor-pointer h-52 rounded-xl">
              <Image src={journal.img} alt="Journal" fill />
            </div>
            <div className="flex flex-col items-center leading-none">
              <span className="cursor-pointer text-action">
                {journal.title}
              </span>
              <span className="text-[10px] text-subtitle">{journal.date}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
