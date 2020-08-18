// For building the encrypted string:
// Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
// Do this n times!

// For both methods:
// If the input-string is null return exactly this value!
// If n is <= 0 then return the input text.


function encrypt(text, n) {
    if(n < 0 || typeof text != 'string') return text;
    let remChars = text.split("");
    while(n != 0){
        let t1 = [];
        let t2 = [];
        for( let i = 0; i < remChars.length; i++){
            if(i % 2 === 0){
                t1.push(remChars[i]);
            } else {
                t2.push(remChars[i])
            }
        }
        remChars = t2.concat(t1);
        n--;
    }
    return remChars.join("");
}

function decrypt(encryptedText, n) {
    if(n < 0 || typeof encryptedText != 'string') return encryptedText;
    let results = encryptedText.split("");
    let halfWay = Math.floor(encryptedText.length/ 2);
    while(n > 0){
        let temp = [];
        let t1 = results.slice(0, halfWay);
        let t2 = results.slice(halfWay, encryptedText.length);
        for( let i = 0; i < encryptedText.length; i++){
            if(i % 2 === 0){
                temp += t2.splice(0, 1);
            } else {
                temp += t1.splice(0, 1);
            }
        }
        results = [...temp];
        n--;
    }
    return results.join("");
}

    console.log('\n' + '--ENCRYPT--' + '\n');
    console.log(encrypt("This is a test!", 0));
    console.log(encrypt("This is a test!", 1));
    console.log(encrypt("This is a test!", 2));
    console.log(encrypt("This is a test!", 3));
    console.log(encrypt("This is a test!", 4));
    console.log(encrypt("This is a test!", -1));
    console.log(encrypt("This kata is very interesting!", 1)); 


    console.log('\n' + '--DECRYPT--' + '\n');
    console.log(decrypt("This is a test!", 0));
    console.log(decrypt("hsi  etTi sats!", 1));
    console.log(decrypt("s eT ashi tist!", 2));
    console.log(decrypt(" Tah itse sits!", 3));
    console.log(decrypt("This is a test!", 4));
    console.log(decrypt("This is a test!", -1));
    console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1));

    console.log(encrypt("", 0), "");
    console.log(decrypt("", 0), "");
    console.log(encrypt(null, 0), null);
    console.log(decrypt(null, 0), null);
