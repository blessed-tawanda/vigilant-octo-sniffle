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
    var hexaArr = [];
    var deciArr = [];
    var decimal;
    num = num.split('');
    var hexSize;
    var temp;
    for(var i = 0;i<num.length;i++)
        {
            switch(num[i])
            {
                case 'A':
                    num[i] = 10;
                    break;
                case 'B':
                    num[i] = 11;
                    break;
                case 'C':
                    num[i] = 12;
                    break;
                case 'D':
                    num[i] = 13;
                    break;
                case 'E':
                    num[i] = 14;
                    break;
                case 'F':
                    num[i] = 15;
                    break;
            }
        }
        for(var j=0;j<num.length;j++)
            {
                num[j] = Number(num[j])
            }
        hexSize = num.length - 1;
        
        while(hexSize>=0)
            {
                temp = Math.pow(16,hexSize);
                hexaArr.push(temp);
                hexSize--;
            }
            temp = 0;
        for(var k = 0;k<hexaArr.length;k++)
            {
                temp = num[k]*hexaArr[k];
                deciArr.push(temp);
            }
            decimal = 0;
            temp = 0;
        for(var l = 0;l<deciArr.length;l++)
            {
                temp=Number(deciArr[l]);
                decimal = decimal + temp;
            }
    return decimal;
}
function hexadecimalToBinary(num){
    var decimalEquivalent = hexadecimalToDecimal(num);
    return decimalToBinary(decimalEquivalent);
}
function decimalToOctal(num){
    var remainders = [];
    var remainder;
    var qotient;
    qotient = num;
    while(qotient>0)
    {
        remainder = qotient%8;
        qotient = Math.floor(qotient/8);
        remainders.push(remainder);
    }
    remainders = remainders.reverse();
    remainders = remainders.join('');
    return remainders;
}
// maybe i should create a to decimal function that is passed the number base and number to be converted :) food for thought
function octalToDecimal(num){
    //just copied sam code as with binary to decimal just change the 8 in the while loop
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
        temp = Math.pow(8,bitSize); //<= this is the only the line i changed from the binary to decimal function
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
function binaryToOctal(num){
    var decimalEquivalent = binaryToDecimal(num);
    return decimalToOctal(decimalEquivalent);
}
function octalToBinary(num){
    var decimalEquivalent = octalToDecimal(num);
    return decimalToBinary(decimalEquivalent);
}
function hexadecimalToOctal(num){
    var decimalEquivalent = hexadecimalToDecimal(num);
    return decimalToOctal(decimalEquivalent);
}
function octalToHexadecimal(num){
    var decimalEquivalent = octalToDecimal(num);
    return decimalToHexadecimal(decimalEquivalent);
}

console.log(octalToHexadecimal('63'));
