/**
 * AddToMyTableButton.tsx
 * MOCK / VISUAL PROTOTYPE ONLY
 * Adds a mock item to My Table in localStorage
 */

"use client";

import { useState } from "react";
import { MOCK_ITEMS } from "@/lib/mock/items";
import { addToMyTable } from "@/lib/storage/myTable";
import Button from "@/components/ui/Button";

const VALID_ITEM_IDS = MOCK_ITEMS.map((item) => item.id);

interface AddToMyTableButtonProps {
  itemId: string;
}

export default function AddToMyTableButton({ itemId }: AddToMyTableButtonProps) {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addToMyTable(itemId, VALID_ITEM_IDS);
    setAdded(true);
  };

  if (added) {
    return (
      <Button asLink href="/my-table" variant="ghost">
        View My Table
      </Button>
    );
  }

  return (
    <Button type="button" variant="ghost" onClick={handleClick}>
      Add to My Table
    </Button>
  );
}
