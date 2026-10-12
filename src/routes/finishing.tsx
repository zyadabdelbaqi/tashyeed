import { createFileRoute } from "@tanstack/react-router";
import { Building2, CircleCheck } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { BackLink } from "@/components/back-link";
import finishingImage from "@/assets/finishing.webp";

export const Route = createFileRoute("/finishing")({
  head: () => ({
    meta: [
      { title: "أعمال التشطيب للمباني في مكة المكرمة | شبكة التشييد" },
      { name: "description", content: "تشطيبات معمارية داخلية وخارجية متكاملة للفلل والمباني والوحدات التجارية في مكة المكرمة بأعلى معايير الإتقان والفخامة." },
    ],
  }),
  component: FinishingService,
});

function FinishingService() {
  return (
    <main className="service-page">
      <section className="service-hero pb-0">
        <div className="container">
          <BackLink />
          <Reveal>
            <div className="row align-items-center g-5 mt-4">
              <div className="col-lg-6">
                <span className="eyebrow"><Building2 size={15} /> أعمال التشطيب للمباني</span>
                <h1 className="display-4 fw-bold mb-4">تشطيبات راقية تمنح مبناك لمسة من الفخامة</h1>
                <p className="lead text-muted mb-5">
                  نحول مخططاتك إلى واقع معماري مذهل مع خدمات التشطيب الشاملة في شبكة التشييد. ننفذ أعمال الدهانات، الديكورات، الأرضيات، والواجهات بمكة المكرمة بأعلى دقة واحترافية.
                </p>
                <div className="d-flex gap-3">
                  <Button variant="brand" asChild><a href="/#contact">احجز الخدمة الآن</a></Button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-hero-image rounded-4 overflow-hidden shadow-lg">
                  <img src={finishingImage} alt="أعمال التشطيب للمباني" className="img-fluid w-100" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <Reveal delay={100}>
            <h2 className="mb-4">ماذا تشمل خدمات التشطيب؟</h2>
            <div className="row g-4">
              {[
                "أعمال الدهانات الداخلية والخارجية والبروفايل والديكورات الجدارية",
                "تصميم وتركيب الأسقف المستعارة والجبس بورد والإنارة المخفية",
                "توريد وتركيب أرضيات الرخام والبورسلان والسيراميك والباركيه",
                "تركيب الأبواب والنوافذ والواجهات الزجاجية والألمنيوم",
                "أعمال التكسيات الخشبية وبديل الرخام وبديل الخشب الحديثة",
                "تشطيب متكامل بنظام تسليم المفتاح وفق جدول زمني دقيق",
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
