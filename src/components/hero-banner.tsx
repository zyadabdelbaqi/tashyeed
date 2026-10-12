import { ArrowLeft, CalendarDays, HardHat, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import constructionImage from "@/assets/construction-hero.webp";

export function HeroBanner({ onBook }: { onBook: () => void }) {
  const divisions = [
    {
      icon: HardHat,
      label: "أعمال المقاولات العامة",
      desc: "إنشاء • تشطيب • صيانة • تبريد • مظلات",
      href: "#construction",
      color: "#1B3A8F",
    },
    {
      icon: Home,
      label: "النظافة والخدمات المنزلية",
      desc: "نظافة • مكافحة حشرات • خزانات",
      href: "#services",
      color: "#C8102E",
    },
  ];

  return (
    <section id="home" className="ad-banner">
      <div className="ad-banner-image">
        <img src={constructionImage} alt="مشاريع شبكة التشييد للمقاولات العامة" />
      </div>
      <div className="ad-banner-content">
        <div className="ad-banner-top">
          <img src="/logo/logo.webp" alt="شبكة التشييد للمقاولات العامة" className="ad-banner-logo" />
          <div className="ad-banner-slogan">جودة تثق بها..<br/>وإتقان تراه</div>
        </div>

        <h1 className="ad-banner-title">
          <span className="text-blue">شبكة التشييد</span>
          <span className="text-green">للمقاولات العامة</span>
        </h1>
        <p className="ad-banner-subtitle">Tashyeed General Contracting</p>

        <p className="ad-banner-desc">
          شريكك الموثوق في مكة المكرمة لأعمال المقاولات والبناء والتشطيب والنظافة والخدمات المنزلية المتكاملة.
        </p>

        <div className="ad-banner-actions">
          <Button onClick={onBook} className="btn-book-green">
            احجز خدمتك الآن <CalendarDays className="ms-2" size={18} />
          </Button>
          <Button variant="outline" asChild className="btn-explore-outline">
            <a href="#services">تصفح خدماتنا <ArrowLeft className="ms-2" size={18} /></a>
          </Button>
        </div>

        <div className="ad-banner-divisions">
          {divisions.map(div => (
            <a href={div.href} className="division-badge" key={div.label} style={{'--div-color': div.color} as React.CSSProperties}>
              <div className="division-badge-icon"><div.icon color="white" /></div>
              <div>
                <strong>{div.label}</strong>
                <span>{div.desc}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
