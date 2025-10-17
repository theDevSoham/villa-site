"use client";

import { Search } from "lucide-react"; // Icon for the search field
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent } from "react";
import GuestsAndRoomsPopover from "./GuestsAndRoomPopover";

// Helper components for Date and Time inputs
const DateTimeInput = ({
  ariaLabel,
  placeholder,
}: {
  ariaLabel: string;
  placeholder: string;
}) => (
  <div className="relative flex-1 min-w-[200px]">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
    <Input
      type="datetime-local"
      placeholder={placeholder}
      className="w-full pl-10 h-12" // Increased padding for icon
      aria-label={ariaLabel}
    />
  </div>
);

const VillaSearchForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Search submitted!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col lg:flex-row items-stretch gap-3 bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-xl p-5 backdrop-blur-sm border border-gray-100/50 dark:border-gray-700/50 max-w-7xl mx-auto"
    >
      {/* 1. Search Field */}
      <div className="relative flex-1 min-w-[200px]">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
        <Input
          type="text"
          placeholder="Search for location, amenities..."
          className="w-full pl-10 h-12" // Increased padding for icon
        />
      </div>

      {/* 2. Check-in Date */}

      <DateTimeInput ariaLabel="Check-in date" placeholder="Check In" />

      {/* 3. Check-out Date */}

      <DateTimeInput ariaLabel="Check-out date" placeholder="Check Out" />

      {/* 4. Rooms & Guests Popover (NEW) */}
      <div className="flex-1 min-w-[180px]">
        <GuestsAndRoomsPopover />
      </div>

      {/* 5. Search Button */}
      <Button
        type="submit"
        className="w-full lg:w-auto px-8 py-3 h-12 text-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
      >
        Find Villas
      </Button>
    </form>
  );
};

export default VillaSearchForm;
