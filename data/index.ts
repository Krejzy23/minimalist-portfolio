export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Toolkits", link: "#toolkits" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "My progress on the Cyber security learning platform",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently working automatization script",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Awsome Photographer Portofolio",
      des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      img: "/p1.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://photo-sand.vercel.app/",
    },
    {
      id: 2,
      title: "Projects Portfolio",
      des: "A page showcasing all my projects with simple descriptions and links to live previews.",
      img: "/p2.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://projects-portfolio-gray.vercel.app/",
    },
    {
      id: 3,
      title: "AI Image SaaS - Canva Application",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://image-ai-nu.vercel.app/",
    },
    {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://i-phone15-pro.vercel.app/",
    },
  ];
  
  export const toolkits = [
    {
      id: 1,
      quote:
      "Pwnagotchi runs on a Raspberry Pi Zero W, uses bettercap, and learns from nearby WiFi networks to capture as many crackable WPA handshakes as possible. It saves them as PCAP files compatible with hashcat, including WPA handshakes and PMKIDs.",
      name: "Pwnagotchi",
      title: "Wi-Fi testing",
      img: "/pwngotchi1.png"
    },
    {
      id: 2,
      quote:
      "Kali NetHunter on a rooted Samsung Galaxy S20 FE 5G provides a full-featured mobile pentesting setup. With root access, it supports advanced tools like HID attacks, WiFi injection, and a complete chroot environment, enabling powerful on-device security testing.",
      name: "Nethunter Kali Linux",
      title: "Unix system in mobile phone",
      img: "/NetHunter.png"
    },
    {
      id: 3,
      quote:
      "Bruce firmware on the M5Stick C Plus2 turns the device into a versatile ESP32-based offensive tool. It supports a wide range of red-team features and works seamlessly with M5Stack devices, making it a compact and powerful platform for on-the-go security operations.",
      name: "M5StickC PLUS2",
      title: "ESP32 Mini IoT",
      img: "/M5stack.png"
    },
    {
      id: 4,
      quote:
      "The WiFi Pineapple Cloner running on a Shadow GL‑AR300M16‑Ext replicates core Pineapple features on OpenWRT hardware. With two added RTL5370 antennas, it becomes a compact device for wireless audits, supporting rogue AP setups, handshake capture, and other WiFi-focused red‑team tasks.",
      name: "Pineapple clone",
      title: "Wi-Fi testing",
      img: "/Router.png"
    },
    {
      id: 5,
      quote:
      "A Rubber Ducky running on an RPi Pico 2 uses custom payloads to emulate a USB keyboard and execute automated keystroke attacks. It injects predefined commands at high speed, allowing scripted actions like opening applications, typing commands, or modifying system settings on the target device.",
      name: "Rubber Ducky",
      title: "USB HID Attack",
      img: ""
    },
    {
      id: 6,
      quote:
      "The Deauther firmware on a NodeMCU ESP8266 with a 0.96 OLED display allows you to scan nearby WiFi networks, send deauthentication and beacon attacks, and manage basic wireless testing functions directly from the device’s built‑in screen.",
      name: "Deauther",
      title: "Wi-Fi testing",
      img: "/deauth.png"
    },

  ];
  
  export const companies = [
    {
      id: 1,
      name: "Linux",
      img: "/Linux_logo.svg",
      nameImg: "/Linux.svg",
    },
    {
      id: 2,
      name: "OpenWrt",
      img: "/OpenWrt.svg",
      nameImg: "/OpenWrt_Logo.svg",
    },
    {
      id: 3,
      name: "Kali",
      img: "/Kali.svg",
      nameImg: "/Kali_Linux.svg",
    },
    {
      id: 4,
      name: "ubuntu",
      img: "/ubuntu_logo.svg",
      nameImg: "/ubuntu_name.svg",
    },
    {
      id: 5,
      name: "graphene",
      img: "/GrapheneOS_logo.svg",
      nameImg: "/GrapheneOs.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Mobile App Dev - JSM Tech",
      desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance App Dev Project",
      desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Cybersecurity",
      desc: "Developed and maintained user-facing features using modern frontend technologies.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/Krejzy23"
    },
    {
      id: 2,
      img: "/twit.svg",
      link: "https://github.com/Krejzy23"
    },
    {
      id: 3,
      img: "/link.svg",
      link: "https://github.com/Krejzy23"
    },
  ];