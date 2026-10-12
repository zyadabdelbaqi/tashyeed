import { useState, type FormEvent } from "react";
import { Copy, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export const serviceNames = ["النظافة العامة", "مكافحة الحشرات", "نظافة وعزل وتعقيم الخزانات", "أعمال المقاولات العامة", "الصيانة والتشغيل", "التبريد والتكييف", "التشطيب للمباني", "المظلات والسواتر"];

export function BookingDialog({ open, onOpenChange, service }: { open: boolean; onOpenChange: (open: boolean) => void; service: string }) {
  function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    const text = `السلام عليكم، أود طلب خدمة من شبكة التشيد\n\nالاسم: ${data.get("name")}\nرقم الجوال: ${data.get("phone")}\nالخدمة المطلوبة: ${data.get("service")}\nالتفاصيل: ${data.get("details") || "لا يوجد"}`;
    
    const whatsappUrl = `https://wa.me/966547405858?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
    
    onOpenChange(false);
  }

  return <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="booking-dialog">
      <DialogTitle>خطوة أقرب إلى مكان أنظف</DialogTitle>
      <DialogDescription className="text-right">اختر الخدمة وأضف تفاصيل طلبك، وسيتم تحويلك مباشرة للواتساب لتأكيد الحجز.</DialogDescription>
      <form className="booking-form" onSubmit={submitRequest}>
        <label>الاسم الكامل<input name="name" autoComplete="name" required placeholder="اكتب اسمك" maxLength={100} /></label>
        <label>رقم الجوال<input name="phone" type="tel" autoComplete="tel" required placeholder="05XXXXXXXX" dir="ltr" maxLength={25} /></label>
        <label>الخدمة المطلوبة<select name="service" defaultValue={service}>{serviceNames.map(name => <option key={name}>{name}</option>)}</select></label>
        <label>تفاصيل إضافية<textarea name="details" rows={3} placeholder="نوع المكان وأي تفاصيل تهمك..." maxLength={1000} /></label>
        <Button variant="brand" type="submit">إرسال عبر واتساب <ArrowLeft /></Button>
      </form>
    </DialogContent>
  </Dialog>;
}