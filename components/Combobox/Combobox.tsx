"use client";

import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "../Button/button";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "../Command Component/command";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover/popover";
import { useState } from "react";

const wowClasses = [
  {
    value: "demonhunter",
    label: "Demon Hunter",
  },
  {
    value: "deathknight",
    label: "Death Knight",
  },
  {
    value: "druid",
    label: "Druid",
  },
  {
    value: "evoker",
    label: "Evoker",
  },
  {
    value: "hunter",
    label: "Hunter",
  },
  {
    value: "mage",
    label: "Mage",
  },
  {
    value: "monk",
    label: "Monk",
  },
  {
    value: "paladin",
    label: "Paladin",
  },
  {
    value: "priest",
    label: "Priest",
  },
  {
    value: "rogue",
    label: "Rogue",
  },
  {
    value: "shaman",
    label: "Shaman",
  },
  {
    value: "warlock",
    label: "Warlock",
  },
  {
    value: "warrior",
    label: "Warrior",
  },
];

interface ISelectClass {
  value: string;
  onChange: (value: string) => void;
}

export function SelectClass({ value, onChange }: ISelectClass) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? wowClasses.find((wowClass) => wowClass.value === value)?.label
            : "Select your class..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {wowClasses.map((wowClass) => (
                <CommandItem
                  key={wowClass.value}
                  value={wowClass.value}
                  onSelect={(currentValue) => {
                    onChange(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === wowClass.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {wowClass.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
