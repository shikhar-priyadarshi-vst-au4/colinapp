import { randomBytes } from "crypto";

export function guid(): string {
  const hexString = randomBytes(12).toString("hex");
  return hexString;
}