import { createContext } from "react";
import WebSocket, { webSocketContextType } from "../services/WebSocket";

interface WebSocketProviderProps {
    children: React.ReactNode
}

export const WebSocketContext = createContext<webSocketContextType|null>(null);

function WebSocketProvider({ children }: WebSocketProviderProps) {
    
    const websocket = WebSocket();
    
    return (
        <WebSocketContext.Provider value={websocket}>
            {children}
        </WebSocketContext.Provider>
    )
}

export default WebSocketProvider;