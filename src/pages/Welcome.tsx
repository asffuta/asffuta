import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonLabel,
  IonPage,
  IonRow,
} from "@ionic/react";
import { Component } from "react";
import { CgArrowRightO } from "react-icons/cg";
import { Link, Redirect } from "react-router-dom";
import WelcomeSvg1 from "../theme/Welcome01.svg";
import WelcomeSvg2 from "../theme/Welcome02.svg";
import "../theme/Welcome.css";

export default class Welcome extends Component<{}, WelcomeState> {
  public scrolls = [
    {
      image: WelcomeSvg1,
      text: `One Bible Study app for Asfites...`,
      button: "Next",
      link: "#",
    },
    {
      image: WelcomeSvg2,
      text: `Open discussion with intuitive design...`,
      button: "Get Started",
      link: "/home",
    },
  ];

  constructor(props = {}) {
    super(props);
    this.state = {
      curScroll: 0,
    };
  }

  public get scroll_id() {
    return this.state.curScroll;
  }

  public get scroll() {
    return this.scrolls[this.scroll_id];
  }

  public handleScroll() {
    if (this.state.curScroll < this.scrolls.length - 1) {
      this.setState({
        curScroll: this.state.curScroll + 1,
      });
    } else this.handleSkip();
  }

  public handleSkip() {
    localStorage.setItem("get_started", "true");
  }

  public render() {
    return (
      <IonPage>
        <IonContent className="content" color="light">
          {localStorage.getItem("get_started") ? (
            <Redirect to="/home" />
          ) : (
            <IonGrid>
              <IonRow>
                <IonCol push="5">
                  <Link
                    to="/home"
                    onClick={this.handleSkip}
                    color="dark"
                    hidden={this.scroll_id > 0}
                  >
                    <IonLabel>Skip</IonLabel>
                  </Link>
                </IonCol>
              </IonRow>
              <IonRow class="boxed">
                <IonCol push="2">
                  <IonImg className="image" src={this.scroll.image} />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="9" push="1.5">
                  <IonLabel> {this.scroll.text} </IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <Link to={this.scroll.link}>
                    <IonButton
                      color="warning"
                      onClick={this.handleScroll.bind(this)}
                    >
                      {this.scroll.button}
                      <CgArrowRightO />
                    </IonButton>
                  </Link>
                </IonCol>
              </IonRow>
            </IonGrid>
          )}
        </IonContent>
      </IonPage>
    );
  }
}
