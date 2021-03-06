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
import { CgDarkMode } from "react-icons/cg";
import { Link } from "react-router-dom";
import "../theme/PageHeader.css";
import { setColorScheme } from "../utils";

export default class PageHeader extends Component<{title: string, subtitle?: string, nofix?: boolean}> {
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
                <IonLabel className="bold">{this.props.title}</IonLabel>
                <IonLabel className="subtitle">
                  {this.props?.subtitle}
                </IonLabel>
              </IonCol>
              <IonCol className="ion-text-right ion-padding-end" pull="0.4">
                <Link to="#" onClick={setColorScheme} className="more">
                  <CgDarkMode />
                </Link>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
    );
  }
}
