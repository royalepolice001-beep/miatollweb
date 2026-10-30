/* =========================================================
 * Data Download Center — Miatoll Family
 * Format entri:
 * {
 *   title, version, android, region, type, size, date,
 *   devices: "semua" | "curtana gram ...", tags: [], url, badge, featured
 * }
 * Ganti `url` dengan link file kamu sendiri (Drive/MediaFire/GitHub release/dll).
 * ======================================================= */

const officialRom = [
  {
    title: "MIUI 14 — Redmi Note 9 Pro (curtana)",
    version: "V14.0.6.0.TJPINXM",
    android: "13",
    region: "India",
    type: "Recovery",
    size: "3.4 GB",
    date: "2024-01-12",
    devices: "curtana",
    tags: ["Stable", "MIUI 14"],
    url: "https://miuirom.xiaomi.com/",
    badge: "Latest",
    featured: true
  },
  {
    title: "MIUI 14 — Redmi Note 9 Pro (curtana)",
    version: "V14.0.5.0.TJBEUXM",
    android: "13",
    region: "EEA",
    type: "Fastboot",
    size: "4.1 GB",
    date: "2023-11-03",
    devices: "curtana",
    tags: ["Stable", "Fastboot"],
    url: "https://miuirom.xiaomi.com/",
    featured: true
  },
  {
    title: "MIUI 14 — Redmi Note 9S (gram)",
    version: "V14.0.4.0.TJWMIXM",
    android: "13",
    region: "Global",
    type: "Recovery",
    size: "3.3 GB",
    date: "2023-10-22",
    devices: "gram",
    tags: ["Stable"],
    url: "https://miuirom.xiaomi.com/",
    featured: true
  },
  {
    title: "MIUI 13 — POCO M2 Pro (mojito)",
    version: "V13.0.9.0.SJPINXM",
    android: "12",
    region: "India",
    type: "Recovery",
    size: "3.2 GB",
    date: "2023-06-18",
    devices: "mojito",
    tags: ["Stable", "POCO"],
    url: "https://miuirom.xiaomi.com/"
  },
  {
    title: "MIUI 13 — Redmi Note 9 Pro Max (excalibur)",
    version: "V13.0.6.0.SJPINXM",
    android: "12",
    region: "India",
    type: "Fastboot",
    size: "4.0 GB",
    date: "2023-04-09",
    devices: "excalibur",
    tags: ["Stable"],
    url: "https://miuirom.xiaomi.com/"
  },
  {
    title: "MIUI 13 — Redmi Note 9 (joyeuse)",
    version: "V13.0.5.0.SJOMIXM",
    android: "12",
    region: "Global",
    type: "Recovery",
    size: "2.9 GB",
    date: "2023-03-27",
    devices: "joyeuse",
    tags: ["Stable", "MediaTek"],
    url: "https://miuirom.xiaomi.com/"
  },
  {
    title: "MIUI 12.5 Enhanced — Redmi Note 9 Pro (curtana)",
    version: "V12.5.8.0.RJPINXM",
    android: "11",
    region: "India",
    type: "Recovery",
    size: "2.8 GB",
    date: "2022-02-14",
    devices: "curtana",
    tags: ["Legacy", "Rollback-safe"],
    url: "https://miuirom.xiaomi.com/"
  },
  {
    title: "MIUI 12 — Launch Build (curtana / gram)",
    version: "V12.0.4.0.QJPINXM",
    android: "10",
    region: "India",
    type: "Recovery",
    size: "2.6 GB",
    date: "2020-08-01",
    devices: "curtana gram",
    tags: ["Android 10", "Launch"],
    url: "https://miuirom.xiaomi.com/"
  },
  {
    title: "MIUI 14 — Redmi Note 9 Pro Indonesia (curtana)",
    version: "V14.0.3.0.TJPIDXM",
    android: "13",
    region: "Indonesia",
    type: "Recovery",
    size: "3.4 GB",
    date: "2023-09-15",
    devices: "curtana",
    tags: ["Stable", "ID"],
    url: "https://xiaomirom.com/",
    badge: "ID"
  },
  {
    title: "MIUI 13 — Redmi Note 9S Russia (gram)",
    version: "V13.0.4.0.SJWRUXM",
    android: "12",
    region: "Russia",
    type: "Recovery",
    size: "3.1 GB",
    date: "2022-12-02",
    devices: "gram",
    tags: ["Stable"],
    url: "https://miuirom.xiaomi.com/"
  }
];

