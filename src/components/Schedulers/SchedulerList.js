import React from "react";
import './Schedulers.css'

function SchedulerType(scheduler){
  if(scheduler.scheduler_type.name === 'Split Payments')
    { return " - " + scheduler.split + " Payments of $" + (scheduler.amount/scheduler.split).toFixed(2) } 
  else if(scheduler.scheduler_type.name === 'Periodic Payments')
    { return " - " + scheduler.scheduler_period.name} 
  else { 
    return " - Single Payment of " + scheduler.amount.toFixed(2)
  }
};

function SchedulerDate(date){
  let isoDate = date
  var d = new Date(isoDate)
  return d.toLocaleDateString('en-GB')
};

const SchedulerList = ({ schedulers }) => {
  return (
    <div className="sch-list">
      {schedulers.map(scheduler => (
        <div className="sch-list-item" key={scheduler.id} >
          <div className="sch-item comp">
            <div className="sch-completed"><i className={scheduler.completed ? 'fas fa-check-circle sch-status completed' : 'fas fa-exclamation-circle sch-status active'}/></div>
            <div className="sch-name">{scheduler.account.name} - <span className="sch-bank-name">{scheduler.bank_account.name  } </span></div><br/>
            <div className="sch-type"> { scheduler.scheduler_type.name } {SchedulerType(scheduler)} </div>
          </div>
          <div className="sch-item comp">
            {scheduler.description ? <div className="sch-desc" > {scheduler.description}</div> : ''}
          </div>
          <div className="sch-item comp">
            <div className="sch-amount">$ {scheduler.amount.toFixed(2) }</div>
            <div className="sch-date"> {SchedulerDate(scheduler.created_at)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
 
export default SchedulerList;