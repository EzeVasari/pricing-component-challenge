const d = document,
    $checkbox = d.querySelector("input[type=checkbox]"),
    $priceBasic = d.querySelector("#basic"),
    $priceProf = d.querySelector("#prof"),
    $priceMaster = d.querySelector("#master");

d.addEventListener("DOMContentLoaded", check($checkbox.checked));
$checkbox.addEventListener("change", (e) => { check(e.target.checked) });

function check(checked) {
    if (checked) {
        $priceBasic.textContent = 19.99;
        $priceProf.textContent = 24.99;
        $priceMaster.textContent = 39.99;
    }else {
        $priceBasic.textContent = 199.99;
        $priceProf.textContent = 249.99;
        $priceMaster.textContent = 399.99;
    }
}