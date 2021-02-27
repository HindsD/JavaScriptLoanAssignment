$(document).ready(
    function(){
        $("form").submit(code);
    }
);

function code(event) {
    event.preventDefault(); //stops flashing form

    // get value from apt number box
    let salary = parseInt($("input#salary").val());
    let creditScore = parseInt($("input#creditScore").val());
    let months = parseInt($("input#jobMonths").val());

    if (salary >= 40000) {
        if (creditScore >= 600) {
            $("p#displayCheck").text("Loan Approved!")
        } else if (creditScore < 600) {
            if (months > 12) {
                $("p#displayCheck").text("Loan Approved!")
            } else {
                $("p#displayCheck").text("Loan Denied")
            }
        }
    } else if (salary < 40000) {
        if (creditScore >= 600) {
            if (months > 12) {
                $("p#displayCheck").text("Loan Approved!")
            } else {
                $("p#displayCheck").text("Loan Denied")
            }
        } else if (creditScore < 600) {
            $("p#displayCheck").text("Loan Denied")
        }
    }
}