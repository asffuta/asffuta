import {
  IonHeader,
  IonToolbar,
  IonButton,
  IonGrid,
  IonCol,
  IonContent,
  IonItem,
  IonList,
  IonMenu,
  IonTitle,
  IonLabel,
} from "@ionic/react";
import { Component } from "react";
import { CgArrowRightR, CgShare } from "react-icons/cg";
import { Link } from "react-router-dom";

export default class Header extends Component {
  public render() {
    return (
      <IonHeader>
        <IonToolbar>
          <IonGrid>
            <IonCol push="1">
              <Link to="#">
                <CgArrowRightR color="rgba(38,37,37,1)" size={20} />
              </Link>
            </IonCol>
          </IonGrid>
          <IonGrid slot="end">
            <IonCol pull="1">
              <IonLabel></IonLabel>
            </IonCol>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
    );
  }
}
