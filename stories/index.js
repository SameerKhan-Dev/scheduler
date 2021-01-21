import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import "index.scss";

import Button from "components/Button";
import DayListItem from "components/DayListItem";

import DayList from "components/DayList"; 

// Mock data
const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  },
];

storiesOf("Button", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Base", () => <Button>Base</Button>)
  .add("Confirm", () => <Button confirm>Confirm</Button>)
  .add("Danger", () => <Button danger>Cancel</Button>)
  .add("Clickable", () => (
    <Button onClick={action("button-clicked")}>Clickable</Button>
  ))
  .add("Disabled", () => (
    <Button disabled onClick={action("button-clicked")}>
      Disabled
    </Button>
  ));



storiesOf("DayListItem", module) // Initiates StoryBook and registers our DayListItem component
    .addParameters({
 
      backgrounds: [{ name: "dark", value: "#222f3e", default: true}]
    }) // Provides the default background color for our component
    .add("Unselected", ()=> <DayListItem name="Monday" spots={5} />)
    .add("Selected" ,() => <DayListItem name = "Monday" spots={5} selected />)
    .add("Full", () => <DayListItem name = "Monday" spots = {0} />)
    .add("Clickable", () => (
    <DayListItem name = "Tuesday" setDay={action("setDay")} spots = {5} />)

);
    
storiesOf("DayList", module)
      
    .addParameters({

      backgrounds: [{ name: "dark", value: "#222f3e", default: true}]

    })
    .add("Monday", () =>{
      return(
      <DayList days={days} day={"Monday"} setDay={action("setDay")} />);
    })
    .add("Tuesday", () => {
      return(
      <DayList days={days} day={"Tuesday"} setDay={action("setDay")} />);
    })
    .add("Wednesday", ()=> {
      return(
      <DayList days={days} day={"Wednesday"} setDay={action("setDay")} />);
    });
    