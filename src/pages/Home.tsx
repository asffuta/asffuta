import { Component } from "react";
import Header from "../components/Header";
import TopCard from "../components/TopCard";
import StudyCards from "../components/StudyCards";
import HeaderMenu from "../components/HeaderMenu";
import { IonContent, IonPage } from "@ionic/react";
import { datef, setStateInterval } from "../utils";
import "../theme/Home.css";

export default class Home extends Component<{}, HomeState> {
  public constructor(props = {}) {
    super(props);
    this.state = {
      searchText: "",
    };
  }

  public componentDidMount() {
    setStateInterval(this, {
      curDate: datef("LLLL d, y"),
      curTime: datef("t a:s"),
    });
  }

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
