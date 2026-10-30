/* Database perangkat keluarga Miatoll */

const devices = [
  {
    codename: "curtana",
    name: "Redmi Note 9 Pro",
    market: ["Global", "India", "Indonesia", "EEA", "Russia", "Turkey", "Taiwan"],
    chip: "Snapdragon 720G",
    chipIcon: "chip",
    display: '6.67" FHD+ IPS 120Hz',
    camera: "48MP quad camera",
    battery: "5020 mAh · 33W",
    android: "Android 10 → 13",
    miui: "MIUI 12 → 14",
    bootloader: "unlockable",
    color: "indigo",
    popular: true
  },
  {
    codename: "gram",
    name: "Redmi Note 9S",
    market: ["Global", "EEA", "Indonesia", "Taiwan"],
    chip: "Snapdragon 720G",
    chipIcon: "chip",
    display: '6.67" FHD+ IPS',
    camera: "48MP quad camera",
    battery: "5020 mAh · 18W",
    android: "Android 10 → 13",
    miui: "MIUI 11 → 14",
    bootloader: "unlockable",
    color: "cyan",
    popular: true
  },
  {
    codename: "excalibur",
    name: "Redmi Note 9 Pro Max",
    market: ["India"],
    chip: "Snapdragon 720G",
    chipIcon: "chip",
    display: '6.67" FHD+ IPS',
    camera: "64MP quad camera",
    battery: "5020 mAh · 33W",
    android: "Android 10 → 13",
    miui: "MIUI 11 → 14",
    bootloader: "unlockable",
    color: "violet"
  },
  {
    codename: "mojito",
    name: "POCO M2 Pro",
    market: ["India"],
    chip: "Snapdragon 720G",
    chipIcon: "chip",
    display: '6.67" FHD+ IPS',
    camera: "48MP quad camera",
    battery: "5000 mAh · 33W",
    android: "Android 10 → 13",
    miui: "MIUI 11 → 14",
    bootloader: "unlockable",
    color: "orange"
  },
  {
    codename: "joyeuse",
    name: "Redmi Note 9",
    market: ["Global", "India", "EEA", "Indonesia", "Russia"],
    chip: "MediaTek Helio G85",
    chipIcon: "cpu",
    display: '6.53" FHD+ IPS',
    camera: "48MP quad camera",
    battery: "5020 mAh · 22.5W",
    android: "Android 10 → 13",
    miui: "MIUI 11 → 14",
    bootloader: "unlockable",
    color: "pink",
    note: "Varian MediaTek — build ROM/kernel TERPISAH dari varian Snapdragon. Jangan campur!"
  }
];

module.exports = devices;
