import fetch from 'cross-fetch'

export type ApiResponse<T> = { data: T } | { error: string }

export async function fetchWithTimeout<T>(input: RequestInfo, init?: RequestInit, timeout = 8000): Promise<T> {
    const controller = new AbortController()
    const id = setTimeout(() => controller.abort(), timeout)
    try {
        const res = await fetch(input, { ...init, signal: controller.signal })
        clearTimeout(id)
        if (!res.ok) {
            const text = await res.text()
            throw new Error(text || res.statusText)
        }
        return (await res.json()) as T
    } finally {
        clearTimeout(id)
    }
}
