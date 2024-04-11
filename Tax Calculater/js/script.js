document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('taxForm');
    const ageInput = document.getElementById('age');
    const incomeInput = document.getElementById('income');
    const extraIncomeInput = document.getElementById('extra_income');
    const deductionsInput = document.getElementById('deductions');
    const ageErrorIcon = document.getElementById('ageErrorIcon');
    const incomeErrorIcon = document.getElementById('incomeErrorIcon');
    const extraincomeErrorIcon = document.getElementById('extraIncomeErrorIcon');
    const deductionsErrorIcon = document.getElementById('deductionsErrorIcon');
    const resultModal = document.getElementById('resultModal');
    const closeModal = document.querySelector('.close');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        let age = ageInput.value;
        let extraIncome = parseFloat(extraIncomeInput.value);
        let income = parseFloat(incomeInput.value) + extraIncome;
        let deductions = parseFloat(deductionsInput.value);
        let totalAmount = income - deductions;
        let errors = false;

        if (!age) {
            console.log(ageErrorIcon);
            ageErrorIcon.style.display = 'inline-block';
            errors = true;
        } else {
            ageErrorIcon.style.display = 'none';
        }

        if (isNaN(income)) {
            incomeErrorIcon.style.display = 'inline-block';
            errors = true;
        } else {
            incomeErrorIcon.style.display = 'none';
        }

        if (isNaN(extraIncome)){
            extraincomeErrorIcon.style.display = 'inline-block';
            errors = true;
        } else {
            extraincomeErrorIcon.style.display = 'none';
        }

        if (isNaN(deductions)) {
            deductionsErrorIcon.style.display = 'inline-block';
            errors = true;
        } else {
            deductionsErrorIcon.style.display = 'none';
        }

        if (!errors) {
            let taxRate;
            if (age === '<40') {
                taxRate = 0.3;
            } else if (age === '≥40 & <60') {
                taxRate = 0.4;
            } else {
                taxRate = 0.1;
            }

            if(income > 800000){
                let taxableIncome = Math.max(0, totalAmount - 800000);
                let tax = taxRate * taxableIncome;
                totalAmount = totalAmount - tax;
            }
            showResultModal(totalAmount);
        }
    });

    function showResultModal(tax) {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `<div style = "font-family: arial;font-size:25px;"><b>Your overall income will be</b><br> ${tax}</div><div>after tax deduction</div>`;
        resultModal.style.display = 'block';
    }

    closeModal.onclick = function() {
        resultModal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target === resultModal) {
            resultModal.style.display = 'none';
        }
    }
});

function popup(ele) {
    let childId = "child"+ele.id;
    //console.log(childId);
    var popup = document.getElementById(childId);
    popup.classList.toggle("show");
}
