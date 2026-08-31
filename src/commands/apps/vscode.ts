import { spawn } from "node:child_process"

export default function openVSCode(): void {
    console.log("Abrindo VSCode...")

    const vscode = spawn(
        "cmd",
        ["/c", "start", "", "code"],
        {
            detached: true,
            stdio: "ignore",
            windowsHide: true,
        }
    )

    vscode.unref()
}