import { Component } from "react";
import Header from "../components/Header";
import TopCard from "../components/TopCard";
import StudyCards from "../components/StudyCards";
import HeaderMenu from "../components/HeaderMenu";
import { IonContent, IonFab, IonFabButton, IonIcon, IonPage } from "@ionic/react";
import "../theme/Home.css";
import { CgDarkMode } from "react-icons/cg";
import { isDarkMode, setColorScheme } from "../utils";

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
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton
            color={isDarkMode() ? "warning" : "light"}
            onClick={setColorScheme}
          >
            <CgDarkMode style={{fontSize: "2.5em"}} />
          </IonFabButton>
        </IonFab>
      </IonPage>
    );
  }
}
