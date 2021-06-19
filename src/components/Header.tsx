import {
  IonHeader,
  IonToolbar,
  IonGrid,
  IonCol,
  IonMenuToggle,
} from "@ionic/react";
import { Component } from "react";
import { CgMenuLeftAlt, CgShare } from "react-icons/cg";
import { SocialSharing } from "@ionic-native/social-sharing";
import { Link } from "react-router-dom";

export default class Header extends Component {
  public render() {
    return (
      <IonHeader>
        <IonToolbar>
          <IonGrid>
            <IonCol push="1">
              <IonMenuToggle menu="start" autoHide={false}>
                <CgMenuLeftAlt color="rgba(38,37,37,1)" size={20} />
              </IonMenuToggle>
            </IonCol>
          </IonGrid>
          <IonGrid slot="end">
            <IonCol pull="1">
              <Link
                to="#"
                onClick={() =>
                  SocialSharing.share("Download ASFFUTA  Bible Study App")
                }
              >
                <CgShare color="rgba(38,37,37,1)" size={20} />
              </Link>
            </IonCol>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
    );
  }
}
