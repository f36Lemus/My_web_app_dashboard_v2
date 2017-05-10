
var ctx = document.getElementById('traffic-chart').getContext('2d');

Chart.defaults.global.defaultFontColor = '#3a3a3a';

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['16-22', '23-30', '15-25', '24-36', '14-18', '35-46', '8-15'],
    datasets: [
            {
              label: 'Hourly',
              data: [516, 825, 670, 1200, 680, 918, 1450],
              backgroundColor: "rgba(20,95,25,0.4)",
              lineTension: 0.1,
            }, 
            {
              label: 'Daily',
              data: [810, 550, 570, 1100, 700, 900, 600],
              backgroundColor: "rgba(137,203,141,0.6)",
              lineTension: 0.1
            }, 
            {
              label: 'Weekly',
              data: [800, 1200, 650, 450, 1450, 1000, 510],
              backgroundColor: "rgba(126,177,190,0.6)",
              lineTension: 0.1
            }, 
            {
              label: 'Monthly',
              data: [800, 1400, 700, 600, 450, 1200, 1500],
              backgroundColor: "rgba(79,75,114,0.6)",
              lineTension: 0.1
            }
          ]
      },
  options: {
    title: {
      display: true,
      text: 'TRAFFIC',
      fontSize: 14,
      fontFamily: 'Helvetica Neue'

    },
    legend: {
      display: true,
      labels: {
        fontColor: 'rgba(143, 143, 143, 1)'

      }
    }
  }
});



var ctx = document.getElementById("daily-t-chart").getContext('2d');

var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["s", "M", "T", "W", "T", "F", "S"],
    datasets: [{
      label: 'traffic',
      data: [70, 90, 200, 85, 165, 110, 220],
      backgroundColor: "rgba(119,116,191,1)"
    }

    ]
  },
  options: {

    title: {
      display: true,
      text: 'DAILY TRAFFIC',
      fontSize: 14,
      fontFamily: 'Helvetica Neue'
    },
    legend: {
      display: false
    }
  }
});

var ctx = document.getElementById("mobile-u-chart").getContext('2d');
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Phones", "Tablets", "Desktop"],
    position: 'left',
    datasets: [{
      backgroundColor: [
        "#7774bf",
        "#7eb1be",
        "#89cb8d"
        
      ],
      data: [12, 19, 3]
    }

    ]
  },
  options: {
      title: {
        display: true,
        text: 'MOBILE USERS',
        fontSize: 14,
        fontFamily: 'Arial',
      },
      legend: {
        position: 'right'
      }
  }
});

const form = document.getElementById('message');
const input = form.querySelector('input');
const div = document.getElementById('alert-message');
const textArea = document.getElementById('message-u');
const message = document.createElement('label');
const alert = document.getElementById('alert-bar');
const close = document.getElementById('close');


close.addEventListener('click', () => {
  alert.style.display = 'none';
});


form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valueInput = input.value;
  let valueTextArea = textArea.value;
 if ( valueInput && valueTextArea ) {
    message.textContent = 'Your message has been sent. Thanks !';
    div.appendChild(message);
    message.style.color = "blue";

    input.value = " ";
    textArea.value = " ";
    
 } else {
   
    message.textContent = 'Please select a user and write a message';
    div.appendChild(message);
    message.style.color = "red";
 }

});




