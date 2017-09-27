function decimalToBinary(num){
    var remainders = [];
    var remainder;
    var qotient;
    qotient = num;
    while(qotient>0)
    {
        remainder = qotient%2;
        qotient = Math.floor(qotient/2);
        remainders.push(remainder);
    }
    remainders = remainders.reverse();
    remainders = remainders.join('');
    return remainders;
}
function binaryToDecimal(num){
    var binArr; 
    var bitSize;
    var nums = [];
    var bit = [];
    var temp;
    var decimal;
    binArr = num.toString();
    binArr = binArr.split('');
    bitSize = binArr.length-1;
 
    while(bitSize>=0)
    {
        temp = Math.pow(2,bitSize);
        bit.push(temp);
        bitSize--;
    }
    temp = 0;
    for(var i = 0;i<bit.length;i++)
    {
        temp = binArr[i]*bit[i];
        nums.push(temp);
    }
    decimal = 0;
    for(var j = 0;j<nums.length;j++)
    {
        temp=Number(nums[j]);
        decimal = decimal + temp;
    }
    return decimal;
}

function decimalToHexadecimal(num){
    var remainders = [];
    var remainder;
    var qotient;
    qotient = num;
    while(qotient>0)
    {
        remainder = qotient%16;
        switch(remainder)
        {
            case 10:
                remainder = "A";
                break;
            case 11:
                remainder = "B";
                break;
            case 12:
                remainder = "C";
                break;
            case 13:
                remainder = "D";
                break;
            case 14:
                remainder = "E";
                break;
            case 15:
                remainder = "F";
                break;
        }
        qotient = Math.floor(qotient/16);
        remainders.push(remainder);
    }
    remainders = remainders.reverse();
    remainders = remainders.join('');
    return remainders;
}

function binaryToHexadecimal(num){
    var decimal = binaryToDecimal(num);
    return decimalToHexadecimal(decimal);
}
function hexadecimalToDecimal(num){
    var hexaArr = num.split('');
    var letters = [];
    return hexaArr;
}
console.log(hexadecimalToDecimal('B2342'));
