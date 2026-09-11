import { spawn } from "node:child_process"
import path from "node:path"
import os from "node:os"

export default function openFolder(folder: string): void {

    const home = os.homedir()

    const folders: Record<string, string> = {
        documentos: path.join(home, "Documents"),
        documents: path.join(home, "Documents"),

        downloads: path.join(home, "Downloads"),

        desktop: path.join(home, "Desktop"),
        "área de trabalho": path.join(home, "Desktop"),

        imagens: path.join(home, "Pictures"),
        pictures: path.join(home, "Pictures"),

        videos: path.join(home, "Videos"),
        vídeos: path.join(home, "Videos")
    }

    const normalized = folder.toLowerCase()

    const folderPath = folders[normalized]

    if (!folderPath) {
        console.log(`Pasta não reconhecida: ${folder}`)
        return
    }

    console.log(`Abrindo pasta: ${folderPath}`)

    spawn("explorer.exe", [folderPath], {
        detached: true,
        stdio: "ignore"
    }).unref()
}