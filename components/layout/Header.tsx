import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

const navItem = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
  { name: "Service", url: "/" },
  { name: "Blog", url: "/" },
];

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <Image src="/logo.jpg" alt="logo" width={171} height={48} />
          <nav>
            <ul>
              {navItem.map((list, key) => (
                <li key={key}>
                  <Link href={list.url}>{list.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="btn-group">
            <Button href="" className="btn-outline">
              Try It FREE
            </Button>
            <Button href="" className="btn-primary">
              BOOK A DEMO
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
