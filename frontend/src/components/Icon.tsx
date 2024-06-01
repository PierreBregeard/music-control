import { IonIcon } from "@ionic/react";
import PcInstructions from "../enums/PcInstructions";
import { useContext } from "react";
import { WebSocketContext } from "../contexts/WebSocketProvider";
import "./Icon.css"

interface IconProps {
    ico: string,
    inst: PcInstructions
}

function Icon({ico, inst}: IconProps) {

    const webSocketContext = useContext(WebSocketContext);

    return (
        <IonIcon size="large" onClick={() => webSocketContext?.sendInsctution(inst)} icon={ico}/>
    );
}

export default Icon;