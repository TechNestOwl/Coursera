
//          Testing


/*
    After stand up meeting, I have my requirements from my project manager:
        - Read my new requiremetn
        - I write a failing test
        - I udate my source code so it resolves the requirement
        - Run a test that passes
        - Finally, I refactor my implementation

        Red, Green, Refactor


    Advantages to Test Driven Development

    - Minimize regressions (accidental bugs introduced to old code by codeing a new requirement)
    - Proves new implementation is working and not breaking other parts of the app
    - These tests can be automated, and thus keep verifiying again again
    - I can test my implementation with various inputs
    - The tests become specific kind of documentation for the new memnbers of my team

*/






function concatStr(str1, str2){
    return str1 + str2;
};

expect(concatStr("abc","def")).toBe("abcdef");
//  here I am passing my function to expect()
// then I add the toBe() function which gets passed the value of what I'm expecting the code to produce.


/*  JEST testing framework
    Code coverage:
        A tool for gauging how much of my code is includded in tests
        The higher the code-coverage, the lower the chance of having unidentified bugs.

    Mocking: 
        allows me to seperate code from it's intended dependicies during testing.
        allows for standalone unit testing
        With Jest, use in-built mocking functions
        Facilitates using asynchronous code

    Snapshot: 
        used to verify there are no regressions in the DOM of the app 
        after changes to the code base are made

        Technique for capturing the output of a component or function and comparing it
        against a strored snapshot. 

 */



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

    Unit testing is the most efficient and least costly form of testing. Done with a small piece of code
    that is tessted in isolation from the rest of the program, unlike integration testing. 

 */

    // Differet kinds of testing:
/*
    - end to end ( e2e )
    - integration testing
    - unit testing


    e2e:
        End to end tries to simulate how a USER would interact with the software end-product.
        e2e is the slowest and most time consuming 
        Most expensive testing
        e2e frameworks: 
            - WebDriverJS
            - Protractor
            - Cypress

    Integration: 
        Testing how sperate parts of the app work together
        How is the funcationality integrated?
        Software:
            - React testing library
            - Enzyme
        Faster & cheaper than e2e, but not more so that unit testing. 

    Unit Testing: 
        Testing the smallest unit of source code in isolation.
        A unit is the smallest piece of code you can test seperatley from the rest of the app. 
        The smallest unit of testable code is usually a function or a method.

        Unit testing is 
            -self contained
            - fast to run
            - easy to write

    Together, these can be represented as a three-level testing pyramid


    






*/





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

