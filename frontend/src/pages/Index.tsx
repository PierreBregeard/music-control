import { useContext } from "react";
import Loading from "./Loading";
import { WebSocketContext } from "../contexts/WebSocketProvider";
import { ReadyState } from 'react-use-websocket';
import { IonContent } from "@ionic/react";
import VolumeRange from "../components/VolumeRange";
import "./Index.css"
import Icon from "../components/Icon";
import { playBackOutline, playCircleOutline, playForward, playForwardOutline } from "ionicons/icons";
import PcInstructions from "../enums/PcInstructions";

function Index() {

    const webSocketContext = useContext(WebSocketContext)

    if (webSocketContext?.readyState !== ReadyState.OPEN) {
        return <Loading/>
    }

    return (
        <IonContent class="ion-padding">
            <div className="center">
                <div className="panel">
                    <VolumeRange/>
                    <div className="control">
                        <Icon ico={playBackOutline} inst={PcInstructions.PREVIOUS_TRACK} />
                        <Icon ico={playCircleOutline} inst={PcInstructions.TOGGLE_MEDIA} />
                        <Icon ico={playForwardOutline} inst={PcInstructions.NEXT_TRACK} />
                    </div>
                </div>
            </div>
        </IonContent>
    );
}
export default Index;