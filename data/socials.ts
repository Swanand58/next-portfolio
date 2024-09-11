import { FaXTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { IconType } from "react-icons";

interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

const socialLinks: SocialLink[] = [
  {
    name: "Resume",
    url: "/Resume_SwanandKhonde.pdf",
    icon: ImProfile,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/swanandkhonde/",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    url: "https://github.com/Swanand58",
    icon: FaGithub,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/swanandkhonde_",
    icon: FaXTwitter,
  },
  {
    name: "Email",
    url: "mailto:swanandkhonde1999@gmail.com",
    icon: FaEnvelope,
  },
  {
    name: "Leetcode",
    url: "https://leetcode.com/u/Swanand58/",
    icon: TbBrandLeetcode,
  },
];

export { socialLinks };
export type { SocialLink };
