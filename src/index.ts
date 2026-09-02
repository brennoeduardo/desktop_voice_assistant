import listenForCommand from "./commands/init.js"

async function main(): Promise<void> {
    try {

        console.log("Assistente iniciado...")

        await listenForCommand()

    } catch (error) {
        if (error instanceof Error) {
            console.error(`${error.message}`)
            return
        }
        console.error("Ocorreu um erro...")
    }
}

main()