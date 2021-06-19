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
      text: `The classic and elegant bible study app for ASFFUTA. Built with the user's ease of use in mind on a very user-friendly design by competent devlopers.`,
      button: "Next",
      link: "#",
    },
    {
      image: WelcomeSvg2,
      text: `Encountered any problems? Thought of a stunning new feature? Feel free to drop your complaints/requests with the General Secretary.`,
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

  public handleScroll() {
    if (this.state.curScroll < this.scrolls.length - 1) {
      this.setState({
        curScroll: this.state.curScroll + 1,
      });
    } else this.handleSkip();
  }

  public handleSkip(){
    localStorage.setItem("started", "true");
  }

  public render() {
    if(localStorage.getItem("started")){
      return <Redirect to="/home"/>;
    } else {
      let scroll = this.scrolls[this.state.curScroll];
      return (
        <IonPage>
          <IonContent className="content" color="warning">
            <IonGrid>
              <IonRow>
                <IonCol push="5">
                  <Link
                    to="/home"
                    onClick={this.handleSkip}
                    style={{ color: "black" }}
                    hidden={this.state.curScroll > 0}
                  >
                    <IonLabel>Skip</IonLabel>
                  </Link>
                </IonCol>
              </IonRow>
              <IonRow class="boxed">
                <IonCol push="2">
                  <IonImg className="image" src={scroll.image} />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="9" push="1.5">
                  <IonLabel> {scroll.text} </IonLabel>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <Link to={scroll.link}>
                    <IonButton
                      color="dark"
                      onClick={this.handleScroll.bind(this)}
                    >
                      {scroll.button}
                      <CgArrowRightO />
                    </IonButton>
                  </Link>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonPage>
      );
    }
  }
}
