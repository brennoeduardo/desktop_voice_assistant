import normalizeText from "../utils/normalizeText.js"
import { commands } from "./commands.js"

export default function handleCommand(text: string): void {
    
    const command = normalizeText(text)

    const matchedCommand = commands.find(({ keywords }) =>
        keywords.some((keyword) => command.includes(keyword))
    )

    if (!matchedCommand) {
        console.log(`Não reconheci o comando: "${text}"`)
        return
    }

    matchedCommand.action()
}