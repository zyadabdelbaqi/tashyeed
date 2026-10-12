import { createFileRoute } from "@tanstack/react-router";
import { Bug, CircleCheck } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { BackLink } from "@/components/back-link";
import pestImage from "@/assets/pest-control.webp";

export const Route = createFileRoute("/pest-control")({
  head: () => ({
    meta: [
      { title: "خدمات مكافحة الحشرات في مكة المكرمة | شبكة التشيد" },
      { name: "description", content: "نقضي على الحشرات والقوارض في منزلك أو منشأتك بمكة المكرمة باستخدام أحدث الطرق والمواد الآمنة بدون رائحة." },
    ],
  }),
  component: PestControlService,
});

function PestControlService() {
  return (
    <main className="service-page">
      <section className="service-hero pb-0">
        <div className="container">
          <BackLink />
          <Reveal>
            <div className="row align-items-center g-5 mt-4">
              <div className="col-lg-6">
                <span className="eyebrow"><Bug size={15} /> مكافحة الحشرات</span>
                <h1 className="display-4 fw-bold mb-4">حماية متكاملة لبيئة صحية وآمنة</h1>
                <p className="lead text-muted mb-5">
                  لا تدع الحشرات والقوارض تفسد راحتك. في شبكة التشيد، نقدم حلولاً جذرية لمكافحة الآفات باستخدام مواد آمنة ومصرح بها، لضمان بيئة خالية من الحشرات في مكة المكرمة.
                </p>
                <div className="d-flex gap-3">
                  <Button variant="brand" asChild><a href="#contact">احجز الخدمة الآن</a></Button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-hero-image rounded-4 overflow-hidden shadow-lg">
                  <img src={pestImage} alt="مكافحة الحشرات" className="img-fluid w-100" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <Reveal delay={100}>
            <h2 className="mb-4">مميزات الخدمة</h2>
            <div className="row g-4">
              {["مواد آمنة على الأطفال والحيوانات", "بدون رائحة أو حاجة لمغادرة المنزل", "مكافحة جميع أنواع الحشرات (صراصير، بق، نمل أبيض)", "مكافحة القوارض والفئران", "فريق عمل متخصص وخبير", "ضمان على الخدمة المقدمة"].map((feature, i) => (
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
