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
import { CgArrowRightO, CgLinear } from "react-icons/cg";
import { Link, Redirect } from "react-router-dom";
import WelcomeSvg1 from "../theme/images/biblotheque.svg";
import WelcomeSvg2 from "../theme/images/darkmode.svg";
import WelcomeSvg3 from "../theme/images/darkmode_theme.svg";
import WelcomeSvg4 from "../theme/images/feedback.svg";
import "../theme/Welcome.css";

export default class Welcome extends Component {
  public slider = createRef<HTMLIonSlidesElement>();

  public slides = [
    {
      image: WelcomeSvg1,
      text: "New updates & additions to Asffuta Bible Study App",
      button: "Next",
      link: "#",
    },
    {
      image: WelcomeSvg2,
      text: "Better interactive dark mode floating button...",
      button: "Next",
      link: "#",
    },
    {
      image: WelcomeSvg3,
      text: "Newly updated retina friendly dark mode design...",
      button: "Next",
      link: "#",
    },
    {
      image: WelcomeSvg4,
      text: "User feedback now accepted. Note: requires internet!",
      button: "Get Started",
      link: "/home",
    },
  ];

  public handleSkip(): void {
    localStorage.setItem("get_started", "true");
  }

  public render(): React.ReactNode {
    return !localStorage.getItem("get_started") ? (
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
                      <IonButton className="ion-text-uppercase" color="warning">
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
