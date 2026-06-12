/**
 * src/lib/storage/myTable.ts
 * MOCK / VISUAL PROTOTYPE ONLY
 * localStorage adapter for My Table cart (client-side only)
 */

const STORAGE_KEY = "dnb-proto-mytable";

export const MY_TABLE_CHANGE_EVENT = "dnb-mytable-change";

function notifyMyTableChange(): void {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(MY_TABLE_CHANGE_EVENT));
  }
}

/**
 * Load My Table from localStorage
 * Validates and filters against known item IDs
 */
export function loadMyTable(validItemIds: string[]): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (id): id is string => typeof id === "string" && validItemIds.includes(id)
    );
  } catch {
    return [];
  }
}

/**
 * Save My Table to localStorage
 */
export function saveMyTable(items: string[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    notifyMyTableChange();
  } catch (e) {
    console.warn("localStorage not available:", e);
  }
}

/**
 * Add one item to My Table if not already present
 */
export function addToMyTable(itemId: string, validItemIds: string[]): string[] {
  const current = loadMyTable(validItemIds);
  if (current.includes(itemId)) return current;

  const updated = [...current, itemId];
  saveMyTable(updated);
  return updated;
}

/**
 * Clear My Table
 */
export function clearMyTable(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
    notifyMyTableChange();
  } catch (e) {
    console.warn("localStorage clear failed:", e);
  }
}

export function getMyTableCount(validItemIds: string[]): number {
  return loadMyTable(validItemIds).length;
}
