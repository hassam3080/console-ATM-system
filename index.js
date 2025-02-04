console.clear();
var prompt = require("prompt-sync")();
var info = {
  name: "",
  number: "",
  balance: 100,
  code:"*786#",
  pin: "0000"
};
let option = "";

// ------------------------ Welcome Function -------------------------
const welcome = () => {
  console.clear();
  console.log("---------------------------");
  console.log(`Welcome Mr.${info.name} to ATM System`);
  console.log("---------------------------");

  console.log("1. Deposit");
  console.log("2. Withdraw");
  console.log("3. Check Balance");
  console.log("4. Send Balance");
  console.log("5. Account Info");
  console.log("6. Log Out");
  console.log("7. Quit");

  option = prompt("Select any option: ");

  // Deposit
  if (option === "1") {
    console.clear();
    console.log("---------------------------");
    console.log(`Welcome Deposit Section`);
    console.log(`Your Current Balance is: ${info.balance}`);
    console.log("---------------------------");
    let amount = parseInt(prompt("Enter the amount to deposit: "));

    if (isNaN(amount) || amount <= 0) {
      console.log("Please enter a valid amount.");
      prompt("Press any key to continue...");
      return welcome();
    }

    let pin1 = prompt("Enter your Pin Code to Proceed: ",{echo : " 😑 "});
    while (pin1 !== info.pin) {
      pin1 = prompt("Incorrect Pin Code. Please try again: ");
    }

    info.balance += amount;

    console.clear();
    console.log("---------------------------");
    console.log(`Now! Your Current Balance is: ${info.balance}`);
    console.log("---------------------------");

    prompt("Press any key to continue...");
    return welcome();
  }

  // Withdraw
  else if (option === "2") {
    console.clear();
    console.log("---------------------------");
    console.log(`Welcome Withdraw Section`);
    console.log(`Your Current Balance is: ${info.balance}`);
    console.log("---------------------------");
    let amount = parseInt(prompt("Enter the amount to Withdraw: "));

    if (isNaN(amount) || amount <= 0 || amount > info.balance) {
      console.log("Please enter a valid amount.");
      prompt("Press any key to continue...");
      return welcome();
    }

    let pin1 = prompt("Enter your Pin Code to Proceed: ", {echo : " 😑 "});
    while (pin1 !== info.pin) {
      pin1 = prompt("Incorrect Pin Code. Please try again: ");
    }

    info.balance -= amount;

    console.clear();
    console.log("---------------------------");
    console.log(`Now! Your Current Balance is: ${info.balance}`);
    console.log("---------------------------");

    prompt("Press any key to continue...");
    return welcome();
  }

  // Check Balance
  else if (option === "3") {
    console.clear();
    console.log("---------------------------");
    console.log(`Your Current Balance is: ${info.balance}`);
    console.log("---------------------------");
    prompt("Press any key to continue...");
    return welcome();
  }

  // Send Balance
  else if (option === "4") {
    console.clear();
    console.log("---------------------------");
    console.log(`Send Balance Section`);
    console.log(`Your Current Balance is: ${info.balance}`);
    console.log("---------------------------");

    let amount = parseInt(prompt("Enter the amount to send: "));

    if (isNaN(amount) || amount <= 0 || amount > info.balance) {
      console.log("Please enter a valid amount.");
      prompt("Press any key to continue...");
      return welcome();
    }

    let recipient = prompt("Enter the recipient's phone number: ");

    // To Be Continiue after Next Class

    info.balance -= amount;

    console.clear();
    console.log("---------------------------");
    console.log(`You have sent ${amount} to ${recipient}`);
    console.log(`Now! Your Current Balance is: ${info.balance}`);
    console.log("---------------------------");

    prompt("Press any key to continue...");
    return welcome();
  }

  // Account Info
  else if (option === "5") {
    console.clear();
    console.log("---------------------------");
    console.log(`Account Info:`);
    console.log(`Name: ${info.name}`);
    console.log(`Phone Number: ${info.number}`);
    console.log(`Current Balance: ${info.balance}`);
    console.log(`Current Code: ${info.code}`);
    console.log(`Current Pin: ${info.pin}`);
    console.log("");
    
    console.log("1. Change Name");
    console.log("2. Change Phone Number");
    console.log("3. Change Code");
    console.log("4. Change Pin");
    console.log("0. Back to Main Menu");
    
    console.log("---------------------------");

    option = prompt("Select any Option : ");
    // Changing Name
    if(option === '1'){
      let newName = prompt("Enter New Name: ");
      if (newName === "") {
        newName === info.name;        
      }
      info.name = newName;
      console.log("Name Changed Successfuly to :  ", newName);

    } 
    // changing Phone Number
    else if(option === '2'){
      let newPhone = prompt("Enter New Phone Number: ");
      if (newPhone === "") {
        newPhone === info.number;        
      }
      info.number = newPhone;
      console.log("Phone Number Changed Successfuly to :  ", newPhone);

    }
    // Changing Code
    else if(option === '3'){
      let newCode = prompt("Enter New Code with *-#: ");
      if (newCode === "") {
        newCode === info.code;        
      }
      info.code = newCode;
      console.log("Code Changed Successfuly to :  ", newCode);

    }
    // Changing Pin
    else if(option === '4'){
      let newPin = prompt("Enter New Pin  : ", {echo: " 😑 "});
      
      
      if (newPin === "") {
        newPin === info.pin;        
      }
      info.pin = newPin;
      console.log("Pin Changed Successfuly to :  ", newPin);
      
    }



    prompt("Press any key to continue...");
    return welcome();
  }  
//  Log Out
  else if (option === "6") {
    prompt("Press any key to Log Out");
    atmS();
  // Quit
  }
  else if (option === "7") {
    console.log("Thank you for using the ATM System. Goodbye!");
    return;
  } else {
    console.log("Invalid option. Please try again.");
    return welcome();
  }
};