const customRom = [
  {
    title: "LineageOS 21",
    version: "21.0 Nightly",
    android: "14",
    region: "—",
    type: "AOSP",
    size: "1.1 GB",
    date: "2026-08-14",
    devices: "curtana gram mojito",
    tags: ["Clean", "Privacy", "Mature"],
    url: "https://lineageos.org/",
    badge: "Popular",
    featured: true
  },
  {
    title: "crDroid Android 14",
    version: "10.x",
    android: "14",
    region: "—",
    type: "AOSP",
    size: "1.4 GB",
    date: "2026-07-30",
    devices: "curtana gram mojito excalibur",
    tags: ["Customization", "Smooth"],
    url: "https://crdroid.net/",
    featured: true
  },
  {
    title: "EvolutionX (Evolved)",
    version: "9.x / 10.x",
    android: "14 / 15",
    region: "—",
    type: "AOSP",
    size: "1.5 GB",
    date: "2026-09-02",
    devices: "curtana gram",
    tags: ["Pixel feel", "Feature-rich"],
    url: "https://evolutionx.dev/",
    badge: "Hot",
    featured: true
  },
  {
    title: "PixelExperience / PixelOS",
    version: "Plus Edition",
    android: "13 / 14",
    region: "—",
    type: "AOSP",
    size: "1.3 GB",
    date: "2025-11-18",
    devices: "curtana gram mojito",
    tags: ["Pixel UI", "GApps included"],
    url: "https://www.pixelos.net/"
  },
  {
    title: "ArrowOS",
    version: "13.1 / 14.0",
    android: "13 / 14",
    region: "—",
    type: "AOSP",
    size: "1.0 GB",
    date: "2025-08-21",
    devices: "curtana gram mojito",
    tags: ["Lightweight", "Battery"],
    url: "https://arrowos.net/"
  },
  {
    title: "ParanoidAndroid (Uvite)",
    version: "Uvite",
    android: "13",
    region: "—",
    type: "AOSP",
    size: "1.2 GB",
    date: "2025-05-09",
    devices: "curtana gram",
    tags: ["Hybrid UI", "Polished"],
    url: "https://paranoidandroid.co/"
  },
  {
    title: "DerpFest",
    version: "14 / 15",
    android: "14 / 15",
    region: "—",
    type: "AOSP",
    size: "1.5 GB",
    date: "2026-06-11",
    devices: "curtana gram mojito",
    tags: ["Otter customization"],
    url: "https://derpfest.org/"
  },
  {
    title: "Project Elixir",
    version: "4.x",
    android: "14",
    region: "—",
    type: "AOSP",
    size: "1.3 GB",
    date: "2026-03-25",
    devices: "curtana",
    tags: ["Minimal", "OneUI-ish"],
    url: "https://projectelixiros.com/"
  },
  {
    title: "BlissROM",
    version: "16 / 17",
    android: "13 / 14",
    region: "—",
    type: "AOSP",
    size: "1.6 GB",
    date: "2025-12-30",
    devices: "curtana gram",
    tags: ["Feature-heavy"],
    url: "https://blissroms.org/"
  },
  {
    title: "RisingOS Revamp",
    version: "5.x",
    android: "14 / 15",
    region: "—",
    type: "AOSP",
    size: "1.4 GB",
    date: "2026-09-19",
    devices: "curtana gram",
    tags: ["Modern UI", "Smooth"],
    url: "https://xdaforums.com/search/?q=RisingOS%20miatoll",
    badge: "New"
  },
  {
    title: "Android 15 Preview Builds",
    version: "QPR / Early",
    android: "15",
    region: "—",
    type: "Experimental",
    size: "1.4 GB",
    date: "2026-02-07",
    devices: "curtana gram",
    tags: ["Early access", "Buggy"],
    url: "https://xdaforums.com/search/?q=miatoll%20android%2015"
  },
  {
    title: "Android 16 / 17 — Tracking Thread",
    version: "TBA",
    android: "16 17",
    region: "—",
    type: "Coming soon",
    size: "—",
    date: "2026-10-01",
    devices: "semua",
    tags: ["Coming soon"],
    url: "https://xdaforums.com/search/?q=miatoll%20android%2016",
    badge: "Soon"
  }
];

