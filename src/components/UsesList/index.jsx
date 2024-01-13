import { motion } from "framer-motion";
import { ExternalLinkIcon } from "@heroicons/react/solid";
const usesData = [
  {
    section: "Hardware",
    items: [
      {
        name: "Keyboard - Royal Kludge G68",
        link: "https://ecommerce.datablitz.com.ph/products/royal-kludge-g68-tri-mode-rgb-68-keys-hot-swappable-mechanical-keyboard-black-blue-switch",
      },
      {
        name: "Laptop - Macbook Air M2",
        link: "https://www.apple.com/ph/shop/buy-mac/macbook-air/13-inch-m2",
      },
      {
        name: "Mouse - Glorious Model O Wireless",
        link: "https://www.gloriousgaming.com/products/glorious-model-o-wireless-matte-white",
      },
      {
        name: 'Monitor - Viewsonic & Asus (both 27")',
      },
      {
        name: "System Unit - Ryzen 5 2600x; GTX 1050 TI; 32gb RAM; 1TB HDD; 128GB SSD;",
      },
      {
        name: "Docking Station - StarTech DK30CH2DEP",
        link: "https://www.startech.com/en-us/universal-laptop-docking-stations/dk30ch2dep",
      },
    ],
  },
  {
    section: "Editor",
    items: [
      {
        name: "Visual Studio Code",
        link: "https://code.visualstudio.com/download",
      },
      { name: "Font - MonoLisa", link: "https://www.monolisa.dev/" },
    ],
  },
  {
    section: "Terminal",
    items: [
      {
        name: "powerlevel10k",
        link: "https://github.com/romkatv/powerlevel10k",
      },
      { name: "Oh My zsh", link: "https://ohmyz.sh/" },
      { name: "Iterm2", link: "https://iterm2.com/" },
    ],
  },
  {
    section: "Other Software",
    items: [
      { name: "Slack", link: "https://slack.com/" },
      { name: "Discord", link: "https://discord.com/" },
      { name: "Arc Browser", link: "https://arc.net/" },
      { name: "Figma", link: "https://www.figma.com/" },
    ],
  },
];

const UsesList = () => {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "linear", duration: 0.5 }}
      className="container relative"
    >
      <div className="flex flex-col items-start">
        {usesData.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-2xl font-bold text-primary mb-4 dark:text-white">
              {section.section}
            </h2>
            <ul>
              {section.items.map((item, index) => (
                <li
                  key={index}
                  className="list-inside list-disc leading-loose text-neutral-700 dark:text-neutral-300"
                >
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.name}
                    {item.link && (
                      <span className="ml-1 inline-flex align-middle">
                        <ExternalLinkIcon className="h-5 w-5" />
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default UsesList;
