import Link from "next/link";
import { Scale, Phone, MapPin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/40 bg-surface/50 mt-24">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-11 w-11 rounded-xl gold-gradient flex items-center justify-center">
              <Scale className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <p className="font-bold">دکتر سعید سلطانی آذر</p>
              <p className="text-xs text-muted-foreground">وکیل پایه یک دادگستری · پروانه ۲۳۷۶۲</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
            عضو کانون وکلای دادگستری مرکز (تهران)، با تخصص در دعاوی ملکی، قراردادها، شرکت‌ها و امور ثبتی.
            تعهد ما به موکل، صداقت و پرهیز از وعده‌های واهی است.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-gold">پیوندها</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/services" className="hover:text-gold">خدمات حقوقی</Link></li>
            <li><Link href="/about" className="hover:text-gold">درباره من</Link></li>
            <li><Link href="/articles" className="hover:text-gold">مقالات</Link></li>
            <li><Link href="/contact" className="hover:text-gold">تماس با ما</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-gold">تماس</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" />
              <a href="tel:09124130223" dir="ltr">۰۹۱۲ ۴۱۳ ۰۲۲۳</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />
              <span>سعادت‌آباد، میدان کاج، ابتدای کوچه دوازدهم، پلاک ۳۲، طبقه دوم، واحد ۴</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-gold shrink-0" />
              <span>info@soltaniazar.legal</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/40 py-6 text-center text-xs text-muted-foreground">
        © ۱۴۰۴ دفتر وکالت دکتر سعید سلطانی آذر · تمامی حقوق محفوظ است
      </div>
    </footer>
  );
}