const firmware = [
  {
    title: "Firmware curtana — MIUI 14 (India)",
    version: "V14.0.6.0.TJPINXM",
    android: "13",
    region: "India",
    type: "Firmware",
    size: "1.8 GB",
    date: "2024-01-12",
    devices: "curtana",
    tags: ["TJA_IN"],
    url: "https://xiaomirom.com/",
    featured: true
  },
  {
    title: "Firmware curtana — MIUI 14 (EEA)",
    version: "V14.0.5.0.TJBEUXM",
    android: "13",
    region: "EEA",
    type: "Firmware",
    size: "1.9 GB",
    date: "2023-11-03",
    devices: "curtana",
    tags: ["TJB_EUX"],
    url: "https://xiaomirom.com/"
  },
  {
    title: "Firmware gram — MIUI 14 (Global)",
    version: "V14.0.4.0.TJWMIXM",
    android: "13",
    region: "Global",
    type: "Firmware",
    size: "1.8 GB",
    date: "2023-10-22",
    devices: "gram",
    tags: ["TJW_MIX"],
    url: "https://xiaomirom.com/"
  },
  {
    title: "Firmware mojito — MIUI 13 (India)",
    version: "V13.0.9.0.SJPINXM",
    android: "12",
    region: "India",
    type: "Firmware",
    size: "1.7 GB",
    date: "2023-06-18",
    devices: "mojito",
    tags: ["SJP_IN"],
    url: "https://firmware.miuier.com/"
  },
  {
    title: "Firmware joyeuse — MIUI 13 (Global, MTK)",
    version: "V13.0.5.0.SJOMIXM",
    android: "12",
    region: "Global",
    type: "Firmware",
    size: "2.1 GB",
    date: "2023-03-27",
    devices: "joyeuse",
    tags: ["MediaTek", "Scatter"],
    url: "https://firmware.miuier.com/"
  },
  {
    title: "Firmware excalibur — MIUI 13 (India)",
    version: "V13.0.6.0.SJPINXM",
    android: "12",
    region: "India",
    type: "Firmware",
    size: "1.8 GB",
    date: "2023-04-09",
    devices: "excalibur",
    tags: ["SJP_IN"],
    url: "https://firmware.miuier.com/"
  },
  {
    title: "Firmware Archive — Semua Region",
    version: "Archive",
    android: "10 11 12 13",
    region: "Semua",
    type: "Archive",
    size: "—",
    date: "2026-10-01",
    devices: "semua",
    tags: ["Archive", "All region"],
    url: "https://firmware.miuier.com/"
  }
];

const kernel = [
  {
    title: "Custom Kernel A13 — KSU Ready",
    version: "Stable r5",
    android: "13",
    region: "—",
    type: "Performance",
    size: "12 MB",
    date: "2026-05-12",
    devices: "curtana gram mojito",
    tags: ["KernelSU", "Zygisk"],
    url: "https://xdaforums.com/search/?q=miatoll%20kernel",
    badge: "KSU",
    featured: true
  },
  {
    title: "Battery-Focused Kernel",
    version: "v4.2",
    android: "12 13",
    region: "—",
    type: "Battery",
    size: "11 MB",
    date: "2026-01-28",
    devices: "curtana gram",
    tags: ["Saver", "Idle deep"],
    url: "https://xdaforums.com/search/?q=miatoll%20kernel",
    featured: true
  },
  {
    title: "Gaming Kernel — OC Scheduler",
    version: "v2.9 gaming",
    android: "13",
    region: "—",
    type: "Gaming",
    size: "12 MB",
    date: "2026-07-03",
    devices: "curtana mojito excalibur",
    tags: ["Overclock", "Touch"],
    url: "https://xdaforums.com/search/?q=miatoll%20gaming%20kernel"
  },
  {
    title: "Stock-Based Kernel (Debloated)",
    version: "2026.09",
    android: "13",
    region: "—",
    type: "Stock+",
    size: "10 MB",
    date: "2026-09-14",
    devices: "semua",
    tags: ["Stable", "Minimal"],
    url: "https://github.com/search?q=miatoll+kernel&type=repositories"
  },
  {
    title: "Kernel Collection — GitHub",
    version: "List",
    android: "11 12 13 14 15",
    region: "—",
    type: "Index",
    size: "—",
    date: "2026-10-15",
    devices: "semua",
    tags: ["Index", "Source"],
    url: "https://github.com/search?q=miatoll+kernel&type=repositories"
  }
];

