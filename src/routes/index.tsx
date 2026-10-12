import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ArrowLeft, Bug, Building2, ChevronDown, CircleCheck, Clock3,
  Droplets, HardHat, Heart, Leaf, Mail, MapPin, Menu, MessageCircle,
  Phone, ShieldCheck, Sparkles, Star, Tent, Users, Wallet, Wind, Wrench, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { BookingDialog, serviceNames } from "@/components/booking-dialog";
import heroImage from "@/assets/cleaning-hero.webp";
import pestImage from "@/assets/pest-control.webp";
import tankImage from "@/assets/water-tank.webp";
import constructionImage from "@/assets/construction-hero.webp";
import generalContractingImage from "@/assets/general-contracting.webp";
import maintenanceImage from "@/assets/maintenance.webp";
import hvacImage from "@/assets/hvac.webp";
import finishingImage from "@/assets/finishing.webp";
import shadesImage from "@/assets/shades.webp";
import { HeroBanner } from "@/components/hero-banner";

export const Route = createFileRoute("/")(
{
 head: () => ({ meta: [
  { title: "شبكة التشييد للمقاولات العامة | مكة المكرمة" },
  { name: "description", content: "شبكة التشييد للمقاولات العامة - مكة المكرمة. نقدم خدمات المقاولات العامة والنظافة ومكافحة الحشرات والتبريد والتكييف والمظلات والسواتر." },
  { property: "og:title", content: "شبكة التشييد للمقاولات العامة" },
  { property: "og:description", content: "Construction Network for General Contracting — مكة المكرمة، طريق الهدا، مركز القاسم للأعمال." },
  { property: "og:type", content: "website" },
  { name: "twitter:card", content: "summary_large_image" },
 ] }),
 component: Index,
});

const navLinks = [
 { href: "#home", title: "الرئيسية" },
 { href: "#services", title: "خدماتنا" },
 { href: "#about", title: "من نحن" },
 { href: "#contact", title: "اتصل بنا" },
];

/* ─── قسم 1: النظافة والخدمات المنزلية ─── */
const cleaningSubServices = [
 { name: "النظافة العامة", image: heroImage, icon: Sparkles, description: "نظافة شاملة للمنازل والفلل والمكاتب، نعتني بأدق التفاصيل لتستمتع بمكان نظيف ومريح.", alt: "فريق تنظيف منزل", href: "/cleaning" },
 { name: "مكافحة الحشرات بأنواعها", image: pestImage, icon: Bug, description: "حلول متخصصة لمكافحة الحشرات والقوارض بمواد آمنة وأساليب مدروسة تحافظ على عائلتك.", alt: "متخصص مكافحة حشرات", href: "/pest-control" },
 { name: "غسيل وتنظيف الخزانات وأعمال العزل", image: tankImage, icon: Droplets, description: "تنظيف دقيق وعزل متقن وتعقيم للخزانات للمحافظة على جودة المياه وسلامتها.", alt: "فني خزان مياه", href: "/tanks" },
];

/* ─── قسم 2: المقاولات العامة والتشطيب ─── */
const constructionSubServices = [
 { name: "أعمال المقاولات العامة", image: generalContractingImage, icon: HardHat, description: "تنفيذ مشاريع البناء والإنشاء من التأسيس حتى الهياكل الكاملة وتسليم المفتاح بأعلى معايير الجودة.", alt: "أعمال المقاولات العامة والإنشاءات", href: "/general-contracting" },
 { name: "الصيانة والتشغيل", image: maintenanceImage, icon: Wrench, description: "صيانة شاملة للمنشآت السكنية والتجارية لضمان استمرارية العمل بأعلى معايير الكفاءة والأمان.", alt: "خدمات الصيانة والتشغيل للمنشآت", href: "/maintenance" },
 { name: "التبريد والتكييف", image: hvacImage, icon: Wind, description: "توريد وتركيب وصيانة أنظمة التكييف بكافة أنواعها لضمان كفاءة التبريد وتوفير الطاقة.", alt: "خدمات التبريد والتكييف", href: "/hvac" },
 { name: "أعمال التشطيب للمباني", image: finishingImage, icon: Building2, description: "تشطيبات معمارية داخلية وخارجية متكاملة للمباني والوحدات السكنية والتجارية بأعلى درجات الفخامة.", alt: "أعمال التشطيب للمباني", href: "/finishing" },
 { name: "المظلات والسواتر", image: shadesImage, icon: Tent, description: "تصميم وتركيب المظلات والسواتر الحديثة لحماية المكان وتوفير الخصوصية والعزل التام.", alt: "المظلات والسواتر", href: "/shades" },
];

