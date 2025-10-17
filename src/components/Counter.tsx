"use client";

import { Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";

// --- Guest and Room Counter Component ---
interface CounterProps {
  label: string;
  description: string;
  count: number;
  setCount: (count: number) => void;
  min?: number;
}

const Counter: React.FC<CounterProps> = ({
  label,
  description,
  count,
  setCount,
  min = 1,
}) => (
  <div className="flex items-center justify-between py-3 border-b last:border-b-0">
    <div>
      <p className="font-semibold text-gray-800">{label}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
    <div className="flex items-center space-x-2">
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={() => setCount(Math.max(min, count - 1))}
        disabled={count <= min}
        className="h-8 w-8"
      >
        <Minus className="h-4 w-4" />
      </Button>
      <span className="w-6 text-center font-medium">{count}</span>
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={() => setCount(count + 1)}
        className="h-8 w-8"
      >
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  </div>
);

export default Counter;
