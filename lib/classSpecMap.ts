import { SelectSpecDK } from "@/components/DeathKnightSpecs/DeathKnightSpecs";
import { SelectSpecDH } from "@/components/DemonHunterSpecs/DemonHunterSpecs";
import { SelectSpecDruid } from "@/components/DruidSpecs/DruidSpecs";
import { SelectSpecEvoker } from "@/components/EvokerSpecs/EvokerSpecs";
import { SelectSpecHunter } from "@/components/HunterSpecs/HunterSpecs";
import { SelectSpecMage } from "@/components/MageSpecs/MageSpecs";
import { SelectSpecMonk } from "@/components/MonkSpecs/MonkSpecs";
import { SelectSpecPaladin } from "@/components/PaladinSpecs/PaladinSpecs";
import { SelectSpecPriest } from "@/components/PriestSpecs/PriestSpecs";
import { SelectSpecRogue } from "@/components/RogueSpecs/RogueSpecs";
import { SelectSpecShaman } from "@/components/ShamanSpecs/ShamanSpecs";
import { SelectSpecWarlock } from "@/components/WarlockSpecs/WarlockSpecs";
import { SelectSpecWarrior } from "@/components/WarriorSpecs/WarriorSpecs";

export const classSpecMap = {
  deathknight: {
    component: SelectSpecDK,
    specs: {
      blood: "Blood",
      frost: "Frost",
      unholy: "Unholy",
    },
  },
  demonhunter: {
    component: SelectSpecDH,
    specs: {
      havoc: "Havoc",
      vengeance: "Vengeance",
    },
  },
  druid: {
    component: SelectSpecDruid,
    specs: {
      balance: "Balance",
      feral: "Feral",
      guardian: "Guardian",
      restoration: "Restoration",
    },
  },
  evoker: {
    component: SelectSpecEvoker,
    specs: {
      devastation: "Devastation",
      preservation: "Preservation",
    },
  },
  hunter: {
    component: SelectSpecHunter,
    specs: {
      beastmastery: "Beast Mastery",
      marksmanship: "Marksmanship",
      survival: "Survival",
    },
  },
  mage: {
    component: SelectSpecMage,
    specs: {
      arcane: "Arcane",
      fire: "Fire",
      frost: "Frost",
    },
  },
  monk: {
    component: SelectSpecMonk,
    specs: {
      brewmaster: "Brewmaster",
      fistweaver: "Fistweaver",
      mistweaver: "Mistweaver",
      windwalker: "Windwalker",
    },
  },
  paladin: {
    component: SelectSpecPaladin,
    specs: {
      holy: "Holy",
      protection: "Protection",
      retribution: "Retribution",
    },
  },
  priest: {
    component: SelectSpecPriest,
    specs: {
      discipline: "Discipline",
      holy: "Holy",
      shadow: "Shadow",
    },
  },
  rogue: {
    component: SelectSpecRogue,
    specs: {
      assassin: "Assassin",
      outlaw: "Outlaw",
      subtlety: "Subtlety",
    },
  },
  shaman: {
    component: SelectSpecShaman,
    specs: {
      elemental: "Elemental",
      enhancement: "Enhancement",
      restoration: "Restoration",
    },
  },
  warlock: {
    component: SelectSpecWarlock,
    specs: {
      afflication: "Affliction",
      demonology: "Demonology",
      destruction: "Destruction",
    },
  },
  warrior: {
    component: SelectSpecWarrior,
    specs: {
      arms: "Arms",
      fury: "Fury",
      protection: "Protection",
    },
  },
};
