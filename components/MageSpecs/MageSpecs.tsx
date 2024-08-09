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

const magespecs = [
  {
    value: "arcane",
    label: "Arcane",
  },
  {
    value: "fire",
    label: "Fire",
  },
  {
    value: "frost",
    label: "Frost",
  },
];

interface ISelectSpec {
  value: string;
  onChange: (value: string) => void;
}

export function SelectSpecMage({ value, onChange }: ISelectSpec) {
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
            ? magespecs.find((magespec) => magespec.value === value)?.label
            : "Select your spec..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {magespecs.map((magespec) => (
                <CommandItem
                  key={magespec.value}
                  value={magespec.value}
                  onSelect={(currentValue) => {
                    onChange(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === magespec.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {magespec.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
