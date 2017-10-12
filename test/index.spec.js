suite('index.js', function () {

  var Greeting;

  setup(function(){
    Greeting = new App.Greeting();
  });

  test('sayHi welcome the given name', function (done) {

    expect(Greeting.sayHi('Hyyan')).to.equal('Hi Hyyan');
    done();
  });

});
