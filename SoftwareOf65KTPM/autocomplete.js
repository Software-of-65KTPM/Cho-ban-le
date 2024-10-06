let availableKeywords = [
    'Sách',
    'Sách về môn học Công nghệ phần mềm',
    'Sách về môn học Khoa học dữ liệu',
    'Sách về môn học Tin học',
    'Sách về môn học Công nghệ thông tin',
    'Sách về môn học Kinh tế',
    'Sách về môn học Quản lý dữ liệu',
    'Thức ăn cho chó',
    'Rau sạch',
    'Tai nghe siêu rẻ',
    'Máy tính giá rẻ',
    'Laptop đời mới'
];
const resultBox = document.querySelector('.result-box');
const inputBox = document.getElementById('.input-box');
inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>
        {
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
}