import {
  IonHeader,
  IonToolbar,
  IonGrid,
  IonCol,
  IonMenuToggle,
} from "@ionic/react";
import { Component } from "react";
import { CgMenuLeftAlt, CgShare } from "react-icons/cg";
import { Plugins } from "@capacitor/core";
import { Link } from "react-router-dom";

export default class Header extends Component {
  public render(): JSX.Element {
    return (
      <IonHeader color="light" className="fixed-header">
        <IonToolbar>
          <IonGrid>
            <IonCol push="1">
              <IonMenuToggle menu="start" autoHide={false}>
                <CgMenuLeftAlt size={20} />
              </IonMenuToggle>
            </IonCol>
          </IonGrid>
          <IonGrid slot="end">
            <IonCol pull="1">
              <Link to="https://api.whatsapp.com/send/?text=Download and install ASFFUTA bible study app at https://bit.ly/asffuta_biblestudy" onClick={this.shareApp}>
                <CgShare size={20} />
              </Link>
            </IonCol>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
    );
  }

  private async shareApp() {
    await Plugins.App.canOpenUrl({
      url: "cn.xender",
    });
    return await Plugins.App.openUrl({ url: "cn.xender" });
  }
}
