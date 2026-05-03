import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";


import {
  Phone,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Building2,
  ScrollText,
  Scale,
  Users,
  FileCheck,
  ArrowLeft,
  CheckCircle2,
  Star,
  GraduationCap,
} from "lucide-react";

import lawyerHero from "@/public/assets/lawyer-hero.jpg";

export const metadata: Metadata = {
  title: "دکتر سعید سلطانی آذر | وکیل پایه یک دادگستری در تهران",
  description:
    "دفتر وکالت دکتر سعید سلطانی آذر، وکیل پایه یک دادگستری و عضو کانون وکلای مرکز. تخصص در دعاوی ملکی، قراردادها، شرکت‌ها و امور ثبتی.",
  openGraph: {
    title: "دکتر سعید سلطانی آذر | وکیل پایه یک دادگستری",
    description:
      "مشاوره تخصصی حقوقی با تعهد، صداقت و پرهیز از وعده‌های واهی.",
  },
};

const services = [
  { icon: Building2, title: "دعاوی ملکی", desc: "الزام به تنظیم سند رسمی، تحویل مبیع، خلع ید و مشارکت در ساخت." },
  { icon: ScrollText, title: "قراردادها", desc: "تنظیم، بازنگری و تفسیر تخصصی انواع قراردادهای حقوقی و تجاری." },
  { icon: Users, title: "شرکت‌ها و تجاری", desc: "ثبت، تغییرات، انحلال و دعاوی شرکت‌های تجاری و امور تجاری." },
  { icon: FileCheck, title: "امور ثبتی", desc: "اعتراض ثبتی، افراز، تفکیک و اصلاح اسناد رسمی." },
  { icon: Scale, title: "دعاوی حقوقی عمومی", desc: "مطالبه وجه، چک و سفته، مسئولیت مدنی و سایر دعاوی." },
  { icon: BookOpen, title: "مشاوره تخصصی", desc: "مشاوره دقیق پیش از طرح دعوا برای انتخاب بهترین مسیر حقوقی." },
];

const stats = [
  { value: "+۹", label: "سال سابقه وکالت" },
  { value: "۲۳۷۶۲", label: "شماره پروانه" },
  { value: "+۵۰۰", label: "پرونده موفق" },
  { value: "۱۰۰٪", label: "تعهد و صداقت" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] glow-orb pointer-events-none" />
        <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] glow-orb pointer-events-none" />

        <div className="container mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-medium mb-6">
                <Award className="h-3.5 w-3.5" />
                عضو کانون وکلای دادگستری مرکز
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.2] mb-6">
                وکیل تخصصی <span className="text-gold-gradient">دعاوی ملکی</span>
                <br />
                و حقوقی در تهران
              </h1>

              <p className="text-lg text-muted-foreground leading-loose mb-8 max-w-xl">
                دفتر وکالت دکتر سعید سلطانی آذر، وکیل پایه یک دادگستری (شماره پروانه ۲۳۷۶۲)،
                با بیش از ۹ سال تجربه در پرونده‌های ملکی، قراردادها و امور تجاری در کنار شماست.
              </p>

              <ul className="space-y-3 mb-10">
                {["وکیل تخصصی املاک و مستغلات", "متخصص قراردادها و امور ثبتی", "مدرس دانشگاه و پژوهشگر دکتری حقوق"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <div className="h-8 w-8 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                      <Star className="h-4 w-4 text-gold fill-gold" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:09124130223"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full gold-gradient text-primary-foreground font-semibold shadow-gold hover:scale-105 transition-transform"
                >
                  <Phone className="h-4 w-4" /> دریافت مشاوره رایگان
                </a>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-border bg-surface/50 hover:bg-surface font-semibold transition-colors"
                >
                  درباره دفتر ما <ArrowLeft className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="absolute inset-0 gold-gradient rounded-3xl blur-3xl opacity-20" />
              <div className="relative rounded-3xl overflow-hidden border-2 border-gold/30 bg-surface shadow-elegant">
                <Image
                  src={lawyerHero}
                  alt="دکتر سعید سلطانی آذر، وکیل پایه یک دادگستری"
                  width={1024}
                  height={1280}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-6 right-6 left-6 bg-background/80 backdrop-blur-md rounded-2xl p-4 border border-gold/20">
                  <p className="text-sm font-bold text-gold">دکتر سعید سلطانی آذر</p>
                  <p className="text-xs text-muted-foreground mt-1">وکیل پایه یک دادگستری · پروانه ۲۳۷۶۲</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/40 bg-surface/30">
        <div className="container mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gold-gradient mb-2">{s.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest">خدمات تخصصی</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">حوزه‌های تخصصی ما</h2>
          <div className="flex justify-center">
            <div className="h-1 w-20 gold-gradient rounded-full" />
          </div>
          <p className="text-muted-foreground mt-6">
            ارائه خدمات حقوقی جامع با تمرکز بر دعاوی ملکی، قراردادها و امور تجاری.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative p-8 rounded-2xl bg-surface border border-border/50 hover:border-gold/50 transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="h-14 w-14 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5 group-hover:gold-gradient group-hover:border-transparent transition-all">
                <s.icon className="h-7 w-7 text-gold group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-surface/30 border-y border-border/40">
        <div className="container mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold text-sm font-semibold tracking-widest">چرا ما؟</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">تعهد، تخصص و صداقت</h2>
            <p className="text-muted-foreground leading-loose mb-8">
              ما در دفتر وکالت دکتر سلطانی آذر معتقدیم که موکل پیش از هر چیز نیازمند صداقت است.
              از دادن وعده‌های واهی پرهیز می‌کنیم و تنها بر مبنای واقعیت پرونده، استراتژی حقوقی ارائه می‌دهیم.
            </p>
            <ul className="space-y-4">
              {[
                "تسلط کامل بر قوانین ملکی و ثبتی ایران",
                "وکیل رسمی فدراسیون هاکی و شرکت ستاره ایران",
                "مدرس دانشگاه و پژوهشگر دوره دکتری حقوق",
                "پاسخگویی شخصی به موکل در تمام مراحل پرونده",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-gold mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: GraduationCap, t: "دانشجوی دکتری حقوق", d: "پژوهشگر و مدرس دانشگاه" },
              { icon: Award, t: "پروانه ۲۳۷۶۲", d: "کانون وکلای مرکز" },
              { icon: Calendar, t: "+۹ سال تجربه", d: "از سال ۱۳۸۸" },
              { icon: Scale, t: "وکیل پایه یک", d: "دادگستری" },
            ].map((b) => (
              <div
                key={b.t}
                className="p-6 rounded-2xl bg-background border border-border/50 hover:border-gold/40 transition-colors"
              >
                <b.icon className="h-8 w-8 text-gold mb-3" />
                <p className="font-bold text-sm mb-1">{b.t}</p>
                <p className="text-xs text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-surface p-10 md:p-16 text-center">
          <div className="absolute inset-0 glow-orb opacity-50" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">آماده‌اید پرونده خود را به ما بسپارید؟</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              همین حالا با ما تماس بگیرید و از مشاوره تخصصی بهره‌مند شوید.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:09124130223"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full gold-gradient text-primary-foreground font-bold shadow-gold hover:scale-105 transition-transform"
              >
                <Phone className="h-4 w-4" /> <span dir="ltr">۰۹۱۲ ۴۱۳ ۰۲۲۳</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border bg-background hover:bg-surface font-bold"
              >
                <MapPin className="h-4 w-4" /> آدرس دفتر
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}