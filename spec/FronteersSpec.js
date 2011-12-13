describe("FronteersShop", function() {

  var fs;

  var CLIENTTYPE_MEMBER    = 'member',
      CLIENTTYPE_FRONTEERS = 'fronteers',
      CLIENTTYPE_NONMEMBER = 'other';

  beforeEach(function() {
    fs = new FronteersShop();
  });

  describe("when the discount price is calculated", function() {

    // it("should correctly validate function input", function() {
    //   // Wrong number of expected arguments
    //   expect(fs.calcDiscount(1)).toBeUndefined();
    //   // First argument of wrong data type
    //   expect(fs.calcDiscount(null, CLIENTTYPE_FRONTEERS)).toBeUndefined();
    //   // Second argument of wrong data type
    //   expect(fs.calcDiscount(100, null)).toBeUndefined();
    //   // Input should be accepted
    //   expect(fs.calcDiscount(100, CLIENTTYPE_FRONTEERS)).toBeDefined();
    // });

    // it("should correctly calculate discount", function() {
    //   // Expect 50% of 100 => 50
    //   expect(fs.calcDiscount(100, CLIENTTYPE_FRONTEERS)).toEqual(50);
    //   // Expect 80% of 100 => 80
    //   expect(fs.calcDiscount(100, CLIENTTYPE_MEMBER)).toEqual(80);
    //   // Expect 100% of 100 => 100
    //   expect(fs.calcDiscount(100, CLIENTTYPE_NONMEMBER)).toEqual(100);
    //   // Check decimals, expect 50% of 17.1 => 8.55
    //   expect(fs.calcDiscount(17.1, CLIENTTYPE_FRONTEERS)).toEqual(8.55);
    // });

  });

});

