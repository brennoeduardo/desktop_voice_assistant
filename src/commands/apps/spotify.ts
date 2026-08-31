import { spawn } from "node:child_process"

export default function openSpotify(): void {
    console.log("Abrindo Spotify...")

    const spotify = spawn(
        "cmd",
        ["/c", "start", "", "spotify"],
        {
            detached: true,
            stdio: "ignore",
        }
    )

    spotify.unref()
}