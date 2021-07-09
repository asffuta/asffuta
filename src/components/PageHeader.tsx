import {
  IonHeader,
  IonToolbar,
  IonBackButton,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { Component } from "react";
import { CgMore } from "react-icons/cg";
import { Link } from "react-router-dom";
import "../theme/PageHeader.css";

export default class PageHeader extends Component<{title: string, nofix?: boolean}> {
  public render(): JSX.Element {
    return (
      <IonHeader className={!this.props.nofix ? "fixed-header" : ""}>
        <IonToolbar>
          <IonGrid className="ion-no-padding">
            <IonRow className="ion-align-items-center">
              <IonCol>
                <IonBackButton className="small" defaultHref="/home" />
              </IonCol>
              <IonCol className="ion-text-center">
                <IonLabel>{this.props.title}</IonLabel>
                <IonLabel className="subtitle">
                  {this.props.title}
                </IonLabel>
              </IonCol>
              <IonCol className="ion-text-right ion-padding-end">
                <Link to="#" className="more">
                  <CgMore />
                </Link>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
    );
  }
}
