import { execFile } from "node:child_process"
import { promisify } from "node:util"

const execFileAsync = promisify(execFile)

export default async function openApp(action: string): Promise<void> {
    console.log(`Procurando aplicativo: ${action}...`)

    const script = `
        $name = $env:ASSISTANT_APP_NAME

        $app = Get-StartApps |
            Where-Object { $_.Name -like "*$name*" } |
            Select-Object -First 1

        if (-not $app) {
            throw "Aplicativo não encontrado: $name"
        }

        Write-Output ("Encontrado: " + $app.Name)
        Write-Output ("AppID: " + $app.AppID)

        Start-Process explorer.exe -ArgumentList ("shell:AppsFolder\\" + $app.AppID)
    `

    try {
        const { stdout, stderr } = await execFileAsync(
            "powershell.exe",
            ["-NoProfile", "-Command", script],
            {
                windowsHide: true,
                env: {
                    ...process.env,
                    ASSISTANT_APP_NAME: action
                }
            }
        )

        if (stdout) {
            console.log(stdout.trim())
        }

        if (stderr) {
            console.error(stderr.trim())
        }

    } catch (error) {
        console.error("Erro ao abrir aplicativo:", error)
    }
}