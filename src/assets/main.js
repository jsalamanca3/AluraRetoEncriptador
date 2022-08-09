function buttonEvent(fn) {
    let el = document.querySelector('#encryptField');
    const defaultContent = document.getElementById("defaultContent")
    const content = document.getElementById("content")
    let inputValue = document.getElementById('textField').value.toLowerCase()
    const response = fn(inputValue)

    defaultContent.style.display = "none";
    content.style.display = "initial";
    el.textContent = response
    el.style.height = `${el.scrollHeight}px`
}

function copyText() {
    let copyText = document.getElementById('encryptField');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}

function encryptText(inputString) {
    response = inputString
        .replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat');
    return response;
}

function decryptText(inputString) {
    response = inputString
        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ai', 'a')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u');
    return response;
}