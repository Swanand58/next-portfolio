import { FaXTwitter, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa6";
import { TbBrandLeetcode } from "react-icons/tb";
import { ImProfile } from "react-icons/im";
import { IconType } from "react-icons";
import { RESUME_URL, SOCIAL_URLS } from "@/lib/constants";

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

export const socialLinks: SocialLink[] = [
  {
    name: "Resume",
    url: RESUME_URL,
    icon: ImProfile,
  },
  {
    name: "LinkedIn",
    url: SOCIAL_URLS.linkedin,
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    url: SOCIAL_URLS.github,
    icon: FaGithub,
  },
  {
    name: "Twitter",
    url: SOCIAL_URLS.twitter,
    icon: FaXTwitter,
  },
  {
    name: "Email",
    url: SOCIAL_URLS.email,
    icon: FaEnvelope,
  },
  {
    name: "Leetcode",
    url: SOCIAL_URLS.leetcode,
    icon: TbBrandLeetcode,
  },
];
