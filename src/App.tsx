import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { Menu } from "./components/menu/menu";
import { DataSet, Tag } from "./models/model";
import { AddView } from "./pages/addView";
import { TagsView } from "./pages/tagsView";
import { useAppSelector } from "./redux/hooks/hook";

function App() {
  const Calendar = require("rc-year-calendar");
  const dispatch = useDispatch();
  const customDayRenderer = (element: HTMLElement, date: any) => {
    console.log(typeof date);
    console.log(date);

    element.style.borderRadius = "20px";
    element.style.padding = "5px";
    element.style.backgroundColor = "red";
  };
  const dataset = useAppSelector((state) => state.visaChecker.dataset);
  const tags = useAppSelector((state) => state.visaChecker.tags);
  const view = useAppSelector((state) => state.visaChecker.view);
  const addModal = useAppSelector((state) => state.visaChecker.addModal);

  useEffect(() => {
    document.addEventListener("onDayClick", () => {
      console.log("clicked");
    });
    if (localStorage.getItem("visaChecker")) {
      // setDataset(JSON.parse(localStorage.getItem("visaChecker") || "{}"));
    }
  }, []);
  const addDate = (data: DataSet) => {
    // setDataset([...dataset, data]);
    localStorage.setItem("visaChecker", JSON.stringify([...dataset, data]));
  };
  const addTag = (data: Tag) => {
    // setTags([...tags, data]);
    localStorage.setItem("visaCheckerTags", JSON.stringify([...dataset, data]));
  };
  return (
    <div className="App">
      <Menu />

      {view === 1 && (
        <Calendar
          dataSource={dataset}
          enableRangeSelection={true}
          onDayClick={() => console.log("clicked")}
          style="background"
          customDataSourceRenderer={(a: any, b: any) => customDayRenderer(a, b)}
          minDate={2005}
          maxDate={2030}
          // onRangeSelected={(e) =>
          //   this.setState({
          //     currentEvent: { startDate: e.startDate, endDate: e.endDate },
          //   })
          // }
        />
      )}
      <AddView open={addModal} />
      {view === 2 && <TagsView />}
    </div>
  );
}
export default App;
