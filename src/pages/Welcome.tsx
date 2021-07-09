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
import { Component, createRef } from "react";
import { CgArrowRightO, CgDice1, CgLinear } from "react-icons/cg";
import { Link, Redirect } from "react-router-dom";
import WelcomeSvg1 from "../theme/Welcome01.svg";
import WelcomeSvg2 from "../theme/Welcome02.svg";
import "../theme/Welcome.css";

export default class Welcome extends Component {
  public slider = createRef<HTMLIonSlidesElement>();

  public slides = [
    {
      image: WelcomeSvg1,
      text: "One Bible Study app for Asfites...",
      button: "Next",
      link: "#",
    },
    {
      image: WelcomeSvg2,
      text: "Open discussion with intuitive design...",
      button: "Get Started",
      link: "/home",
    },
  ];

  public handleSkip(): void {
    localStorage.setItem("get_started", "true");
  }

  public render(): React.ReactNode {
    return !localStorage.getItem("get_starte") ? (
      <IonPage className="slide-container">
        <IonContent color="warning">
          <IonGrid>
            <IonRow>
              <IonCol className="ion-text-end ion-text-padding">
                <Link to="/home" onClick={this.handleSkip}>
                  <IonLabel>Skip</IonLabel>
                </Link>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonSlides ref={this.slider}>
            {this.slides.map((slide, key) => (
              <IonSlide key={key}>
                <IonCard className="slide-card" color="dark" slot="bottom">
                  <IonCardHeader className="center">
                    <IonImg src={slide.image} />
                    <IonCardSubtitle>{slide.text}</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                    <Link
                      to={slide.link}
                      onClick={async () => {
                        const swipe = await this.slider.current?.getSwiper();
                        swipe.slideNext();
                      }}
                    >
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
          <IonGrid>
            <IonRow>
              <IonCol className="ion-text-center">
                {this.slides.map((s, k) => {
                  return (
                    <IonLabel
                      key={k}
                      onClick={async () =>
                        await this.slider.current?.slideTo(k)
                      }
                    >
                      <CgLinear color="white" /> {" "}
                    </IonLabel>
                  );
                })}
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    ) : (
      <Redirect to="/home" />
    );
  }
}
