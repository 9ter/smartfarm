// ใช้ fetch() เพื่อดึงข้อมูล JSON จากไฟล์ PHP
fetch("get_data.php")
  .then((response) => response.json())
  .then((data) => {
    // นำข้อมูลที่ได้มาใช้งานตามต้องการ
    // เช่น แสดงผลข้อมูลในหน้าเว็บ
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = JSON.stringify(data, null, 2);
  })
  .catch((error) => console.error("Error:", error));

