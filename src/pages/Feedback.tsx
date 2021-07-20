import { IonAlert } from "@ionic/react";
import { Component } from "react";
import PageHeader from "../components/PageHeader";
import $ from "jquery";

/**
 * Feedback page Component
 *
 * @export
 * @class Feedback
 * @extends {Component}
 */
export default class Feedback extends Component {
  /**
   * The feedback google doc url
   *
   * @memberof Feedback
   */
  public docURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSeCm7to2DPgqnM6U2nF7-T2Aamld1m5Lv7zm-W6JN0wLLb0GQ/viewform?embedded=true";

  /**
   * The Feedback page's state
   *
   * @type {{ connected: boolean }}
   * @memberof Feedback
   */
  public state: { connected: boolean } = { connected: true };

  /**
   * Perform an online check test every 750ms to ensure user is online
   *
   * @memberof Feedback
   */
  public componentDidMount(): void {
    setInterval(() => {
      $.getJSON("https://jsonp.afeld.me/?callback=?&url=" + this.docURL)
        .done(() => {
          this.setState({ connected: true });
        })
        .catch(() => {
          this.setState({ connected: false });
        });
    }, 750);
  }

  public render(): JSX.Element {
    return (
      <>
        <PageHeader title="Feedback" nofix={true} />
        <iframe
          src={this.docURL}
          width={window.innerWidth}
          height={window.innerHeight}
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          hidden={!this.state.connected}
        />
        <IonAlert
          isOpen={!this.state.connected}
          message="You need internet connection to access this page!"
          buttons={[
            {
              text: "View Outlines",
              handler: () => {
                location.pathname = "/home";
              },
            },
          ]}
        />
      </>
    );
  }
}
