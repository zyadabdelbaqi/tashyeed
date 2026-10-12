import { createFileRoute } from "@tanstack/react-router";
import { HardHat, CircleCheck } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { BackLink } from "@/components/back-link";
import contractingImage from "@/assets/general-contracting.webp";

export const Route = createFileRoute("/general-contracting")({
  head: () => ({
    meta: [
      { title: "أعمال المقاولات العامة في مكة المكرمة | شبكة التشييد" },
      { name: "description", content: "تنفيذ مشاريع البناء والإنشاء من التأسيس حتى الهياكل الكاملة وتسليم المفتاح بأعلى معايير الجودة والمواصفات الهندسية في مكة المكرمة." },
    ],
  }),
  component: GeneralContractingService,
});

function GeneralContractingService() {
  return (
    <main className="service-page">
      <section className="service-hero pb-0">
        <div className="container">
          <BackLink />
          <Reveal>
            <div className="row align-items-center g-5 mt-4">
              <div className="col-lg-6">
                <span className="eyebrow"><HardHat size={15} /> أعمال المقاولات العامة</span>
                <h1 className="display-4 fw-bold mb-4">بناء متين وتأسيس هندسي بمعايير عالمية</h1>
                <p className="lead text-muted mb-5">
                  نقدم في شبكة التشييد حلول مقاولات متكاملة تغطي كافة مراحل البناء من الحفر والأساسات وحتى الهيكل الخرساني وتسليم المفتاح، بإشراف هندسي دقيق وفريق عمل محترف في مكة المكرمة.
                </p>
                <div className="d-flex gap-3">
                  <Button variant="brand" asChild><a href="/#contact">احجز الخدمة الآن</a></Button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-hero-image rounded-4 overflow-hidden shadow-lg">
                  <img src={contractingImage} alt="أعمال المقاولات العامة" className="img-fluid w-100" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <Reveal delay={100}>
            <h2 className="mb-4">ماذا تشمل خدمات المقاولات العامة؟</h2>
            <div className="row g-4">
              {[
                "تنفيذ أعمال الحفر والردم والأساسات",
                "بناء الهياكل الخرسانية المسلحة (عظم)",
                "أعمال المباني والعزل المائي والحراري",
                "الإشراف الهندسي وإدارة المشاريع الميدانية",
                "توريد المواد الإنشائية المطابقة للمواصفات السعودية",
                "تسليم المشاريع وفق الجداول الزمنية المحددة",
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
