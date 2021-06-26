import axios from "axios";
import { DateTime } from "luxon";
import { useState } from "react";
import { xml2js } from "xml-js";

export function datef(format: string) {
  const CDATE = DateTime.fromJSDate(new Date());
  return CDATE.toFormat(format);
}

export const getOutlines = () => {
  return axios
    .get(require("./data.xml").default)
    .then((res) => (xml2js(res.data, { compact: true }) as any).table.rows);
};

export const withHook = (
  Component: any,
  Hook: any = useState,
  param: any = ""
) => {
  return (props: any) => {
    const params = Hook(param);
    return <Component {...props} params={params} />;
  };
};

export function isDarkMode() {
  return (
    localStorage.getItem("theme") ? localStorage.getItem("theme") === "dark":
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

export function getColorScheme() {
  //default to light
  return isDarkMode() ? "dark" : "light";
}

export function setColorScheme() {
  localStorage.setItem("theme", isDarkMode() ? "light" : "dark");
  // eslint-disable-next-line no-restricted-globals
  location.reload();
}
