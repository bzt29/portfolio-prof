import { NextRequest, NextResponse } from "next/server";
import { ContactService } from "@/services/contactService";
import { validateEmail, validateRequired } from "@/utils/validation";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!validateRequired(name)) {
      return NextResponse.json(
        { success: false, error: "Name is required" },
        { status: 400 }
      );
    }

    if (!validateEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Valid email is required" },
        { status: 400 }
      );
    }

    if (!validateRequired(message)) {
      return NextResponse.json(
        { success: false, error: "Message is required" },
        { status: 400 }
      );
    }

    const result = await ContactService.sendMessage({
      name,
      email,
      subject: body.subject || "Portfolio Contact Inquiry",
      message,
    });

    return NextResponse.json({
      success: true,
      message: "Message received successfully",
      data: result,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Internal server error",
      },
      { status: 500 }
    );
  }
}
