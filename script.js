function openingTag(tagName) {
    return '<' + tagName + '>'
}

function closingTag(tagName) {
    return '</' + tagName + '>'
}

function element(tagName, children) {
    if (typeof children === 'undefined') {
        return openingTag(tagName) + closingTag(tagName)
    }

    if (typeof children === 'string') {
        return openingTag(tagName) + children + closingTag(tagName)
    }

    if (typeof children === 'number') {
        return openingTag(tagName) + children.toString + closingTag(tagName)
    }

    if (Array.isArray(children)) {
        var content = ''
        for (var i = 0; i < children.length; i++) {
            content = content + children[i]
        }
        return openingTag(tagName) + content + closingTag(tagName)
    }
    return openingTag(tagName) + content + closingTag(tagName)
}

var allData = []

function td(children) { return element('td', children) }
function tr(children) { return element('tr', children) }

function submit() {
    var inputNama = document.getElementById('nama')
    var inputAlamat = document.getElementById('alamat')
    var tbody = document.getElementById('tbody')

    var nama = inputNama.value
    var alamat = inputAlamat.value

    var data = {
        nama: inputNama.value,
        alamat: inputAlamat.value,
    }

    allData.push(data)
    var content = ''
    for (var i = 0; i < allData.length; i++) {
        var item = allData[i]
        content += tr([td(item.nama), td(item.alamat)])
    }

    tbody.innerHTML = content

}