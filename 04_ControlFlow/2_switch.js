// Syntax of switch statement:
// switch (key) {
//     case value:
//          Code to execute if key matches value
//         break; // Exits the switch block
//     default:
//          Code to execute if no case matches
//         break;
// }

const month = 8; // The variable to check in the switch statement

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;    
    case 6:
        console.log("June");
        break;    
    case 7:
        console.log("July");
        break;    
    case 8:
        console.log("August");
        break; // Exits the switch block after logging "August"
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Please enter a number between 1 - 12");
        break; // Executes if none of the cases match
}

//? If we don't add break statement it will execute every case except default

// for a string

const day = "Wednesday"; // The variable to check in the switch statement

switch (day) {
    case "Monday":
        console.log("It's Monday");
        break;
    case "Tuesday":
        console.log("It's Tuesday");
        break;
    case "Wednesday":
        console.log("It's Wednesday");
        break; // If this break is removed, the code will fall through and execute the next cases as well
    case "Thursday":
        console.log("It's Thursday");
        break;
    case "Friday":
        console.log("It's Friday");
        break;
    case "Saturday":
        console.log("It's Saturday");
        break;
    case "Sunday":
        console.log("It's Sunday");
        break;
    default:
        console.log("Please enter a valid day");
        break;
}
