
import { Building2, ScrollText, Users, FileCheck, Scale, BookOpen, ArrowLeft } from "lucide-react";



const services = [
  { icon: Building2, title: "دعاوی ملکی", desc: "از الزام به تنظیم سند رسمی و تحویل مبیع تا خلع ید، تخلیه و مشارکت در ساخت — تمامی پرونده‌های ملکی با تخصص ویژه پیگیری می‌شود.", items: ["الزام به تنظیم سند رسمی", "تحویل مبیع", "خلع ید و تخلیه", "مشارکت در ساخت"] },
  { icon: ScrollText, title: "قراردادها", desc: "تنظیم، بازنگری و تفسیر انواع قراردادهای حقوقی و تجاری با هدف پیشگیری از اختلاف.", items: ["قراردادهای خرید و فروش", "اجاره و رهن", "پیمانکاری", "مشارکت تجاری"] },
  { icon: Users, title: "شرکت‌ها و امور تجاری", desc: "ثبت، تغییرات، انحلال و دعاوی مرتبط با شرکت‌های تجاری.", items: ["ثبت شرکت", "تغییرات شرکت", "دعاوی شرکا", "انحلال و تصفیه"] },
  { icon: FileCheck, title: "امور ثبتی", desc: "اعتراض ثبتی، افراز و تفکیک املاک، اصلاح اسناد رسمی و سایر امور ثبتی.", items: ["اعتراض ثبتی", "افراز و تفکیک", "اصلاح سند", "ابطال سند"] },
  { icon: Scale, title: "دعاوی حقوقی عمومی", desc: "مطالبه وجه، چک و سفته، مسئولیت مدنی و دیگر دعاوی حقوقی.", items: ["مطالبه چک و سفته", "مسئولیت مدنی", "مطالبه خسارت", "اعسار"] },
  { icon: BookOpen, title: "مشاوره تخصصی", desc: "ارائه مشاوره دقیق پیش از طرح دعوا برای انتخاب بهترین استراتژی حقوقی.", items: ["مشاوره حضوری", "مشاوره تلفنی", "بررسی پرونده", "تحلیل ریسک"] },
];

function ServicesPage() {
  return (
    <>
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold text-sm font-semibold tracking-widest">خدمات تخصصی</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-4">خدمات حقوقی ما</h1>
          <div className="flex justify-center"><div className="h-1 w-20 gold-gradient rounded-full" /></div>
          <p className="text-muted-foreground mt-6">دفتر وکالت دکتر سعید سلطانی آذر طیف گسترده‌ای از خدمات حقوقی را با تخصص و تعهد ارائه می‌دهد.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-8 rounded-2xl bg-surface border border-border/50 hover:border-gold/50 transition-all">
              <div className="flex items-start gap-5">
                <div className="h-14 w-14 rounded-xl gold-gradient flex items-center justify-center shrink-0 shadow-gold">
                  <s.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {s.items.map((i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <ArrowLeft className="h-3 w-3 text-gold" />
                        <span>{i}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
export default ServicesPage
