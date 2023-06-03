let cust_btn = document.querySelector(".linkssc");
let cust_sev = document.querySelector(".alls");
let info_btn = document.querySelector(".linkii");
let top_menu = document.querySelector(".oned");
let group = document.querySelector(".allsi");
let group_btn = document.querySelector(".linkssg");
// investment
let first_invest_btn = document.querySelector(".buuy");
let second_invest_btn = document.querySelector(".buuya");
let third_invest_btn = document.querySelector(".buuyb");
let fourth_invest_btn = document.querySelector(".buuyc");
let fifth_invest_btn = document.querySelector(".buuyd");
let sixth_invest_btn = document.querySelector(".buuye");
let seventh_invest_btn = document.querySelector(".buuyf");
let eighth_invest_btn = document.querySelector(".buuyg");
let nineth_invest_btn = document.querySelector(".buuyh");
let tenth_invest_btn = document.querySelector(".buuyi");
let eleventh_invest_btn = document.querySelector(".buuyj");
let deposit_side = document.querySelector(".allandalls");
let invest_page = document.querySelector(".allandall");
let amount = document.querySelector(".pay");
let ref_btn = document.querySelector(".downr");
let investment_btn = document.querySelector(".downt");
let user_btn = document.querySelector(".downm");
let nav_bar = document.querySelector(".glass");
let copy_btn = document.querySelector(".copy");
let informat = document.querySelector(".information");
// referral
let referral_page = document.querySelector(".referral");
let inputn_btn = document.querySelector(".input");
let no_id = document.querySelector(".please");
let wrong_id = document.querySelector(".not");
let result = document.querySelector(".checks");
let wrong_ids = document.querySelector(".wrong");
let overall = document.querySelector(".overall");
let referral_link = document.querySelector(".linkdd");

info_btn.addEventListener("click", function () {
  top_menu.style.display = "none";
  informat.style.display = "block";
  cust_sev.style.display = "none";
  group.style.display = "none";
});

cust_btn.addEventListener("click", function () {
  top_menu.style.display = "none";
  cust_sev.style.display = "block";
  informat.style.display = "none";
  group.style.display = "none";
});

group_btn.addEventListener("click", function () {
  top_menu.style.display = "none";
  group.style.display = "block";
  cust_sev.style.display = "none";
  informat.style.display = "none";
});

// investment
first_invest_btn.addEventListener("click", function () {
  invest_page.style.display = "none";
  deposit_side.style.display = "block";
  amount.textContent = "₦2,800.00";
  nav_bar.style.display = "none";
});

second_invest_btn.addEventListener("click", function () {
  invest_page.style.display = "none";
  deposit_side.style.display = "block";
  amount.textContent = "₦5,000.00";
  nav_bar.style.display = "none";
});

third_invest_btn.addEventListener("click", function () {
  invest_page.style.display = "none";
  deposit_side.style.display = "block";
  amount.textContent = "₦10,000.00";
  nav_bar.style.display = "none";
});

fourth_invest_btn.addEventListener("click", function () {
  invest_page.style.display = "none";
  deposit_side.style.display = "block";
  amount.textContent = "₦15,000.00";
  nav_bar.style.display = "none";
});

fifth_invest_btn.addEventListener("click", function () {
  invest_page.style.display = "none";
  deposit_side.style.display = "block";
  amount.textContent = "₦20,000.00";
  nav_bar.style.display = "none";
});

sixth_invest_btn.addEventListener("click", function () {
  invest_page.style.display = "none";
  deposit_side.style.display = "block";
  amount.textContent = "₦25,000.00";
  nav_bar.style.display = "none";
});

seventh_invest_btn.addEventListener("click", function () {
  invest_page.style.display = "none";
  deposit_side.style.display = "block";
  amount.textContent = "₦30,000.00";
  nav_bar.style.display = "none";
});

eighth_invest_btn.addEventListener("click", function () {
  invest_page.style.display = "none";
  deposit_side.style.display = "block";
  amount.textContent = "₦35,000.00";
  nav_bar.style.display = "none";
});

nineth_invest_btn.addEventListener("click", function () {
  invest_page.style.display = "none";
  deposit_side.style.display = "block";
  amount.textContent = "₦40,000.00";
  nav_bar.style.display = "none";
});

tenth_invest_btn.addEventListener("click", function () {
  invest_page.style.display = "none";
  deposit_side.style.display = "block";
  amount.textContent = "₦45,000.00";
  nav_bar.style.display = "none";
});

eleventh_invest_btn.addEventListener("click", function () {
  invest_page.style.display = "none";
  deposit_side.style.display = "block";
  amount.textContent = "₦50,000.00";
  nav_bar.style.display = "none";
});

investment_btn.addEventListener("click", function () {
  top_menu.style.display = "none";
  invest_page.style.display = "block";
  referral_page.style.display = "none";
  overall.style.display = "none";
  informat.style.display = "none";
  cust_sev.style.display = "none";
  group.style.display = "none";
});

user_btn.addEventListener("click", function () {
  top_menu.style.display = "block";
  invest_page.style.display = "none";
  referral_page.style.display = "none";
  overall.style.display = "none";
  overall.style.display = "none";
  informat.style.display = "none";
  cust_sev.style.display = "none";
  group.style.display = "none";
});

ref_btn.addEventListener("click", function () {
  top_menu.style.display = "none";
  invest_page.style.display = "none";
  referral_page.style.display = "block";
  overall.style.display = "none";
  overall.style.display = "none";
  informat.style.display = "none";
  cust_sev.style.display = "none";
  group.style.display = "none";
});

function myfunction() {
  var copy = document.getElementsByClassName("accno");
  navigator.clipboard.writeText("07045170938");
  // copy.select();
  // copy.selectSelectionRange(0, 99999);
  // alert("copied the text" + "07045170938");
}

// referral

// function refuse(){
//     wrong_ids.style.display = "block";
//     no_id.style.display = "none";
//     wrong_id.style.display = "none";
//     wrong_ids.style.color= "red"
// }

result.addEventListener("click", function () {
  if (!inputn_btn.value) {
    no_id.style.display = "block";
    no_id.style.color = "red";
    result.style.marginTop = "-1px";
    wrong_ids.style.display = "none";
    inputn_btn.style.border = "2px solid red";
  }
  if (inputn_btn.value == "8088361837") {
    overall.style.display = "block";
    referral_page.style.display = "none";
    no_id.style.display = "none";
    inputn_btn.style.border = "1px solid black";
  } else if (inputn_btn.value == "08088361837") {
    wrong_ids.style.display = "block";
    no_id.style.display = "none";
    wrong_id.style.display = "none";
    wrong_ids.style.color = "red";
    inputn_btn.style.border = "2px solid red";
  }
  if (inputn_btn.value == "7045170938") {
    overall.style.display = "block";
    referral_page.style.display = "none";
    no_id.style.display = "none";
    inputn_btn.style.border = "2px solid black";
    // referral_link.textContent= ""
  } else if (inputn_btn.value == "07045170938") {
    wrong_ids.style.display = "block";
    no_id.style.display = "none";
    wrong_id.style.display = "none";
    wrong_ids.style.color = "red";
    inputn_btn.style.border = "2px solid red";
  }

  //   else{
  //     no_id.style.display="block"
  //     no_id.style.textContent = "Wrong ID"
  //     no_id.style.color = "red"
  //   }
});

//  referral link
function myfunction() {
  var copied = document.getElementsByClassName("copied");
  navigator.clipboard.writeText("https://rb.gy/lgllm");
}
