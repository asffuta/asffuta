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

  public async componentDidMount() {
    await getOutlines().then((rows: any) => {
      for (let row in rows) {
        for (let data of rows[row]) {
          this.studies.push(data.value);
        }
      }
    });
    this.forceUpdate()
  }

  public loadStudies(filter?: string) {
    let studyList = [];
    for (let study of this.studies) {
      if (filter && study[1]._text.search(filter) < 0) continue;
      studyList.push(<StudyCard key={study[0]._text} {...study} />);
    }
    return studyList;
  }

  public handleSearch(e: any) {
    this.setState({
      searchText: e.detail.value
    });
  }

  public render() {
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

  public handleScroll() {
    document.getElementById("scroll")?.scrollIntoView({ behavior: "smooth" });
  }
}
