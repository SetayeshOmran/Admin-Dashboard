// const { Ticks } = require("./pluginsJs/chartJs/chart");

let burger_menu = document.querySelector(".burger_menu");
let cross_icon = document.querySelector(".cross-icon");

let aside = document.querySelector("aside");
let bg_burger = document.querySelector(".bg-burger");
burger_menu.addEventListener("click", (e) => {
  aside.classList.add("active");
  bg_burger.style.display = "block";
});

bg_burger.addEventListener("click", (e) => {
  aside.classList.remove("active");
  bg_burger.style.display = "none";
});
cross_icon.addEventListener("click", (e) => {
  aside.classList.remove("active");
  bg_burger.style.display = "none";
});

// chart

let dataSeries = [10, 20, 15, 22, 18, 10];
let categoriesSeries = [1991, 1992, 1993, 1994, 1995, 1996];
var options = {
  chart: {
    type: "area",

    fontFamily: "Raleway",
    height: 300,
    zoom: {
      autoScaleYaxis: true,
    },
  },
  series: [
    {
      name: "فروش",
      data: dataSeries,
    },
  ],
  xaxis: {
    categories: categoriesSeries,
    axisBorder: {
      show: true,
      color: " #3a6ff8",
      height: 1,
      width: "100%",
      offsetX: 0,
      offsetY: 0,
    },

    axisTicks: {
      show: true,
      borderType: "solid",
      color: "#3a6ff8",
      height: 6,
      offsetX: 0,
      offsetY: 0,
    },
    labels: {
      style: {
        colors: "#3a6ff8",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: " #3a6ff8",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },

  colors: ["#2462ff"],
  fill: {
    colors: ["#2462ff"],
    type: "gradient",
    gradient: {
      shadeIntensity: 0.5,
      opacityFrom: 0.2,
      opacityTo: 0.6,
      stops: [0, 100],
    },
  },
  markers: {
    colors: ["#17153b"],
  },
  fill: {
    colors: ["#3a6ff8"],
  },

  colors: ["#3a6ff8"],
};

var chart = new ApexCharts(
  document.querySelector("#chart_bitcoin_btc"),
  options
);

chart.render();

let btn_one_hour = document.querySelector("#one_hour");

btn_one_hour?.addEventListener("click", function (e) {
  // btn_one_hour.classList.add("active_btn");
  chart.updateSeries([
    {
      name: "فروش",
      data: dataSeries,
    },
  ]);
});
let three_hour = document.querySelector("#three_hour");

three_hour?.addEventListener("click", function (e) {
  // three_hour.classList.add("active_btn");

  chart.updateSeries([
    {
      name: "فروش",
      data: [30, 160, 35, 50, 39, 70],
    },
  ]);
});

let one_day = document.querySelector("#one_day");

one_day?.addEventListener("click", function (e) {
  // one_day.classList.add("active_btn");

  chart.updateSeries([
    {
      name: "فروش",
      data: [10, 15, 18, 10, 25, 16],
    },
  ]);
});

let one_week = document.querySelector("#one_week");

one_week?.addEventListener("click", function (e) {
  // one_week.classList.add("active_btn");

  chart.updateSeries([
    {
      name: "فروش",
      data: [10, 12, 15, 20, 16, 10],
    },
  ]);
});
let one_month = document.querySelector("#one_month");

one_month?.addEventListener("click", function (e) {
  // one_month.classList.add("active_btn");

  chart.updateSeries([
    {
      name: "فروش",
      data: [10, 20, 30, 20],
    },
  ]);
});

let filter_btc_page = document.querySelectorAll(".filter_btc_page button");
filter_btc_page.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    filter_btc_page.forEach((btn) => {
      btn.classList.remove("active_btn");
    });
    btn.classList.add("active_btn");
  });
});

let buttons_operation = document.querySelectorAll(".buttons_operation button");
buttons_operation.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    buttons_operation.forEach((btn) => {
      btn.classList.remove("active_btn_operation");
    });
    btn.classList.add("active_btn_operation");
  });
});
let navgation_sidbar = document.querySelectorAll(".navgation_sidbar li");
// navgation_sidbar.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     navgation_sidbar.forEach((btn) => {
//       btn.classList.remove("active-navgation-link");
//     });
//     btn.classList.add("active-navgation-link");
//     e.preventDefault();
//   });
// });

