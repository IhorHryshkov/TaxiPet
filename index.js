// // //1. Розробити функцію, яка буде обчислювати скільки від загальної кількості мішків кортоплі  було спізжено в процентах. Функція приймає два параметри для обчислення, це загальна кількість мішків кортоплі що привезли на склад, другий скільки мішків було спізжено. Функція повинна повертати строку, в якій вказано в процентах, скільки було спізжено мішків. 

// // // function calculationPercent(countTotal,countPart) {
// // // let totalCalculate = (countPart/countTotal)*100;
// // //     return `${totalCalculate}%`

// // // }
// // // const countTotal = 200;
// // // const countPart = 50;

// // // console.log (calculationPercent(countTotal,countPart));


// // // 11 function calculationPov(radius) {
// // //     return radius*radius;
// // // }

// // // function calcAreaCircle(radius)  {
// // //     let x = calculationPov(radius);

// // //     return (3.14*x);

// // // }
// // // console.log(calcAreaCircle(100));
// // let thicknessFirst 
// // function boxVolume(length,width,height) {
    
// //     return length*width*height;

// // }

// // function transferVolumeM2(length,width,height) {
// // const thickness = thicknessFirst;
// //     const paramBox = boxVolume(length,width,height)
// // return paramBox/thickness;
// // }
// // thicknessFirst = 6;
// // console.log(transferVolumeM2(5,5,5))
// const arguments = process.argv

// function overAllVolume(volumeOfOne,quantity) {

//    return volumeOfOne*quantity;
  
// }

// function returnText(name, volumeOfOne,quantity) {
 
//    return `Ми отримали продукцію ${name} у кількості  ${volumeOfOne}, та одна штука цієї продукції має обєм ${quantity}`;

// }


// function fullParameterReturn(name, volumeOfOne,quantity) {

//    const countTotal = overAllVolume(volumeOfOne,quantity);
//    const textResult = returnText(name, volumeOfOne,quantity);

//    let typeVechicle;
//    if(countTotal > 40){
//       typeVechicle = 'літак';
//    } else if (countTotal>10) {
//       typeVechicle = `кораблем`;
      
//    } else if (countTotal<=10) {
//       typeVechicle = `машиною`;
      
//    }

//    return `${textResult}. Загальний об'єм цієї продукції ${countTotal}, що дозволяє нам її транспортувати ${typeVechicle}`;
// }

// console.log(fullParameterReturn(arguments[2],arguments[3], arguments[4]))
// V циліндра= π*r2*h, де π- число Пі (дорівнює 3,14), r - радіус основи циліндра, h – висота циліндра
// 3.14*r2*h

// const arguments = process.argv


// function calculationTotalVolume(weightKg,numberPieces) {
    

//    return weightKg/numberPieces;
   
// }
//  function returnText (name,weightKg,numberPieces) {
//    total = calculationTotalVolume(weightKg,numberPieces);
//  return `Ми отримали ${name}, у кількості  ${weightKg} кілограм, для виготовлення свічок, шо дозволе нам виготовити ${total} штук,для виготовлення однієї свічки нам потрібно ${numberPieces} грамм воску`;
//  }

 


//  console.log(returnText(arguments[2],arguments[3],arguments[4]))


// nameParkingPoint
const arguments = process.argv
function pointParking (nameParkingPoint) {
  return `на стоянці ${nameParkingPoint} `
}
function quantityTaxi (freeAuto) {
   return `вільних авто ${freeAuto} `
 }
 function numberTaxisGo (TaxisGo) {
   return `авто що прибувають протягом 5 хвилин ${TaxisGo} `
 }
 function pointCarGo (GoOutPoint) {
   return `авто що поїхали з точки ${GoOutPoint} `
 }
function associationAllparametr(nameParkingPoint,freeAuto,TaxisGo,GoOutPoint) {
const name = pointParking (nameParkingPoint);
const free = quantityTaxi (freeAuto);
const number = numberTaxisGo (TaxisGo);
const point = pointCarGo (GoOutPoint);
const text = `Отримані данні показують що на стоянці`;
if (freeAuto>=0) {
  return `${text} ${name}:${free},${number},${point}.То ж замовлення може бути, опрацьованно.`;
}
 if (TaxisGo>0) {
  return `${text} ${name}:${free},${number},${point}.То ж замовлення може бути, опрацьованно протягом 5 хвилин.`;
}
 else {
  return `${text} ${name}:${free},${number},${point}.То ж замовлення не може бути, опрацьованно.`
}
}

console.log(associationAllparametr(arguments[2],arguments[3],arguments[4],arguments[5]))