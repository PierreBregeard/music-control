import keyboard
from ctypes import cast, POINTER
from comtypes import CLSCTX_ALL
from pycaw.pycaw import AudioUtilities, IAudioEndpointVolume

class PC:

    def set_volume(vol):
        devices = AudioUtilities.GetSpeakers()
        interface = devices.Activate(IAudioEndpointVolume._iid_, CLSCTX_ALL, None)
        volume = cast(interface, POINTER(IAudioEndpointVolume))
        volume.SetMasterVolumeLevelScalar(vol / 100, None)
    
    def next_track():
        keyboard.press("next track")

    def previous_track():
        keyboard.press("previous track")

    def pp_media():
        keyboard.press("play/pause media")