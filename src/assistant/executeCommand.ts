import openApp from "../actions/openApp.js"
import openWeb from "../actions/openWeb.js"
import openFolder from "../actions/openFolder.js"
import searchSite from "../actions/searchSite.js"
import changeVolume from "../actions/changeVolume.js"

const commands = [
    {
        keyword: "open_app",
        action: (args: { name: string }) => openApp(args.name)
    },
    {
        keyword: "search_site",
        action: (args: { url: string }) => searchSite(args.url)
    },
    {
        keyword: "search_google",
        action: (args: { query: string }) => openWeb(args.query)
    },
    {
        keyword: "open_folder",
        action: (args: { folder: string }) => openFolder(args.folder)
    },
    {
        keyword: "change_volume",
        action: (args: { action: "up" | "down" | "mute" }) => changeVolume(args.action)
    }
]

export async function executeCommand(output: any[]) {

    for (const item of output) {

        if (item.type !== "function_call") continue

        const args = JSON.parse(item.arguments)

        const command = commands.find(command => command.keyword === item.name)

        if (!command) {
            console.log(`Comando não encontrado: ${item.name}`)
            continue
        }

        command.action(args)
    }
}