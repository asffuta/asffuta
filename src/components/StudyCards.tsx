import {
  IonCard,
  IonCardContent,
  IonCol,
  IonGrid,
  IonLabel,
  IonRow,
} from "@ionic/react";
import { Component } from "react";
import { CgArrowDownO } from "react-icons/cg";
import { Link } from "react-router-dom";

export default class StudyCards extends Component<HomeState> {
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
              <Link to="#last">
                Last <CgArrowDownO />
              </Link>
            </IonCol>
          </IonGrid>
        </IonRow>
        <IonRow>
          <IonCol size="12">
            <IonCard className="card-radius card-row" color="dark">
              <IonCardContent>
                <IonLabel className="bold">Study 1: </IonLabel>
                <IonLabel>Rediscovering the True Intent of the Church</IonLabel>
              </IonCardContent>
            </IonCard>
            <IonCard className="card-radius card-row" color="light">
              <IonCardContent>
                <IonLabel className="bold">Study 2: </IonLabel>
                <IonLabel>Rediscovering the True Intent of the Church</IonLabel>
              </IonCardContent>
            </IonCard>
            <IonCard className="card-radius card-row" color="dark">
              <IonCardContent>
                <IonLabel className="bold">Study 3: </IonLabel>
                <IonLabel>Rediscovering the True Intent of the Church</IonLabel>
              </IonCardContent>
            </IonCard>
            <IonCard className="card-radius card-row" color="light">
              <IonCardContent>
                <IonLabel className="bold">Study 4: </IonLabel>
                <IonLabel>Rediscovering the True Intent of the Church</IonLabel>
              </IonCardContent>
            </IonCard>
            <IonCard className="card-radius card-row" color="dark">
              <IonCardContent>
                <IonLabel className="bold">Study 5: </IonLabel>
                <IonLabel>Rediscovering the True Intent of the Church</IonLabel>
              </IonCardContent>
            </IonCard>
            <IonCard className="card-radius card-row" color="light">
              <IonCardContent>
                <IonLabel className="bold">Study 6: </IonLabel>
                <IonLabel>Rediscovering the True Intent of the Church</IonLabel>
              </IonCardContent>
            </IonCard>
            <IonCard className="card-radius card-row" color="dark">
              <IonCardContent>
                <IonLabel className="bold">Study 7: </IonLabel>
                <IonLabel>Rediscovering the True Intent of the Church</IonLabel>
              </IonCardContent>
            </IonCard>
            <IonCard className="card-radius card-row" color="light">
              <IonCardContent>
                <IonLabel className="bold">Study 8: </IonLabel>
                <IonLabel>Rediscovering the True Intent of the Church</IonLabel>
              </IonCardContent>
            </IonCard>
            <IonCard className="card-radius card-row" color="dark">
              <IonCardContent>
                <IonLabel className="bold">Study 9: </IonLabel>
                <IonLabel>Rediscovering the True Intent of the Church</IonLabel>
              </IonCardContent>
            </IonCard>
            <IonCard className="card-radius card-row" color="light">
              <IonCardContent>
                <IonLabel className="bold">Study 10: </IonLabel>
                <IonLabel>Rediscovering the True Intent of the Church</IonLabel>
              </IonCardContent>
            </IonCard>
            <IonCard className="card-radius card-row" color="dark">
              <IonCardContent>
                <IonLabel className="bold">Study 11: </IonLabel>
                <IonLabel>Rediscovering the True Intent of the Church</IonLabel>
              </IonCardContent>
            </IonCard>
            <IonCard className="card-radius card-row" color="light">
              <IonCardContent>
                <IonLabel className="bold">Study 12: </IonLabel>
                <IonLabel>Rediscovering the True Intent of the Church</IonLabel>
              </IonCardContent>
            </IonCard>
            <IonCard className="card-radius card-row" color="dark">
              <IonCardContent>
                <IonLabel className="bold">Study 13: </IonLabel>
                <IonLabel>Rediscovering the True Intent of the Church</IonLabel>
              </IonCardContent>
            </IonCard>
            <IonCard className="card-radius card-row" color="light">
              <IonCardContent>
                <IonLabel className="bold">Study 14: </IonLabel>
                <IonLabel>Rediscovering the True Intent of the Church</IonLabel>
              </IonCardContent>
            </IonCard>
            <IonCard className="card-radius card-row" color="dark">
              <IonCardContent>
                <IonLabel className="bold">Study 15: </IonLabel>
                <IonLabel>Rediscovering the True Intent of the Church</IonLabel>
              </IonCardContent>
            </IonCard>
            <IonCard id="last" className="card-radius card-row" color="light">
              <IonCardContent>
                <IonLabel className="bold">Study 16: </IonLabel>
                <IonLabel>Rediscovering the True Intent of the Church</IonLabel>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    );
  }
}
