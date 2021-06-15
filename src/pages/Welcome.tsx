import {
  IonButton,
  IonContent,
  IonIcon,
  IonImg,
  IonPage,
  IonTitle,
} from "@ionic/react";
import { Component } from "react";
import "../theme/Welcome.css";

export default class Welcome extends Component {
  public render() {
    return (
      <IonPage>
        <IonContent className="content" color="warning">
          <IonButton color="dark">Get Started</IonButton>
        </IonContent>
      </IonPage>
    );
  }
}
