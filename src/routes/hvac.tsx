import { createFileRoute } from "@tanstack/react-router";
import { Wind, CircleCheck } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { BackLink } from "@/components/back-link";
import hvacImage from "@/assets/hvac.webp";

export const Route = createFileRoute("/hvac")({
  head: () => ({
    meta: [
      { title: "خدمات التبريد والتكييف في مكة المكرمة | شبكة التشييد" },
      { name: "description", content: "توريد وتركيب وصيانة أنظمة التكييف المركزي والاسبليت والمخفي في مكة المكرمة. صيانة دورية، شحن فريون، وضمان معتمد لأعلى كفاءة تبريد." },
    ],
  }),
  component: HvacService,
});

function HvacService() {
  return (
    <main className="service-page">
      <section className="service-hero pb-0">
        <div className="container">
          <BackLink />
          <Reveal>
            <div className="row align-items-center g-5 mt-4">
              <div className="col-lg-6">
                <span className="eyebrow"><Wind size={15} /> التبريد والتكييف</span>
                <h1 className="display-4 fw-bold mb-4">أجواء مثالية وتبريد فائق بأعلى كفاءة طاقة</h1>
                <p className="lead text-muted mb-5">
                  نوفر في شبكة التشييد حلول تكييف وتبريد متكاملة تناسب طقس مكة المكرمة، من التصميم والتركيب وحتى الصيانة الدورية لأنظمة التكييف المركزي، الكاسيت، والاسبليت للمنازل والمشاريع.
                </p>
                <div className="d-flex gap-3">
                  <Button variant="brand" asChild><a href="/#contact">احجز الخدمة الآن</a></Button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-hero-image rounded-4 overflow-hidden shadow-lg">
                  <img src={hvacImage} alt="خدمات التبريد والتكييف" className="img-fluid w-100" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <Reveal delay={100}>
            <h2 className="mb-4">ماذا تشمل خدمات التبريد والتكييف؟</h2>
            <div className="row g-4">
              {[
                "توريد وتركيب أنظمة التكييف المركزي، الكونسيلد، والاسبليت",
                "الصيانة الدورية الشاملة وتنظيف الفلاتر ومجاري الهواء (الدكت)",
                "فحص ضغط الغاز وشحن الفريون بمواد أصلية عالية الجودة",
                "معالجة تسريب المياه وأعطال لوحات التحكم الإلكترونية",
                "عقود صيانة دورية للشركات، الفنادق، المساجد، والمجمعات السكنية",
                "قطع غيار أصلية مع ضمان على قطع الغيار وجودة التركيب",
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
