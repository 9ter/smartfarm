// JS

function setGauge(index, y) {
  switch (index) {
    case 1:
      chart1.series(0).options({
        points: [{ id: "1", x: "speed", y: y }],
      });
      break;
    case 2:
      chart2.series(0).options({
        points: [{ id: "1", x: "speed", y: y }],
      });
      break;
  }
}

fetch("get_data.php")
  .then((response) => response.json())
  .then((data) => {
    // นำข้อมูลที่ได้มาเก็บในตัวแปร arr
    const arr = data;

    // สามารถนำ arr ไปใช้งานตามต้องการ
    //console.log(arr[0]["light"]);

    setGauge(1, parseInt(arr[0]["light"]));
    setGauge(2, parseInt(arr[0]["soiltem"]));

  })
  .catch((error) => console.error("Error:", error));