const recovery = [
  {
    title: "TWRP — Xiaomi Redmi Note 9 Pro",
    version: "3.7.0_12-0",
    android: "11+",
    region: "—",
    type: "TWRP",
    size: "65 MB",
    date: "2025-10-02",
    devices: "curtana",
    tags: ["Official", "Team Win"],
    url: "https://twrp.me/xiaomi/xiaomiredminote9pro.html",
    badge: "Official",
    featured: true
  },
  {
    title: "OrangeFox Recovery Project",
    version: "R12.1 / Stable",
    android: "11+",
    region: "—",
    type: "OrangeFox",
    size: "78 MB",
    date: "2026-02-19",
    devices: "curtana gram mojito",
    tags: ["Fox theme", "OTA-friendly"],
    url: "https://orangefox.download/",
    featured: true
  },
  {
    title: "PitchBlack Recovery Project",
    version: "4.x",
    android: "11+",
    region: "—",
    type: "PitchBlack",
    size: "80 MB",
    date: "2025-07-21",
    devices: "curtana gram",
    tags: ["Aroma", "Multi-mount"],
    url: "https://pitchblackrecovery.com/"
  },
  {
    title: "SHRP — SHRP Recovery Project",
    version: "3.1",
    android: "11+",
    region: "—",
    type: "SHRP",
    size: "72 MB",
    date: "2024-12-08",
    devices: "curtana mojito",
    tags: ["Material"],
    url: "https://shrp.me/"
  },
  {
    title: "Lineage Recovery",
    version: "21",
    android: "14",
    region: "—",
    type: "LineageOS",
    size: "58 MB",
    date: "2026-08-14",
    devices: "curtana gram mojito",
    tags: ["A/B", "Sideload"],
    url: "https://wiki.lineageos.org/devices/"
  }
];

const portRom = [
  {
    title: "xiaomi.eu Weekly / Stable",
    version: "miatoll build",
    android: "13",
    region: "Global",
    type: "MIUI-based",
    size: "3.6 GB",
    date: "2026-04-17",
    devices: "curtana gram",
    tags: ["Debloated MIUI", "No ads"],
    url: "https://xiaomi.eu/",
    badge: "Popular",
    featured: true
  },
  {
    title: "HyperOS-style Port",
    version: "Concept 2.0",
    android: "13",
    region: "—",
    type: "Port",
    size: "3.5 GB",
    date: "2026-08-27",
    devices: "curtana",
    tags: ["HyperOS UI", "Experimental"],
    url: "https://xdaforums.com/search/?q=miatoll%20hyperos%20port",
    featured: true
  },
  {
    title: "One UI-inspired Port",
    version: "6.1",
    android: "13 14",
    region: "—",
    type: "Port",
    size: "2.9 GB",
    date: "2026-05-30",
    devices: "curtana gram",
    tags: ["Good Lock", "Samsung style"],
    url: "https://xdaforums.com/search/?q=miatoll%20port%20rom"
  },
  {
    title: "iOS-style MIUI Mod",
    version: "18 series",
    android: "12 13",
    region: "—",
    type: "Modded MIUI",
    size: "3.4 GB",
    date: "2026-09-08",
    devices: "semua",
    tags: ["iOS lockscreen", "Control center"],
    url: "https://xdaforums.com/search/?q=miatoll%20ios%20rom"
  },
  {
    title: "Port ROM Archive — miatoll",
    version: "Archive",
    android: "10 11 12 13",
    region: "—",
    type: "Archive",
    size: "—",
    date: "2026-01-10",
    devices: "semua",
    tags: ["Archive"],
    url: "https://xdaforums.com/search/?q=miatoll%20port"
  }
];

