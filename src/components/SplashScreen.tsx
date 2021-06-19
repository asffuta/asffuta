import {
  IonCol,
  IonContent,
  IonImg,
  IonLabel,
  IonPage,
  IonRow,
} from "@ionic/react";
import { Component } from "react";
import ASFLogo from "../theme/images/logo.png";
import "../theme/Welcome.css";

export default class SplashScreen extends Component {
  public render() {
    return (
      <IonPage>
        <IonContent className="content">
          <IonRow className="splash-box">
            <IonCol></IonCol>
            <IonCol>
              <IonImg src={ASFLogo} className="logo" />
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel>Bible Study Outline</IonLabel>
            </IonCol>
          </IonRow>
        </IonContent>
      </IonPage>
    );
  }
}
