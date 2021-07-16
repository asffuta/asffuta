import {
  IonCol,
  IonGrid,
  IonItem,
  IonLabel,
  IonRow,
  IonSearchbar,
} from "@ionic/react";
import { Component } from "react";
import StudyCard from "./StudyCard";
import { Link } from "react-router-dom";
import { getOutlines } from "../utils";
import {
  CgArrowDownO,
} from "react-icons/cg";
import "../theme/Study.css";

export default class StudyCards extends Component<{ query?: string }> {
  public studies: any[] = [];

  public state: { searchText?: string; studies?: JSX.Element[] } = {};

  /**
   * This event dispatches once the component is mounted
   * It is defined async and awaited in order to ensure the studies are loaded
   * before any other action takes place
   */
  public async componentDidMount(): Promise<void> {
    await getOutlines().then((rows: any) => {
      for (const row in rows) {
        for (const data of rows[row]) {
          this.studies.push(data.value);
        }
      }
    });
    this.forceUpdate();
  }

  public handleSearch(e: CustomEvent): void {
    this.setState({
      searchText: e.detail.value,
    });
  }

  public render(): React.ReactNode {
    return (
      <IonGrid>
        <IonSearchbar
          color="light"
          className="searchbar"
          onIonChange={this.handleSearch.bind(this)}
          animated
        />
        <IonItem
          className="ion-no-padding"
          lines="full"
          style={{ fontSize: ".94em" }}
        >
          <IonCol size="6" push="0.4">
            <IonLabel className="bold"> Study Outline </IonLabel>
          </IonCol>
          <IonCol className="ion-text-right">
            <Link to="#scroll" onClick={this.handleScroll}>
              <CgArrowDownO />
            </Link>
          </IonCol>
        </IonItem>
        <IonRow>
          <IonCol size="12" className="ion-no-padding">
            {this.studies
              .filter(
                (study) =>
                  (!this.state.searchText ||
                    study[1]._text.search(this.state.searchText)) > 0
              )
              .map<JSX.Element>((study: any) => (
                <StudyCard key={study[0]._text} {...study} />
              ))}
          </IonCol>
        </IonRow>
        <div id="scroll"></div>
      </IonGrid>
    );
  }

  public handleScroll(): void {
    document.getElementById("scroll")?.scrollIntoView({ behavior: "smooth" });
  }
}
