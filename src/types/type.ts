export type VoiceCommand = {
    keywords: string[]
    action: () => void
}