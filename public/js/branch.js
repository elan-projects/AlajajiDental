const branches = [
    {
      branch: "فرع الملز",
      hospital: "د.مستوصف عبد العزيز العجاجي - الفرع الرئيسي",
      email: "marketing@alajajidental.com",
      contact: "0114774700 EXT: 103",
      image: "https://alajajidental.com/images/hospital/2.jpg"
    },
    {
      branch: "فرع العليا",
      hospital: "مستشفى الدكتور سليمان الحبيب",
      email: "marketing@alajajidental.com",
      contact: "0115259999 Ext: 8",
      image: "https://alajajidental.com/images/hospital/3.jpg"
    },
    {
      branch: "فرع الريان",
      hospital: "مستشفى الدكتور سليمان الحبيب",
      email: "marketing@alajajidental.com",
      contact: "0114909999 Ext: 8",
      image: "https://alajajidental.com/images/hospital/5.jpg"
    },
    {
      branch: "فرع السويدي",
      hospital: "مستشفى الدكتور سليمان الحبيب",
      email: "marketing@alajajidental.com",
      contact: "0114754444 Ext: 8",
      image: "https://alajajidental.com/images/hospital/4.jpg"
    },
    {
      branch: "فرع القصيم",
      hospital: "مستشفى الدكتور سليمان الحبيب",
      email: "marketing@alajajidental.com",
      contact: "0116316666 Ext: 8",
      image: "https://alajajidental.com/images/hospital/3.jpg"
    },
    {
      branch: "فرع التخصصي",
      hospital: "مستشفى الدكتور سليمان الحبيب",
      email: "marketing@alajajidental.com",
      contact: "0112833333 Ext: 8",
      image: "https://alajajidental.com/images/hospital/5.jpg"
    },
    {
      branch: "فرع دبي",
      hospital: "مستشفى الدكتور سليمان الحبيب",
      email: "marketing@alajajidental.com",
      contact: "97144297777+",
      image: "https://alajajidental.com/images/hospital/2.jpg"
    },
    {
      branch: "فرع الخبر",
      hospital: "مستشفى الدكتور سليمان الحبيب",
      email: "marketing@alajajidental.com",
      contact: "0116316666 Ext: 8",
      image: "https://alajajidental.com/images/hospital/1.jpg"
    }
  ];
  
  const container = document.getElementById('cards-container');
  
  branches.forEach(data => {
    // Create card element
    const card = document.createElement('div');
    card.className = 'card';
  
    // Create image element
    const img = document.createElement('img');
    img.src = data.image;
    img.alt = data.branch;
    card.appendChild(img);
  
    // Create content container
    const content = document.createElement('div');
    content.className = 'card-content';
  
    // Add branch name
    const branchName = document.createElement('h3');
    branchName.textContent = data.branch;
    content.appendChild(branchName);
  
    // Add hospital name
    const hospital = document.createElement('p');
    hospital.textContent = data.hospital;
    content.appendChild(hospital);
  
    // Add email
    const email = document.createElement('p');
    email.innerHTML = `<span class="email">البريد الإلكتروني: </span>${data.email}`;
    content.appendChild(email);
  
    // Add contact
    const contact = document.createElement('p');
    contact.innerHTML = `<span class="contact">اتصل بنا: </span>${data.contact}`;
    content.appendChild(contact);
  
    card.appendChild(content);
    container.appendChild(card);
  });
  



  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".qa-header").forEach(header => {
        header.addEventListener("click", function () {
            let parent = this.parentElement;
            let icon = this.querySelector(".icon");

            parent.classList.toggle("active");

            icon.textContent = parent.classList.contains("active") ? "−" : "+";

            document.querySelectorAll(".qa-item").forEach(item => {
                if (item !== parent) {
                    item.classList.remove("active");
                    item.querySelector(".icon").textContent = "+";
                }
            });
        });
    });
});
document.getElementById('menuLogo').addEventListener('click', function(event) {
    event.stopPropagation();
    var navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
})
document.addEventListener('click', function(event) {
    var navLinks = document.getElementById('navLinks');
    var menuLogo = document.getElementById('menuLogo');

    if (!navLinks.contains(event.target) && !menuLogo.contains(event.target)) {
        navLinks.classList.remove('active'); 
    }
});

function appearNavBar() {
    const navBar = document.querySelector(".sec_nav");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            navBar.classList.add("visible", "bounce");
        } else {
            navBar.classList.remove("visible", "bounce");
        }
    });
}

appearNavBar();
