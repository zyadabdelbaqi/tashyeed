import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Droplets, CircleCheck } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import tankImage from "@/assets/water-tank.webp";

export const Route = createFileRoute("/tanks")({
  head: () => ({
    meta: [
      { title: "نظافة وعزل وتعقيم الخزانات في مكة المكرمة | شبكة التشيد" },
      { name: "description", content: "أفضل خدمات غسيل وتعقيم وعزل خزانات المياه في مكة المكرمة لضمان مياه نقية وصحية." },
    ],
  }),
  component: TanksService,
});

function TanksService() {
  return (
    <main className="service-page">
      <section className="service-hero pb-0">
        <div className="container">
          <Link to="/" className="back-link"><ArrowRight size={16} /> العودة للرئيسية</Link>
          <Reveal>
            <div className="row align-items-center g-5 mt-4">
              <div className="col-lg-6">
                <span className="eyebrow"><Droplets size={15} /> نظافة الخزانات</span>
                <h1 className="display-4 fw-bold mb-4">مياه نقية لصحة عائلتك</h1>
                <p className="lead text-muted mb-5">
                  خزانات المياه تحتاج إلى عناية دورية لضمان خلوها من الرواسب والبكتيريا. نحن في شبكة التشيد نوفر خدمة متكاملة لتنظيف، تعقيم، وعزل الخزانات في مكة المكرمة.
                </p>
                <div className="d-flex gap-3">
                  <Button variant="brand" asChild><a href="#contact">احجز الخدمة الآن</a></Button>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-hero-image rounded-4 overflow-hidden shadow-lg">
                  <img src={tankImage} alt="تنظيف وعزل الخزانات" className="img-fluid w-100" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <Reveal delay={100}>
            <h2 className="mb-4">خطوات العناية بالخزان</h2>
            <div className="row g-4">
              {["تفريغ وسحب المياه القديمة", "إزالة الرواسب والأوساخ المتراكمة", "غسيل الجدران والأرضيات بمواد متخصصة", "تعقيم الخزان لضمان خلوه من البكتيريا", "خدمات العزل المائي لمنع التسربات", "فحص دوري للتأكد من سلامة الخزان"].map((feature, i) => (
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