// theme
let lightThemeBtn = document.querySelector("#lightThemeBtn");
let darkThemeBtn = document.querySelector("#darkThemeBtn");
lightThemeBtn.addEventListener("click", (e) => {
  darkThemeBtn.classList.remove("active_theme");
  lightThemeBtn.classList.add("active_theme");
  document.documentElement.removeAttribute("data-theme");

  document.documentElement.setAttribute("data-theme", "light");

  localStorage.setItem("themeMode", "light");
});

darkThemeBtn.addEventListener("click", (e) => {
  lightThemeBtn.classList.remove("active_theme");
  darkThemeBtn.classList.add("active_theme");
  document.documentElement.removeAttribute("data-theme");

  document.documentElement.setAttribute("data-theme", "dark");
  localStorage.setItem("themeMode", "dark");
});

let saveThemeMode = localStorage.getItem("themeMode");
if (saveThemeMode === "light") {
  document.documentElement.setAttribute("data-theme", "light");
  lightThemeBtn.classList.add("active_theme");
  colorChart = " #1ecb4f";
} else {
  document.documentElement.setAttribute("data-theme", "dark");
  darkThemeBtn.classList.add("active_theme");
  colorChart = "#f46d22;";
}
let sidbar_chat_responsive = document.querySelector(".sidbar_chat_responsive");
let message_chat = document.querySelector(".message_chat");
let list_sideBar = document.querySelector(".list_sideBar");
list_sideBar?.addEventListener("click", () => {
  sidbar_chat_responsive.classList.toggle("active_message");
  message_chat.addEventListener("click", () => {
    sidbar_chat_responsive.classList.remove("active_message");
  });
});

let inputSearchActive1 = document.querySelector("#inputSearchActive1");
let inputSearchActive2 = document.querySelector("#inputSearchActive2");
// console.log(inputSearchActive2);
let user_info_chat = document.querySelectorAll(".user_info_chat");
function activeSearch() {
  let inputSearchActive1Value = inputSearchActive1.value.trim().toLowerCase();
  let inputSearchActive2Value = inputSearchActive2.value.trim().toLowerCase();
  // console.log(user_info_chat);
  Array.from(user_info_chat).forEach((itemUser) => {
    let userName = itemUser
      .querySelector(".name_user_info_chat h5")
      .textContent.trim()
      .toLowerCase();
    if (userName.includes(inputSearchActive1Value || inputSearchActive2Value)) {
      itemUser.style.display = "flex";
    } else {
      itemUser.style.display = "none";
    }
  });
}

window.addEventListener("load", (e) => {
  let message_chat_content = document.querySelector(".message_chat_content");
  message_chat_content?.scrollTo(0, message_chat_content.scrollHeight);
});

let btn_send_message = document.querySelector(".btn_send_message");
let message_chat_content = document.querySelector(".message_chat_content");

btn_send_message?.addEventListener("click", (e) => {
  let group_send_message = document.querySelector(".group_send_message input");
  let message_sender = document.createElement("div");
  let spanTime = document.createElement("span");
  let divmessage = document.createElement("div");
  let currentDate = new Date();

  // گرفتن ساعت، دقیقه و ثانیه
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();

  let AorP;
  if (hours <= 12) {
    AorP = "am";
  } else {
    AorP = "pm";
  }
  // نمایش زمان در کنسول

  spanTime.textContent = ` ${hours}:${minutes}${AorP} `;
  divmessage.textContent = group_send_message.value;

  message_sender.classList.add("message_sender");

  message_sender.appendChild(divmessage);
  message_sender.appendChild(spanTime);
  message_chat_content.appendChild(message_sender);
  group_send_message.value = "";

  message_chat_content?.scrollTo(0, message_chat_content.scrollHeight);

  console.log(group_send_message);

  e.preventDefault();
});



window.addEventListener("load", () => {
  console.log("hello");
  let loading = document.querySelector(".content-loading");
  if (loading) {
    loading.remove();
  }
});
