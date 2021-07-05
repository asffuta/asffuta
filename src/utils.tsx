import axios from "axios";
import { Component } from "ionicons/dist/types/stencil-public-runtime";
import { DateTime } from "luxon";
import React, { useState } from "react";
import { xml2js } from "xml-js";

export const { fromJSDate: jsDate } = DateTime;

export const calendar = (format = "t a", date = new Date()): string => {
  return jsDate(date).toFormat(format);
};

export const getOutlines = (): Promise<any> => {
  return (
    axios
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      .get(require("./data.xml").default)
      .then((res) => (xml2js(res.data, { compact: true }) as any).table.rows)
  );
};

export const withHook = (Component: any, Hook = useState, param = "") => {
  // eslint-disable-next-line react/display-name
  return (props: unknown): JSX.Element => {
    const params = Hook(param);
    return <Component {...props} params={params} />;
  };
};

export function isDarkMode(): boolean {
  return localStorage.getItem("theme")
    ? localStorage.getItem("theme") === "dark"
    : window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function getColorScheme(): string {
  //default to light
  return isDarkMode() ? "dark" : "light";
}

export function setColorScheme(): void {
  localStorage.setItem("theme", isDarkMode() ? "light" : "dark");
  // eslint-disable-next-line no-restricted-globals
  location.reload();
}
