import { IonCol, IonGrid, IonLabel, IonRow } from "@ionic/react";
import { Component } from "react";
import StudyCard from "./StudyCard";
import { Link } from "react-router-dom";
import { getOutlines } from "../utils";
import { CgArrowDownO } from "react-icons/cg";
import "../theme/Study.css";

export default class StudyCards extends Component {
  
  public studies: JSX.Element[] = [];

  public componentDidMount() {
    getOutlines().then((rows: any) => {
      for (let row in rows) {
        for (let data of rows[row]) {
          const props = data.value;
          this.studies.push(<StudyCard key={props[0]._text} {...props} />);
        }
      }
      this.forceUpdate();
    });
  }

  public render() {
    return (
      <IonGrid>
        <IonRow>
          <IonGrid>
            <IonCol push="0.4">
              <IonLabel className="bold"> Study Outlines </IonLabel>
            </IonCol>
          </IonGrid>
          <IonGrid>
            <IonCol pull="-8">
              <Link to="#scroll" onClick={this.handleScroll}>
                Last <CgArrowDownO />
              </Link>
            </IonCol>
          </IonGrid>
        </IonRow>
        <IonRow>
          <IonCol size="12">{this.studies}</IonCol>
        </IonRow>
        <div id="scroll"></div>
      </IonGrid>
    );
  }

  public handleScroll() {
    document.getElementById("scroll")?.scrollIntoView({ behavior: "smooth" });
  }
}
