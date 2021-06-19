import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonItem,
  IonList,
  IonMenu,
  IonImg,
  IonLabel,
} from "@ionic/react";
import { Component } from "react";
import { CgFacebook, CgInstagram, CgTwitter } from "react-icons/cg";
import ASFLogo from "../theme/images/logo.png";

export default class HeaderMenu extends Component {
  public render() {
    return (
      <IonMenu contentId="homepage">
        <IonHeader>
          <IonToolbar color="dark">
            <IonImg src={ASFLogo} className="logo" />
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem href="https://facebook.com/asffutang">
              <CgFacebook />
              <IonLabel> &nbsp; Facebook </IonLabel>
            </IonItem>
            <IonItem href="https://twitter.com/asffutang">
              <CgTwitter />
              <IonLabel> &nbsp; Twitter </IonLabel>
            </IonItem>
            <IonItem href="https://instagram.com/asffutang">
              <CgInstagram />
              <IonLabel> &nbsp; Instagram </IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>
    );
  }
}
