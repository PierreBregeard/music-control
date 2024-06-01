import { IonIcon, IonRange } from "@ionic/react";
import { volumeLowOutline, volumeHighOutline } from 'ionicons/icons';
import { useContext, useEffect, useState } from "react";
import { WebSocketContext } from "../contexts/WebSocketProvider";
import PcInstructions from "../enums/PcInstructions";

function VolumeRange() {

    const webSocketContext = useContext(WebSocketContext);

    const VOLUME_SENSITIVITY = 10;

    const [volume, setVolume] = useState(50);

    useEffect(() => {
        webSocketContext?.sendInsctution(PcInstructions.SET_VOLUME, volume)
    }, [volume])


    function addVolume(amount: number) {
        setVolume(Math.max(0, Math.min(volume + amount, 100)));
    }

    return (
        <IonRange min={0} max={100} value={volume} onIonInput={(e) => setVolume(+e.detail.value)}>
          <IonIcon size="large" onClick={() => addVolume(-VOLUME_SENSITIVITY)} slot="start" icon={volumeLowOutline}/>
          <IonIcon size="large" onClick={() => addVolume(VOLUME_SENSITIVITY)} slot="end" icon={volumeHighOutline}/>
        </IonRange>
      );
}

export default VolumeRange;