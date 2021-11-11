import pingPong from './../src/js/business.js'

describe ("pingPong", () =>  {
  test ('Should return ping when user input the number 3', () => {
    expect(pingPong(3)).toEqual("ping");
  });
  test ('Should return pong when user input the number 5', () => {
    expect(pingPong(5)).toEqual('pong');
  });
  test ('Should return pingpong when user input the number that divisible by both 3 and 5', () => {
    expect(pingPong(15)).toEqual('pingpong');
  });  
  test ('Should return the same number as user inputted if number is not divisible by 3 or 5' , () => {
      expect(pingPong(7)).toEqual(7);
  });
});

