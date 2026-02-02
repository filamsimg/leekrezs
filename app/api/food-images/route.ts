import { NextResponse } from "next/server";
import { readdir } from "node:fs/promises";
import path from "node:path";

const IMAGE_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".webp",
  ".gif",
  ".svg",
  ".ico",
]);

export async function GET() {
  const foodDir = path.join(process.cwd(), "public", "food");
  const entries = await readdir(foodDir, { withFileTypes: true });

  const images = entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase()))
    .sort((a, b) => a.localeCompare(b))
    .map((name) => `/food/${encodeURIComponent(name)}`);

  return NextResponse.json({ images });
}
