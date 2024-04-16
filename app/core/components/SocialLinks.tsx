"use client"

import React from "react"
import Image from "next/image"
import styles from "../styles/components/socialLinks.module.scss"

interface SocialLink {
  name: string
  url: string
  svgPath: string
  text: string
}

const socialLinks: SocialLink[] = [
  {
    name: "Github",
    url: "https://github.com/MEGAFRAN/vacancy-manager",
    svgPath: "/social_media/github.svg",
    text: "Collaborate",
  },
  {
    name: "Discord",
    url: "https://discord.gg/7DwRKBTVXs",
    svgPath: "/social_media/discord.svg",
    text: "Join",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/isfranciscocruz",
    svgPath: "/social_media/linkedin.svg",
    text: "Connect",
  },
]

const SocialLinks: React.FC = () => (
  <ul className={styles.container}>
    {socialLinks.map(({ name, url, svgPath, text }) => (
      <li key={name}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Image src={svgPath} alt={name} width={30} height={30} /> {text}
        </a>
      </li>
    ))}
  </ul>
)

export default SocialLinks
