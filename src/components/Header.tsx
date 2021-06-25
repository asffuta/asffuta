import {
  IonHeader,
  IonToolbar,
  IonGrid,
  IonCol,
  IonMenuToggle,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { Component } from "react";
import { CgMenuLeftAlt, CgShare } from "react-icons/cg";
import { SocialSharing } from "@ionic-native/social-sharing";
import { Link } from "react-router-dom";

export default class Header extends Component {
  public render() {
    return (
      <IonHeader color="light" className="fixed-header">
        <IonToolbar>
          <IonGrid>
            <IonCol push="1">
              <IonMenuToggle menu="start" autoHide={false}>
                <CgMenuLeftAlt size={20} />
              </IonMenuToggle>
            </IonCol>
          </IonGrid>
          <IonGrid slot="end">
            <IonCol pull="1">
              <IonLabel onClick={() => SocialSharing.share("Bible Study App")}>
                <CgShare size={20} />
              </IonLabel>
            </IonCol>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
    );
  }
}
