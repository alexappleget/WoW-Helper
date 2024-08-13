"use client";

import React, { useState } from "react";
import { classSpecMap } from "@/lib/classSpecMap";
import { SelectClass } from "@/components/Combobox/Combobox";

export default function Home() {
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [selectedSpec, setSelectedSpec] = useState<string>("");

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <h1 className="text-xl font-bold">Welcome to Name Coming Soon</h1>
      <SelectClass value={selectedClass} onChange={setSelectedClass} />
      {selectedClass && (
        <>
          {React.createElement(
            classSpecMap[selectedClass as keyof typeof classSpecMap].component,
            {
              value: selectedSpec,
              onChange: setSelectedSpec,
            }
          )}
          {selectedSpec && (
            <p>You picked {classSpecMap[selectedClass].specs[selectedSpec]}!</p>
          )}
        </>
      )}
    </main>
  );
}
