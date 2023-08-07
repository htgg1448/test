$(document).ready(function () {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    
    $(".klundesaga-title").click(function (e) {
    var klundesagaitem = $(this).attr("data-tab");
    $("#" + klundesagaitem)
    .slideToggle()
    .parent()
    .siblings()
    .find(".klundesaga-content")
    .slideUp();
  
    $(this).toggleClass("active-title");
    $("#" + klundesagaitem)
    .parent()
    .siblings()
    .find(".klundesaga-title")
    .removeClass("active-title");
  
    $("i.fa-chevron-down", this).toggleClass("chevron-top");
    $("#" + klundesagaitem)
    .parent()
    .siblings()
    .find(".klundesaga-title i.fa-chevron-down")
    .removeClass("chevron-top");
    });
});

function myapp() {
    const buttons = document.querySelectorAll(".button");
    const cards = document.querySelectorAll(".product-card");
  
    function filter(category, items) {
      items.forEach((item) => {
        const isItemFiltered = !item.classList.contains(category);
        const isShowAll = category.toLowerCase() === "all";
        if (isItemFiltered && !isShowAll) {
          item.classList.add("hide");
        } else {
          item.classList.remove("hide");
        }
      });
    }
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const currentCategory = button.dataset.filter;
        console.log(currentCategory);
        filter(currentCategory, cards);
      });
    });
  }
myapp();
  