const modules = [
  {
    title: "Magisk",
    version: "28.x (stable)",
    android: "10 → 17",
    region: "—",
    type: "Root",
    size: "12 MB",
    date: "2026-09-21",
    devices: "semua",
    tags: ["Root", "Zygisk"],
    url: "https://github.com/topjohnwu/Magisk",
    badge: "Essential",
    featured: true
  },
  {
    title: "KernelSU",
    version: "Next / Stable",
    android: "12 → 17",
    region: "—",
    type: "Root",
    size: "6 MB",
    date: "2026-10-05",
    devices: "semua",
    tags: ["Kernel root", "KSU"],
    url: "https://github.com/tiann/KernelSU",
    badge: "KSU",
    featured: true
  },
  {
    title: "APatch",
    version: "Stable",
    android: "12 → 17",
    region: "—",
    type: "Root",
    size: "7 MB",
    date: "2026-08-30",
    devices: "semua",
    tags: ["Kernel patch", "APatch"],
    url: "https://github.com/bmax121/APatch"
  },
  {
    title: "Zygisk Next",
    version: "Standalone",
    android: "12 → 16",
    region: "—",
    type: "Zygisk",
    size: "3 MB",
    date: "2026-07-12",
    devices: "semua",
    tags: ["Zygisk", "KSU compat"],
    url: "https://github.com/Dr-TSNG/ZygiskNext",
    featured: true
  },
  {
    title: "LSPosed (Zygisk)",
    version: "EdXposed-succesor",
    android: "12 → 15",
    region: "—",
    type: "Framework",
    size: "5 MB",
    date: "2026-06-19",
    devices: "semua",
    tags: ["Xposed", "Hooks"],
    url: "https://github.com/LSPosed/LSPosed"
  },
  {
    title: "Play Integrity Fix",
    version: "Module",
    android: "12 → 16",
    region: "—",
    type: "SafetyNet",
    size: "1 MB",
    date: "2026-09-28",
    devices: "semua",
    tags: ["PIF", "Banking"],
    url: "https://github.com/chiteroman/PlayIntegrityFix",
    badge: "Hot"
  },
  {
    title: "Shamiko",
    version: "Zygisk module",
    android: "12 → 16",
    region: "—",
    type: "Hide",
    size: "1 MB",
    date: "2026-09-28",
    devices: "semua",
    tags: ["Hide", "DenyList"],
    url: "https://github.com/LSPosed"
  },
  {
    title: "BusyBox NDK",
    version: "Stable",
    android: "10 → 16",
    region: "—",
    type: "Tools",
    size: "2 MB",
    date: "2025-11-11",
    devices: "semua",
    tags: ["Shell", "Binary"],
    url: "https://github.com/osm0sis/Android-Busybox-NDK"
  },
  {
    title: "Systemless Hosts",
    version: "Magisk module",
    android: "10 → 16",
    region: "—",
    type: "Tools",
    size: "1 MB",
    date: "2025-09-02",
    devices: "semua",
    tags: ["Hosts", "Ad-block base"],
    url: "https://github.com/topjohnwu/Magisk"
  }
];

const apk = [
  {
    title: "GCam — Google Camera Port",
    version: "Hub (SGCAM / BSG / Nikita)",
    android: "10 → 16",
    region: "—",
    type: "Camera",
    size: "~250 MB",
    date: "2026-10-10",
    devices: "semua",
    tags: ["GCam", "Photo"],
    url: "https://www.celsoazevedo.com/files/android/google-camera/",
    badge: "Popular",
    featured: true
  },
  {
    title: "Shizuku",
    version: "Latest",
    android: "11 → 17",
    region: "—",
    type: "Tools",
    size: "5 MB",
    date: "2026-09-30",
    devices: "semua",
    tags: ["ADB", "Privilege"],
    url: "https://github.com/RikkaApps/Shizuku",
    featured: true
  },
  {
    title: "F-Droid",
    version: "Latest",
    android: "8 → 17",
    region: "—",
    type: "Store",
    size: "12 MB",
    date: "2026-08-08",
    devices: "semua",
    tags: ["FOSS", "Store"],
    url: "https://f-droid.org/"
  },
  {
    title: "Aurora Store",
    version: "Latest",
    android: "7 → 17",
    region: "—",
    type: "Store",
    size: "15 MB",
    date: "2026-07-15",
    devices: "semua",
    tags: ["Play Store anon", "FOSS"],
    url: "https://gitlab.com/AuroraOSS/AuroraStore"
  },
  {
    title: "Termux",
    version: "0.118+",
    android: "7 → 16",
    region: "—",
    type: "Terminal",
    size: "100 MB",
    date: "2026-06-22",
    devices: "semua",
    tags: ["Shell", "Linux"],
    url: "https://github.com/termux/termux-app"
  },
  {
    title: "ZArchiver",
    version: "Latest",
    android: "5 → 17",
    region: "—",
    type: "File manager",
    size: "12 MB",
    date: "2026-05-05",
    devices: "semua",
    tags: ["ZIP", "Extract"],
    url: "https://zarchiver.com/"
  },
  {
    title: "App Manager",
    version: "Latest",
    android: "6 → 17",
    region: "—",
    type: "Debloat",
    size: "15 MB",
    date: "2026-04-18",
    devices: "semua",
    tags: ["ADB", "Uninstall"],
    url: "https://github.com/MuntashirAkon/AppManager"
  },
  {
    title: "MiXplorer",
    version: "Silver",
    android: "5 → 17",
    region: "—",
    type: "File manager",
    size: "6 MB",
    date: "2026-03-01",
    devices: "semua",
    tags: ["Explorer"],
    url: "https://mixplorer.com/"
  }
];

