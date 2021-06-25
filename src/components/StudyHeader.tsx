import {
  IonHeader,
  IonToolbar,
  IonBackButton,
} from "@ionic/react";
import { Component } from "react";

export default class Header extends Component<{title: string}> {
  public render() {
    return (
      <IonHeader className="fixed-header">
        <IonToolbar className="left">
          <IonBackButton
            style={{ paddingLeft: "8px" }}
            defaultHref="/home"
            text={this.props.title}
          />
        </IonToolbar>
      </IonHeader>
    );
  }
}
