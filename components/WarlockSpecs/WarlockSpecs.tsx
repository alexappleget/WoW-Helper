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

const warlockspecs = [
  {
    value: "affliction",
    label: "Affliction",
  },
  {
    value: "demonology",
    label: "Demonology",
  },
  {
    value: "destruction",
    label: "Destruction",
  },
];

interface ISelectSpec {
  value: string;
  onChange: (value: string) => void;
}

export function SelectSpecWarlock({ value, onChange }: ISelectSpec) {
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
            ? warlockspecs.find((warlockspec) => warlockspec.value === value)
                ?.label
            : "Select your spec..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {warlockspecs.map((warlockspec) => (
                <CommandItem
                  key={warlockspec.value}
                  value={warlockspec.value}
                  onSelect={(currentValue) => {
                    onChange(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === warlockspec.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {warlockspec.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
