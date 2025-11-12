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
                <div style="font-family: system-ui, -apple-system, sans-serif; background: #f9fafb; padding: 24px; border-radius: 12px;">
                  <h2 style="color:#111; margin-bottom: 12px;">Welcome to Renew</h2>
                  <p style="margin-bottom: 20px;">Use the link below to sign in securely:</p>
                  <a href="${url}"
                    style="display:inline-block; background:#2563eb; color:white; padding:10px 18px; border-radius:8px; text-decoration:none; font-weight:600;">
                    Sign in to Renew
                  </a>
                  <p style="margin-top:24px; font-size:13px; color:#555;">
                    If you did not request this, you can ignore it.
                  </p>
                </div>
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

    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
  ],

  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: "/signin",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };