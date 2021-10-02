let xi = document.getElementById('xi');
let fi = document.getElementById('fi');

let box_1 = document.querySelector('.box-1');
let box_2 = document.querySelector('.box-2');
let box_3 = document.querySelector('.box-3');
let btn = document.querySelector('.btn');

function Error_nan() {
    if (box_3.value === NaN || box_2.value === NaN || box_1.value === NaN) {
        box_3.value = "Please rewrite the data"
        box_2.value = "Please rewrite the data"
        box_1.value = "Please rewrite the data"
    }
}
function Sigma_xi() {
    box_1.innerHTML = "";
    let xi_split = xi.value.split(" ");
    xi_terms = [];
    xi_split.forEach(element => {
        box_1.innerHTML += ` ${element}`;
        xi_terms.push(Number(element));
    });
    sigma_xi = xi_terms.reduce((total, current) => total + current, 0);
    xi.value = "";
    return console.log(xi_terms);
}
function Sigma_fi() {
    box_2.innerHTML = "";
    let fi_split = fi.value.split(" ");
    fi_terms = [];
    fi_split.forEach(element => {
        box_2.innerHTML += ` ${element}`
        fi_terms.push(Number(element))
    });
    sigma_fi = fi_terms.reduce((total, current) => total + current, 0);
    fi.value = "";
    return console.log(fi_terms);
}
function Mean() {
    fixi_row = []
    for (let i = 0; i < xi_terms.length; i++) {
        const element1 = xi_terms[i];
        const element2 = fi_terms[i];
        product_fixi = element1 * element2;
        fixi_row.push(product_fixi)
    }
    sigma_fixi = fixi_row.reduce((total, current) => total + current, 0);
    mean = sigma_fixi / sigma_fi;
    box_3.innerHTML = mean;
}
function Median() {

}

document.querySelector('.a').addEventListener("click", () => {
    Sigma_fi()
    Sigma_xi()
    Mean()
    Error_nan()
})
