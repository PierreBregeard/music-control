import asyncio
from websockets.server import serve
from PC import PC

class WebSocket:

    def start(addr):

        Pc = PC()
        def parse_message(message):
            protocol = message[:2]
            match protocol:
                case "01":
                    Pc.set_volume(int(message[2:]))
                case "02":
                    Pc.previous_track()
                case "03":
                    Pc.next_track()
                case "04":
                    Pc.pp_media()


        async def recv(messsages):
            async for message in messsages:
                parse_message(message)

        async def main():
            async with serve(recv, addr, 8000):
                await asyncio.Future()

        asyncio.run(main())