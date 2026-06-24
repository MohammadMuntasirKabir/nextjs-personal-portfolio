import { GithubIcon, LinkedinIcon, FacebookIcon } from "./social-links";
import { X } from "lucide-react";

export const socialLinks = [
  { icon: GithubIcon, href: "https://github.com/MohammadMuntasirKabir", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/mohammad-muntasir-kabir-642020381/", label: "LinkedIn" },
  { icon: FacebookIcon, href: "https://www.facebook.com/muntasir.kabir.rownak/", label: "Facebook" },
  { icon: X, href: "https://twitter.com/rownak", label: "X (Twitter)" },
];

export const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
