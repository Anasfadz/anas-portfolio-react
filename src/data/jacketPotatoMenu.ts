export type Lang = "en" | "ms";

export const LOCATION_URL = "https://maps.app.goo.gl/6ATd5gXeLSZ6RoySA";
export const WHATSAPP_NUMBER = "601126112833";

export interface VariantOption {
  id: "small" | "big";
  price: number;
  label: Record<Lang, string>;
  weight: Record<Lang, string>;
  desc: Record<Lang, string>;
}

export const BIG_MAC_VARIANTS: VariantOption[] = [
  {
    id: "small",
    price: 10,
    label: { en: "Small", ms: "Kecil" },
    weight: { en: "Single Spud · 350g", ms: "Kentang Tunggal · 350g" },
    desc: {
      en: "Crispy 90-min baked potato, single beef crumble, melted cheddar & signature Mac sauce.",
      ms: "Kentang bakar rangup 90 minit, daging kisar panggang, keju cheddar cair & sos Mac istimewa.",
    },
  },
  {
    id: "big",
    price: 18,
    label: { en: "Big", ms: "Besar" },
    weight: { en: "Jumbo Spud · 600g", ms: "Kentang Jumbo · 600g" },
    desc: {
      en: "Extra-large double-loaded jacket potato with double seared beef, double cheddar, pickles & extra sauce.",
      ms: "Kentang jaket bersaiz jumbo dengan daging berganda, keju cheddar berganda, jeruk timun & sos lebih.",
    },
  },
];

