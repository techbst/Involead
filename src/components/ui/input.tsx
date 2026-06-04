"use client"
import * as React from 'react'
import { cn } from '@/lib/utils'

export const Input = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement> & { label?: string }
>(({ className, label, ...props }, ref) => {
    return (
        <label className="flex flex-col gap-2">
            {label && <span className="text-sm font-medium">{label}</span>}
            <input ref={ref} className={cn('px-3 py-2 border rounded-md', className)} {...props} />
        </label>
    )
})
Input.displayName = 'Input'

export default Input