const themes = [
  {
    title: "MIUI Themes — iOS 18 Style",
    version: "2026 edition",
    android: "12 13",
    region: "—",
    type: "iOS style",
    size: "Theme pack",
    date: "2026-09-20",
    devices: "semua",
    tags: ["iOS", "Lockscreen"],
    url: "https://themes.miui.com/",
    badge: "Hot",
    featured: true
  },
  {
    title: "HyperOS Clean Concept",
    version: "v3",
    android: "13",
    region: "—",
    type: "Concept",
    size: "Theme pack",
    date: "2026-08-14",
    devices: "semua",
    tags: ["Clean", "Blur"],
    url: "https://themes.miui.com/",
    featured: true
  },
  {
    title: "Monet / Material You Pack",
    version: "2026",
    android: "12 13",
    region: "—",
    type: "Material",
    size: "Theme pack",
    date: "2026-06-10",
    devices: "semua",
    tags: ["Dynamic color"],
    url: "https://themes.miui.com/"
  },
  {
    title: "AOD Pack — iOS Clock & Anime",
    version: "Pack 05",
    android: "11 12 13",
    region: "—",
    type: "AOD",
    size: "40 MB",
    date: "2026-05-22",
    devices: "semua",
    tags: ["AOD", "Always-on"],
    url: "https://themes.miui.com/"
  },
  {
    title: "Icon Pack — Squircle & Linear",
    version: "Pack 12",
    android: "11 12 13",
    region: "—",
    type: "Icons",
    size: "25 MB",
    date: "2026-04-02",
    devices: "semua",
    tags: ["Icons", "Minimal"],
    url: "https://themes.miui.com/"
  },
  {
    title: "Font Pack — SF-style & Rounded",
    version: "2026",
    android: "11 12 13",
    region: "—",
    type: "Font",
    size: "8 MB",
    date: "2026-02-17",
    devices: "semua",
    tags: ["Font", "Typography"],
    url: "https://themes.miui.com/"
  }
];

