import Link from 'next/link'
import React from 'react'
type ButtonProps = {
    className?: string;
    href: string;
    children: React.ReactNode
};

export default function Button({ children, href, className }: ButtonProps) {
    return (
        <Link href={href} className={`btn  ${className}`}>
            {children}
        </Link>
    )
}
