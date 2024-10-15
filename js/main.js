const testimonials = [
  {
    name: "Priya Sharma",
    role: "Homebuyer",
    location: "Bangalore",
    text: "Finding my dream home in Bangalore was a breeze with Propeasy. The user-friendly interface and detailed listings made my search effortless. Highly recommend!"
  },
  {
    name: "Arjun Verma",
    role: "Investor",
    location: "Delhi",
    text: "Propeasy transformed my property investment journey. I found lucrative deals in Delhi that I wouldn’t have discovered otherwise!"
  },
  {
    name: "Meera Nair",
    role: "Renter",
    location: "Mumbai",
    text: "I was overwhelmed by the rental market in Mumbai until I found Propeasy. The platform helped me narrow down my options quickly!"
  },
  {
    name: "Sameer Patel",
    role: "First-time Buyer",
    location: "Hyderabad",
    text: "As a first-time homebuyer, I had many questions. Propeasy provided me with all the information I needed and guided me through the entire process."
  },
  {
    name: "Anjali Mehta",
    role: "Seller",
    location: "Chennai",
    text: "Selling my property in Chennai was easy with Propeasy. Their marketing tools helped me reach potential buyers quickly."
  },
  {
    name: "Raghav Singh",
    role: "Homebuyer",
    location: "Pune",
    text: "Propeasy made my home buying experience in Pune smooth and hassle-free. The customer service was exceptional."
  },
  {
    name: "Vikram Singh",
    role: "Homebuyer",
    location: "Delhi NCR",
    text: "As a homebuyer, I’m always on the lookout for fresh leads, and Propeasy delivers. The verified listings and exclusive tools have really helped me find my dream home."
  },
  {
    name: "Arjun Verma",
    role: "Investor",
    location: "Mumbai",
    text: "Propeasy has transformed my property investment journey. I found lucrative deals in Mumbai that I wouldn’t have discovered otherwise!"
  },
  {
    name: "Meera Nair",
    role: "Homebuyer",
    location: "Pune",
    text: "I had a fantastic experience buying my first home in Pune with Propeasy. Their customer service was exceptional and made the process smooth"
  },
  {
    name: "Priya Sharma",
    role: "Renter",
    location: "Bangalore",
    text: "Finding an apartment in Bangalore was overwhelming until I discovered Propeasy. The platform made it easy to filter my options and find the perfect place!"
  },
  {
    name: "Anjali Mehta",
    role: "Renter",
    location: "Hyderabad",
    text: "Propeasy simplified my rental search in Hyderabad. I was able to find a great apartment in no time!"
  },
  {
    name: "Kiran Malhotra",
    role: "Investor",
    location: "Noida",
    text: "I’ve been investing in properties for years, but Propeasy has made it easier than ever to identify promising opportunities in Noida."
  },
  {
    name: "Sandeep Das",
    role: "Renter",
    location: "Jaipur",
    text: "I was overwhelmed by the rental market in Jaipur until I found Propeasy. The platform helped me narrow down my options quickly!"
  },
  {
    name: "Rahul Kapoor",
    role: "Homebuyer",
    location: "Bangalore",
    text: "Before Propeasy, I struggled to find reliable listings in Bangalore. Now, I have access to a wide range of verified properties at my fingertips."
  },
  {
    name: "Aditya Gupta",
    role: "Investor",
    location: "Chennai",
    text: "Propeasy has revolutionized how I approach real estate investments in Chennai. The data-driven insights are incredibly helpful."
  },
  {
    name: "Rajeev Thakur",
    role: "Homebuyer",
    location: "Pune",
    text: "Thanks to Propeasy, I purchased my dream home in Pune without any stress! Their support team was fantastic."
  },
];

function renderTestimonials() {
  const testimonialContainer = document.querySelector('.autoscroll-section .logos');
  
  testimonials.forEach(testimonial => {
    const testimonialCard = document.createElement('div');
    testimonialCard.className = 'md:min-w-[30rem] min-w-[15rem] rounded-2xl bg-white flex flex-col gap-6 p-10';

    testimonialCard.innerHTML = `
      <div class="flex flex-row gap-12 justify-between items-center">
        <div class="flex flex-col">
          <p class="font-semibold text-lg text-[#121212]">${testimonial.name} – ${testimonial.role}, ${testimonial.location}</p>
        </div>
      </div>
      <div class="description">
        <p class="text-sm md:text-lg font-normal text-[#6A6A6A] text-balance">${testimonial.text}</p>
      </div>
    `;
    
    testimonialContainer.appendChild(testimonialCard);
  });
}

document.addEventListener('DOMContentLoaded', renderTestimonials);