/*
 This example might feel a bit convoluted, but its purpose is to demo
  the fact that I'm getting either one or the other value from an 
  object's key, based on the string that got assigned to the dynamicKey 
  variable, and accessed without issues, using the brackets notation.
 */


  function testBracketDynamicAccess(){
    var dynamicKey;

    if(Math.random() > 0.5){
        dynamicKey = "speed";
    }else{
        dynamicKey = "color";
    };

    let drone = {
        speed: 15,
        color: "red"
    }
    console.log(drone[dynamicKey]);
  }

  testBracketDynamicAccess();


  /*
    Since the value of the dynamicKey is populated on the Math.random()
    invocation, sometimes that expression evaluates to drone["speed"], 
    and other times that expression evaluates to drone["color"].
   */