"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Users } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import Counter from "./Counter";

// --- Popover Component for Guests and Rooms ---
const GuestsAndRoomsPopover = () => {
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const totalGuests = adults + children + infants;
  const displayText = `${rooms} Room${rooms > 1 ? "s" : ""}, ${totalGuests} Guest${totalGuests > 1 ? "s" : ""}`;

  return (
    <Popover>
      <PopoverTrigger asChild className="flex-1">
        <Button
          variant="outline"
          className="w-full lg:w-auto justify-start text-left font-normal h-12"
          style={{ width: "100%" }}
        >
          <Users className="mr-2 h-4 w-4 text-gray-500" />
          {displayText}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 bg-white rounded-lg drop-shadow-md">
        <Counter
          label="Rooms"
          description="Number of villas or rooms needed"
          count={rooms}
          setCount={setRooms}
          min={1}
        />
        <Counter
          label="Adults"
          description="Ages 13+"
          count={adults}
          setCount={setAdults}
          min={1}
        />
        <Counter
          label="Children"
          description="Ages 2–12"
          count={children}
          setCount={setChildren}
          min={0}
        />
        <Counter
          label="Infants"
          description="Under 2"
          count={infants}
          setCount={setInfants}
          min={0}
        />
      </PopoverContent>
    </Popover>
  );
};

export default GuestsAndRoomsPopover;