const advantages = [
 { icon: Users,  title: "عمالة مدربة",          text: "فريق متخصص يعتني بالتفاصيل ويؤدي عمله باحترافية." },
 { icon: Leaf,   title: "مواد آمنة ومصرح بها",  text: "نختار مواد مناسبة تحافظ على سلامتك وسلامة المكان." },
 { icon: Clock3, title: "سرعة الاستجابة",       text: "نهتم بوقتك، ونحرص على الاستجابة والالتزام بالمواعيد." },
 { icon: Wallet, title: "أسعار تنافسية",        text: "خدمات عالية الجودة بأسعار واضحة تناسب احتياجك." },
];

const testimonials = [
 { name: "عبدالله السالم",  service: "النظافة العامة",    review: "فريق عمل محترف جداً، قاموا بتنظيف الفيلا بعد التشطيب بشكل ممتاز وفي وقت قياسي. شكراً لجهودكم." },
 { name: "محمد العتيبي",   service: "مكافحة الحشرات",    review: "كانت عندي مشكلة مزعجة مع النمل الأبيض، وبفضل الله ثم بشغلهم اختفت المشكلة تماماً والمواد كانت بدون رائحة." },
 { name: "خالد الشهري",    service: "أعمال التشطيب",     review: "تشطيب الشقة جاء بشكل رائع، الدقة في التنفيذ والتزامهم بالمواعيد جعل تجربتي معهم استثنائية." },
];

function Brand() {
 return <a className="brand" href="#home" aria-label="شبكة التشييد — الرئيسية">
  <img src="/logo/logo.webp" alt="شعار شبكة التشييد" className="brand-logo" width="180" height="auto" />
 </a>;
}

