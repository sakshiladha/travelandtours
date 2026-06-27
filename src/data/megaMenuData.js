import { pexels } from "./destinations";

export const navItems = [
  { label: "Destinations", href: "#destinations", mega: true },
  { label: "Tours", href: "#packages" },
  { label: "Car Rentals", href: "#car-rental" },
  { label: "Experiences", href: "#experiences" },
  { label: "Travel Guides", href: "#blogs" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export const megaRegions = [
  {
    key: "north",
    label: "North India",
    card: {
      badge: "FEATURED · BEST SEASON",
      title: "North India Explorer",
      price: "18 curated tours · from ₹38,500",
      image: pexels(5205083, 900, 720)
    },
    groups: [
      { title: "All of North India", links: ["Delhi"] },
      { title: "Himachal Pradesh", links: ["Chandratal", "Dalhousie", "Dharamshala", "Kaza", "Manali", "Shimla", "Spiti Valley"] },
      { title: "Kashmir", links: ["Gulmarg", "Pahalgam", "Sonmarg", "Srinagar"] },
      { title: "Leh-Ladakh", links: ["Kargil", "Leh", "Nubra Valley", "Pangong Tso", "Turtuk"] },
      { title: "Uttar Pradesh", links: ["Agra", "Ayodhya", "Fatehpur Sikri", "Jhansi", "Lucknow", "Mathura", "Prayagraj", "Sarnath", "Varanasi", "Vrindavan"] },
      { title: "Uttarakhand", links: ["Jim Corbett Park", "Haridwar", "Mussoorie", "Nainital", "Rishikesh", "Chardham Yatra"] }
    ]
  },
  {
    key: "south",
    label: "South India",
    card: {
      badge: "FEATURED · BEST SEASON",
      title: "Kerala & South India",
      price: "14 curated tours · from ₹42,500",
      image: pexels(2161449, 900, 720)
    },
    groups: [
      { title: "Kerala", links: ["Munnar", "Alleppey", "Kochi", "Thekkady", "Wayanad"] },
      { title: "Karnataka", links: ["Coorg", "Mysore", "Hampi", "Gokarna", "Bangalore"] },
      { title: "Tamil Nadu", links: ["Chennai", "Madurai", "Rameswaram", "Kanyakumari", "Ooty"] },
      { title: "Goa", links: ["North Goa", "South Goa", "Panjim"] }
    ]
  },
  {
    key: "east",
    label: "East & North East India",
    card: {
      badge: "FEATURED · BEST SEASON",
      title: "East India Escapes",
      price: "11 curated tours · from ₹36,500",
      image: pexels(5205097, 900, 720)
    },
    groups: [
      { title: "Sikkim", links: ["Gangtok", "Pelling", "Lachung", "Yumthang"] },
      { title: "West Bengal", links: ["Darjeeling", "Kalimpong", "Kolkata"] },
      { title: "Assam", links: ["Guwahati", "Kaziranga", "Majuli"] },
      { title: "Meghalaya", links: ["Shillong", "Cherrapunji", "Dawki", "Mawlynnong"] }
    ]
  },
  {
    key: "west",
    label: "Rajasthan, West & Central India",
    card: {
      badge: "FEATURED · BEST SEASON",
      title: "Royal Rajasthan",
      price: "12 curated tours · from ₹48,500",
      image: pexels(3881104, 900, 720)
    },
    groups: [
      { title: "Rajasthan", links: ["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer", "Pushkar", "Mount Abu"] },
      { title: "Gujarat", links: ["Ahmedabad", "Kutch", "Dwarka", "Somnath", "Gir"] },
      { title: "Maharashtra", links: ["Mumbai", "Pune", "Lonavala", "Aurangabad"] },
      { title: "Madhya Pradesh", links: ["Khajuraho", "Orchha", "Gwalior", "Bandhavgarh"] }
    ]
  }
];
