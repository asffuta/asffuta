import { IonCol, IonGrid, IonLabel, IonRow, IonSearchbar } from "@ionic/react";
import { Component } from "react";
import StudyCard from "./StudyCard";
import { Link } from "react-router-dom";
import { getOutlines } from "../utils";
import { CgArrowDownO } from "react-icons/cg";
import "../theme/Study.css";

export default class StudyCards extends Component<{ query?: string }> {
  public studies: any[] = [];

  public state: { searchText?: string, studies?: JSX.Element[] } = {};

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

  public loadStudies(filter?: string): JSX.Element[] {
    const studyList = [];
    for (const study of this.studies) {
      if (filter && study[1]._text.search(filter) < 0) continue;
      studyList.push(<StudyCard key={study[0]._text} {...study} />);
    }
    return studyList;
  }

  public handleSearch(e: CustomEvent): void {
    this.setState({
      searchText: e.detail.value
    });
  }

  public render(): React.ReactNode {
    return (
      <IonGrid>
        <IonSearchbar
          color="light"
          onIonChange={this.handleSearch.bind(this)}
          animated
        />
        <IonRow>
          <IonGrid>
            <IonCol push="0.4">
              <IonLabel className="bold"> Study Outlines </IonLabel>
            </IonCol>
          </IonGrid>
          <IonGrid>
            <IonCol pull="-8">
              <Link to="#scroll" onClick={this.handleScroll}>
                Last <CgArrowDownO />
              </Link>
            </IonCol>
          </IonGrid>
        </IonRow>
        <IonRow>
          <IonCol size="12">
            {this.loadStudies(this.state.searchText)}
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
