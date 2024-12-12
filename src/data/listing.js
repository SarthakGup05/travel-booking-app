const listingsData = [
  {
    id: 1,
    name: "Agra",
    description: "Experience the timeless beauty of the Taj Mahal, a UNESCO World Heritage site, and explore the opulent Agra Fort. Wander through the vibrant Kinari Bazaar for unique souvenirs, and indulge in the rich flavors of Mughlai cuisine. Agra offers a perfect blend of history, culture, and culinary delight, making it a must-visit destination in India. Don't miss the chance to witness the mesmerizing sunrise over the Taj Mahal, a sight that stays with you forever. Explore nearby attractions like Fatehpur Sikri and Mehtab Bagh for a complete experience of Mughal heritage.",
    images: [
      "/assets/images/listings/agra1.jpg",
      "/assets/images/listings/agra2.jpg",
      "/assets/images/listings/agra3.jpg"
    ],
    location: "Agra, Uttar Pradesh",
    pricePerNight: 3000,
    amenities: ["Free WiFi", "Breakfast Included", "AC Rooms", "24x7 Support"],
    activities: [
      "Visit the Taj Mahal",
      "Explore Agra Fort",
      "Shopping at Kinari Bazaar",
      "Taste Mughlai Cuisine"
    ],
    reviews: [
      { name: "John Doe", rating: 4.5, comment: "Loved the hospitality and the location!" },
      { name: "Jane Smith", rating: 5, comment: "A perfect getaway with amazing amenities." }
    ]
  },
  {
    id: 2,
    name: "Varanasi",
    description: "Discover the spiritual essence of India in Varanasi, one of the world's oldest cities. Experience the divine Ganga Aarti on the ghats, a spectacular ritual that draws devotees from around the globe. Explore the historical significance of Sarnath, where Lord Buddha gave his first sermon. Stroll along the ghats, each with its unique story, and immerse yourself in the vibrant street life. Taste the local delicacies, including the famous Kachori and Banarasi sweets. The city's aura of devotion and history offers a transformative journey for every visitor.",
    images: [
      "/assets/images/listings/varanasi1.jpg",
      "/assets/images/listings/varanasi2.jpg",
      "/assets/images/listings/varanasi3.jpg"
    ],
    location: "Varanasi, Uttar Pradesh",
    pricePerNight: 2500,
    amenities: ["Rooftop View", "Breakfast", "24x7 Support"],
    activities: [
      "Witness the Ganga Aarti",
      "Explore Sarnath",
      "Walk through Varanasi Ghats",
      "Taste local street food"
    ],
    reviews: [
      { name: "Alice", rating: 4, comment: "Beautiful experience, the view was amazing." },
      { name: "Bob", rating: 3.5, comment: "Good location but could improve the food quality." }
    ]
  },
  {
    id: 3,
    name: "Lucknow",
    description: "Immerse yourself in the cultural richness of Lucknow, the City of Nawabs. Explore architectural wonders like Bara Imambara and Rumi Darwaza, symbols of the city's Mughal legacy. Indulge in the royal Awadhi cuisine, featuring dishes like kebabs, biryani, and kulfi. Stroll through Hazratganj Market, a shopper's paradise blending old-world charm with modern stores. Visit the British Residency to delve into colonial history. With its blend of history, culture, and gastronomy, Lucknow promises an unforgettable experience for every traveler.",
    images: [
      "/assets/images/listings/lucknow1.jpg",
      "/assets/images/listings/lucknow2.jpg",
      "/assets/images/listings/lucknow3.jpg"
    ],
    location: "Lucknow, Uttar Pradesh",
    pricePerNight: 2800,
    amenities: ["Free Parking", "Room Service", "City Tours", "WiFi Access"],
    activities: [
      "Visit Bara Imambara",
      "Explore Hazratganj Market",
      "Taste Awadhi Biryani",
      "Tour the British Residency"
    ],
    reviews: [
      { name: "Sophia", rating: 4.5, comment: "The food and heritage sites were exceptional." },
      { name: "Raj", rating: 4, comment: "Great location, staff was very friendly." }
    ]
  },
  {
    id: 4,
    name: "Ayodhya",
    description: "Ayodhya, the birthplace of Lord Rama, radiates spiritual significance and tranquility. Visit the sacred Ram Janmabhoomi and Hanuman Garhi Temple to feel the divine presence. Experience the evening aarti on the banks of the serene Saryu River, a spectacle of devotion and light. Wander through the city's bustling streets filled with devotional hymns and vibrant culture. The city's deep connection to Indian mythology and its spiritual aura make Ayodhya a unique and peaceful destination.",
    images: [
      "/assets/images/listings/ayodhya1.jpg",
      "/assets/images/listings/ayodhya2.jpg",
      "/assets/images/listings/ayodhya3.jpg"
    ],
    location: "Ayodhya, Uttar Pradesh",
    pricePerNight: 2200,
    amenities: ["Temple View", "Breakfast", "Guided Tours", "24x7 Support"],
    activities: [
      "Visit Ram Janmabhoomi",
      "Explore Hanuman Garhi Temple",
      "Boat ride on Saryu River",
      "Experience evening Aarti"
    ],
    reviews: [
      { name: "Anjali", rating: 4, comment: "A serene and spiritual experience!" },
      { name: "Michael", rating: 3.5, comment: "Good stay but fewer food options nearby." }
    ]
  },
  {
    id: 5,
    name: "Mathura",
    description: "Mathura, the birthplace of Lord Krishna, is a haven for spiritual seekers and devotees. Visit the Krishna Janmabhoomi Temple and explore the intricately designed Dwarkadhish Temple. Enjoy a serene boat ride on the Yamuna River and experience the vibrant Holi celebrations, for which Mathura is world-famous. The city's timeless devotion and cultural vibrancy make it a must-visit destination in Uttar Pradesh. Immerse yourself in the local culture and connect with the divine spirit of Lord Krishna.",
    images: [
      "/assets/images/listings/mathura1.jpg",
      "/assets/images/listings/mathura2.jpg",
      "/assets/images/listings/mathura3.jpg"
    ],
    location: "Mathura, Uttar Pradesh",
    pricePerNight: 2400,
    amenities: ["Proximity to Temples", "Breakfast", "24x7 Support"],
    activities: [
      "Visit Krishna Janmabhoomi Temple",
      "Explore Dwarkadhish Temple",
      "Boat ride on Yamuna River",
      "Experience Holi celebrations"
    ],
    reviews: [
      { name: "Meera", rating: 4.5, comment: "Perfect place for spiritual seekers." },
      { name: "Tom", rating: 4, comment: "Peaceful environment and great service." }
    ]
  },
  {
    id: 6,
    name: "Prayagraj",
    description: "Prayagraj, renowned for its Triveni Sangam, where the Ganga, Yamuna, and Saraswati rivers converge, is a hub of spirituality and culture. Experience the grandeur of **Kumbh Mela 2025**, the largest gathering of humanity celebrating faith and devotion. Explore the historic Allahabad Fort and Anand Bhavan, and take a boat ride at sunrise to witness the Sangam's serene beauty. Prayagraj offers a unique blend of spirituality, history, and vibrant festivals, making it a must-visit destination.",
    images: [
      "/assets/images/listings/prayagraj1.jpg",
      "/assets/images/listings/prayagraj2.jpg",
      "/assets/images/listings/prayagraj3.jpg"
    ],
    location: "Prayagraj, Uttar Pradesh",
    pricePerNight: 2600,
    amenities: ["Sangam View", "Breakfast", "Guided Tours", "24x7 Support"],
    activities: [
      "Attend Kumbh Mela 2025",
      "Visit Allahabad Fort",
      "Explore Anand Bhavan",
      "Boat ride at Triveni Sangam"
    ],
    reviews: [
      { name: "Ravi", rating: 5, comment: "An unforgettable experience during Kumbh!" },
      { name: "Priya", rating: 4.5, comment: "Peaceful and spiritually enriching." }
    ]
  }
];

export default listingsData;
