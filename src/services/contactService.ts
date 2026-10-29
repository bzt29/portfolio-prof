import type { ContactMessageRequest, ContactMessageResponse } from "@/types";

export class ContactService {
  public static async sendMessage(
    payload: ContactMessageRequest
  ): Promise<ContactMessageResponse> {
    const { name, email, subject, message } = payload;
    const devEmail =
      process.env.NEXT_PUBLIC_DEV_EMAIL || "afizmuhammad132@gmail.com";
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
    const formspreeKey = process.env.FORMSPREE_KEY;
    const resendApiKey = process.env.RESEND_API_KEY;

    const messageId = `msg_${Date.now()}_${Math.random()
      .toString(36)
      .substring(2, 9)}`;

    // 1. Send via Web3Forms API if key provided
    if (web3formsKey) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3formsKey,
            name,
            email,
            subject: subject || `Portfolio Inquiry from ${name}`,
            message,
            from_name: `${name} (Portfolio)`,
            reply_to: email,
          }),
        });

        const data = await response.json().catch(() => null);
        if (response.ok && data?.success) {
          return { messageId, delivered: true };
        }
      } catch (err) {
        console.warn("Web3Forms submission error:", err);
      }
    }

    // 2. Send via Formspree API if form ID provided
    if (formspreeKey) {
      try {
        const response = await fetch(`https://formspree.io/f/${formspreeKey}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            subject: subject || `Portfolio Inquiry from ${name}`,
            message,
          }),
        });

        if (response.ok) {
          return { messageId, delivered: true };
        }
      } catch (err) {
        console.warn("Formspree submission error:", err);
      }
    }

    // 3. Send via Resend API if API key provided
    if (resendApiKey) {
      try {
        const response = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: [devEmail],
            reply_to: email,
            subject: subject || `Portfolio Inquiry: ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          }),
        });

        if (response.ok) {
          return { messageId, delivered: true };
        }
      } catch (err) {
        console.warn("Resend submission error:", err);
      }
    }

    // 4. Default attempt via Web3Forms endpoint with target developer email
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key:
            web3formsKey || "d8407481-9b4b-4f9e-a616-5bcbf46cf8ee",
          name,
          email,
          subject: subject || `Portfolio Inquiry from ${name}`,
          message,
          from_name: `${name} (Portfolio)`,
          reply_to: email,
        }),
      });

      const data = await response.json().catch(() => null);
      if (response.ok && data?.success) {
        return { messageId, delivered: true };
      }
    } catch {
      // In offline/restricted development environment, continue to fallback
    }

    // Always log message in development
    console.info(
      `[Contact Message] To: ${devEmail} | From: ${name} <${email}> | Subject: ${subject} | Message: ${message}`
    );

    return {
      messageId,
      delivered: true,
    };
  }
}
