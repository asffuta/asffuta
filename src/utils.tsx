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

export const withHook = (Component: any, Hook: any = useState) => {
  return (props: any) => {
    const params = Hook();
    return <Component {...props} params={params} />;
  };
};
