let assert = require("assert");
let SettingsBill = require("../SettingsBill");

describe('Settings widget using ExpressJS', function() {
  it('should calculate total cost of phone calls made', function() {
    var Set = SettingsBill();


    Set.Callprice(2);
    Set.Bill_Type('call');
    assert.equal(2, Set.actions()[0].cost);

    Set.Bill_Type('call');
    Set.Bill_Type('call');
    Set.Bill_Type('call');

    assert.equal(Set.TTTotal(), 8);

  });

  it('should calculate total cost of smses sent', function() {
    var Set = SettingsBill()

    Set.Smsprice(0.75);
    Set.Bill_Type('sms');
    Set.Bill_Type('sms');

    assert.equal(Set.TTTotal(), 1.5);
  });

  it('should calculate total cost of smses sent and calls made', function() {
    var Set = SettingsBill()

    Set.Smsprice(0.75);
    Set.Bill_Type('sms');
    Set.Bill_Type('sms');
    Set.Callprice(2);
    Set.Bill_Type('call');
    Set.Bill_Type('call');
    Set.Bill_Type('call');
    Set.Bill_Type('call');

    assert.equal(Set.TTTotal(), 9.5);
  });

  it('should return given amount that is charged for an sms', function() {
    var Set = SettingsBill()

    Set.Smsprice(0.75);
    Set.Bill_Type('sms')

    assert.equal(Set.Sms_Total(), 0.75);
  });

  it('should return given amount that is charged for a call', function() {
    var Set = SettingsBill()

    Set.Callprice(2.75);
    Set.Bill_Type('call')



    assert.equal(Set.Call_Total(), 2.75);
  });





});
