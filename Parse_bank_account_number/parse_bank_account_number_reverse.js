//INSTEAD OF GETTING THE NUMBER AS ART AND CONVERTING IT TO A STRING I REVERSED IT TO TAKE THE NUMBER AS A STRING AND CONVERT TO CONSOLE ART. WHY NOT.

const accNo = '23056789';



console.log(printNo(accNo));
function printNo(accNo) {

    const noArr = Array.from(accNo.toString()).map(Number);
    const tMap = [' _ ','   ',' _ ',' _ ','   ',' _ ',' _ ',' _ ',' _ ',' _ '];
    const mMap = ['| |','  |',' _|',' _|','|_|','|_ ','|_ ','  |','|_|','|_|'];
    const bMap = ['|_|','  |','|_ ',' _|','  |',' _|','|_|','  |','|_|',' _|'];
    let top = [];
    let mid = [];
    let bot = [];

    noArr.forEach(num => {
        switch (num) {
            case 0:
                top.push(tMap[0]);
                mid.push(mMap[0]);
                bot.push(bMap[0]);
                break;
            case 1:
                top.push(tMap[1]);
                mid.push(mMap[1]);
                bot.push(bMap[1]);
                break;
            case 2:
                top.push(tMap[2]);
                mid.push(mMap[2]);
                bot.push(bMap[2]);
                break;
            case 3:
                top.push(tMap[3]);
                mid.push(mMap[3]);
                bot.push(bMap[3]);
                break;
            case 4:
                top.push(tMap[4]);
                mid.push(mMap[4]);
                bot.push(bMap[4]);
                break;
            case 5:
                top.push(tMap[5]);
                mid.push(mMap[5]);
                bot.push(bMap[5]);
                break;
            case 6:
                top.push(tMap[6]);
                mid.push(mMap[6]);
                bot.push(bMap[6]);
                break;
            case 7:
                top.push(tMap[7]);
                mid.push(mMap[7]);
                bot.push(bMap[7]);
                break;
            case 8:
                top.push(tMap[8]);
                mid.push(mMap[8]);
                bot.push(bMap[8]);
                break;
            case 9:
                top.push(tMap[9]);
                mid.push(mMap[9]);
                bot.push(bMap[9]);
                break;
            
            default:
                return 'no numb';
        }
    });
    return top.join("") + '\n' + mid.join("") + '\n' + bot.join("");
}