import Link from 'next/link';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
// import { TweetComponent } from './tweet'; // Commented out as the module is not found
import { highlight } from 'sugar-high';
import React, { ReactNode } from 'react';
import { LiveCode } from './sandpack';

interface TableProps {
  data: {
    headers: string[];
    rows: string[][];
  };
}

function Table({ data }: TableProps) {
  let headers = data.headers.map((header: string, index: number) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row: string[], index: number) => (
    <tr key={index}>
      {row.map((cell: string, cellIndex: number) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

interface LinkProps {
  href: string;
  children: ReactNode;
}

function CustomLink(props: LinkProps) {
  let href = props.href;

  if (href.startsWith('/')) {
    return (
      <Link href={href}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith('#')) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

interface CalloutProps {
  emoji: ReactNode;
  children: ReactNode;
}

function Callout(props: CalloutProps) {
  return (
    <div className="px-4 py-3 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  );
}

interface ProsCardProps {
  title: string;
  pros: string[];
}

function ProsCard({ title, pros }: ProsCardProps) {
  return (
    <div className="border border-emerald-200 dark:border-emerald-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 my-4 w-full">
      <span>{`You might use ${title} if...`}</span>
      <div className="mt-4">
        {pros.map((pro: string) => (
          <div key={pro} className="flex font-medium items-baseline mb-2">
            <div className="h-4 w-4 mr-2">
              <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </g>
              </svg>
            </div>
            <span>{pro}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface ConsCardProps {
  title: string;
  cons: string[];
}

function ConsCard({ title, cons }: ConsCardProps) {
  return (
    <div className="border border-red-200 dark:border-red-900 bg-neutral-50 dark:bg-neutral-900 rounded-xl p-6 my-6 w-full">
      <span>{`You might not use ${title} if...`}</span>
      <div className="mt-4">
        {cons.map((con: string) => (
          <div key={con} className="flex font-medium items-baseline mb-2">
            <div className="h-4 w-4 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 text-red-500"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </div>
            <span>{con}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

interface CodeProps {
  children: string;
  props: any;
}

function Code({ children, ...props }: CodeProps) {
  let codeHTML = highlight(children);
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-'); // Replace multiple - with single -
}

function createHeading(level: number) {
  // eslint-disable-next-line react/display-name
  return ({ children }: { children: ReactNode }) => {
    let slug = slugify((children as string)?.toString());
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    );
  };
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  Callout,
  ProsCard,
  ConsCard,
  // StaticTweet: TweetComponent, // Commented out as the module is not found
  code: Code,
  Table,
  LiveCode,
};

interface CustomMDXProps {
  source: string;
  components?: any;
}

export function CustomMDX(props: CustomMDXProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }} />
  );
}

CustomMDX.displayName = 'CustomMDX';