import asyncio
from websockets.server import serve
from PC import PC

class WebSocket:

    def start(addr):

        def parse_message(message):
            protocol = message[:2]
            match protocol:
                case "01":
                    print(message[2:])
                    PC.set_volume(message[2:])
                case "02":
                    PC.previous_track()
                case "03":
                    PC.next_track()
                case "04":
                    PC.pp_media()


        async def recv(messsages):
            async for message in messsages:
                parse_message(message)

        async def main():
            async with serve(recv, addr, 8000):
                await asyncio.Future()

        asyncio.run(main())