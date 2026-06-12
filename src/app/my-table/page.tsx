/**
 * src/app/my-table/page.tsx
 * MOCK / VISUAL PROTOTYPE ONLY
 * My Table page — routes to Client Component
 */

import MyTableClient from "@/components/my-table/MyTableClient";

export const metadata = {
  title: "My Table — Duchess & Butler",
  description: "Your saved items",
};

export default function MyTablePage() {
  return <MyTableClient />;
}
