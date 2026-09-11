import { spawn } from "node:child_process"

export default function openWeb(query: string): void {
    console.log(`Pesquisando na web: ${query}...`)

    const termo = encodeURIComponent(query)
    const url = `https://www.google.com/search?q=${termo}`

    const process = spawn(
        "cmd",
        ["/c", "start", "", url],
        {
            detached: true,
            stdio: "ignore",
            windowsHide: true
        }
    )

    process.unref()
}