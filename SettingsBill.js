module.exports =function(){
  var criticalLevel = 0;
  var warningLevel= 0;
  var callCost = 0;
  var smsCost = 0 ;

  var sms = 0.0;
  var call = 0.0;
  var Total = 0.0;

  let list = [];
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

};

if (billTypeEntered === "call"){
    call += callCost;
    costPrice += callCost;
}
else if (billTypeEntered === "sms"){
    sms += smsCost;
    costPrice += smsCost;
}

 list.push({
   cost : costPrice,
   type : billTypeEntered,
   time : new Date
 });
 return Total = sms+call;
}

function actionsReturn(){
  return list;
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
         actionsReturn,
         myColor
   }


}
