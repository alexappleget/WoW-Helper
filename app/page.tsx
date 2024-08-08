"use client";

import { SelectSpecDH } from "@/components/DemonHunterSpecs/DemonHunterSpecs";
import { SelectSpecDK } from "@/components/DeathKnightSpecs/DeathKnightSpecs";
import { SelectSpecDruid } from "@/components/DruidSpecs/DruidSpecs";
import { SelectSpecEvoker } from "@/components/EvokerSpecs/EvokerSpecs";
import { SelectSpecHunter } from "@/components/HunterSpecs/HunterSpecs";
import { SelectClass } from "@/components/Combobox/Combobox";
import { useState } from "react";

export default function Home() {
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [selectedSpec, setSelectedSpec] = useState<string>("");

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <h1 className="text-xl font-bold">Welcome to WoW Companion</h1>
      <SelectClass value={selectedClass} onChange={setSelectedClass} />
      {selectedClass === "demonhunter" && (
        <>
          <SelectSpecDH value={selectedSpec} onChange={setSelectedSpec} />
          {selectedSpec === "havoc" && <p>You picked Havoc!</p>}
          {selectedSpec === "vengeance" && <p>You picked Vengeance!</p>}
        </>
      )}
      {selectedClass === "deathknight" && (
        <>
          <SelectSpecDK value={selectedSpec} onChange={setSelectedSpec} />
          {selectedSpec === "blood" && <p>You picked Blood!</p>}
          {selectedSpec === "frost" && <p>You picked Frost!</p>}
          {selectedSpec === "unholy" && <p>You picked Unholy!</p>}
        </>
      )}
      {selectedClass === "druid" && (
        <>
          <SelectSpecDruid value={selectedSpec} onChange={setSelectedSpec} />
          {selectedSpec === "boomkin" && <p>You picked Boomkin!</p>}
          {selectedSpec === "feral" && <p>You picked Feral!</p>}
          {selectedSpec === "guardian" && <p>You picked Guardian!</p>}
          {selectedSpec === "restoration" && <p>You picked Restoration!</p>}
        </>
      )}
      {selectedClass === "evoker" && (
        <>
          <SelectSpecEvoker value={selectedSpec} onChange={setSelectedSpec} />
          {selectedSpec === "devastation" && <p>You picked Devastation!</p>}
          {selectedSpec === "preservation" && <p>You picked Preservation!</p>}
        </>
      )}
      {selectedClass === "hunter" && (
        <>
          <SelectSpecHunter value={selectedSpec} onChange={setSelectedSpec} />
          {selectedSpec === "beastmastery" && <p>You picked Beast Mastery!</p>}
          {selectedSpec === "marksmanship" && <p>You picked Marksmanship!</p>}
          {selectedSpec === "survival" && <p>You picked Survival!</p>}
        </>
      )}
      {selectedClass === "mage" && (
        <div>
          <p>You picked Mage!</p>
        </div>
      )}
      {selectedClass === "monk" && (
        <div>
          <p>You picked Monk!</p>
        </div>
      )}
      {selectedClass === "paladin" && (
        <div>
          <p>You picked Paladin!</p>
        </div>
      )}
      {selectedClass === "priest" && (
        <div>
          <p>You picked Priest!</p>
        </div>
      )}
      {selectedClass === "rogue" && (
        <div>
          <p>You picked Rogue!</p>
        </div>
      )}
      {selectedClass === "shaman" && (
        <div>
          <p>You picked Shaman!</p>
        </div>
      )}
      {selectedClass === "warlock" && (
        <div>
          <p>You picked Warlock!</p>
        </div>
      )}
      {selectedClass === "warrior" && (
        <div>
          <p>You picked Warrior!</p>
        </div>
      )}
    </main>
  );
}
