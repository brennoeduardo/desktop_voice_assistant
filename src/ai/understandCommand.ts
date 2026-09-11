import OpenAI from "openai"
import dotenv from "dotenv"

import { tools } from "./tools.js"
import { instructions } from "./instructions.js"

dotenv.config({ quiet: true })

const apiKey = process.env.OPENAI_KEY

const client = new OpenAI({ apiKey })

export default async function understandCommand(input: string) {

    const response = await client.responses.create({
        model: "gpt-5-nano",
        instructions,
        input,
        tools,
        tool_choice: "auto"
    })

    return response.output.filter(item => item.type === "function_call")
}