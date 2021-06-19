import { DateTime } from "luxon";
import { Component } from "react";

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
  return (component.state = states || {});
}
