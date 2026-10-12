import { createFileRoute } from "@tanstack/react-router";
import { Tent, CircleCheck } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { BackLink } from "@/components/back-link";
import shadesImage from "@/assets/shades.webp";

export const Route = createFileRoute("/shades")({
  head: () => ({
    meta: [
      { title: "تركيب المظلات والسواتر في مكة المكرمة | شبكة التشييد" },
      { name: "description", content: "تصميم وتوريد وتركيب مظلات السيارات والحدائق وسواتر الفلل والمنشآت في مكة المكرمة بأجود خامات الحديد والأقمشة والخشب البلاستيكي." },
    ],
  }),
  component: ShadesService,
});

function ShadesService() {
  return (
    <main className="service-page">
      <section className="service-hero pb-0">
        <div className="container">
          <BackLink />
          <Reveal>
            <div className="row align-items-center g-5 mt-4">
              <div className="col-lg-6">
                <span className="eyebrow"><Tent size={15} /> المظلات والسواتر</span>
                <h1 className="display-4 fw-bold mb-4">حماية فائقة وخصوصية بتصاميم عصرية</h1>
                <p className="lead text-muted mb-5">
                  نصمم ونركب في شبكة التشييد أرقى أنواع المظلات والسواتر المقاومة لحرارة الشمس وعوامل الطقس في مكة المكرمة، لتوفير أقصى درجات الظل والخصوصية لمنازلكم ومواقفكم.
                </p>
                <div className="d-flex gap-3">
                  <Button variant="brand" asChild><a href="/#contact">احجز الخدمة الآن</a></Button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-hero-image rounded-4 overflow-hidden shadow-lg">
                  <img src={shadesImage} alt="تركيب المظلات والسواتر" className="img-fluid w-100" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <Reveal delay={100}>
            <h2 className="mb-4">ماذا تشمل خدمات المظلات والسواتر؟</h2>
            <div className="row g-4">
              {[
                "مظلات مواقف سيارات عصرية (قماش PVC، كابولي، هرمي)",
                "مظلات وبرجولات الحدائق والجلسات الخارجية والمسابح",
                "سواتر جدارية للفلل (حديد مجدول، شرائح، بلاستيك معالج)",
                "سواتر قماشية وخشبية توفر الحماية وحجب الرؤية التام",
                "هياكل حديدية معالجة ضد الصدأ والرياح بمواصفات أمان عالية",
                "ضمان شامل على جودة الخامات والتثبيت ومقاومة العوامل الجوية",
              ].map((feature, i) => (
                <div className="col-md-6 col-lg-4" key={i}>
                  <div className="d-flex align-items-center gap-2 p-3 bg-light rounded-3">
                    <CircleCheck className="text-primary flex-shrink-0" />
                    <span className="fw-medium">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
