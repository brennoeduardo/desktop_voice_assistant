import type { VoiceCommand } from "../types/type.js";

import openInstagram from "./apps/instagram.js";
import openSpotify from "./apps/spotify.js";
import openVSCode from "./apps/vscode.js";
import openYoutube from "./apps/youtube.js";

import { volumeDown, muteVolume, volumeUp } from "./system/volume.js";

export const commands: VoiceCommand[] = [
    {
        keywords: ["spotify"],
        action: openSpotify,
    },
    {
        keywords: ["youtube"],
        action: openYoutube,
    },
    {
        keywords: ["instagram"],
        action: openInstagram,
    },
    {
        keywords: ["vs code", "vscode", "visual studio code"],
        action: openVSCode,
    },
   // Sistema
    {
        keywords: ["aumenta o volume", "aumentar volume"],
        action: volumeUp,
    },
    {
        keywords: ["diminui o volume", "diminuir volume"],
        action: volumeDown,
    },
    {
        keywords: ["muta", "mutar", "silenciar"],
        action: muteVolume,
    },
]