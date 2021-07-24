import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonItem,
  IonMenu,
  IonImg,
  IonLabel,
  IonListHeader,
  IonItemGroup,
  IonPopover,
} from "@ionic/react";
import { Component } from "react";
import {
  CgComment,
  CgCreditCard,
  CgFacebook,
  CgInstagram,
  CgList,
  CgRemote,
  CgShare,
  CgTwitter,
} from "react-icons/cg";
import SemesterTheme from "../theme/images/semester_theme.jpg";
import AccountsBanner from "../theme/images/accounts.jpg";

export default class HeaderMenu extends Component {
  public state: { showBanner: boolean } = { showBanner: false }
  
  public toggleBanner(): void {
    this.setState({ showBanner: !this.state.showBanner });
  }

  public render(): JSX.Element {
    return (
      <IonMenu contentId="homepage" className="menu-list">
        <IonHeader>
          <IonToolbar color="dark">
            <IonImg src={SemesterTheme} />
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonItemGroup>
            <IonItem className="small" href="/" lines="none">
              <CgList />
              <IonLabel>&nbsp; Outline</IonLabel>
            </IonItem>
            <IonItem className="small" href="https://mixlr.com/asffuta" lines="none">
              <CgRemote />
              <IonLabel>&nbsp; Live Service</IonLabel>
            </IonItem>
            <IonItem className="small" href="/feedback" lines="none">
              <CgComment />
              <IonLabel>&nbsp; Feedback</IonLabel>
            </IonItem>
            <IonItem className="small" lines="none" onClick={this.toggleBanner.bind(this)}>
              <CgCreditCard />
              <IonLabel>&nbsp; Donations</IonLabel>
            </IonItem>
            <IonItem className="small" href="https://api.whatsapp.com/send/?text=Download and install ASFFUTA bible study app at https://bit.ly/asffuta_biblestudy" lines="none">
              <CgShare />
              <IonLabel>&nbsp; Share App</IonLabel>
            </IonItem>
          </IonItemGroup>
          <IonItemGroup>
            <IonListHeader>
              <IonLabel>We are Social!</IonLabel>
            </IonListHeader>
            <IonItem className="small" href="https://facebook.com/asffutang">
              <CgFacebook />
              <IonLabel> &nbsp; Facebook </IonLabel>
            </IonItem>
            <IonItem className="small" href="https://twitter.com/asffutang">
              <CgTwitter />
              <IonLabel> &nbsp; Twitter </IonLabel>
            </IonItem>
            <IonItem className="small" href="https://instagram.com/asffutang">
              <CgInstagram />
              <IonLabel> &nbsp; Instagram </IonLabel>
            </IonItem>
          </IonItemGroup>
        </IonContent>
        <IonPopover isOpen={this.state.showBanner}>
          <img src={AccountsBanner}/>
        </IonPopover>
      </IonMenu>
    );
  }
}
