import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, city = "Noida", service = "Interior Design", budget = "Not decided", timeline = "1-3 months", property = "3 BHK", source = "Website Form" } = body;

    if (!phone || phone.length < 10) {
      return NextResponse.json({ success: false, error: "Valid 10-digit phone number is required" }, { status: 400 });
    }

    // Lead scoring model calculation
    let score = 10;
    if (["Rs. 15-25L", "Rs. 25L+"].includes(budget)) score += 30;
    if (["Greater Noida", "Noida", "Ghaziabad", "Delhi NCR"].includes(city)) score += 20;
    if (["Immediate", "Within 1 month", "1-3 months"].includes(timeline)) score += 20;
    if (service === "Interior Design") score += 15;
    if (service === "Modular Kitchen") score += 10;
    if (phone.length >= 10) score += 10;
    score = Math.min(score, 100);

    const leadRecord = {
      leadId: `ATS-LEAD-${Date.now().toString().slice(-6)}`,
      name: name || "Anonymous Lead",
      phone,
      city,
      service,
      property,
      budget,
      timeline,
      score,
      status: score >= 60 ? "Hot / Qualified" : "Warm",
      source,
      createdAt: new Date().toISOString()
    };

    console.log("[ATS CRM LEAD CAPTURED]", leadRecord);

    return NextResponse.json({
      success: true,
      message: "Enquiry received successfully. Our team will contact you within 1 hour.",
      leadId: leadRecord.leadId,
      score: leadRecord.score
    });
  } catch (error) {
    console.error("[ATS API ENQUIRY ERROR]", error);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
