import {
  IonHeader,
  IonToolbar,
  IonGrid,
  IonCol,
  IonMenuToggle,
  IonLabel,
} from "@ionic/react";
import { Component } from "react";
import { CgMenuLeftAlt, CgShare } from "react-icons/cg";
import {Plugins} from "@capacitor/core"
const {App} = Plugins;

export default class Header extends Component {
  public render() {
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
              <IonLabel
                onClick={async () => {
                  await App.canOpenUrl({
                    url: "cn.xender",
                  });
                  return await App.openUrl({ url: "cn.xender" });
                }}
              >
                <CgShare size={20} />
              </IonLabel>
            </IonCol>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
    );
  }
}
