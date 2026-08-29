// Initial products list starts empty so only admin-added products are displayed
export const initialProducts = [];

export const initialLooks = [
  {
    id: "l001",
    title: "Festive Sangeet Glamour",
    caption: "Royal Teal Embroidered Potli paired with Antique Kundan Choker for a breathtaking sangeet ensemble.",
    cover_image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
    product_ids: ["b3f1c2a4-0001-4000-8000-000000000001", "b3f1c2a4-0003-4000-8000-000000000003"],
    published: true,
    created_at: new Date().toISOString()
  },
  {
    id: "l002",
    title: "The Regal Satara Bride",
    caption: "Crimson Zardosi Bridal Clutch matched with Heritage Kolhapuri Saaj for traditional Maharashtrian wedding elegance.",
    cover_image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    product_ids: ["b3f1c2a4-0002-4000-8000-000000000002", "b3f1c2a4-0007-4000-8000-000000000007"],
    published: true,
    created_at: new Date().toISOString()
  },
  {
    id: "l003",
    title: "Contemporary Reception Chic",
    caption: "Emerald Crystal Envelope Sling accompanied by Jadau Pearl Drop Jhumkas.",
    cover_image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    product_ids: ["b3f1c2a4-0006-4000-8000-000000000006", "b3f1c2a4-0005-4000-8000-000000000005"],
    published: true,
    created_at: new Date().toISOString()
  }
];

export const initialTestimonials = [
  {
    id: "t001",
    customer_name: "Shweta Shinde",
    location: "Satara, MH",
    rating: 5,
    quote: "Aboli Bag Boutique is my go-to shop in Satara for weddings and festivals. The quality of the potli bags and matching jewellery is unmatched, and having honest pricing with zero luxury markup makes it a joy to shop here.",
    approved: true
  },
  {
    id: "t002",
    customer_name: "Priya Deshmukh",
    location: "Satara, MH",
    rating: 5,
    quote: "I visited their Moti Chowk boutique after browsing the catalogue online. Being able to inspect the fabric and craftsmanship in person made all the difference. The founder helped me pick the perfect bridal clutch!",
    approved: true
  },
  {
    id: "t003",
    customer_name: "Anjali Kulkarni",
    location: "Wai, MH",
    rating: 5,
    quote: "Ordered a set for delivery via WhatsApp since I couldn't travel to Satara that week. The process was so easy and friendly, and the parcel reached me securely packaged and looking even more stunning in person.",
    approved: true
  }
];

export const categoryTaxonomy = {
  bags_boutique: {
    label: "Bags Boutique",
    subcategories: ["Clutch", "Potli", "Sling", "Tote", "Box Clutch", "Batwa"]
  },
  designer_jewellery: {
    label: "Designer Jewellery",
    subcategories: ["Necklace", "Choker", "Earrings", "Bangles", "Jhumka", "Bridal Set"]
  }
};
