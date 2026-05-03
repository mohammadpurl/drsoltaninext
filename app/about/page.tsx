// import { createFileRoute } from "@tanstack/react-router";
// import { SiteLayout } from "@/components/SiteLayout";
import { Award, GraduationCap, Calendar, BookOpen, Scale, Users } from "lucide-react";
import Image from "next/image";
import lawyerHero from "@/public/assets/lawyer-hero.jpg";

// export const Route = createFileRoute("/about")({
//   head: () => ({
//     meta: [
//       { title: "درباره دکتر سعید سلطانی آذر | وکیل پایه یک دادگستری" },
//       { name: "description", content: "بیوگرافی، سوابق تحصیلی و حرفه‌ای دکتر سعید سلطانی آذر، وکیل پایه یک دادگستری و عضو کانون وکلای مرکز." },
//       { property: "og:title", content: "درباره دکتر سعید سلطانی آذر" },
//       { property: "og:description", content: "وکیل پایه یک دادگستری با بیش از ۹ سال سابقه و عضو کانون وکلای مرکز." },
//     ],
//   }),
//   component: AboutPage,
// });

const timeline = [
  { year: "۱۳۸۸", icon: Scale, title: "اخذ پروانه وکالت", desc: "پذیرش در کانون وکلای دادگستری مرکز با شماره پروانه ۲۳۷۶۲" },
  { year: "۱۳۹۰+", icon: BookOpen, title: "آغاز دوره دکتری حقوق", desc: "ادامه تحصیل و پژوهش در مقطع دکتری حقوق" },
  { year: "۱۳۹۵+", icon: GraduationCap, title: "تدریس در دانشگاه", desc: "تدریس واحدهای حقوقی در دانشگاه‌های معتبر کشور" },
  { year: "اکنون", icon: Users, title: "وکیل سازمان‌های مطرح", desc: "وکیل فدراسیون هاکی و شرکت ستاره ایران (نمایندگی مرسدس بنز)" },
];

function AboutPage() {
  return (
    
      <section className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2">
            <div className="relative rounded-3xl overflow-hidden border-2 border-gold/30 shadow-elegant">
              {/* <img src={lawyerHero} alt="دکتر سعید سلطانی آذر" width={1024} height={1280} loading="lazy" className="w-full h-auto" /> */}
              <Image
                  src={lawyerHero}
                  alt="دکتر سعید سلطانی آذر، وکیل پایه یک دادگستری"
                  width={1024}
                  height={1280}
                  className="w-full h-auto object-cover"
                  priority
                />
            </div>
          </div>
          <div className="lg:col-span-3">
            <span className="text-gold text-sm font-semibold tracking-widest">درباره من</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6">دکتر سعید سلطانی آذر</h1>
            <p className="text-lg text-muted-foreground leading-loose mb-6">
              وکیل پایه یک دادگستری (شماره پروانه ۲۳۷۶۲) و عضو کانون وکلای دادگستری مرکز (تهران).
              با بیش از ۹ سال سابقه وکالت در حوزه‌های ملکی، قراردادها، شرکت‌ها و امور ثبتی،
              همواره در کنار موکلین خود ایستاده‌ام.
            </p>
            <p className="text-muted-foreground leading-loose mb-8">
              به‌عنوان پژوهشگر دوره دکتری حقوق و مدرس دانشگاه، تلاش می‌کنم با تکیه بر دانش روز
              و رویکردی علمی، بهترین راهکار حقوقی را برای هر پرونده ارائه دهم. اصل بنیادین کار من
              صداقت با موکل و پرهیز از دادن وعده‌های واهی است.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, label: "شماره پروانه", value: "۲۳۷۶۲" },
                { icon: Calendar, label: "سابقه", value: "+۹ سال" },
                { icon: GraduationCap, label: "تحصیلات", value: "دکتری حقوق" },
                { icon: Scale, label: "کانون", value: "مرکز (تهران)" },
              ].map((b) => (
                <div key={b.label} className="p-5 rounded-xl bg-surface border border-border/50">
                  <b.icon className="h-6 w-6 text-gold mb-2" />
                  <p className="text-xs text-muted-foreground">{b.label}</p>
                  <p className="font-bold mt-1">{b.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">مسیر حرفه‌ای</h2>
            <div className="flex justify-center"><div className="h-1 w-20 gold-gradient rounded-full" /></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((t) => (
              <div key={t.title} className="p-6 rounded-2xl bg-surface border border-border/50 hover:border-gold/50 transition">
                <div className="h-12 w-12 rounded-xl gold-gradient flex items-center justify-center mb-4">
                  <t.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <p className="text-gold text-sm font-bold mb-2">{t.year}</p>
                <h3 className="font-bold mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
   
  );
}
export default AboutPage