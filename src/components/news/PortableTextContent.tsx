"use client";

import { PortableText } from "@portabletext/react";

export default function PortableTextContent({
  value,
}: {
  value: any;
}) {
  return (
    <article className="max-w-none text-lg leading-8">
      <PortableText value={value} />
    </article>
  );
}