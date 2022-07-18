



function getTwoNum(num1: number, num2: number): number {
    if (num1 > num2) {

        return num2;
    }
    else {

        return num1;

    }
}
getTwoNum(3, 5)


function getTreeNum(num1: number, num2: number, num3: number): number {
    const myArray = [num1, num2, num3];
    console.log(Math.min(...myArray))
    return Math.min(...myArray)
}
getTreeNum(7, 5, 9);


function returnAvr(num1: number, num2: number, num3: number): number {

    const arrayAvr = [num1, num2, num3];
    console.log((num1 + num2 + num3) / arrayAvr.length)
    return ((num1 + num2 + num3) / arrayAvr.length)

}
returnAvr(7, 5, 9);



function sumNumber(num1: number, num2: number, num3: number, num4: number): number {
    return num1 + num2 + num3 + num4;
}
sumNumber(1, 2, 3, 4);


function getArraySum(myArray: number[]): number {
    return Math.min(...myArray);
}
getArraySum([2, 5, 4]);

function getAvrArray(myArray: number[]): number {
    let newArray = 0;
    myArray.forEach(element => {
        newArray += element;
    });
    return newArray / myArray.length;
}
getAvrArray([2, 2, 2])

function getsumArray(myarray: number[]): number {
    let newArray = 0;
    myarray.forEach(element => {
        newArray += element;
    });
    return newArray;
}
getsumArray([2, 5, 8])


function getSecondName(nameArray: string[]): string {
    let name1: string = nameArray[2];
    return name1;

}
getSecondName(["shlomo", "hailo", "hello"])



function returnFirstA(namesArray: string[]): string {
    for (let i: number = 0; i < namesArray.length; i++) {
        if (namesArray[i][0] === "A") {
            return namesArray[i];
        }
    }
    return "not find"
}
console.log(returnFirstA(["shlomo", "hailo", "hello", "AILO"]));




function getDoubleNumber(arraynum: number[]): boolean {
    for (let i: number = 0; i < arraynum.length; i++) {
        if (arraynum[i] % 2 === 0) {
            return true;
        }

    }
    return false

}
console.log(getDoubleNumber([1, 3, 5]));



function getDate(mydate: string): Date {
    let datenew: Date = new Date(mydate);
    return datenew;
}
console.log(getDate("2/1/2001"));




function printText(mydext: string, mynumber: number) {
    for (let i: number = 0; i < mynumber; i++) {
        console.log(mydext);

    }
}
printText("shlomo", 3)


function checkAge(nyname: string, myage: number): string {
    if (myage > 18) {
        return `welcome ${nyname}`;
    }

    return `no entry ${nyname}`;

}
checkAge("shlomo", 20)




function returnFullName(firsname: string, lastname: string): any {
    if (firsname[0] === lastname[0]) {
        return firsname[0];
    }
    return '0';
}
returnFullName("shlomo", "hailo");




function returnText(myarray: any[]): string {
    switch (myarray.length) {
        case 0:
            return "No information";
        case 1:
            return "A single figure";
        case 2:
            return "A pair of data";
        default:
            return "There is data many ";

    }
}
console.log(returnText([2, "shlomo"]));




function getNumberAndText(numarray: number[], mytext: string) {
    switch (mytext) {
        case "upsidedown":
            return numarray.reverse();

        case "Descending":

            return numarray.sort((a, b) => b - a);

        case "ascending order":
            return numarray.sort((a, b) => a - b);
        case "text":
            return numarray.toString();
        default:
            break;
    }

}
console.log(getNumberAndText([2, 5, 6, 88], "upsidedown"));



function anyArray(sumarray: any[]): any {
    let stringarray: string[] = [];
    let numberarray: number[] = [];
    let booleanarray: boolean[] = [];
    let objarray: object[] = [];


    let newarray: any[] = [];
    sumarray.forEach(element => {
        switch (typeof (element)) {
            case "string":
                stringarray.push(element);
                break;
            case "number":
                numberarray.push(element);
                break;
            case "boolean":
                booleanarray.push(element);
                break;
            case "object":
                objarray.push(element);
                break;

            default:
                return;
        }

    });
    newarray.push(stringarray, numberarray, booleanarray, objarray);

    return newarray
}
console.log(
    anyArray(["shlomo", 2, false, 5, "hailo", {}, "hello", 8, {}, true]));



    // function getNunber(num: number): void {
    //     let input: number = document.getElementById("input").value;
    
    //     if (num > 10) {
    //         console.log("greater then 10");
    
    //     }
    //     else (num < 10) {
    //         console.log("less then 10");
    
    //     }
    
    // }
    // getNunbe(input);
    
    // function fetFromUser(): void {
    //     let input: number = document.getElementById('input').value;
    //     if (input >= 10) {
    //         console.log("greater then 10");
    
    //     }
    //     else if (input <= 10) {
    //         console.log("less then 10");
    
    //     }
    //     else {
    //         console.log("equel to 10");
    
    //     }
    // }
    // fetFromUser()
    
    // function getToNumber(): void {
    //     let num1: number = document.getElementById("input1").value;
    //     let num2: number = document.getElementById("input2").value;
    
    //     if (num1 > num2) {
    //         console.log(num1);
    
    //     }
    //     else if (num1 < num2) {
    //         console.log(num2);
    
    //     }
    //     else if (num1 === num2) {
    //         console.log("values are equal");
    
    //     }
    
    // }
    // getToNumber()