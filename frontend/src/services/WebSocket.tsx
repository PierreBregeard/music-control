import useWebSocket from 'react-use-websocket';
import PcInstructions from '../enums/PcInstructions';

function WebSocket() {

    const {sendMessage, lastMessage, readyState} = useWebSocket(
        `ws://${window.location.hostname}:8000`,
    {
        shouldReconnect: (closeEvent) => true,
        reconnectAttempts: 100,
        reconnectInterval: (attemptNumber) => 2 * 1000
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