import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCol, IonLabel, IonRow } from "@ionic/react";
import { Component } from "react";
import { MdDateRange, MdTimer } from "react-icons/md";
import { CgCircleci } from "react-icons/cg";
import { calendar } from "../utils";

export default class TopCard extends Component {
  
  public state: HomeState = {};

  public componentDidMount(): void {
    setInterval(() => {
      this.setState({
        curDate: calendar("LLL d, y"),
        curTime: calendar("hh:mm a"),
      });
    });
  }

  public render(): JSX.Element {
    return (
      <IonCard color="warning" className="top-card">
        <CgCircleci className="top-card-icon" />
        <IonCardHeader className="ion-text-center">
          <IonCardSubtitle className="small">
            Bible Study Outline
          </IonCardSubtitle>
          <IonLabel className="bold">A BALANCED CHURCH!</IonLabel>
        </IonCardHeader>
        <IonCardContent>
          <IonRow>
            <IonCol size="6">
              <IonLabel>
                <MdDateRange /> {this.state.curDate}
              </IonLabel>
            </IonCol>
            <IonCol className="ion-text-right">
              <IonLabel>
                <MdTimer /> {this.state.curTime}
              </IonLabel>
            </IonCol>
          </IonRow>
        </IonCardContent>
      </IonCard>
    );
  }
}
