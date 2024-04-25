"use client"
import React from 'react'
import { Toaster } from 'sonner'

export default function ToasterProv({ children }: { children: React.ReactNode }) {

    return (
        <>
            <Toaster position='top-right' />
            {children}
        </>
    )
}
