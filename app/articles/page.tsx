import React from 'react'
import { Calendar, ArrowLeft } from "lucide-react";

const page2 = () => {
    const articles = [
        { title: "الزام به تنظیم سند رسمی؛ راهکارها و نکات کلیدی", date: "۱۴۰۴/۰۲/۱۵", excerpt: "بررسی شرایط طرح دعوای الزام به تنظیم سند رسمی و مدارک مورد نیاز برای موفقیت در پرونده." },
        { title: "تحویل مبیع در معاملات ملکی", date: "۱۴۰۴/۰۲/۰۸", excerpt: "تعهدات فروشنده در تحویل ملک و راه‌های قانونی پیگیری در صورت استنکاف." },
        { title: "مشارکت در ساخت؛ نکات حقوقی پیش از امضا", date: "۱۴۰۴/۰۱/۲۸", excerpt: "مهم‌ترین بندهایی که باید پیش از امضای قرارداد مشارکت در ساخت بررسی شوند." },
        { title: "وصول چک برگشتی از طریق دادگاه", date: "۱۴۰۴/۰۱/۲۰", excerpt: "روند قانونی وصول وجه چک برگشتی و تفاوت دعوای حقوقی و کیفری." },
        { title: "قرارداد اجاره؛ حقوق موجر و مستأجر", date: "۱۴۰۴/۰۱/۱۰", excerpt: "بررسی تخصصی حقوق و تکالیف طرفین قرارداد اجاره طبق قانون روابط موجر و مستأجر." },
        { title: "اعتراض ثبتی و مراحل قانونی آن", date: "۱۴۰۳/۱۲/۲۵", excerpt: "نحوه طرح اعتراض ثبتی و مهلت‌های قانونی برای حفظ حقوق مالکانه." },
      ];

    return (
        <>
          <section className="container mx-auto px-6 py-20">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-gold text-sm font-semibold tracking-widest">دانش حقوقی</span>
              <h1 className="text-4xl md:text-6xl font-bold mt-3 mb-4">مقالات تخصصی</h1>
              <div className="flex justify-center"><div className="h-1 w-20 gold-gradient rounded-full" /></div>
              <p className="text-muted-foreground mt-6">با مطالعه مقالات تخصصی، با حقوق خود بیشتر آشنا شوید.</p>
            </div>
    
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((a) => (
                <article key={a.title} className="group p-7 rounded-2xl bg-surface border border-border/50 hover:border-gold/50 transition-all hover:-translate-y-1 cursor-pointer">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                    <Calendar className="h-3.5 w-3.5 text-gold" />
                    <span>{a.date}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-gold transition-colors leading-relaxed">{a.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{a.excerpt}</p>
                  <div className="flex items-center gap-2 text-gold text-sm font-semibold">
                    مطالعه بیشتر <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  </div>
                </article>
              ))}
            </div>
          </section>
        </>
      );
  
}

export default page2