module.exports =function(){
  var criticalLevel;
  var warningLevel;
  var callCost;
  var smsCost;

  var sms = 0.0;
  var call = 0.0;
  var Total = 0.0;

  let actionList = [];
  let color = '';

function Callprice(call_cost){
    callCost = parseFloat(call_cost);
}


function getCall() {
  return callCost;
}

function Smsprice(sms_cost){
  smsCost = parseFloat(sms_cost);
}
function getSms() {
  return smsCost;
}

function criticalL(critical_level){
  criticalLevel = parseFloat(critical_level);

}

function getCriticalLevel() {
  return criticalLevel
}

function warningL(warning_level){
  warningLevel = parseFloat(warning_level);
}

function getWarningLevel() {
return warningLevel
}


function Bill_Type(billType){

  var billTypeEntered = billType;
  let costPrice = 0;

if (Total >= criticalLevel) {
return;
}
else {

if (billTypeEntered === "call"){
    call += callCost;
    costPrice += callCost;
}
else if (billTypeEntered === "sms"){
    sms += smsCost;
    costPrice += smsCost;
}
}

actionList.push({
    type: billTypeEntered,
    cost : costPrice,
    timestamp: new Date()
});

 return Total = sms+call;
}




// function recordAction(action) {
//
//     let cost = 0;
//     if (action === 'sms'){
//         cost = smsCost;
//     }
//     else if (action === 'call'){
//         cost = callCost;
//     }
//
//
// }

function actions(){
    return actionList;
}

function actionsFor(billType){
  return actionList.filter((bill) => bill.type === billType);
}





function Call_Total(){
  return call ;
}

function Sms_Total(){
  return sms;
}

function TTTotal(){
  Total = call +sms ;
  return Total;
 }

function myColor(){

  if (Total >= criticalLevel) {
    let color = 'danger'
    return color;
  }
  if (Total >= warningLevel) {
    let color = 'warning'
    return color;
  }
}
       return {
         Bill_Type,
         Call_Total,
         Sms_Total,
         TTTotal,
         Smsprice ,
         Callprice,
         warningL,
         criticalL,
         getCall,
         getSms,
         getCriticalLevel,
         getWarningLevel,
         myColor,
         actions,
         actionsFor
   }


}
