const div = document.querySelector(".div");
const form = document.querySelector(".form");
const btn = document.querySelector(".btn");

function func(event) {
    // alert("currentTarget: " + event.currentTarget.tagName);
    event.preventDefault();
    console.log(event.currentTarget);
    console.log("++++++++++++++++++++++++++++");
    // console.log(event.target);
    // console.log(this);
    // console.log("========================================");
}
div.addEventListener('click', function (event) {
    // event.stopPropagation();
    func(event);
}, {capture: true});

form.addEventListener('click', function (event) {
    event.stopPropagation();
    func(event);
}, {capture: true})

btn.addEventListener('click', function (event) {
    event.stopPropagation();
    func(event);
}, {capture: true})