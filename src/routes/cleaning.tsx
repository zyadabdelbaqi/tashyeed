import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, CircleCheck } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { BackLink } from "@/components/back-link";
import heroImage from "@/assets/cleaning-hero.webp";

export const Route = createFileRoute("/cleaning")({
  head: () => ({
    meta: [
      { title: "خدمات النظافة العامة في مكة المكرمة | شبكة التشيد" },
      { name: "description", content: "نقدم خدمات النظافة العامة الشاملة للمنازل، الفلل، والمكاتب في مكة المكرمة بأعلى معايير الجودة وأفضل المعدات." },
    ],
  }),
  component: CleaningService,
});

function CleaningService() {
  return (
    <main className="service-page">
      <section className="service-hero pb-0">
        <div className="container">
          <BackLink />
          <Reveal>
            <div className="row align-items-center g-5 mt-4">
              <div className="col-lg-6">
                <span className="eyebrow"><Sparkles size={15} /> النظافة العامة</span>
                <h1 className="display-4 fw-bold mb-4">نظافة شاملة تعيد لمكانك بريقه</h1>
                <p className="lead text-muted mb-5">
                  نحن في شبكة التشيد ندرك أهمية البيئة النظيفة لصحتك وراحتك. نقدم خدمات نظافة شاملة تغطي كل زاوية في منزلك أو مقر عملك في مكة المكرمة.
                </p>
                <div className="d-flex gap-3">
                  <Button variant="brand" asChild><a href="#contact">احجز الخدمة الآن</a></Button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-hero-image rounded-4 overflow-hidden shadow-lg">
                  <img src={heroImage} alt="خدمات النظافة العامة" className="img-fluid w-100" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <Reveal delay={100}>
            <h2 className="mb-4">ماذا تشمل خدمتنا؟</h2>
            <div className="row g-4">
              {["تنظيف وتلميع الأرضيات", "غسيل السجاد والموكيت", "تنظيف النوافذ والواجهات الزجاجية", "تعقيم الحمامات والمطابخ", "إزالة الغبار والأتربة من الأثاث", "تعطير المكان بروائح منعشة"].map((feature, i) => (
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
