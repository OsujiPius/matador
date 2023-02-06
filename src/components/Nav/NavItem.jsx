import Link from "next/link";
import { NavItemsWrapper } from "./style";

export default function NavItem({ href, src, alt, name, active }) {
  return (
    <Link href={href} passHref>
      <NavItemsWrapper active={active}>
        <img src={src} alt={alt} />
        <p>{name}</p>
      </NavItemsWrapper>
    </Link>
  );
}
