
start();

function start() {
    let calc = document.getElementById('mensagem');
    calc.onclick = function() {
        if (validateFields()) {
            let resultValue = mensagem();
            showTotal(resultValue);
        }
    };
}



function validateFields() {
    let fieldsId = ['month', 'interest', 'capital'];
    let allFieldsValid = true;

    for (let i = 0; i < fieldsId.length; i++) {
        let id = fieldsId[i];
        let field = document.getElementById(id);
        if (field.value.trim() === '') {
            allFieldsValid = false;
            showFieldMessageError(id);
        } else {
            hideFieldMessageError(id);
        }
    }

    return allFieldsValid;
}

function showFieldMessageError(inputId) {
    let messageErrorId = inputId + 'Error';
    let spanError = document.getElementById(messageErrorId);
    spanError.className = spanError.className.replace('hide', '').trim();
}

function hideFieldMessageError(inputId) {
    let messageErrorId = inputId + 'Error';
    let spanError = document.getElementById(messageErrorId);
    if (!spanError.className.includes('hide')) {
        spanError.className = spanError.className + ' hide';
    }
}
