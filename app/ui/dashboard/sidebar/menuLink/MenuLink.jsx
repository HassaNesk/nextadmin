"use client";
import Link from "next/link";
import styles from "./menuLink.module.css";
import { usePathname } from "next/navigation";
export default function MenuLink({ item }) {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        item.path === pathname && styles.active
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
}
