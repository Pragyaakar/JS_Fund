/* Please follow the below-given instructions:
-  Read the question properly and refer to the explanation provided to achieve the correct output.
-  In the provided code pane, write your code at the mentioned place.
-  Save your code after every change and then run it.
-  You can check your solution with custom inputs by enabling toggler (Provide custom input) displayed below the code pane.
- After completing all the given questions, click on Submit button to submit the test.
*/

var stdin = process.openStdin();
var input = '';
stdin.addListener("data", function (d) {
    _input = d.toString(); // consider '_input' as your input

    _input = _input.split("").map((el) => {
        if (el == " ") {
            el = '@';
            return el;
        } else {
            return el;
        }
    });

    console.log(_input.reverse().join("").substring(1));
    _input1 = d.toString(); // consider '_input' as your input




    // write your logic here
    process.exit();

});