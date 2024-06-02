from threading import Thread
from Flask import Flask
from WebSocket import WebSocket
import socket

def get_ipv4_address():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    s.connect(("8.8.8.8", 80))
    ipv4_address = s.getsockname()[0]
    s.close()
    return ipv4_address

addr = get_ipv4_address()

Thread(target=WebSocket.start, args=(addr, ), daemon=True).start()
flask = Thread(target=Flask.start, args=(addr, ), daemon=True)
flask.start()
flask.join()