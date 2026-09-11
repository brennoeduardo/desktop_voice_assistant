export const tools = [
    {
        type: "function" as const,
        name: "open_app",
        description: "Abre um aplicativo instalado no computador",
        strict: true,
        parameters: {
            type: "object",
            properties: {
                name: {
                    type: "string",
                    description: "Nome do aplicativo"
                }
            },
            required: ["name"],
            additionalProperties: false
        }
    },
    {
        type: "function" as const,
        name: "search_google",
        description: "Pesquisa um termo no Google quando nenhum site específico é informado.",
        strict: true,
        parameters: {
            type: "object",
            properties: {
                query: {
                    type: "string",
                    description: "Termo que será pesquisado."
                }
            },
            required: ["query"],
            additionalProperties: false
        }
    },
    {
        type: "function" as const,
        name: "search_site",
        description: "Pesquisa um termo dentro de um site específico informado pelo usuário.",
        strict: true,
        parameters: {
            type: "object",
            properties: {
                url: {
                    type: "string",
                    description: "URL completa da busca no site solicitado."
                }
            },
            required: ["url"],
            additionalProperties: false
        }
    },
    {
        type: "function" as const,
        name: "change_volume",
        description: "Altera o volume do computador.",
        strict: true,
        parameters: {
            type: "object",
            properties: {
                action: {
                    type: "string",
                    enum: ["up", "down", "mute"]
                }
            },
            required: ["action"],
            additionalProperties: false
        }
    },
    {
        type: "function" as const,
        name: "open_folder",
        description: "Abre uma pasta do Windows, como Documentos, Downloads, Desktop, Imagens ou Vídeos",
        strict: true,
        parameters: {
            type: "object",
            properties: {
                folder: {
                    type: "string",
                    description: "Nome da pasta que deve ser aberta"
                }
            },
            required: ["folder"],
            additionalProperties: false
        }
    }
]