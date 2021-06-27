import {
  IonHeader,
  IonToolbar,
  IonGrid,
  IonCol,
  IonMenuToggle,
} from "@ionic/react";
import { Component } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";

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
            </IonCol>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
    );
  }
}
