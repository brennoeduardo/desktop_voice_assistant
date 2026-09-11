import path from "node:path"

import recordAudio from "../audio/recorder.js"
import transcribeAudio from "../audio/transcriber.js"

import understandCommand from "../ai/understandCommand.js"
import { executeCommand } from "../assistant/executeCommand.js"

export default async function listenForCommand(): Promise<void> {

    const audioPath = path.resolve("audio", "command.wav")

    await recordAudio(audioPath)

    const text = await transcribeAudio(audioPath)

    console.log(`Você disse: "${text}"`)

    const commands = await understandCommand(text)

    await executeCommand(commands)
}