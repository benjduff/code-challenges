// Returns the bank account number parsed from specified string.

//  You work for a bank, which has recently purchased an ingenious machine to assist in reading letters and faxes sent in by branch offices.
//  The machine scans the paper documents, and produces a string with a bank account that looks like this:

//  _     _  _     _  _  _  _  _
// | |  | _| _||_||_ |_   ||_||_|
// |_|  ||_  _|  | _||_|  ||_| _|
//  Each string contains an account number written using pipes and underscores.
//  Each account number should have at least one digit, all of which should be in the range 0-9.

//  Your task is to write a function that can take bank account string and parse it into actual account numbers.

const accNo =   '    _  _     _  _  _  _  _ \n'+
                '  | _| _||_||_ |_   ||_||_|\n'+
                '  ||_  _|  | _||_|  ||_| _|\n';

//we want to seperate each row and then each 3 characters in the row and add them to an array.
//example topRow would = '    _  _     _  _  _  _  _ \n', then split into 3 character substr would = ['   ',' _ ',' _ ','   ', etc...]
//repeat with middle and bottom row.
//then join each index[i] and comapre it to the string for each number wtih a switch case.
//example if top[0] = ' _ ' and mid[0] = '| |' and bot[0] = '|_|' then add the number 0 to the return string and repeat for all other indexes.

console.log(printNo(accNo));
function printNo(accNo) {
    let split = accNo.split("\n");
    let topRow = split[0].match(/.{1,3}/g);
    let midRow = split[1].match(/.{1,3}/g);
    let botRow = split[2].match(/.{1,3}/g);
    let printNo = '';

    let matchArt = [];
    for(i=0; i<topRow.length; i++){
        matchArt[i] = topRow[i] + midRow[i] + botRow[i];
    }
    
    matchArt.forEach(numb => {
        switch (numb) {
            case ' _ | ||_|':
                printNo += 0
                break;
            case '     |  |':
                printNo += 1
                break;
            case ' _  _||_ ':
                printNo += 2
                break;
            case ' _  _| _|':
                printNo += 3
                break;
            case '   |_|  |':
                printNo += 4
                break;
            case ' _ |_  _|':
                printNo += 5
                break;
            case ' _ |_ |_|':
                printNo += 6
                break;
            case ' _   |  |':
                printNo += 7
                break;
            case ' _ |_||_|':
                printNo += 8
                break;
            case ' _ |_| _|':
                printNo += 9
                break;
            default:
                break;
        }
    });
    return Number(printNo);
}