const groups = {
  rom: {
    key: "rom",
    items: officialRom,
    groups: [
      {
        key: "android",
        label: "Android",
        values: ["10", "11", "12", "13", "14", "15", "16", "17"]
      },
      {
        key: "region",
        label: "Region",
        values: ["Global", "India", "EEA", "Indonesia", "Russia"]
      }
    ],
    searchPlaceholder: "Cari ROM: MIUI, device, region…",
    note:
      "Selalu cocokkan codename & region sebelum flash. ROM Fastboot butuh Mi Flash Tool; ROM Recovery bisa via TWRP/OrangeFox. Fingerprint yang salah = bootloop."
  },
  "custom-rom": {
    key: "custom-rom",
    items: customRom,
    groups: [
      {
        key: "android",
        label: "Base Android",
        values: ["10", "11", "12", "13", "14", "15", "16", "17"]
      },
      { key: "type", label: "Tipe", values: ["AOSP", "Experimental", "Coming soon"] }
    ],
    searchPlaceholder: "Cari ROM: LineageOS, crDroid, EvolutionX…",
    note:
      "Dukungan Android 17 masih tahap awal di ekosistem — build komunitas akan muncul bertahap. Sebelum flash: backup data, pastikan recovery mendukung, dan siapkan ROM cadangan."
  },
  firmware: {
    key: "firmware",
    items: firmware,
    groups: [
      { key: "android", label: "Android", values: ["10", "11", "12", "13"] },
      {
        key: "region",
        label: "Region",
        values: ["Global", "India", "EEA", "Indonesia", "Russia", "Semua"]
      }
    ],
    searchPlaceholder: "Cari firmware: codename, region, versi…",
    note:
      "Firmware WAJIB sesuai region device. joyeuse (MediaTek) memakai firmware scatter — jangan pernah pakai firmware varian Snapdragon."
  },
  kernel: {
    key: "kernel",
    items: kernel,
    groups: [
      { key: "android", label: "Android", values: ["11", "12", "13", "14", "15"] },
      { key: "type", label: "Karateristik", values: ["Performance", "Battery", "Gaming", "Stock+", "Index"] }
    ],
    searchPlaceholder: "Cari kernel: nama, tipe, dukungan KSU…",
    note:
      "Custom kernel umumnya butuh custom recovery. Kalau device kamu daily driver, pilih build stable — bukan yang paling kencang. Untuk KernelSU, pastikan kernel mendukung GKI atau build KSU-nya sendiri."
  },
  recovery: {
    key: "recovery",
    items: recovery,
    groups: [
      { key: "type", label: "Recovery", values: ["TWRP", "OrangeFox", "PitchBlack", "SHRP", "LineageOS"] }
    ],
    searchPlaceholder: "Cari recovery: TWRP, OrangeFox…",
    note:
      "Setelah Android 11+, TWRP MIUI terbaru sering tidak bisa decrypt /data. Solusi umum: format data via recovery (wipe) atau flash LOS-based recovery. Selalu backup dulu!"
  },
  "port-rom": {
    key: "port-rom",
    items: portRom,
    groups: [
      { key: "android", label: "Android", values: ["10", "11", "12", "13", "14"] },
      {
        key: "type",
        label: "Tipe",
        values: ["MIUI-based", "Port", "Modded MIUI", "Archive"]
      }
    ],
    searchPlaceholder: "Cari port ROM: xiaomi.eu, HyperOS…",
    note:
      "Port ROM = experimental. Bug Bluetooth, VoLTE, atau camera adalah hal normal. Jangan flash kalau kamu butuh device 100% stabil untuk kerja."
  },
  modules: {
    key: "modules",
    items: modules,
    groups: [
      {
        key: "type",
        label: "Kategori",
        values: ["Root", "Zygisk", "Framework", "SafetyNet", "Hide", "Tools"]
      }
    ],
    searchPlaceholder: "Cari module: Magisk, KSU, LSPosed…",
    note:
      "Jangan memasang dua root manager sekaligus. Untuk banking app, kombinasi Play Integrity Fix + hide yang rapi biasanya cukup — matikan module satu per satu saat debug."
  },
  apk: {
    key: "apk",
    items: apk,
    groups: [
      {
        key: "type",
        label: "Kategori",
        values: ["Camera", "Tools", "Store", "Terminal", "File manager", "Debloat"]
      }
    ],
    searchPlaceholder: "Cari APK: GCam, Shizuku, Termux…",
    note:
      "Hanya instal APK dari sumber resmi/dev-nya. Untuk GCam, mulai dari varian stable dulu; kalau crash, coba varian lain dari hub yang sama."
  },
  themes: {
    key: "themes",
    items: themes,
    groups: [
      {
        key: "type",
        label: "Gaya",
        values: ["iOS style", "Concept", "Material", "AOD", "Icons", "Font"]
      }
    ],
    searchPlaceholder: "Cari tema: iOS, HyperOS, AOD…",
    note:
      "Tema pihak ketiga diimpor lewat Theme Manager. Kalau tema tidak muncul, cek metode import (.mtz) yang sesuai versi MIUI kamu."
  }
};

module.exports = {
  officialRom,
  customRom,
  firmware,
  kernel,
  recovery,
  portRom,
  modules,
  apk,
  themes,
  groups
};
