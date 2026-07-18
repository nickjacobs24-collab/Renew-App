import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Privacy policy — Prism",
  description:
    "What we do with your information when you use prismhealthco.com. This policy covers the website only.",
};

export default function Privacy() {
  return (
    <LegalPage title="Privacy policy" updated="18 July 2026">
      <p>
        This policy explains what we do with your information when you use
        prismhealthco.com. It covers this website only. The Prism app will have
        its own privacy policy.
      </p>

      <h2>Who we are</h2>
      <p>
        This website is operated by Prism Digital Ventures Limited, a company
        registered in England and Wales. If you have any questions about this
        policy or your information, email us at{" "}
        <a href="mailto:hello@prismhealthco.com">hello@prismhealthco.com</a>.
      </p>

      <h2>What we collect</h2>
      <p>
        If you join our waitlist, we collect your email address. That is the
        only information the website asks you for. If you contact us, we also
        receive the information you include in your message.
      </p>
      <p>
        Like any website, our hosting provider also records basic technical
        information each time someone visits, including your IP address, browser
        type and the pages you view. This happens automatically and is used to
        run the site securely.
      </p>
      <p>
        We also use Vercel Web Analytics to count visits. It does not use
        cookies and gives us anonymous, aggregated information about visits to
        the website.
      </p>
      <p>This website sets no cookies.</p>

      <h2>Why we collect it</h2>
      <p>
        We use your email address for one thing: to let you know when Prism
        launches. We will not send you anything else, and we will not pass your
        address to anyone for marketing.
      </p>
      <p>
        We use the technical information and analytics to keep the site working
        and to understand how many people visit.
      </p>

      <h2>Our legal basis</h2>
      <p>
        We rely on your consent to email you about the launch. You gave that
        consent by entering your email and joining the waitlist, and you can
        withdraw it at any time by emailing us.
      </p>
      <p>
        We rely on our legitimate interests for hosting logs and basic
        analytics, so that we can run and improve the site.
      </p>

      <h2>Who we share it with</h2>
      <p>
        We use two services to run this website. Airtable stores the waitlist
        email addresses. Vercel hosts the website and provides the analytics.
        Both act on our instructions. We do not sell your information, and we do
        not share it with anyone else.
      </p>

      <h2>Where your information is stored</h2>
      <p>
        Where information is processed outside the United Kingdom, we use
        safeguards recognised under UK data protection law.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep your email until we have told you that Prism has launched. We
        then delete the waitlist record within 30 days, unless you separately
        choose to create a Prism account.
      </p>

      <h2>Your rights</h2>
      <p>
        You can ask us to show you what we hold about you, correct it, or delete
        it. You can withdraw your consent to marketing emails at any time, and
        you can object to our use of analytics based on legitimate interests.
        Email <a href="mailto:hello@prismhealthco.com">hello@prismhealthco.com</a>{" "}
        and we will action it.
      </p>
      <p>
        If you are unhappy with how we have handled your information, you can
        complain to the Information Commissioner&rsquo;s Office at{" "}
        <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
          ico.org.uk
        </a>
        .
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If we change this policy, we will update the date at the top of this
        page.
      </p>
    </LegalPage>
  );
}
