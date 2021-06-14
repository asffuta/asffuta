import { IonLabel, IonPage } from "@ionic/react";
import { Component } from "react";
import "../theme/Splash.css";

export default class SplashScreen extends Component {
  public render() {
    return (
      <IonPage>
        <IonLabel slot="end"> Powered By ASFFUTA </IonLabel>
      </IonPage>
    );
  }
}
