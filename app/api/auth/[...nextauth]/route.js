import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions = {
  adapter: PrismaAdapter(prisma),

  providers: [
    EmailProvider({
      // NextAuth requires this block even if we override sending
      server: {
        host: "localhost",
        port: 587,
        auth: {
          user: "placeholder",
          pass: "placeholder",
        },
      },

      async sendVerificationRequest({ identifier, url }) {
        console.log("MailerSend: sendVerificationRequest triggered");
        console.log("To:", identifier);
        console.log("URL:", url);

        try {
          const response = await fetch("https://api.mailersend.com/v1/email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.MAILERSEND_API_KEY}`,
            },
            body: JSON.stringify({
              from: {
                email: process.env.EMAIL_FROM,
                name: "Renew",
              },
              to: [{ email: identifier }],
              subject: "Sign in to Renew",
html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; background-color: #ffffff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);">
          
          <!-- Header -->
          <tr>
            <td style="padding: 64px 48px 48px 48px; text-align: center; background: linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(4, 120, 87, 0.25) 100%); backdrop-filter: blur(10px);">
              <div style="display: inline-block; padding: 12px 24px; background-color: rgba(255, 255, 255, 0.9); border-radius: 100px; margin-bottom: 24px; backdrop-filter: blur(10px); border: 1px solid rgba(255, 255, 255, 0.3);">
                <span style="font-size: 15px; font-weight: 600; color: #047857; letter-spacing: 0.5px;">
                  RENEW
                </span>
              </div>
              
              <h1 style="margin: 0 0 16px 0; font-size: 36px; font-weight: 700; color: #0f172a; letter-spacing: -1px; line-height: 1.1;">
                Your secure link<br/>is ready
              </h1>
              
              <p style="margin: 0; font-size: 15px; line-height: 1.5; color: #475569; font-weight: 400;">
                Access your personalized health recommendations
              </p>
            </td>
          </tr>
          
          <!-- Body -->
          <tr>
            <td style="padding: 48px 48px 40px 48px;">
              
              <!-- Button -->
              <table cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                <tr>
                  <td style="background: #1a1a1a; border-radius: 14px; text-align: center; box-shadow: 0 6px 24px rgba(0, 0, 0, 0.2);">
                    <a href="${url}" 
                       style="display: inline-block; padding: 16px 36px; font-size: 16px; font-weight: 600; color: #ffffff; text-decoration: none; letter-spacing: -0.3px;">
                      Sign in to Renew
                    </a>
                  </td>
                </tr>
              </table>
              
              <!-- Two-column info boxes -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 32px;">
                <tr>
                  <td width="48%" style="padding: 18px; background-color: #f8fafc; border-radius: 12px; vertical-align: top;">
                    <div style="font-size: 22px; margin-bottom: 6px;">⚡</div>
                    <p style="margin: 0 0 3px 0; font-size: 14px; font-weight: 600; color: #0f172a;">
                      Quick Access
                    </p>
                    <p style="margin: 0; font-size: 12px; color: #64748b; line-height: 1.4;">
                      One click to your results
                    </p>
                  </td>
                  <td width="4%"></td>
                  <td width="48%" style="padding: 18px; background-color: #f8fafc; border-radius: 12px; vertical-align: top;">
                    <div style="font-size: 22px; margin-bottom: 6px;">🔒</div>
                    <p style="margin: 0 0 3px 0; font-size: 14px; font-weight: 600; color: #0f172a;">
                      Secure & Private
                    </p>
                    <p style="margin: 0; font-size: 12px; color: #64748b; line-height: 1.4;">
                      Expires in 10 minutes
                    </p>
                  </td>
                </tr>
              </table>
              
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 40px 48px 56px 48px; text-align: center; background-color: #f8fafc;">
              <p style="margin: 0 0 12px 0; font-size: 14px; line-height: 1.6; color: #64748b;">
                Didn't request this link? You can safely ignore this email.<br/>
                Your account security hasn't been compromised.
              </p>
              
              <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e2e8f0;">
                <p style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600; color: #0f172a; letter-spacing: -0.3px;">
                  Lasting Health. Made Simple.
                </p>
                <p style="margin: 0; font-size: 13px; color: #94a3b8;">
                  © 2025 Renew · Evidence-based supplement guidance
                </p>
              </div>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`,
            }),
          });

          console.log("MailerSend response status:", response.status);

          if (!response.ok) {
            const errorBody = await response.text();
            console.error("MailerSend API error body:", errorBody);
            throw new Error(`MailerSend failed with status ${response.status}`);
          }

          console.log("MailerSend email sent successfully");
        } catch (error) {
          console.error("MailerSend send error:", error);
          throw new Error("MailerSend failed to send email");
        }
      },
    }),

    GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  }),
],

  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/signin",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };