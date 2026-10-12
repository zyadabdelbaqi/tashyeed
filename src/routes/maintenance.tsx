import { createFileRoute } from "@tanstack/react-router";
import { Wrench, CircleCheck } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { BackLink } from "@/components/back-link";
import maintenanceImage from "@/assets/maintenance.webp";

export const Route = createFileRoute("/maintenance")({
  head: () => ({
    meta: [
      { title: "خدمات الصيانة والتشغيل للمنشآت في مكة المكرمة | شبكة التشييد" },
      { name: "description", content: "حلول صيانة وتشغيل متكاملة للمباني والمنشآت السكنية والتجارية في مكة المكرمة. صيانة دورية ووقائية، معالجة الأعطال الطارئة بأعلى كفاءة." },
    ],
  }),
  component: MaintenanceService,
});

function MaintenanceService() {
  return (
    <main className="service-page">
      <section className="service-hero pb-0">
        <div className="container">
          <BackLink />
          <Reveal>
            <div className="row align-items-center g-5 mt-4">
              <div className="col-lg-6">
                <span className="eyebrow"><Wrench size={15} /> الصيانة والتشغيل</span>
                <h1 className="display-4 fw-bold mb-4">كفاءة تشغيلية مستدامة وحماية لمنشأتك</h1>
                <p className="lead text-muted mb-5">
                  نضمن في شبكة التشييد استمرارية عمل منشأتك بكفاءة وأمان من خلال برامج صيانة وقائية وعلاجية متخصصة تشمل كافة الأنظمة الميكانيكية، الكهربائية، والسباكة في مكة المكرمة.
                </p>
                <div className="d-flex gap-3">
                  <Button variant="brand" asChild><a href="/#contact">احجز الخدمة الآن</a></Button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-hero-image rounded-4 overflow-hidden shadow-lg">
                  <img src={maintenanceImage} alt="خدمات الصيانة والتشغيل" className="img-fluid w-100" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <Reveal delay={100}>
            <h2 className="mb-4">ماذا تشمل خدمات الصيانة والتشغيل؟</h2>
            <div className="row g-4">
              {[
                "الصيانة الدورية والوقائية للأنظمة الكهربائية والإنارة",
                "صيانة شبكات السباكة وتمديدات المياه والصرف",
                "الفحص الشامل للوحات التوزيع والمفاتيح الرئيسية",
                "خدمات الصيانة الطارئة ومعالجة الأعطال على مدار الساعة",
                "إدارة وتشغيل وصيانة المرافق التجارية والمباني الإدارية",
                "تقارير فنية دورية لتقييم كفاءة المعدات وسلامتها",
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
