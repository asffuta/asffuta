import { IonList, IonItem, IonLabel } from "@ionic/react";
import { Component } from "react";

export default class StudyCard extends Component<StudyList> {
  public render() {
    const {
      0: { _text: id },
      1: { _text: title },
    } = this.props;
    return (
      <IonList color="light" className="study-list">
        <IonItem href={"/study/" + id} detail>
          <IonLabel className="ion-text-wrap">
            <h3>
              <b>Study {id}</b>
            </h3>
            <h4>{title}</h4>
          </IonLabel>
        </IonItem>
      </IonList>
    );
  }
}
