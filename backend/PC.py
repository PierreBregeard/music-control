from pynput.keyboard import Controller, Key

class PC:

    keyboard = Controller()

    def set_volume(self, vol):
        for _ in range(50):
            self.keyboard.press(Key.media_volume_down)
            self.keyboard.release(Key.media_volume_down)
        for _ in range(vol // 2):
            self.keyboard.press(Key.up)
            self.keyboard.release(Key.up)
    
    def next_track(self):
        self.keyboard.press(Key.media_next)
        self.keyboard.release(Key.media_next)

    def previous_track(self):
        self.keyboard.press(Key.media_previous)
        self.keyboard.release(Key.media_previous)

    def pp_media(self):
        self.keyboard.press(Key.media_play_pause)
        self.keyboard.release(Key.media_play_pause)