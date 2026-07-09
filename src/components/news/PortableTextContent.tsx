"use client";

import { PortableText } from "@portabletext/react";

const components = {
  block: {
    h1: ({ children }: any) => (
      <h1 className="mb-6 mt-10 text-4xl font-black">
        {children}
      </h1>
    ),

    h2: ({ children }: any) => (
      <h2 className="mb-5 mt-10 text-3xl font-bold">
        {children}
      </h2>
    ),

    h3: ({ children }: any) => (
      <h3 className="mb-4 mt-8 text-2xl font-bold">
        {children}
      </h3>
    ),

    normal: ({ children }: any) => (
      <p className="mb-7 text-xl leading-9 text-slate-800">
        {children}
      </p>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="my-8 border-l-4 border-[#C9961A] bg-slate-50 px-6 py-4 italic text-slate-700">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className="mb-8 list-disc space-y-3 pl-8">
        {children}
      </ul>
    ),

    number: ({ children }: any) => (
      <ol className="mb-8 list-decimal space-y-3 pl-8">
        {children}
      </ol>
    ),
  },

  listItem: {
    bullet: ({ children }: any) => (
      <li className="text-lg leading-8">
        {children}
      </li>
    ),

    number: ({ children }: any) => (
      <li className="text-lg leading-8">
        {children}
      </li>
    ),
  },

  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-[#C9961A] underline"
      >
        {children}
      </a>
    ),

    strong: ({ children }: any) => (
      <strong className="font-bold">
        {children}
      </strong>
    ),

    em: ({ children }: any) => (
      <em className="italic">
        {children}
      </em>
    ),
  },
};

export default function PortableTextContent({
  value,
}: {
  value: any;
}) {
  return (
    <article className="mx-auto max-w-none">
      <PortableText
        value={value}
        components={components}
      />
    </article>
  );
}