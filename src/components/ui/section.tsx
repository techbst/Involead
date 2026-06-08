import React from 'react'

export default function Section({ title, children }: { title?: string; children: React.ReactNode }) {
    return (
        <section className="px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
            {title && <h2 className="mb-4 max-w-3xl text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-tight">{title}</h2>}
            <div className="max-w-5xl">{children}</div>
        </section>
    )
}
