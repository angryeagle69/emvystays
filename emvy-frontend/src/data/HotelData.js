const hotelData = [
  {
    id: 1,
    name: "Oceanview Paradise Resort",
    pricePerNight: 4500,
    location: "Juhu, India",
    features: ["Sea View", "Breakfast Included", "Wi-Fi", "Pool"],
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.pexels.com/photos/1454809/pexels-photo-1454809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ],
    rating: 4.8,
  },
  {
    id: 2,
    name: "The Himalayan Retreat",
    pricePerNight: 3200,
    location: "Malabar Hills, India",
    features: ["Mountain View", "Heater", "Wi-Fi", "Bonfire Area"],
    image:
      "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      "https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ],
    rating: 4.6,
  },
  {
    id: 3,
    name: "Urban Stay Suites",
    pricePerNight: 2900,
    location: "Powai, India",
    features: ["City View", "Air Conditioning", "Breakfast", "Wi-Fi"],
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.pexels.com/photos/313081/pexels-photo-313081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/221424/pexels-photo-221424.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ],
    rating: 4.4,
  },
  {
    id: 4,
    name: "Royal Heritage Palace",
    pricePerNight: 7500,
    location: "Marine Drive, India",
    features: ["Heritage Property", "Luxury Decor", "Lake View", "Spa"],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.pexels.com/photos/21014/pexels-photo-21014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ],
    rating: 4.9,
  },
  {
    id: 5,
    name: "Jungle Edge Eco Lodge",
    pricePerNight: 2100,
    location: "Bandra, India",
    features: ["Eco Friendly", "Tree House", "Nature Trails", "Free Parking"],
    image:
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
    images: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D",
      "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ],
    rating: 4.5,
  },
  {
    id: 6,
    name: "Skyline View Hotel",
    pricePerNight: 4000,
    location: "Versova, India",
    features: ["City View", "Infinity Pool", "Wi-Fi", "Gym"],
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/305236/pexels-photo-305236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ],
    rating: 4.2,
  },
  {
    id: 7,
    name: "Desert Mirage Camp",
    pricePerNight: 3100,
    location: "Andheri, India",
    features: ["Desert Safari", "Cultural Show", "Campfire", "Dinner Included"],
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.pexels.com/photos/1576673/pexels-photo-1576673.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/1507735/pexels-photo-1507735.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ],
    rating: 4.3,
  },
  {
    id: 8,
    name: "Tea Garden Inn",
    pricePerNight: 2800,
    location: "Colaba, India",
    features: ["Tea Estate View", "Balcony", "Wi-Fi", "Breakfast"],
    image:
      "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/273750/pexels-photo-273750.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ],
    rating: 4.6,
  },
  {
    id: 9,
    name: "Backwater Bliss Houseboat",
    pricePerNight: 5200,
    location: "Andheri, India",
    features: ["Houseboat", "Canoeing", "Meals Included", "AC Cabin"],
    image:
      "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.pexels.com/photos/192424/pexels-photo-192424.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ],
    rating: 4.7,
  },
  {
    id: 10,
    name: "Luxury Hillside Resort",
    pricePerNight: 6300,
    location: "Colaba, India",
    features: ["Jacuzzi", "Scenic Views", "Private Pool", "Wi-Fi"],
    image:
      "https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg?auto=compress&cs=tinysrgb&w=600",
    images: [
      "https://images.pexels.com/photos/261395/pexels-photo-261395.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/27411/pexels-photo-27411.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ],
    rating: 4.9,
  },
  {
    id: 11,
    name: "Cozy Budget Stay",
    pricePerNight: 1700,
    location: "Powai, India",
    features: ["Close to Beach", "Wi-Fi", "Shared Kitchen", "AC"],
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ],
    rating: 4.1,
  },
  {
    id: 12,
    name: "Vintage Colonial Villa",
    pricePerNight: 3900,
    location: "Versova, India",
    features: ["Fireplace", "Garden", "Vintage Decor", "Breakfast"],
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.pexels.com/photos/260651/pexels-photo-260651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/259924/pexels-photo-259924.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ],
    rating: 4.5,
  },
  {
    id: 13,
    name: "Sky High Penthouse",
    pricePerNight: 8500,
    location: "Marine Drive, India",
    features: ["Penthouse", "Rooftop Bar", "Wi-Fi", "Elevator Access"],
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.pexels.com/photos/21014/pexels-photo-21014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ],
    rating: 4.7,
  },
  {
    id: 14,
    name: "Forest Hideaway",
    pricePerNight: 2500,
    location: "Malabar Hills, India",
    features: ["Forest View", "Nature Walks", "Bonfire", "Organic Food"],
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.pexels.com/photos/358482/pexels-photo-358482.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ],
    rating: 4.3,
  },
  {
    id: 15,
    name: "Crystal Bay Luxury Villas",
    pricePerNight: 7200,
    location: "Juhu",
    features: ["Private Beach", "Ocean View", "Snorkeling", "Spa"],
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      "https://images.pexels.com/photos/1048218/pexels-photo-1048218.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    ],
    rating: 4.8,
  },
];

export default hotelData;