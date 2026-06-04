"use client"
import { useEffect } from 'react'

export default function GlobalError({ error }: { error: Error }) {
    useEffect(() => {
        console.error(error)
    }, [error])
    return (
        <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-2xl">Something went wrong</h1>
        </div>
    )
}
