// nameParkingPoint
const arguments = process.argv;

function getTextOnParking(name) {
   return `на стоянці "${name}": `;
}

function getTextFreeAuto(count) {
   return `вільних авто: "${count}", `;
}

function getTextTaxiGoingByTime(count) {
   return `авто що прибувають протягом 5 хвилин: "${count}", `;
}

function getTextTaxiLeavingParking(count) {
   return `авто що поїхали з точки: "${count}". `;
}
function associationAllParametr(nameParkingPoint,countFreeTaxi,countGoingTaxi,countLeavingTaxi) {
   const strName = getTextOnParking(nameParkingPoint);
   const strFree = getTextFreeAuto(countFreeTaxi);
   const strGoing = getTextTaxiGoingByTime(countGoingTaxi);
   const strLeaving = getTextTaxiLeavingParking(countLeavingTaxi);

   const text = `Отримані данні показують що `;
   let strResultOrderOnTaxi = `То ж замовлення не може бути, опрацьованно.`;

   if (countFreeTaxi > 0) {
      strResultOrderOnTaxi = `То ж замовлення може бути, опрацьованно.`;
   } else if (countFreeTaxi === 0 && countGoingTaxi > 0) {
      strResultOrderOnTaxi = `То ж замовлення може бути, опрацьованно протягом 5 хвилин.`;
   }
   return `${text}${strName}${strFree}${strGoing}${strLeaving}${strResultOrderOnTaxi}`;
}

console.log(associationAllParametr(arguments[2],parseInt(arguments[3]),parseInt(arguments[4]),parseInt(arguments[5])));
