import { ReportHandler } from "web-vitals";
import { Device } from "@ionic-native/device";
import LogRocket from "logrocket";

const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
  LogRocket.identify(Device.uuid);
  LogRocket.init("asffuta/asffuta");
};

export default reportWebVitals;
