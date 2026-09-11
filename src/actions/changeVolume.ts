import { execFile } from "node:child_process"

export default function changeVolume(action: "up" | "down" | "mute"): void {

    const keys = {
        up: 175,
        down: 174,
        mute: 173
    }

    const key = keys[action]

    const repetitions = action === "mute" ? 1 : 5

    const script = `
        $wsh = New-Object -ComObject WScript.Shell

        1..${repetitions} | ForEach-Object {
            $wsh.SendKeys([char]${key})
            Start-Sleep -Milliseconds 50
        }
    `

    execFile(
        "powershell.exe",
        ["-NoProfile", "-Command", script]
    )
}