const listingsData = [
  {
    id: 1,
    name: "Agra",
    description:
      "Experience the timeless beauty of the Taj Mahal and explore Agra Fort, steeped in Mughal history. Enjoy local Mughlai delicacies and shop for handicrafts at Kinari Bazaar.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Taj_Mahal_in_March_2004.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/fb/Agra_Fort.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Tomb_of_Itimad-ud-Daula_in_Agra.jpg",
    ],
    location: "Agra, Uttar Pradesh",
    pricePerNight: 3000,
    amenities: ["Free WiFi", "Breakfast Included", "AC Rooms", "24x7 Support"],
    activities: [
      "Visit the Taj Mahal",
      "Explore Agra Fort",
      "Shopping at Kinari Bazaar",
    ],
    highlights: [
      "Witness the sunrise at the Taj Mahal.",
      "Explore the Mughal architecture of Agra Fort.",
      "Shop for handicrafts in Kinari Bazaar.",
      "Taste Mughlai delicacies in local eateries.",
    ],
    reviews: [
      { name: "John Doe", rating: 4.5, comment: "Loved the hospitality and the location!" },
      { name: "Jane Smith", rating: 5, comment: "A perfect getaway with amazing amenities." },
    ],
    thingsToDo: [
      {
        id: 1,
        name: "Taj Mahal",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Taj_Mahal_in_March_2004.jpg",
        rating: 5000,
        category: "Historical Landmark",
      },
      {
        id: 2,
        name: "Agra Fort",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Agra_Fort.jpg",
        rating: 4000,
        category: "Historical Landmark",
      },
      {
        id: 3,
        name: "Kinari Bazaar",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Kinari_Bazaar_Agra.jpg",
        rating: 2500,
        category: "Shopping",
      },
    ],
  },
  {
    id: 2,
    name: "Varanasi",
    description:
      "Discover the spiritual essence of Varanasi, one of the oldest cities, where devotion meets the timeless flow of the sacred Ganges.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/0/03/Varanasi_Ghats.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/a/a3/Dashashwamedh_Ghat_Ganga_Aarti.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/f/f6/Sarnath_Mulaganha.jpg",
    ],
    location: "Varanasi, Uttar Pradesh",
    pricePerNight: 2500,
    amenities: ["Rooftop View", "Breakfast", "24x7 Support"],
    activities: [
      "Witness the Ganga Aarti",
      "Explore Sarnath",
      "Walk through Varanasi Ghats",
    ],
    highlights: [
      "Attend the mesmerizing Ganga Aarti at Dashashwamedh Ghat.",
      "Explore the historical Sarnath site.",
      "Stroll through the bustling markets of Varanasi.",
      "Enjoy local delicacies like Kachori and sweets.",
    ],
    reviews: [
      { name: "Alice", rating: 4, comment: "Beautiful experience, the view was amazing." },
      { name: "Bob", rating: 3.5, comment: "Good location but could improve the food quality." },
    ],
    thingsToDo: [
      {
        id: 1,
        name: "Ganga Aarti",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Dashashwamedh_Ghat_Ganga_Aarti.jpg",
        rating: 5000,
        category: "Spiritual Experience",
      },
      {
        id: 2,
        name: "Sarnath",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Sarnath_Mulaganha.jpg",
        rating: 3500,
        category: "Historical Landmark",
      },
      {
        id: 3,
        name: "Varanasi Ghats",
        image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Varanasi_Ghats.jpg",
        rating: 4200,
        category: "Cultural Experience",
      },
    ],
  },
  {
    id: 3,
    name: "Lucknow",
    description:
      "Experience the charm of the City of Nawabs, known for its rich cultural heritage, historic monuments, and delicious Awadhi cuisine.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/Bara_Imambara%2C_Lucknow.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/95/Rumi_Darwaza_Lucknow.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/6/67/Tunday_Kababi_Aminabad_Lucknow.jpg",
    ],
    location: "Lucknow, Uttar Pradesh",
    pricePerNight: 2800,
    amenities: ["Free Parking", "Free WiFi", "Swimming Pool", "24x7 Support"],
    activities: [
      "Visit Bara Imambara",
      "Explore the Rumi Darwaza",
      "Taste Awadhi cuisine",
    ],
    highlights: [
      "Marvel at the architectural beauty of Bara Imambara.",
      "Walk through the historic Rumi Darwaza.",
      "Relish kebabs and biryani at Tunday Kababi.",
      "Explore Hazratganj for shopping and local culture.",
    ],
    reviews: [
      { name: "Sophie", rating: 5, comment: "A cultural delight with great food and heritage sites." },
      { name: "Rahul", rating: 4.5, comment: "Amazing food and comfortable stay." },
    ],
    thingsToDo: [
      {
        id: 1,
        name: "Bara Imambara",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Bara_Imambara%2C_Lucknow.jpg",
        rating: 4500,
        category: "Historical Landmark",
      },
      {
        id: 2,
        name: "Rumi Darwaza",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Rumi_Darwaza_Lucknow.jpg",
        rating: 4000,
        category: "Architectural Landmark",
      },
      {
        id: 3,
        name: "Tunday Kababi",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/67/Tunday_Kababi_Aminabad_Lucknow.jpg",
        rating: 4200,
        category: "Food Experience",
      },
    ],
  },
  {
    id: 4,
    name: "Ayodhya",
    description:
      "Step into the divine world of Ayodhya, the birthplace of Lord Ram, and explore ancient temples, ghats, and sacred sites steeped in religious significance.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/6/64/Shri_Ram_Janmabhoomi_Temple.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Ayodhya.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/e/ea/Deepawali_celebrations_at_Ayodhya.jpg",
    ],
    location: "Ayodhya, Uttar Pradesh",
    pricePerNight: 2000,
    amenities: ["Free Parking", "24x7 Support"],
    activities: [
      "Visit Ram Janmabhoomi",
      "Explore the ghats",
      "Participate in Deepawali celebrations",
    ],
    highlights: [
      "Visit the Ram Janmabhoomi Temple.",
      "Explore the ghats along the Sarayu River.",
      "Celebrate Deepawali on the banks of the river.",
    ],
    reviews: [
      { name: "Mohan", rating: 4.5, comment: "A peaceful and spiritual place." },
      { name: "Priya", rating: 4, comment: "A serene atmosphere, perfect for meditation." },
    ],
    thingsToDo: [
      {
        id: 1,
        name: "Ram Janmabhoomi Temple",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Shri_Ram_Janmabhoomi_Temple.jpg",
        rating: 5000,
        category: "Religious Site",
      },
      {
        id: 2,
        name: "Sarayu River Ghats",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Ayodhya.jpg",
        rating: 3500,
        category: "Cultural Experience",
      },
      {
        id: 3,
        name: "Deepawali at Ayodhya",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Deepawali_celebrations_at_Ayodhya.jpg",
        rating: 4000,
        category: "Festivals",
      },
    ],
  },
  {
    id: 5,
    name: "Mathura",
    description:
      "Visit Mathura, the birthplace of Lord Krishna, and explore its many temples, ghats, and sacred sites. A city rich in cultural and spiritual significance.",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/f/f9/Krishna_Birthplace_Mathura.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/9/9f/Krishna_Birthplace_Mathura.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/4/43/Banke_Bihari_Temple_Mathura.jpg",
    ],
    location: "Mathura, Uttar Pradesh",
    pricePerNight: 2200,
    amenities: ["Free WiFi", "Rooftop View", "24x7 Support"],
    activities: [
      "Visit Krishna Janmabhoomi",
      "Explore Banke Bihari Temple",
      "Experience the Holi Festival",
    ],
    highlights: [
      "Witness the sacred Krishna Janmabhoomi temple.",
      "Attend the Holi celebrations.",
      "Shop for handmade Krishna idols and paintings.",
    ],
    reviews: [
      { name: "Amit", rating: 5, comment: "A divine and enriching experience." },
      { name: "Ravi", rating: 4.5, comment: "A place full of devotion and serenity." },
    ],
    thingsToDo: [
      {
        id: 1,
        name: "Krishna Janmabhoomi",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Krishna_Birthplace_Mathura.jpg",
        rating: 5000,
        category: "Religious Site",
      },
      {
        id: 2,
        name: "Banke Bihari Temple",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/43/Banke_Bihari_Temple_Mathura.jpg",
        rating: 4200,
        category: "Cultural Experience",
      },
    ],
  },
];

export default listingsData;
