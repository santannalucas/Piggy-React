import React from "react";
import './Schedulers.css'

function SchedulerType(scheduler){
  if(scheduler.scheduler_type.name === 'Split Payments')
    { return scheduler.split + " Payments of $" + (scheduler.amount/scheduler.split).toFixed(2) } 
  else if(scheduler.scheduler_type.name === 'Periodic Payments')
    { return scheduler.period } 
  else { 
    return "Single Payment"
  }
};

const SchedulerList = ({ schedulers }) => {
  return (
    <div className="sch-list">
      {schedulers.map(scheduler => (
        <div className="sch-list-item" key={scheduler.id} >
          <div className="sch-name">{scheduler.account.name} - <span className="sch-bank-name">{scheduler.bank_account.name  } </span></div><br/>
          <div className="sch-type"> { scheduler.scheduler_type.name } </div>
          <div className="sch-amount">$ {scheduler.amount.toFixed(2) }</div>
          <div className="sch-desc">{scheduler.description}</div>
          <div className="sch-type-str">{SchedulerType(scheduler)}</div>
          <div className="sch-date"> {scheduler.created_at}</div>
          <div className="sch-completed"><i className={scheduler.completed ? 'fas fa-check-circle scheduler completed' : 'fas fa-exclamation-circle scheduler active'}/></div>
        </div>
      ))}
    </div>
  );
}
 
export default SchedulerList;