// ------------------------ ATM System Function -------------------------
const atmS = () => {
  console.clear();
  console.log("---------------------------");
  console.log("Welcome to ATM System");
  console.log("---------------------------");
  console.log("1. Register");
  console.log("2. LogIn");
  console.log("3. Quit");
  console.log("---------------------------");
  option = prompt("Select any Option : ");

  if (option === "1") {
    // ------------------ Registration --------------------
    console.clear();
    console.log("---------------------------");
    console.log("Welcome to ATM System");
    console.log("---------------------------");

    let name = prompt("Enter your name: ");
    info.name = name;

    while (name === "") {
      console.clear();
      console.log("---------------------------");
      console.log("Welcome to ATM System");
      console.log("---------------------------");
      name = prompt("Please Enter your name: ");
      info.name = name;
    }

    let phn = prompt("Enter your Phone Number: ");
    info.number = phn;

    while (phn === "") {
      console.clear();
      console.log("---------------------------");
      console.log("Welcome to ATM System");
      console.log("---------------------------");
      phn = prompt("Please Enter your Phone Number: ");
      info.number = phn;
    }

    let pin = prompt("Set your Pin: ");
    info.pin = pin;

    while (pin === "") {
      console.clear();
      console.log("---------------------------");
      console.log("Welcome to ATM System");
      console.log("---------------------------");
      pin = prompt("Please Set a Pin Code: ");
      info.pin = pin;
    }

    atmS();
    console.log("---------------------------");
  } else if (option === "2") {   // ------------------ Login --------------------
    console.clear();
    console.log("Welcome to Login");
    let number = prompt("Enter your Phone Number: ");
    let pin = prompt("Enter your Pin: ", { echo: " 😑 " });
    if (pin === info.pin && number === info.number) {
      welcome(info.name, info.number);
    } else {
      console.log("Incorrect PIN. Please try again.");
      prompt("Press any key to continue...");
      atmS();
    }
  } else if (option === "3") { // ---------------- Exit --------------------
    console.log("Thank you for using the ATM System. Goodbye! 😊");
  } else {
    console.log("Invalid option. Please try again.");
    atmS();
  }
};

// ------------------ Start the ATM System --------------------
let code = info.code;

do {
  code = prompt("Enter your Code:");
  if (code === info.code) {
    atmS();
  }
} while (code !== info.code);


// console.log("Working");
