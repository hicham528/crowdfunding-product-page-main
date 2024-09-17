let back_btn = document.querySelector(".back_btn");
let close_project_card = document.querySelector(".close_project_card");
let parent_porject_container = document.querySelector(
  ".parent_porject_container"
);
let project_container_parent = document.querySelectorAll(
  ".parent_porject_container"
);
let add_btn = document.querySelectorAll(".add-btn");
let input_price = document.querySelectorAll(".input_price");
let totale_price = document.querySelector(".totale_price");
let total_peaple = document.querySelector(".total_peaple");
let parent_result_container = document.querySelector(
  ".parent_result_container"
);
let git_it_btn = document.querySelector(".git_it_btn");
let current_peaple = 5007;
let current_money = 89914;
back_btn.onclick = () => {
  parent_porject_container.style.display = "flex";
  // Call the function again to make sure listeners are applied
  add_project();
};

close_project_card.onclick = () => {
  parent_porject_container.style.display = "none";
};

const calculate_and_create_all = () => {
  project_container_parent.forEach((btn) => {
    btn.onclick = (e) => {
      let only_project = e.target.closest(".only_project");
      if (only_project) {
        only_project.classList.toggle("new_only_project");

        let checkbox = only_project.querySelector(".ceck_btn");
        if (checkbox) {
          checkbox.checked = !checkbox.checked;
        }

        let take_value = only_project.querySelector(".take_value");
        if (take_value) {
          take_value.style.display =
            take_value.style.display === "flex" ? "none" : "flex";
        }
      }
    };
  });
};

calculate_and_create_all();

const add_project = () => {
  // Requery the add buttons and inputs because the DOM might have changed
  add_btn = document.querySelectorAll(".add-btn");
  input_price = document.querySelectorAll(".input_price");

  add_btn.forEach((btn, index) => {
    btn.onclick = () => {
      let input_value = parseFloat(input_price[index].value);
      total_peaple.innerHTML = "";
      totale_price.innerHTML = "";
      if (!isNaN(input_value)) {
        current_money += input_value;
        current_peaple++;
        total_peaple.textContent = current_peaple.toLocaleString();
        totale_price.textContent = `${current_money.toLocaleString()}`;

        parent_porject_container.style.display = "none";
        parent_result_container.style.display = "flex";
      }
    };
  });
};

add_project();

git_it_btn.onclick = () => {
  parent_result_container.style.display = "none";
};

let showAll = document.querySelector(".showAll");
let current_width = 0;

const showAllPrice = () => {
  let target_width = parseInt(showAll.dataset.width, 10);

  if (current_width < target_width) {
    current_width++;
    showAll.style.width = `${current_width}%`;
  } else {
    clearInterval(interval);
  }
};

window.addEventListener("DOMContentLoaded", () => {
  interval = setInterval(showAllPrice, 20);
});

let bookmark_btn = document.querySelector(".bookmark_btn");
let situation_img = document.querySelector(".situation_img");

bookmark_btn.onclick = () => {
  bookmark_btn.classList.toggle("new_bookmark_btn");

  if (bookmark_btn.textContent.includes("Bookmark")) {
    bookmark_btn.innerHTML = '<img src="images/icon-bookmark.svg" alt="Bookmarked icon" class="situation_img" /> Bookmarked';
  } else {
    bookmark_btn.innerHTML = '<img src="images/icon-bookmark.svg" alt="Bookmark icon" class="situation_img" /> Bookmark';
  }
};



let open_nav=document.getElementById("open_nav");
let close_nav=document.getElementById("close_nav");
let navbare=document.querySelector(".navbare");
open_nav.onclick=()=>{
  navbare.style.display="flex"
  open_nav.style.display="none"
}
close_nav.onclick=()=>{
  navbare.style.display="none"
   open_nav.style.display="block"
}