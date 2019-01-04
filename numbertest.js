
exports.readNumber = (ai) => {
    var a = ai;
    var pos = ["หน่วย", "สิบ", "ร้อย", "พัน", "หมื่น", "แสน"];
    var num = ["ศูนย์", "หนึ่ง", "สอง", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "เก้า"];

    var element;
    var trans = "";
    for (let i = 0; i < a.length; i++) {
        element = a[i];
        if (element !== '0') {
            trans = trans + num[element]
            trans = trans + pos[a.length - (i + 1)]
        }
    }

    trans = trans.replace('สองสิบ', 'ยี่สิบ');
    trans = trans.replace('หนึ่งหน่วย', 'เอ็ด')
    trans = trans.replace('หน่วย', '')
    if (trans === 'เอ็ด') {
        trans = "หนึ่ง"
    }

    return trans;
}

