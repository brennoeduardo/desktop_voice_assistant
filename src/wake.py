import subprocess
import winsound
import openwakeword
import sounddevice as sd
from openwakeword.model import Model

WAKE_WORD = "hey_jarvis"
WAKE_THRESHOLD = 0.7
SAMPLE_RATE = 16000
CHANNELS = 1
BLOCK_SIZE = 1280
SOUND_FILE = "../audio/jarvis-0001.wav"

openwakeword.utils.download_models()

model = Model(wakeword_models=[WAKE_WORD])

wake_detected = False

def play_sound():
    winsound.PlaySound(SOUND_FILE, winsound.SND_FILENAME | winsound.SND_ASYNC)

def handle_audio(indata, frames, time, status):
    global wake_detected

    audio_frame = indata[:, 0]
    prediction = model.predict(audio_frame)

    confidence = prediction[WAKE_WORD]

    if confidence > WAKE_THRESHOLD:
        print("Sim, senhor!")
        wake_detected = True
        raise sd.CallbackStop()


def wait_for_wake_word():
    global wake_detected

    wake_detected = False
    model.reset()

    print("Aguardando 'Hey Jarvis'...")

    with sd.InputStream(
        samplerate=SAMPLE_RATE,
        channels=CHANNELS,
        blocksize=BLOCK_SIZE,
        dtype="int16",
        callback=handle_audio,
    ):
        while not wake_detected:
            sd.sleep(100)


def start_assistant():
    subprocess.run(
        ["npx.cmd", "tsx", "src/index.ts"],
        cwd="..",
    )

def main():
    while True:
        wait_for_wake_word()
        
        play_sound()
        start_assistant()

        print("Voltando a ouvir...")

if __name__ == "__main__":
    main()