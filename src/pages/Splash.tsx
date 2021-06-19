import { Component } from "react";
import { Redirect } from "react-router";
import SplashScreen from "../components/SplashScreen";
import "../theme/Splash.css";

export default class Splash extends Component<{}, { render: JSX.Element }> {
  constructor(props = {}) {
    super(props);
    this.state = {
      render: <SplashScreen />,
    };
  }

  public componentDidMount() {
    setTimeout(() => {
      this.setState({
        render: <Redirect to="/welcome" />,
      });
    }, 3000);
  }

  public render() {
    return this.state.render;
  }
}
