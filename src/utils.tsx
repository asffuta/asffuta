import axios from "axios";
import { DateTime } from "luxon";
import { Component, useState } from "react";
import { xml2js } from "xml-js";

export const datef = (format: string) =>
  DateTime.fromJSDate(new Date()).toFormat(format);

export function setStateInterval(
  component: Component,
  states: {}
    | ((
        prevState: Readonly<{}>,
        props: Readonly<{}>
      ) => {} | Pick<{}, never> | null)
    | Pick<{}, never>
    | null,
  interval = 50
) {
  setInterval(() => component.setState(states), interval);
}

export const getOutlines = () => {
  return axios
    .get(require("./data.xml").default)
    .then((res) => (xml2js(res.data, { compact: true }) as any).table.rows);
};

export const withHook = (Component: any, Hook: any = useState) => {
  return (props: any) => {
    const params = Hook();
    return <Component {...props} params={params} />;
  };
};
