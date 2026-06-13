export const pexels = (id, width = 1400, height = 950) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}&h=${height}&fit=crop`;

export const destinations = [
  ["North India", "Kashmir", "Snow valleys, tulip gardens and peaceful Dal Lake stays.", "From Rs. 18,500", pexels(5205083)],
  ["Himalayas", "Ladakh", "High passes, monasteries and cinematic mountain drives.", "From Rs. 24,999", pexels(5205097)],
  ["Royal India", "Rajasthan", "Jaipur, Jodhpur, Udaipur and desert heritage experiences.", "From Rs. 16,900", pexels(3881104)],
  ["Backwaters", "Kerala", "Private houseboats, spice trails and relaxed coastal stays.", "From Rs. 21,500", pexels(2161449)],
  ["Coastal", "Goa", "Sunset beaches, boutique stays and easy private transfers.", "From Rs. 12,500", pexels(4428272)],
  ["Mountains", "Himachal", "Manali, Shimla and scenic family-friendly hill routes.", "From Rs. 14,750", pexels(5205091)],
  ["Spiritual", "Varanasi", "Ganga aarti, temples, sunrise boats and heritage walks.", "From Rs. 11,999", pexels(784879)],
  ["Classic", "Agra", "Taj Mahal, Fatehpur Sikri and Golden Triangle extensions.", "From Rs. 8,999", pexels(1603650)]
];

export const trustItems = ["Private Cars", "Custom Itineraries", "Pan India Tours", "Verified Drivers", "24/7 Support"];

export const travelStyles = [
  ["Adventure Tours", pexels(2387873)],
  ["Beach Holidays", pexels(4428272)],
  ["Culture Journeys", pexels(784879)],
  ["Luxury Escapes", pexels(2161449)]
];
