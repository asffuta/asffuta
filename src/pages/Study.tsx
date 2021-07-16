import { IonContent, IonItem, IonLabel, IonList, IonPage } from "@ionic/react";
import { Component } from "react";
import { getOutlines, withHook } from "../utils";
import { useParams } from "react-router";
import StudyHeader from "../components/PageHeader";
import "../theme/Study.css";

export default withHook(
  class Study extends Component<{ params: any }> {
    public outline: StudyOutline[] = [];
    public headings = ["Introduction", "points for Discussion", "Conclusion", "Food For Thought", "Memory Verse"];
    constructor(props: any) {
      super(props);
      getOutlines().then((rows: any) => {
        for (const row in rows) {
          for (const data of rows[row][this.props.params.id - 1].value) {
            this.outline.push({
              attr: data._attributes,
              text: data?._cdata || data?._text,
            });
          }
        }
        this.setState({});
      });
    }

    public render() {
      const aims: JSX.Element[] = [];
      this.outline[3]?.text?.split(";").forEach((aim, index) => {
        aims.push(
          <h4>
            {index + 1}. {aim}
          </h4>
        );
      });
      const body: JSX.Element[] = [];
      this.outline.slice(4, 9).forEach((outline, index) => {
        const content: JSX.Element[] = [];
        outline?.text?.split("\n").forEach(aim => {
          content.push(<h3>{aim}</h3>);
        });
        body.push(
          <IonItem lines="none" hidden={!outline?.text}>
            <IonLabel className="ion-text-wrap">
              <h4>
                <b>{this.headings[index]}</b>:
              </h4>
              <h3>{content}</h3>
            </IonLabel>
          </IonItem>
        );
      });
      return (
        <IonPage>
          <IonContent id="studypage">
            <StudyHeader
              title={" Study " + this.outline[0]?.text}
              subtitle={this.outline[1]?.text}
            />
            <IonList className="outline-list">
              <IonItem lines="none" className="outline-item">
                <IonLabel className="ion-text-wrap">
                  <h3>
                    <b>Theme</b>: A Balanced Church
                  </h3>
                </IonLabel>
              </IonItem>
              <IonItem lines="none" className="outline-item">
                <IonLabel className="ion-text-wrap">
                  <h3>
                    <b>Topic</b>: {this.outline[1]?.text}
                  </h3>
                </IonLabel>
              </IonItem>
              <IonItem lines="none" className="outline-item">
                <IonLabel className="ion-text-wrap">
                  <h3>
                    <b>Text</b>: {this.outline[2]?.text}
                  </h3>
                </IonLabel>
              </IonItem>
              <IonItem lines="none" className="outline-item">
                <IonLabel className="ion-text-wrap">
                  <h4>
                    <b>Aims</b>:
                  </h4>
                  {aims}
                </IonLabel>
              </IonItem>
              {body}
              <IonItem lines="none" hidden={!this.outline[9]?.text}>
                <IonLabel className="ion-text-wrap ion-text-justify">
                  <h4>
                    <b>
                      {this.outline[9]?.attr?.type === 2
                        ? "Prayer"
                        : "Confession"}
                    </b>
                    :
                  </h4>
                  <h3>{this.outline[9]?.text}</h3>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonContent>
        </IonPage>
      );
    }
  },
  useParams
);
