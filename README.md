# Desktop Voice Assistant

A local voice assistant for Windows that listens for a wake word, transcribes spoken commands and uses OpenAI tool calling to decide which action should be executed on the computer.

The project was built as a practical study of **TypeScript, Node.js, speech recognition, AI tool calling and desktop automation**.

## Features

- Wake-word detection with **openWakeWord** (`Hey Jarvis`)
- Microphone recording with **FFmpeg**
- Local speech-to-text with **whisper.cpp**
- Natural-language command interpretation with the **OpenAI Responses API**
- Open installed Windows applications
- Open common folders such as Documents, Downloads and Desktop
- Search the web with Google
- Search directly inside specific websites such as YouTube
- Increase, decrease and mute system volume
- Tool-based architecture, making new actions easy to add

## How it works

```mermaid
flowchart LR
    A[Hey Jarvis] --> B[openWakeWord]
    B --> C[FFmpeg records audio]
    C --> D[whisper.cpp]
    D --> E[OpenAI]
    E --> F[Tool call]
    F --> G[Command executor]
    G --> H[Windows action]
```

For example, saying:

```text
Pesquise TypeScript no YouTube
```

can be interpreted as a `search_site` tool call. The assistant then validates the arguments and executes the corresponding local action.

## Available actions

| Tool | Purpose |
| --- | --- |
| `open_app` | Opens an installed application |
| `open_folder` | Opens a Windows folder |
| `search_google` | Searches a term on Google |
| `search_site` | Searches inside a specific website |
| `change_volume` | Changes the system volume |

Example voice commands:

```text
Abra o Spotify
Abra meus Downloads
Pesquise como aprender TypeScript
Pesquise Alanzoka no YouTube
Aumente o volume
Abaixe o volume
Mute o som
```

> The assistant is currently configured primarily for Portuguese voice commands.

## Tech stack

- **TypeScript**
- **Node.js**
- **OpenAI API**
- **Python**
- **openWakeWord**
- **whisper.cpp**
- **FFmpeg**
- **PowerShell / Windows APIs**

## Project structure

```text
src/
├── actions/       # Local Windows actions
├── ai/            # OpenAI client, instructions and tool definitions
├── assistant/     # Tool-call execution
├── audio/         # Recording and transcription
├── commands/      # Voice command flow
├── types/
├── utils/
├── index.ts
└── wake.py
```

## Requirements

Before running the project, install:

- Windows 10 or 11
- Node.js
- Python
- FFmpeg available in `PATH`
- whisper.cpp and a compatible Whisper model
- An OpenAI API key
- A working microphone

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
cd desktop_voice_assistant
```

Install the Node.js dependencies:

```bash
npm install
```

Install the Python dependencies:

```bash
pip install -r requirements.txt
```

Create your local environment file from the example:

```bash
copy .env.example .env
```

Then configure `.env`:

```env
OPENAI_KEY=your_openai_api_key
MICROPHONE=your_microphone_name
RECORDING_DURATION=3
WHISPERPATH=C:\path\to\whisper-cli.exe
MODELPATH=C:\path\to\whisper-model.bin
```

To find the exact FFmpeg microphone name on Windows, you can run:

```bash
ffmpeg -list_devices true -f dshow -i dummy
```

## Running

To run the wake-word listener, open a terminal in the `src` directory:

```bash
cd src
python wake.py
```

The assistant will wait for:

```text
Hey Jarvis
```

After detecting the wake word, it records the command, transcribes it and executes the selected action.

To run a single assistant cycle without the wake-word listener, from the project root use:

```bash
npm run dev
```

## Adding a new action

The assistant uses tools instead of hard-coded voice phrases. To add a capability:

1. Create the action in `src/actions`.
2. Add its tool definition in `src/ai/tools.ts`.
3. Register its handler in the command executor.

This allows different natural-language phrases to trigger the same capability without manually listing every possible sentence.

## Security

- Secrets are stored locally in `.env` and should never be committed.
- `.env.example` contains only configuration placeholders.
- AI responses are mapped to predefined tools instead of giving the model unrestricted shell access.
- URLs should be validated before being opened by the operating system.

## Roadmap

- Close running applications
- Shut down / restart the computer with confirmation
- Media controls
- Better command context between interactions
- Text-to-speech responses
- Background startup with Windows
- More desktop automation tools

## License

ISC
