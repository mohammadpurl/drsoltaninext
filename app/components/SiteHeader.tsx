import Link from "next/link";
import { Scale, Phone } from "lucide-react";

const navLinks = [
  { to: "/", label: "صفحه اصلی" },
  { to: "/services", label: "خدمات" },
  { to: "/about", label: "درباره من" },
  { to: "/articles", label: "مقالات" },
  { to: "/contact", label: "تماس با ما" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="h-11 w-11 rounded-xl gold-gradient flex items-center justify-center shadow-gold">
            <Scale className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-bold text-foreground">دکتر سعید سلطانی آذر</span>
            <span className="text-xs text-muted-foreground">وکیل پایه یک دادگستری</span>
          </div>
        </Link>

        {/* Center nav */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors relative group"
              // activeProps={{ className: "text-gold" }}
              // activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
              <span className="absolute -bottom-2 right-0 left-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="tel:09124130223"
          className="flex items-center gap-2 px-5 py-2.5 rounded-full gold-gradient text-primary-foreground font-semibold text-sm shadow-gold hover:shadow-elegant transition-all hover:scale-105"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">مشاوره آنلاین</span>
        </a>
      </div>
    </header>
  );
}
