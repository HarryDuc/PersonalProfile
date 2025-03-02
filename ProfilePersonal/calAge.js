function calculateAge(birthDate) {
    let today = new Date();
    let birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();
    let monthDiff = today.getMonth() - birth.getMonth();
    let dayDiff = today.getDate() - birth.getDate();

    // Kiểm tra xem đã qua sinh nhật năm nay chưa, nếu chưa thì trừ đi 1 tuổi
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}

let age = calculateAge("2005-11-05");
console.log(`Số tuổi: ${age}`);
