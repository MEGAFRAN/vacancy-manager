"use client"

import React from "react"
import styles from "../../styles/layouts/postDetail.module.scss"

interface DefaultTemplateProps {
  children: React.ReactNode
}

const Post: React.FC<DefaultTemplateProps> = ({ children }) => (
  <article className={styles.container}>{children}</article>
)

export default Post
