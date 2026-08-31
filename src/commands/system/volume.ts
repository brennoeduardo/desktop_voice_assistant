import { execFile } from "node:child_process"

function changeVolume(key: number): void {
    execFile(
        "powershell.exe",
        [
            "-NoProfile",
            "-Command",
            `$wshell = New-Object -ComObject WScript.Shell; $wshell.SendKeys([char]${key})`
        ],
        (error) => {
            if (error) {
                console.error("Erro ao alterar volume:", error.message)
            }
        }
    )
}

export function volumeUp(): void {
    console.log("Aumentando volume...")
    changeVolume(175)
    changeVolume(175)
}

export function volumeDown(): void {
    console.log("Diminuindo volume...")
    changeVolume(174)
    changeVolume(174)
}

export function muteVolume(): void {
    console.log("Mutando...")
    changeVolume(173)
    changeVolume(173)
}