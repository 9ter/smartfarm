function resizeCharts() {
    const chartDivs = document.getElementsByClassName("chartDiv");
    for (let i = 0; i < chartDivs.length; i++) {
      chartDivs[i].style.maxWidth = "450px";
      chartDivs[i].style.height = "250px";
      chartDivs[i].style.margin = "0px auto";
    }
  }
  
  window.addEventListener("resize", function () {
    resizeCharts();
  });
  
  resizeCharts();