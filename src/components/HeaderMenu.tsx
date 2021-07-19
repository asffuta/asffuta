import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonItem,
  IonMenu,
  IonImg,
  IonLabel,
  IonListHeader,
  IonItemGroup,
} from "@ionic/react";
import { Component } from "react";
import {
  CgComment,
  CgCreditCard,
  CgFacebook,
  CgInstagram,
  CgList,
  CgRemote,
  CgShare,
  CgTwitter,
} from "react-icons/cg";
import { Link } from "react-router-dom";
import ASFLogo from "../theme/images/logo.png";

export default class HeaderMenu extends Component {
  public render(): JSX.Element {
    return (
      <IonMenu contentId="homepage" className="menu-list">
        <IonHeader>
          <IonToolbar color="dark">
            <IonImg src={ASFLogo} className="logo" />
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonItemGroup>
            <IonItem className="small" href="/" lines="none">
              <CgList />
              <IonLabel>&nbsp; Outline</IonLabel>
            </IonItem>
            <IonItem className="small" href="https://mixlr.com/asffuta" lines="none">
              <CgRemote />
              <IonLabel>&nbsp; Live Service</IonLabel>
            </IonItem>
            <IonItem className="small" href="/feedback" lines="none">
              <CgComment />
              <IonLabel>&nbsp; Feedback</IonLabel>
            </IonItem>
            <IonItem className="small" lines="none">
              <CgCreditCard />
              <IonLabel>&nbsp; Donations</IonLabel>
            </IonItem>
            <IonItem className="small" lines="none">
              <CgShare />
              <IonLabel>&nbsp; Share App</IonLabel>
            </IonItem>
          </IonItemGroup>
          <IonItemGroup>
            <IonListHeader>
              <IonLabel>We are Social!</IonLabel>
            </IonListHeader>
            <IonItem className="small" href="https://facebook.com/asffutang">
              <CgFacebook />
              <IonLabel> &nbsp; Facebook </IonLabel>
            </IonItem>
            <IonItem className="small" href="https://twitter.com/asffutang">
              <CgTwitter />
              <IonLabel> &nbsp; Twitter </IonLabel>
            </IonItem>
            <IonItem className="small" href="https://instagram.com/asffutang">
              <CgInstagram />
              <IonLabel> &nbsp; Instagram </IonLabel>
            </IonItem>
          </IonItemGroup>
        </IonContent>
      </IonMenu>
    );
  }
}
