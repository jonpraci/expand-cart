var headID = document.getElementsByTagName("head")[0];
var link = document.createElement("link");
link.type = "text/css";
link.rel = "stylesheet";

headID.appendChild(link);

link.href = document.body.classList.contains("rtl")
  ? "./dist/assets/mainLtr.css"
  : "./dist/assets/mainRtl.css";
//

var accordionExample = document.getElementById("accordionExample"),
  save_btn = document.getElementById("save-btn"),
  collapsethree = document.querySelectorAll(
    "#collapsethree > div > div > div > input "
  );

var form_texts_p = document.querySelectorAll(".form-texts > p");

console.log(accordionExample);
console.log(save_btn);
console.log(collapsethree);
console.log(form_texts_p);

var accordion_item = document.createElement("div");
accordion_item.setAttribute("class", "accordion-item"); // 1

var form_check = document.createElement("div");
form_check.setAttribute("class", "form-check"); // 2
form_check.setAttribute("data-bs-toggle", "collapse");
form_check.setAttribute("data-bs-target", "#collapseOne");
form_check.setAttribute("aria-expanded", "true");
form_check.setAttribute("aria-controls", "collapseOne");

var inputs = document.createElement("input");
inputs.setAttribute("class", "form-check-input"); //3
inputs.setAttribute("type", "radio");
inputs.setAttribute("name", "flexRadioDefault1");
inputs.setAttribute("id", "flexRadioDefault2");

var labels = document.createElement("label"); // 3
labels.setAttribute("class", "form-check-label");
labels.setAttribute("for", "flexRadioDefault2");
labels.innerText = "Jumy Loras11111";
form_check.appendChild(inputs);
form_check.appendChild(labels);

var collapse = document.createElement("div"); //4
collapse.setAttribute("id", "collapseOne");
collapse.setAttribute("class", "accordion-collapse collapse");
collapse.setAttribute("aria-labelledby", "headingOne");
collapse.setAttribute("data-bs-parent", "#accordionExample");

var row = document.createElement("div"); // 5
row.setAttribute("class", "row");

row.innerHTML = `
<div class="col-md-6">
<div class="accordion-body">
  <div class="form-texts">
    <p class="one">
      Unit 2 Green Mount Retail park
    </p>
    <p class="two">Halfax</p>
    <p class="three">HX 1 5QN</p>
    <p class="four">Tel: 0344 332 5931</p>
  </div>
  <button class="btn">Edit Address</button>
</div>
</div>
<div class="col-md-6 part-map">
<div style="width: 100%; height: 100%">
  <iframe
    width="100%"
    height="100%"
    frameborder="0"
    scrolling="no"
    marginheight="0"
    marginwidth="0"
    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
    onchange="(e) => console.log('e.target.value')"
  ></iframe>
</div>
</div>

`
// hee
collapse.appendChild(row);

accordion_item.appendChild(form_check);
accordion_item.appendChild(collapse);

accordionExample.appendChild(accordion_item);
// kljkj
// 
// 
// 