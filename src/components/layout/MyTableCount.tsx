/**
 * MyTableCount.tsx
 * MOCK / VISUAL PROTOTYPE ONLY
 * Header badge synced with localStorage My Table
 */

"use client";

import { useEffect, useState } from "react";
import { MOCK_ITEMS } from "@/lib/mock/items";
import {
  loadMyTable,
  MY_TABLE_CHANGE_EVENT,
} from "@/lib/storage/myTable";

const VALID_ITEM_IDS = MOCK_ITEMS.map((item) => item.id);

export default function MyTableCount() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      setCount(loadMyTable(VALID_ITEM_IDS).length);
    };

    updateCount();
    window.addEventListener(MY_TABLE_CHANGE_EVENT, updateCount);
    window.addEventListener("storage", updateCount);

    return () => {
      window.removeEventListener(MY_TABLE_CHANGE_EVENT, updateCount);
      window.removeEventListener("storage", updateCount);
    };
  }, []);

  return <span id="mtCount">({count})</span>;
}
