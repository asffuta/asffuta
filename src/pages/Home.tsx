import {
  IonBadge,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonRoute,
  IonRouterContext,
  IonRouterOutlet,
  IonSearchbar,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Component, useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import {
  menuSharp,
  arrowForward,
  alarm,
  calendar,
  informationCircleOutline,
  map,
  homeOutline,
} from "ionicons/icons";
import "../theme/Home.css";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router";
import Study from "./Study";
import Welcome from "./Welcome";

export default class Home extends Component<{}, { searchText: string }> {
  public constructor(props = {}) {
    super(props);
    this.state = {
      searchText: "",
    };
  }
  public render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonIcon
              icon={menuSharp}
              slot="start"
              style={{ padding: "1.2em" }}
              size="small"
            />
            <IonIcon
              icon={alarm}
              slot="end"
              style={{ padding: "1.2em" }}
              size="small"
            />
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard color="tertiary">
            <IonCardHeader>
              <IonCardSubtitle>ASFFUTA</IonCardSubtitle>
              <IonCardTitle>Bible Study</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              Keep close to Nature's heart... and break clear away, once in
              awhile, and climb a mountain or spend a week in the woods. Wash
              your spirit clean.
            </IonCardContent>
          </IonCard>

          <IonSearchbar
            value={this.state.searchText}
            onIonChange={(e) => this.setState({ searchText: e.detail.value! })}
            showCancelButton="focus"
          ></IonSearchbar>
          <IonCard>
            <IonItem>
              <IonLabel>Study 1: kgjghgc</IonLabel>
              <IonButton fill="outline" slot="end">
                <IonIcon icon={arrowForward} slot="end" />
              </IonButton>
            </IonItem>

            <IonCardContent>
              This is content, without any paragraph or header tags, within an
              ion-cardContent element.
            </IonCardContent>
          </IonCard>
          <IonButton  color="dark" autoCapitalize="true">
            <IonLabel>Get Started</IonLabel>
          </IonButton>
        </IonContent>

        <IonTabs>
          <IonRouterOutlet></IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="schedule">
              <IonIcon icon={calendar} color="primary" />
              <IonBadge color="warning">6</IonBadge>
            </IonTabButton>

            <IonTabButton tab="speakers">
              <IonIcon icon={homeOutline} />
            </IonTabButton>

            <IonTabButton tab="about">
              <IonIcon icon={informationCircleOutline} />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonPage>
    );
  }
}
