# ขั้นตอนในการเรียกใช้ javascript อีกไฟล์ หรือ การเรียกใช้ module
   1. สร้างไฟล์ ชื่อ test1.js เป็น ไฟล์ที่ใช้เรียกใช้ ไฟล์ หรือ module อื่นๆ
   2. สร้างไฟล์ ชื่อ coinfor.js และ calcurator.js เป็น ไฟล์ที่ถูกเรียกใช้ 
    2.1 ภายในทั้งสองไฟล์ จะมีการ exports function ตัวอย่าง
    
            exports.name = (parametor)=>{
                return result;
            }
     
    การเรียกใช้
    var read = require('./numbertest');
    var coinC = require('./coinfor');  

    var s = read.readNumber("22")
    console.log(s)

    var c = coinC.coin(1356)
