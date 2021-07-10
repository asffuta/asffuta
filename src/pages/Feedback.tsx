import { IonAlert, IonSkeletonText } from "@ionic/react";
import { Component } from "react";
import { Network } from "@ionic-native/network";
import PageHeader from "../components/PageHeader";
import { connected } from "process";

/**
 * Feedback page Component
 *
 * @export
 * @class Feedback
 * @extends {Component}
 */
export default class Feedback extends Component {
  public connected = true;

  public componentDidMount(): void {
    Network.onChange().subscribe((type) => {
      this.connected = (type === "connected");
    });
  }

  public render(): JSX.Element {
    return (
      <>
        <PageHeader title="Feedback" nofix={true} />
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeCm7to2DPgqnM6U2nF7-T2Aamld1m5Lv7zm-W6JN0wLLb0GQ/viewform?embedded=true"
          width={window.innerWidth}
          height={window.innerHeight}
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          hidden={!this.connected}
        >
          <IonSkeletonText />
        </iframe>
        <IonAlert isOpen={!this.connected} message="You need internet connection to access this page!" />
      </>
    );
  }
}
