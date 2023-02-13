import React from "react";

function Transactions(props) {
    return (
        <div>
        {props.transactions.map((transaction) => {
            return (
                <div key={transaction.id}>
                    <h2>{transaction.value}</h2>
                    <p>{transaction.description}</p>
                </div>
            );
        })}
        </div>
    );
}

export default Transactions;