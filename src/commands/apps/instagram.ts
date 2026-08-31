import { spawn } from "node:child_process"

export default function openInstagram(): void {
    console.log("Abrindo Instagram...")

    const instagram = spawn(
        "cmd",
        ["/c", "start", "", "https://www.instagram.com/"],
        {
            detached: true,
            stdio: "ignore",
        }
    )

    instagram.unref()
}