import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Callout } from "./callout";
import { JSX, ClassAttributes, HTMLAttributes } from "react";

const useMDXComponent = (code: string) => {
    try {
        const fn = new Function(code);
        return fn({ ...runtime }).default;
    } catch (error) {
        console.error('Error in useMDXComponent:', error);
        return null;
    }
};

const components = {
    Image,
    Callout,
    html: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) => <div className="text-neutral-300" {...props} />,
    // h1: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => <h1 className="text-3xl font-bold text-neutral-300" {...props} />,
    strong: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) => <strong className="font-bold text-neutral-300" {...props} />,
    // body: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) => <div className="text-neutral-300" {...props} />,
    a: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLAnchorElement> & HTMLAttributes<HTMLAnchorElement>) => <a className="text-neutral-300 hover:text-blue-500 hover:underline" {...props} />,
    p: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => <p className=" text-neutral-300" {...props} />,
    // h2: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => <h2 className="text-2xl font-bold text-neutral-300" {...props} />,
    th: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLTableHeaderCellElement> & HTMLAttributes<HTMLTableHeaderCellElement>) => <th className="text-neutral-300" {...props} />,
    code: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) => <code className="text-neutral-300" {...props} />,
};

interface MdxProps {
    code: string;
}

export function MDXContent({ code }: MdxProps) {
    const Component = useMDXComponent(code);
    return <Component components={components} />;
}