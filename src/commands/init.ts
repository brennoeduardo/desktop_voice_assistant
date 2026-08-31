import path from "node:path"
import recordAudio from "../audio/recorder.js"
import handleCommand from "../commands/commandHandler.js"
import transcribeAudio from "../audio/transcriber.js"

export default async function listenForCommand(): Promise<void> {
    
    const audioPath = path.resolve("audio", "command.wav")

    await recordAudio(audioPath)

    const text = await transcribeAudio(audioPath)

    console.log(`Você disse: "${text}"`)

    handleCommand(text)
}