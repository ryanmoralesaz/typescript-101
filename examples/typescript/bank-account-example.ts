class BankAccount {
     #balance: number = 0;

    deposit(amount: number) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }

    showBalance(): string {
        return `Your balance is ${this.#balance}`;
    }

}

const account1 = new BankAccount();
account1.deposit(100);
// console.log(account1.#balance);
console.log(account1.showBalance());