function Index() {
 const [menuOpen, setMenuOpen] = useState(false);
 const [bookingOpen, setBookingOpen] = useState(false);
 const [selectedService, setSelectedService] = useState(serviceNames[0] ?? "النظافة العامة");
 const [activeSection, setActiveSection] = useState("#home");
 const [isScrolled, setIsScrolled] = useState(false);
 const [openDropdown, setOpenDropdown] = useState<string | null>(null);
 const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
 const [emblaRef] = useEmblaCarousel({ loop: true, direction: "rtl", align: "start" });

 useEffect(() => {
  const handleClickOutside = (e: MouseEvent) => {
   const target = e.target as HTMLElement;
   if (!target.closest(".custom-nav-dropdown")) {
    setOpenDropdown(null);
   }
   if (menuOpen && !target.closest(".site-header")) {
    setMenuOpen(false);
    setOpenMobileDropdown(null);
   }
  };
  document.addEventListener("click", handleClickOutside);
  return () => document.removeEventListener("click", handleClickOutside);
 }, [menuOpen]);

 useEffect(() => {
  const handleScroll = () => {
   setIsScrolled(window.scrollY > 50);
   const sections = navLinks.map(link => document.querySelector(link.href) as HTMLElement).filter(Boolean);
   let current = "#home";
   for (const section of sections) {
    const rect = section.getBoundingClientRect();
    if (rect.top <= 100) current = "#" + section.id;
   }
   setActiveSection(current);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 function book(service = serviceNames[0] ?? "النظافة العامة") {
  setSelectedService(service); setBookingOpen(true); setMenuOpen(false);
 }

 return <>
  <header className={`site-header ${isScrolled ? "glass" : ""} ${menuOpen ? "menu-open" : ""}`}><div className="container nav-inner">
   <Brand />
   <nav className="desktop-nav" aria-label="القائمة الرئيسية">
    <a className={activeSection === "#home" ? "active" : ""} href="#home">الرئيسية</a>

    {/* قائمة منسدلة: المقاولات والتشطيب */}
    <div
     className="custom-nav-dropdown"
     onMouseEnter={() => setOpenDropdown("construction")}
     onMouseLeave={() => setOpenDropdown(null)}
    >
     <button
      type="button"
      className={`custom-dropdown-toggle ${openDropdown === "construction" ? "show" : ""}`}
      onClick={() => setOpenDropdown(openDropdown === "construction" ? null : "construction")}
      aria-expanded={openDropdown === "construction"}
     >
      المقاولات والتشطيب
      <ChevronDown size={14} className={`dropdown-chevron ${openDropdown === "construction" ? "rotate" : ""}`} />
     </button>
     <div className={`custom-dropdown-menu ${openDropdown === "construction" ? "show" : ""}`}>
      {constructionSubServices.map(svc => (
       <Link
        key={svc.name}
        to={svc.href}
        className="custom-dropdown-item"
        onClick={() => setOpenDropdown(null)}
       >
        <span className="dropdown-item-icon"><svc.icon size={16} /></span>
        <span className="dropdown-item-text">{svc.name}</span>
       </Link>
      ))}
     </div>
    </div>

    {/* قائمة منسدلة: النظافة والخدمات المنزلية */}
    <div
     className="custom-nav-dropdown"
     onMouseEnter={() => setOpenDropdown("cleaning")}
     onMouseLeave={() => setOpenDropdown(null)}
    >
     <button
      type="button"
      className={`custom-dropdown-toggle ${openDropdown === "cleaning" ? "show" : ""}`}
      onClick={() => setOpenDropdown(openDropdown === "cleaning" ? null : "cleaning")}
      aria-expanded={openDropdown === "cleaning"}
     >
      النظافة والخدمات المنزلية
      <ChevronDown size={14} className={`dropdown-chevron ${openDropdown === "cleaning" ? "rotate" : ""}`} />
     </button>
     <div className={`custom-dropdown-menu ${openDropdown === "cleaning" ? "show" : ""}`}>
      {cleaningSubServices.map(svc => (
       <Link
        key={svc.name}
        to={svc.href}
        className="custom-dropdown-item"
        onClick={() => setOpenDropdown(null)}
       >
        <span className="dropdown-item-icon cleaning-icon"><svc.icon size={16} /></span>
        <span className="dropdown-item-text">{svc.name}</span>
       </Link>
      ))}
     </div>
    </div>

    <a className={activeSection === "#about" ? "active" : ""} href="#about">من نحن</a>
    <a className={activeSection === "#contact" ? "active" : ""} href="#contact">اتصل بنا</a>
   </nav>
   <div className="nav-actions">
    <Button
     variant="ghost"
     size="icon"
     className="mobile-toggle"
     aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
     aria-expanded={menuOpen}
     aria-controls="mobile-nav"
     onClick={() => {
      setMenuOpen(!menuOpen);
      if (menuOpen) setOpenMobileDropdown(null);
     }}
    >
     {menuOpen ? <X /> : <Menu />}
    </Button>
   </div>
  </div>
  {menuOpen && <nav id="mobile-nav" className="mobile-nav" aria-label="قائمة الجوال">
   <a
    className={activeSection === "#home" ? "active" : ""}
    href="#home"
    onClick={() => { setMenuOpen(false); setOpenMobileDropdown(null); }}
   >
    الرئيسية
   </a>

   <div className="mobile-nav-group">
    <button
     type="button"
     className={`mobile-nav-toggle ${openMobileDropdown === "construction" ? "open" : ""}`}
     onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      setOpenMobileDropdown(openMobileDropdown === "construction" ? null : "construction");
     }}
     aria-expanded={openMobileDropdown === "construction"}
    >
     <span>المقاولات والتشطيب</span>
     <ChevronDown size={16} className={`dropdown-chevron ${openMobileDropdown === "construction" ? "rotate" : ""}`} />
    </button>
    {openMobileDropdown === "construction" && (
     <div className="mobile-submenu">
      {constructionSubServices.map(svc => (
       <Link
        key={svc.name}
        to={svc.href}
        onClick={() => { setMenuOpen(false); setOpenMobileDropdown(null); }}
        className="mobile-submenu-item"
       >
        <span className="mobile-submenu-icon"><svc.icon size={15} /></span>
        <span>{svc.name}</span>
       </Link>
      ))}
     </div>
    )}
   </div>

   <div className="mobile-nav-group">
    <button
     type="button"
     className={`mobile-nav-toggle ${openMobileDropdown === "cleaning" ? "open" : ""}`}
     onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      setOpenMobileDropdown(openMobileDropdown === "cleaning" ? null : "cleaning");
     }}
     aria-expanded={openMobileDropdown === "cleaning"}
    >
     <span>النظافة والخدمات المنزلية</span>
     <ChevronDown size={16} className={`dropdown-chevron ${openMobileDropdown === "cleaning" ? "rotate" : ""}`} />
    </button>
    {openMobileDropdown === "cleaning" && (
     <div className="mobile-submenu">
      {cleaningSubServices.map(svc => (
       <Link
        key={svc.name}
        to={svc.href}
        onClick={() => { setMenuOpen(false); setOpenMobileDropdown(null); }}
        className="mobile-submenu-item"
       >
        <span className="mobile-submenu-icon cleaning-icon"><svc.icon size={15} /></span>
        <span>{svc.name}</span>
       </Link>
      ))}
     </div>
    )}
   </div>

   <a
    className={activeSection === "#about" ? "active" : ""}
    href="#about"
    onClick={() => { setMenuOpen(false); setOpenMobileDropdown(null); }}
   >
    من نحن
   </a>
   <a
    className={activeSection === "#contact" ? "active" : ""}
    href="#contact"
    onClick={() => { setMenuOpen(false); setOpenMobileDropdown(null); }}
   >
    اتصل بنا
   </a>
  </nav>}
  </header>

  <main>
   <HeroBanner onBook={() => book()} />

   {/* شريط الثقة */}
   <div className="trust-strip"><div className="container"><div className="row g-0">
    {[
     { icon: ShieldCheck, title: "جودة يمكنك الوثوق بها", sub: "عناية تتجاوز التوقعات" },
     { icon: Users,       title: "فريق متخصص",           sub: "خبرة في كل خطوة" },
     { icon: Leaf,        title: "سلامتك أولويتنا",      sub: "مواد آمنة ومناسبة" },
     { icon: Clock3,      title: "نحترم وقتك",           sub: "التزام وسرعة في التنفيذ" },
    ].map((item, i) => (
     <div className="col-6 col-md-3" key={item.title}>
      <Reveal delay={i * 100}><div className="trust-item"><item.icon /><div><strong>{item.title}</strong><span>{item.sub}</span></div></div></Reveal>
     </div>
    ))}
   </div></div></div>

   {/* ═══════════════════════════════════════════
       الأقسام الرئيسية للخدمات
       ═══════════════════════════════════════════ */}
   <section id="services" className="divisions-section section-space" aria-labelledby="divisions-title">
    <div className="container">
     <Reveal>
      <div className="center-intro">
       <span className="eyebrow">أقسامنا الرئيسية</span>
       <h2 id="divisions-title" className="section-heading">شركة متكاملة الخدمات، تحت سقف واحد.</h2>
       <p className="section-description">نجمع بين خبرة المقاولات والتشطيب وخدمات النظافة المنزلية لنكون شريكك الشامل.</p>
      </div>
     </Reveal>

     {/* ─── القسم الأول: المقاولات ─── */}
     <Reveal delay={100} className="mb-4 mb-lg-5">
      <div className="division-block construction-division">
       <div className="division-header">
        <div className="division-header-icon"><HardHat /></div>
        <div>
         <h3 className="division-title">أعمال المقاولات العامة والتشطيب</h3>
        </div>
       </div>
       <div className="row g-3 justify-content-start construction-grid">
        {constructionSubServices.map((svc, i) => (
         <div className="col-sm-6 col-lg-4" key={svc.name}>
          <Reveal delay={i * 80}>
           <article className="sub-service-card construction-sub">
            {svc.image && (
             <div className="sub-service-img">
              <img src={svc.image} alt={svc.alt || svc.name} loading="lazy" />
             </div>
            )}
            <span className="sub-service-icon"><svc.icon /></span>
            <div>
             <h4>{svc.name}</h4>
             <p>{svc.description}</p>
            </div>
            <div className="sub-service-actions">
             {svc.href && (
              <Button variant="outline" className="sub-details" asChild>
               <Link to={svc.href}>التفاصيل</Link>
              </Button>
             )}
             <Button variant="outline" className="sub-request" onClick={() => book(svc.name)}>
              اطلب الخدمة <ArrowLeft size={14} />
             </Button>
            </div>
           </article>
          </Reveal>
         </div>
        ))}
       </div>

      </div>
     </Reveal>

     {/* ─── القسم الثاني: النظافة ─── */}
     <Reveal delay={150}>
      <div className="division-block cleaning-division">
       <div className="division-header">
        <div className="division-header-icon cleaning-icon"><ShieldCheck /></div>
        <div>
         <h3 className="division-title">النظافة العامة والخدمات المنزلية</h3>
        </div>
       </div>
       <div className="row g-3 justify-content-center">
        {cleaningSubServices.map((svc, i) => (
         <div className="col-sm-6 col-lg-4" key={svc.name}>
          <Reveal delay={i * 80}>
           <article className="sub-service-card cleaning-sub">
            <div className="sub-service-img">
             <img src={svc.image} alt={svc.alt} loading="lazy" />
            </div>
            <span className="sub-service-icon cleaning-sub-icon"><svc.icon /></span>
            <div>
             <h4>{svc.name}</h4>
             <p>{svc.description}</p>
            </div>
            <div className="sub-service-actions">
             <Button variant="outline" className="sub-details" asChild>
              <Link to={svc.href}>التفاصيل</Link>
             </Button>
             <Button variant="outline" className="sub-request" onClick={() => book(svc.name)}>
              اطلب الخدمة <ArrowLeft size={14} />
             </Button>
            </div>
           </article>
          </Reveal>
         </div>
        ))}
       </div>
      </div>
     </Reveal>
    </div>
   </section>

   {/* من نحن */}
   <section id="about" className="section-space" aria-labelledby="about-title"><div className="container"><div className="row align-items-center g-4">
    <div className="col-md-6"><Reveal direction="right"><div className="about-photo"><img src={constructionImage} alt="مشاريع شبكة التشييد" width={1920} height={1024} loading="lazy" /><div className="about-stamp"><HardHat /><div><strong>نبني بإتقان</strong><span>لأن راحتك تستحق الأفضل</span></div></div></div></Reveal></div>
    <div className="col-md-6 about-copy"><Reveal direction="left">
     <span className="eyebrow">من نحن</span>
     <h2 id="about-title" className="section-heading">شبكة التشييد للمقاولات العامة،<br />شريكك في كل خطوة.</h2>
     <p>شركة متخصصة في مكة المكرمة تجمع بين أعمال المقاولات الإنشائية الكاملة وخدمات النظافة العامة والمنزلية، بفريق متخصص وأساليب عمل مدروسة تحقق أعلى معايير الجودة.</p>
     <p>نؤمن أن المشاريع الناجحة تحتاج شريكاً يمتلك الخبرة والموثوقية، من التأسيس والبناء وحتى النظافة والصيانة — كل شيء في مكان واحد.</p>
     <div className="about-checks">
      {[
        "تنفيذ مشاريع في القطاع السكني والتجاري", 
        "نغطي كافة أحياء مكة المكرمة", 
        "ضمان جودة على كافة أعمالنا", 
        "فريق هندسي وفني متخصص"
      ].map(text => <span key={text}><CircleCheck />{text}</span>)}
     </div>
     <Button variant="brandOutline" onClick={() => book()}>تواصل معنا الآن <ArrowLeft /></Button>
    </Reveal></div>
   </div></div></section>

   {/* آراء العملاء */}
   <section className="testimonials section-space" aria-labelledby="testimonials-title"><div className="container">
    <Reveal><div className="center-intro"><span className="eyebrow">آراء عملائنا</span><h2 id="testimonials-title" className="section-heading">ثقتكم هي دافعنا الدائم.</h2><p className="section-description">نفخر بخدمة مئات العملاء في مكة المكرمة ونعتز بتقييماتهم.</p></div></Reveal>
    <div className="testimonial-carousel" ref={emblaRef}>
     <div className="testimonial-carousel-container">
      {testimonials.map((item, i) => (
       <div className="testimonial-slide" key={item.name}>
        <div className="testimonial-card">
         <div className="testimonial-stars">{[...Array(5)].map((_, j) => <Star key={j} className="star-icon" fill="currentColor" strokeWidth={0} />)}</div>
         <p className="testimonial-review">"{item.review}"</p>
         <div className="testimonial-author"><strong>{item.name}</strong><span>{item.service}</span></div>
        </div>
       </div>
      ))}
     </div>
    </div>
   </div></section>

   {/* لماذا نحن */}
   <section className="advantages" aria-labelledby="why-title"><div className="container">
    <Reveal><div className="center-intro"><span className="eyebrow">لماذا شبكة التشييد؟</span><h2 id="why-title" className="section-heading">الفرق في التفاصيل.</h2><p className="section-description">أسباب تجعلنا شريكاً تثق به في كل مرة.</p></div></Reveal>
    <div className="row g-4">{advantages.map((item, i) => <div className="col-6 col-md-3" key={item.title}><Reveal delay={i * 100} style={{height: '100%'}}><div className="advantage"><span className="advantage-icon"><item.icon size={25} /></span><h3>{item.title}</h3><p>{item.text}</p></div></Reveal></div>)}</div>
   </div></section>

   {/* شريط الإحصائيات (منقول هنا لمنع الزحمة في الأعلى) */}
   <section className="stats-section section-space"><div className="container">
    <div className="stats-grid">
     {[
       { value: "+500", label: "عميل سعيد" },
       { value: "+50", label: "مشروع منجز" },
       { value: "100%", label: "ضمان الجودة" },
       { value: "+5", label: "سنوات خبرة" },
     ].map((stat, i) => (
      <Reveal delay={i * 100} key={stat.label}>
       <div className="stat-card">
        <strong className="stat-value">{stat.value}</strong>
        <span className="stat-label">{stat.label}</span>
       </div>
      </Reveal>
     ))}
    </div>
   </div></section>

   {/* تواصل معنا */}
   <section id="contact" className="section-space"><div className="container">
    <Reveal><div className="contact-section-intro">
     <span className="contact-eyebrow">تواصل معنا</span>
     <h2 className="section-heading">نحن هنا لخدمتك</h2>
     <p className="section-description">تواصل معنا الآن واحصل على استشارة مجانية وعرض سعر خاص</p>
    </div></Reveal>

    <div className="row g-4 justify-content-center">
     <div className="col-md-6">
      <a href="tel:+966555426556" className="contact-card">
       <span className="contact-card-icon"><Phone /></span>
       <div className="contact-card-info">
        <span className="contact-card-title">اتصل بنا</span>
        <strong className="contact-card-value" dir="ltr">055 542 6556</strong>
        <span className="contact-card-subtitle" dir="ltr">054 525 4844</span>
       </div>
      </a>
     </div>
     <div className="col-md-6">
      <a href="https://wa.me/966555426556" target="_blank" rel="noreferrer" className="contact-card">
       <span className="contact-card-icon"><MessageCircle /></span>
       <div className="contact-card-info">
        <span className="contact-card-title">واتساب</span>
        <strong className="contact-card-value" dir="ltr">055 542 6556</strong>
       </div>
      </a>
     </div>
     <div className="col-md-6">
      <div className="contact-card">
       <span className="contact-card-icon"><MapPin /></span>
       <div className="contact-card-info">
        <span className="contact-card-title">العنوان</span>
        <strong className="contact-card-value">مكة المكرمة - طريق الهدا</strong>
        <span className="contact-card-subtitle">مركز القاسم للأعمال - العوالي</span>
       </div>
      </div>
     </div>
     <div className="col-md-6">
      <a href="mailto:shabakhltashieed@gmail.com" className="contact-card">
       <span className="contact-card-icon"><Mail /></span>
       <div className="contact-card-info">
        <span className="contact-card-title">البريد الإلكتروني</span>
        <strong className="contact-card-value">shabakhltashieed@gmail.com</strong>
       </div>
      </a>
     </div>
     <div className="col-12">
      <div className="contact-card full-width">
       <span className="contact-card-icon"><Building2 /></span>
       <div className="contact-card-info">
        <span className="contact-card-title">المركز الرئيسي</span>
        <strong className="contact-card-value">مكة المكرمة - طريق الهدا - مركز القاسم للأعمال - العوالي</strong>
        <span className="contact-card-subtitle" dir="ltr">Makkah - Al-Hada Road - Al-Qasim Business Center - Al-Awali</span>
       </div>
      </div>
     </div>
    </div>
   </div></section>
  </main>

  <footer className="footer"><div className="container"><div className="row g-4">
   <div className="col-lg-4"><Brand /><p className="footer-about">شبكة التشييد للمقاولات العامة — مكة المكرمة. نقدم خدمات المقاولات والنظافة ومكافحة الحشرات والتبريد والتكييف والمظلات والسواتر.</p></div>
   <div className="col-6 col-lg-2"><h3>روابط سريعة</h3><nav className="footer-links" aria-label="روابط التذييل">{navLinks.map(link => <a href={link.href} key={link.href}>{link.title}</a>)}</nav></div>
   <div className="col-6 col-lg-3"><h3>خدماتنا</h3><div className="footer-links">{serviceNames.map(name => <a href="#services" key={name}>{name}</a>)}</div></div>
   <div className="col-lg-3"><h3>تواصل معنا</h3><div className="footer-contact">
    <div><Phone /><span dir="ltr">055 542 6556</span></div>
    <div><Phone /><span dir="ltr">054 525 4844</span></div>
    <div><Mail /><span dir="ltr">shabakhltashieed@gmail.com</span></div>
    <div><MapPin /><address>مكة المكرمة - طريق الهدا، مركز القاسم للأعمال</address></div>
   </div></div>
  </div>
  <div className="footer-bottom">
   <span>© 2026 شبكة التشييد للمقاولات العامة. جميع الحقوق محفوظة.</span>
   <span>عناية بالمكان، واهتمام بالإنسان <Heart /></span>
  </div></div></footer>
  <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} service={selectedService} />
 </>;
}
