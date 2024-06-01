import useWebSocket from 'react-use-websocket';
import PcInstructions from '../enums/PcInstructions';

function WebSocket() {

    const {sendMessage, lastMessage, readyState} = useWebSocket(
        `ws://${window.location.hostname}:8000`,
    {
        shouldReconnect: (closeEvent) => true,
        reconnectAttempts: 10,
        reconnectInterval: (attemptNumber) =>
          Math.min(Math.pow(2, attemptNumber) * 1000, 10000),
      }
    );

    function sendInsctution(inst: PcInstructions, val: number|null = null) {
        sendMessage(`${inst}${val ?? ''}`)
    }

    return {
        sendInsctution, 
        lastMessage,
        readyState
    }
}

export type webSocketContextType = ReturnType<typeof WebSocket>;
export default WebSocket;