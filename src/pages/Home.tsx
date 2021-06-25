import { Component } from "react";
import Header from "../components/Header";
import TopCard from "../components/TopCard";
import StudyCards from "../components/StudyCards";
import HeaderMenu from "../components/HeaderMenu";
import { IonContent, IonPage } from "@ionic/react";
import "../theme/Home.css";

export default class Home extends Component {
  public render() {
    return (
      <IonPage>
        <IonContent id="homepage">
          <Header />
          <TopCard {...this.state} />
          <StudyCards />
        </IonContent>
        <HeaderMenu />
      </IonPage>
    );
  }
}
