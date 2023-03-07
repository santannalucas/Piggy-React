import React from "react";
import useFetch from "../../useFetch";
import SchedulerList from "./SchedulerList";

const Schedulers = () => {
  const {data: schedulers, isLoading, error} = useFetch('schedulers')
  console.log(schedulers)

  return (
    <div className="list-index">
        <h1>Scheduled Bills</h1>
        {error && <div> { error } </div>}
        {isLoading && <div> Loading... </div>}
        {schedulers && <SchedulerList schedulers={schedulers} />}
    </div>
  );
}
 
export default Schedulers;