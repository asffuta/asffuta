import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCol,
  IonContent,
  IonGrid,
  IonImg,
  IonLabel,
  IonPage,
  IonRow,
  IonSlide,
  IonSlides,
} from "@ionic/react";
import { Component } from "react";
import { CgArrowRightO } from "react-icons/cg";
import { Link, Redirect } from "react-router-dom";
import WelcomeSvg1 from "../theme/Welcome01.svg";
import WelcomeSvg2 from "../theme/Welcome02.svg";
import "../theme/Welcome.css";

export default class Welcome extends Component<{}, WelcomeState> {
  public slides = [
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
      current: 0,
    };
  }

  public get slide_id() {
    return this.state.current;
  }

  public handleSkip() {
    localStorage.setItem("get_started", "true");
  }

  public render() {
    return !localStorage.getItem("get_starte") ? (
      <IonPage>
        <IonContent color="warning">
          <IonGrid>
            <IonRow>
              <IonCol className="ion-text-end">
                <Link
                  to="/home"
                  onClick={this.handleSkip}
                  hidden={this.slide_id > 0}
                >
                  <IonLabel>Skip</IonLabel>
                </Link>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonSlides>
            {this.slides.map((slide, key) => (
              <IonSlide key={key}>
                <IonCard className="slide-card" color="dark" slot="bottom">
                  <IonCardHeader className="center">
                    <IonImg src={slide.image} />
                    <IonCardSubtitle>{slide.text}</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <Link to={slide.link}>
                      <IonButton color="warning">
                        {slide.button}
                        <CgArrowRightO />
                      </IonButton>
                    </Link>
                  </IonCardContent>
                </IonCard>
              </IonSlide>
            ))}
          </IonSlides>
        </IonContent>
      </IonPage>
    ) : (
      <Redirect to="/home" />
    );
  }
}
