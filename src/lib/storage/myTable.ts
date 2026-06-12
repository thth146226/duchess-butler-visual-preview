/**
 * src/lib/storage/myTable.ts
 * MOCK / VISUAL PROTOTYPE ONLY
 * localStorage adapter for My Table cart (client-side only)
 */

const STORAGE_KEY = 'dnb-proto-mytable';

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

    // Filter to only valid IDs
    return parsed.filter(
      (id): id is string => typeof id === 'string' && validItemIds.includes(id)
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
  } catch (e) {
    // Storage unavailable (e.g., private browsing)
    console.warn('localStorage not available:', e);
  }
}

/**
 * Clear My Table
 */
export function clearMyTable(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.warn('localStorage clear failed:', e);
  }
}
