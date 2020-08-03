let numbSeries = '1234567890';
let numbArr = Array.from(numbSeries.toString()).map(Number);
let tempSeq = [0, 0, 0, 0, 0];
let finalSeq = '0';

getAns(numbArr, tempSeq, finalSeq);

function getAns(numbArr, tempSeq, finalSeq){
    //loop through array
    for(i=0; i< numbArr.length; i++){
        //if array value is greater than the first value of temp array set temp array[0] to numbarr[i]    
        // console.log(i);
        if(numbArr[i] > tempSeq[0]){
            tempSeq[0] = numbArr[i];
            console.log(tempSeq);
            //then add the continuing 4 numbarr values to temp array. Unless at the end of the numbarr.
            for(j=1; j<5; j++){
                // console.log(i);
                if(numbArr[i+j] === undefined) {
                    return finalSeq;
                } else {
                    tempSeq[j] = numbArr[i++];
                }
            }

            //convert temparr to string then to number, if temp arr > finalseq then final seq becomes temp arr
            if(Number(tempSeq.join("").toString()) > Number(finalSeq)){
                finalSeq = tempSeq.join("").toString();
            }
        }
    }
    
    //when for loop ends finalseq should be the greatest sequence of 5 numbers... hopefully
    console.log(finalSeq);
    return finalSeq;
}
