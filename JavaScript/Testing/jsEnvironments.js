// Node & npm 

/**
  Node.js is a seperate, stand alone environment. Meaning it can run in multiple settings. 
    - Command Line
    - Desktop application
    - Back-end

    Node Package Manager (npm)
    Let's developers use libraries, frameworks, and node modules.
    
    package.json: 
    -Once I initialize node in a workspace folder, package.json is created
    -package.json holds all the instruction on all the modules that are pulled from the npm repository
    -automatically updets when I install a new module
    -keeps treack of everything needed (dependencies) to have installed in the project

 */

// Testing

// JEST testing framework
function concatStr(str1, str2){
    return str1 + str2;
};

expect(concatStr("abc","def")).toBe("abcdef");
//  here I am passing my function to expect()
// then I add the toBe() function which gets passed the value of what I'm expecting the code to produce.



/*
    1. Identify why developer's test their code:
            Testing ensure the code is behaving in the way I intended.

            Testing ensures:
                - conciseness
                - clarity
                - repeatability

    2. Explain the red-green-refactor cycle:
            When a tests fail, you say they are RED. When they pass, you say they are GREEN.
            If a test fails, it is a sign that I need to re-write(refactor) the code so it passes GREEN

            Changing code structure, without changing functionality is know as refactoring. 
            ie: upating code without affecting the functionality. 

            Even if a test passes GREEN. I can still refactor so my code runs more efficiently
             and or so it's easier to read/understand for both my future-self and coleuges going through my code. 

             RED tests can be used as a guide to how I need to improve my code to cater for
             unmet expectations. This is a cyclical activity. 

            This cycle is the basis for "Test Driven Development" TDD approcah to programming.
            ( TDD ):
                1. write failing test
                2. refactor code to pass
                3. optimize source-code without chaning its results

            To sum up:
            " Testing is a how I verify the expectations regarding the behavior of my code"



    3. Differentiate between manual and automated testing:

    4. Demonstrate an understandng of unit testing. 

 */
