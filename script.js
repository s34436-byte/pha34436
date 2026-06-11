document.addEventListener('DOMContentLoaded', function () {
  console.log('Portfolio ของ Phachara พร้อมแล้ว!');

    // เพิ่มฟังก์ชันแสดงปี ค.ศ. ปัจจุบันอัตโนมัติ
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
