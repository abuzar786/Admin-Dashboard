const sideMenu = document.querySelector("aside");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const themeToggler = document.querySelector(".theme-toggler");

const Orders = [
  {
    productName: "Foldable Mini Drone",
    productNumber: "85863",
    paymentStatus: "Due",
    shipping: "pending",
  },
  {
    productName: "MacBook",
    productNumber: "85863",
    paymentStatus: "Refunded",
    shipping: "Declined",
  },
  {
    productName: "Apple Airpods",
    productNumber: "85863",
    paymentStatus: "Paid",
    shipping: "Delivered",
  },
  {
    productName: "Galaxy S20Plus",
    productNumber: "85863",
    paymentStatus: "Due",
    shipping: "pending",
  },
  {
    productName: "Google HeadSet",
    productNumber: "85863",
    paymentStatus: "Paid",
    shipping: "Delivered",
  },
  {
    productName: "Ruko F11 Pro Drone",
    productNumber: "85863",
    paymentStatus: "Refunded",
    shipping: "Declined",
  },
  {
    productName: "Foldable Mini Drone",
    productNumber: "85863",
    paymentStatus: "Due",
    shipping: "pending",
  },
];

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

themeToggler.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variables");

  themeToggler.querySelector("span:nth-child(1)").classList.toggle("active");
  themeToggler.querySelector("span:nth-child(2)").classList.toggle("active");
});

Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
                    <td>${order.productName}</td>
                    <td>${order.productNumber}</td>
                    <td>${order.paymentStatus}</td>
                    <td class="${
                      order.shipping === "Declined"
                        ? "danger"
                        : order.shipping === "pending"
                        ? "warning"
                        : "primary"
                    }">${order.shipping}</td>
                    <td class="primary">Details</td>
    `;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});
