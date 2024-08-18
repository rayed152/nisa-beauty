// components/DelayedRender.tsx

import { delay } from "@/lib/delay";

export default async function DelayedRender({
  children,
}: {
  children: React.ReactNode;
}) {
  await delay(4000);
  return <>{children}</>;
}