export const COPY = {
  en: {
    brand: "Jacket Potato by Hanna",
    nav: {
      menu: "Big Mac Spud",
      craft: "90-Min Craft",
      reviews: "Reviews",
      bag: "Order Bag",
    },
    hero: {
      eyebrow: "Puchong's Own · Cast-Iron Baked",
      titleTop: "Jacket Potato",
      titleEm: "Big Mac.",
      subtitle:
        "90-minute sea-salt brined jacket potato with a shattering crisp skin, split steaming hot in Puchong and loaded with seared beef patty crumble, melted cheddar, crisp lettuce, pickles, sesame & our signature tangy Mac sauce.",
      ctaPrimary: "Order Now — From RM10",
      ctaSecondary: "Choose Size",
      stats: [
        { value: "RM10 / RM18", label: "Small or Big" },
        { value: "90 min", label: "Cast-iron deck bake" },
        { value: "4.9 ★", label: "2,400+ spud lovers" },
      ],
      badgeTitle: "Jacket Potato Big Mac",
      badgeSub: "Double seared beef · cheddar · Mac sauce",
      badgePrice: "RM10 – RM18",
    },
    ticker: [
      "★ Only One Menu: Jacket Potato Big Mac",
      "★ Small RM10 · Big RM18",
      "★ Hot Delivery Across Puchong",
      "★ 90-Minute Cast-Iron Bake",
      "★ 100% Halal Beef & Fresh Produce",
    ],
    menuSection: {
      eyebrow: "The Only Menu",
      title: "Jacket Potato Big Mac",
      desc: "We perfected one iconic dish for Puchong. Pick your size—Small for a quick craving or Big for the full double-loaded feast.",
      chooseSize: "Select Variant",
      includedTitle: "Loaded inside every spud:",
      includedItems: [
        "90-min sea-salt brined Russet skin",
        "Whipped cultured butter & fluffy mash",
        "Seared beef patty crumble & melted cheddar",
        "Crisp shredded lettuce, pickles & white onion",
        "Signature tangy Mac sauce & toasted sesame",
      ],
      addBtn: "Add to Bag",
    },
    craftSection: {
      eyebrow: "The Method",
      title: "Why Our Skins Shatter",
      desc: "Great jacket potatoes cannot be rushed. Every single spud gets the full cast-iron treatment.",
      steps: [
        {
          step: "01",
          title: "Brined & Oil-Rubbed",
          body: "Hand-graded potatoes are soaked in sea-salt brine, dried overnight, and rubbed with oil for maximum skin blister.",
          stat: "14-hr prep",
        },
        {
          step: "02",
          title: "90-Min Cast-Iron Bake",
          body: "Baked directly on heavy cast-iron decks at 215°C for 90 minutes—never microwaved, never wrapped in foil.",
          stat: "215°C hearth",
        },
        {
          step: "03",
          title: "Loaded Big Mac Style",
          body: "Cross-split to order, whipped with butter, then piled high with hot seared beef, cheddar, pickles, lettuce & Mac sauce.",
          stat: "Served in 60s",
        },
      ],
    },
    reviewsSection: {
      eyebrow: "Word in Puchong",
      title: "Piping Hot Reviews",
      items: [
        {
          quote:
            "The Big RM18 portion is massive! Crispy skin, juicy beef crumble, and that tangy Mac sauce hits every single craving.",
          author: "Aiman R.",
          tag: "Ordered Big (RM18) · Bandar Puteri",
        },
        {
          quote:
            "Small at RM10 is unbeatable for lunch. Still piping hot when it arrived in Puchong Jaya and the pickles + sesame make it taste legit.",
          author: "Mei Ling T.",
          tag: "Ordered Small (RM10) · Puchong Jaya",
        },
        {
          quote:
            "Doing only one menu item was genius—you can tell they perfected every layer from the fluffy potato to the seared beef.",
          author: "Farah N.",
          tag: "Ordered Big (RM18) · Taman Kinrara",
        },
      ],
    },
    footer: {
      desc: "Slow-baked cast-iron Jacket Potato Big Mac in Puchong, crafted fresh daily in Small (RM10) and Big (RM18).",
      hoursTitle: "Opening Hours",
      hours: "Sat – Sun: 11:30 AM – 11:30 PM\nMon – Fri: Closed",
      pickupTitle: "Kitchen & Delivery",
      pickup: "Kampung Kenangan, 47100 Puchong, Selangor\nHot delivery in 25 mins · 100% Halal Ingredients",
      mapCta: "View on Google Maps ↗",
      copyright: "Jacket Potato by Hanna. All rights reserved.",
      bakedFresh: "Baked fresh every 20 minutes.",
    },
    drawer: {
      title: "Your Spud Bag",
      empty: "Your bag is empty. Pick Small (RM10) or Big (RM18) to get started!",
      fulfillmentLabel: "Order Option",
      pickup: "Pickup",
      delivery: "Delivery",
      pickupNote: "Self-pickup at Kampung Kenangan, 47100 Puchong, Selangor",
      pickupTimeLabel: "Pickup Time",
      pickupTimeError: "Please select your pickup time to continue.",
      addressLabel: "Delivery Address",
      addressPlaceholder: "Enter your full delivery address in Puchong...",
      addressError: "Please enter your delivery address to continue.",
      subtotal: "Subtotal",
      checkout: "Send Order to WhatsApp",
      closedNotice:
        "We are only open on Saturday & Sunday. Please come back this weekend to place your order!",
      closedButton: "Open Saturday – Sunday Only",
      confirmedTitle: "Order Sent to WhatsApp!",
      confirmedBody:
        "Please complete sending the pre-filled WhatsApp message to 011-2611 2833 so we can start baking your Jacket Potato Big Mac.",
    },
  },
  ms: {
    brand: "Jacket Potato by Hanna",
    nav: {
      menu: "Menu Big Mac",
      craft: "Cara Bakar",
      reviews: "Ulasan",
      bag: "Beg Pesanan",
    },
    hero: {
      eyebrow: "Khas Puchong · Bakar Besi Tuang",
      titleTop: "Kentang Jaket",
      titleEm: "Big Mac.",
      subtitle:
        "Kentang jaket dibakar 90 minit dengan kulit rangup bergaram laut, dibelah panas di Puchong dan disumbat daging burger panggang, keju cheddar cair, salad segar, jeruk timun, bijan & sos Mac istimewa.",
      ctaPrimary: "Pesan Sekarang — Dari RM10",
      ctaSecondary: "Pilih Saiz",
      stats: [
        { value: "RM10 / RM18", label: "Kecil atau Besar" },
        { value: "90 min", label: "Bakar atas besi tuang" },
        { value: "4.9 ★", label: "2,400+ peminat kentang" },
      ],
      badgeTitle: "Kentang Jaket Big Mac",
      badgeSub: "Daging panggang · cheddar · sos Mac",
      badgePrice: "RM10 – RM18",
    },
    ticker: [
      "★ Satu-Satunya Menu: Kentang Jaket Big Mac",
      "★ Kecil RM10 · Besar RM18",
      "★ Penghantaran Panas Sekitar Puchong",
      "★ Bakar Besi Tuang 90 Minit",
      "★ 100% Daging Halal & Bahan Segar",
    ],
    menuSection: {
      eyebrow: "Menu Tunggal Kami",
      title: "Kentang Jaket Big Mac",
      desc: "Kami sempurnakan satu hidangan ikonik untuk warga Puchong. Pilih saiz—Kecil untuk makan ringan atau Besar untuk hidangan penuh berganda.",
      chooseSize: "Pilih Varian",
      includedTitle: "Setiap kentang dilengkapi:",
      includedItems: [
        "Kulit kentang Russet garam laut bakar 90 minit",
        "Mentega kultur & isi kentang gebu",
        "Daging burger panggang & keju cheddar cair",
        "Salad rangup, jeruk timun & bawang putih",
        "Sos Mac berlemak masam manis & bijan panggang",
      ],
      addBtn: "Tambah ke Beg",
    },
    craftSection: {
      eyebrow: "Kaedah Kami",
      title: "Kenapa Kulit Kami Rangup",
      desc: "Kentang jaket terbaik tidak boleh diburu-buru. Setiap biji dibakar sempurna atas besi tuang.",
      steps: [
        {
          step: "01",
          title: "Rendam Garam & Minyak",
          body: "Kentang gred pilihan direndam air garam laut, dikeringkan semalaman dan disapu minyak untuk kulit rangup sekata.",
          stat: "14 jam sedia",
        },
        {
          step: "02",
          title: "Bakar Besi Tuang 90 Minit",
          body: "Dibakar terus di atas dek besi tuang pada suhu 215°C selama 90 minit—tanpa microwave, tanpa foil.",
          stat: "215°C ketuhar",
        },
        {
          step: "03",
          title: "Sumbat Gaya Big Mac",
          body: "Dibelah panas mengikut pesanan, digaul mentega, lalu dilimpahi daging panggang, cheddar, salad, jeruk & sos Mac.",
          stat: "Siap dalam 60s",
        },
      ],
    },
    reviewsSection: {
      eyebrow: "Kata Pelanggan Puchong",
      title: "Ulasan Panas-Panas",
      items: [
        {
          quote:
            "Saiz Besar RM18 memang puas hati! Kulit rangup, daging banyak, dan sos Mac dia memang padu habis.",
          author: "Aiman R.",
          tag: "Pesan Besar (RM18) · Bandar Puteri",
        },
        {
          quote:
            "Saiz Kecil RM10 sangat berbaloi untuk makan tengah hari. Sampai di Puchong Jaya masih panas berasap, rasa sebiji macam Big Mac!",
          author: "Mei Ling T.",
          tag: "Pesan Kecil (RM10) · Puchong Jaya",
        },
        {
          quote:
            "Fokus satu menu memang bijak—setiap lapisan dari isi kentang gebu sampai daging panggang terasa sempurna.",
          author: "Farah N.",
          tag: "Pesan Besar (RM18) · Taman Kinrara",
        },
      ],
    },
    footer: {
      desc: "Kentang Jaket Big Mac bakar besi tuang di Puchong, disediakan segar setiap hari dalam saiz Kecil (RM10) dan Besar (RM18).",
      hoursTitle: "Waktu Operasi",
      hours: "Sab – Ahd: 11:30 PG – 11:30 MLM\nIsn – Jum: Tutup",
      pickupTitle: "Dapur & Penghantaran",
      pickup: "Kampung Kenangan, 47100 Puchong, Selangor\nPenghantaran panas 25 min · 100% Bahan Halal",
      mapCta: "Lihat di Google Maps ↗",
      copyright: "Jacket Potato by Hanna. Hak cipta terpelihara.",
      bakedFresh: "Dibakar segar setiap 20 minit.",
    },
    drawer: {
      title: "Beg Pesanan Anda",
      empty: "Beg anda kosong. Pilih Kecil (RM10) atau Besar (RM18) untuk mula memesan!",
      fulfillmentLabel: "Pilihan Pesanan",
      pickup: "Ambil Sendiri",
      delivery: "Penghantaran",
      pickupNote: "Ambil sendiri di Kampung Kenangan, 47100 Puchong, Selangor",
      pickupTimeLabel: "Masa Ambil",
      pickupTimeError: "Sila pilih masa ambil untuk meneruskan.",
      addressLabel: "Alamat Penghantaran",
      addressPlaceholder: "Masukkan alamat penghantaran penuh anda di Puchong...",
      addressError: "Sila masukkan alamat penghantaran untuk meneruskan.",
      subtotal: "Jumlah Kecil",
      checkout: "Hantar Pesanan ke WhatsApp",
      closedNotice:
        "Kami hanya dibuka pada hari Sabtu & Ahad. Sila datang semula hujung minggu ini untuk membuat pesanan!",
      closedButton: "Dibuka Sabtu – Ahad Sahaja",
      confirmedTitle: "Pesanan Dihantar ke WhatsApp!",
      confirmedBody:
        "Sila tekan hantar pada mesej WhatsApp ke 011-2611 2833 supaya kami boleh mula menyediakan Kentang Jaket Big Mac anda.",
    },
  },
} as const;
