module.exports = function SettingBill() {
  var criticalLevel;
  var warningLevel;
  var callCost;
  var smsCost;

  var sms = 0.0;
  var call = 0.0;
  var Total = 0.0;

  let actionList = [];
  let color = '';
  let billType = '';
  let costPrice = 0;

  function Callprice(call_cost) {
    callCost = parseFloat(call_cost);
  }


  function getCall() {
    return callCost
  }

  function Smsprice(sms_cost) {
    smsCost = parseFloat(sms_cost);
  }

  function getSms() {
    return smsCost;
  }

  function criticalL(critical_level) {
    criticalLevel = parseFloat(critical_level);

  }

  function getCriticalLevel() {
    return criticalLevel
  }

  function warningL(warning_level) {
    warningLevel = parseFloat(warning_level);
  }

  function getWarningLevel() {
    return warningLevel
  }


  function Bill_Type(costType) {

    var billTypeEntered = costType;
    let costPrice = 0;

    if (Total >= criticalLevel) {
      return ;
    } else {

      if (billTypeEntered === "call") {
        call += callCost;
        costPrice = callCost;
      } else if (billTypeEntered === "sms") {
        sms += smsCost;
        costPrice = smsCost;
      }

    }

    actionList.push({
      type: billTypeEntered,
      cost: costPrice,
      timestamp: new Date()
    });

    return costType;
  }


  function actions() {
    return actionList;
  }

  function actionsFor(billType) {
    return actionList.filter((bill) => bill.type === billType);
  }

  function Call_Total() {
    return call.toFixed(2);
  }

  function Sms_Total() {
    return sms.toFixed(2);
  }

  function TTTotal() {
    Total = call + sms;
    return Total.toFixed(2);
  }

  function myColor() {

    if (Total >= criticalLevel) {
      let color = 'danger'
      return color;
    }
    if (Total >= warningLevel) {
      let color = 'warning'
      return color;
    }
  }
function resetBtn() {

     sms = 0;
     call = 0;
     Total = 0;
     criticalLevel;
     warningLevel;
     callCost;
     smsCost;

     actionList = [];
     billType = '';
     costPrice = 0;

}

  return {
    Bill_Type,
    Call_Total,
    Sms_Total,
    TTTotal,
    Smsprice,
    Callprice,
    warningL,
    criticalL,
    getCall,
    getSms,
    getCriticalLevel,
    getWarningLevel,
    myColor,
    actions,
    actionsFor,
    resetBtn
  }


}
