export const accidentsData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul',"Aug","Sep","Oct","Nov","Dec"],
  datasets: [
    {
      label: 'Number of Accidents',
      data: [12, 19, 15, 8, 13, 10,3,12,4,7,0,9],
      borderColor: '#564EBE',
      tension: 0.3,
      fill:{
        target: 'origin',   // Area will be red above the origin
        above: 'rgba(189, 186, 242,0.25)',   // Area will be red above the origi
      }
    }
  ]
};

export const violationsData = {
  labels: ['Speed Limit', 'Red Light', 'Wrong Turn', 'No Signal', 'Illegal Parking'],
  datasets: [
    {
      label: 'Number of Violations',
      data: [65, 45, 30, 25, 55],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    }
  ]
};