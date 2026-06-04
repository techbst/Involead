"use client"
import * as React from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export function Form({ schema, defaultValues = {}, onSubmit, children }: any) {
    const methods = useForm({ resolver: schema ? zodResolver(schema) : undefined, defaultValues })
    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit((values) => {
                    onSubmit(values)
                })}
            >
                {children}
            </form>
        </FormProvider>
    )
}
