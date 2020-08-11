function userCard (number) {
  let card = {
    balance: 100,
    transactionLimit: 100,
    historyLogs: [],
    key: number
  };

  function getCardOptions (){
    return card;
  }

  function putCredits (deposit) {
    card.balance += deposit;
    historyLog(`Deposit`, deposit);
  }

  function takeCredits (charge) {
    if (charge <= card.transactionLimit) {
      card.balance -= charge;
      historyLog(`Charge`, charge);
    } else {
      console.error(`Your card was declined`)
    }


  }

  function setTransactionLimit (limit) {
    card.transactionLimit = limit
    historyLog(`Limit Change`, limit);
  }

  function transferCredits(amount, receiver) {
    if (amount <= card.transactionLimit) {
      let newAmount = amount - amount * 0.05;
      card.balance -= amount;
      receiver.putCredits(newAmount);
    }
  }

  function historyLog (operationType, credits) {
    let operation = {
      operationType,
      credits,
      operationTime: new Date().toLocaleString("en-US")
    };

    card.historyLogs.push(operation);
  }

  return {getCardOptions, putCredits, takeCredits, setTransactionLimit, transferCredits}
}

let card1 = userCard(1);
let card2 = userCard(2);
card1.transferCredits(50, card2);
card1.putCredits(500);
card1.takeCredits(50);

console.log(card1.getCardOptions());
console.log(card2.getCardOptions());

class UserAccount {
  constructor(name){
    this.name = name;
    this.cards = [];
  }
}

UserAccount.prototype.addCard = function () {
  if(this.cards.length < 3) {
    this.cards.push(new userCard(this.cards.lenght + 1))
  } else {
    console.log(`Limit can't be exceeded`)
  }
}

UserAccount.prototype.getCardByKey = function (number) {
  return this.cards.find(value => value.getCardOptions().key === number)
}

const user1 = new UserAccount('Michael')

user1.addCard()
user1.getCardByKey(1)
console.log(user1)