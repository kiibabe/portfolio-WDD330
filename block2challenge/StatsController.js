export class StatsController {
  constructor(){
    this.parentElement = document.getElementById("stats");
    this.statsElement = document.getElementById("statImage");
  }

  async getStatsCanvas() {
    try {
      let canvas = await html2canvas(this.parentElement, {allowTaint: true});
      this.statsElement.removeAttribute("hidden");
      this.statsElement.append(canvas);
    } catch (error) {
      console.log(error);
    }
  }
}