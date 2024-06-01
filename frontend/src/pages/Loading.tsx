import { IonHeader, IonProgressBar, IonTitle, IonToolbar } from '@ionic/react';

function Loading() {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle>Connexion en cours</IonTitle>
        <IonProgressBar type="indeterminate"></IonProgressBar>
      </IonToolbar>
    </IonHeader>
  );
}
export default Loading;