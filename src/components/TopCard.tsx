import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCol, IonLabel, IonRow } from "@ionic/react";
import { Component } from "react";
import { CgCircleci } from "react-icons/cg";
import { calendar } from "../utils";

export default class TopCard extends Component {
  
  public state: HomeState = {};

  public componentDidMount() {
    setInterval(() => {
      this.setState({
        curDate: calendar("LLL d, y"),
        curTime: calendar("hh:mm a"),
      });
    });
  }

  public render() {
    return (
      <IonCard color="warning" className="top-card card-radius">
        <CgCircleci />
        <IonCardHeader className="center">
          <IonCardSubtitle className="small">
            Bible Study Outline:
          </IonCardSubtitle>
          <IonLabel className="bold">A BALANCED CHURCH!</IonLabel>
        </IonCardHeader>
        <IonCardContent>
          <IonRow>
            <IonCol size="12">
              <IonLabel>
                <b>Date</b>: {this.state.curDate}
                <br />
              </IonLabel>
              <IonLabel>
                <b>Time</b>: {this.state.curTime}
              </IonLabel>
            </IonCol>
          </IonRow>
        </IonCardContent>
      </IonCard>
    );
  }
}
