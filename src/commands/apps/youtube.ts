import { spawn } from "node:child_process"

export default function openYoutube(): void {
    console.log("Abrindo Youtube...")

    const youtube = spawn(
        "cmd",
        ["/c", "start", "", "https://www.youtube.com/"],
        {
            detached: true,
            stdio: "ignore",
        }
    )

    youtube.unref()
}