import { execFile } from "node:child_process"

export default function searchSite(rawUrl: string): void {
    try {
        const url = new URL(rawUrl)

        if (!["http:", "https:"].includes(url.protocol)) {
            console.log("URL não permitida")
            return
        }

        execFile(
            "powershell.exe",
            [
                "-NoProfile",
                "-Command",
                "Start-Process $env:ASSISTANT_URL"
            ],
            {
                env: {
                    ...process.env,
                    ASSISTANT_URL: url.toString()
                }
            }
        )

    } catch {
        console.log("URL inválida")
    }
}