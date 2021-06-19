import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCol, IonLabel, IonRow } from "@ionic/react";
import { Component } from "react";
import { CgCircleci } from "react-icons/cg";

export default class TopCard extends Component<HomeState> {
  public render() {
    return (
      <IonCard color="warning" className="top-card card-radius">
        <CgCircleci />
        <IonCardHeader className="center">
          <IonCardSubtitle className="small">
            Bible Study Outline:
          </IonCardSubtitle>
          <IonLabel className="bold">A Balanced Church!</IonLabel>
        </IonCardHeader>
        <IonCardContent>
          <IonRow>
            <IonCol size="12">
              <IonLabel>
                <b>Date</b>: {this.props.curDate}
                <br />
              </IonLabel>
              <IonLabel>
                <b>Time</b>: {this.props.curTime}
              </IonLabel>
            </IonCol>
          </IonRow>
        </IonCardContent>
      </IonCard>
    );
  }
}
