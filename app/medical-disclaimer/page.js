import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Medical disclaimer — Prism",
  description:
    "Prism is a consumer wellness app, not a medical device. It does not provide medical advice, diagnosis or treatment.",
};

export default function MedicalDisclaimer() {
  return (
    <LegalPage title="Medical disclaimer">
      <p>
        Prism is a consumer wellness app. It is not intended to be used as a
        medical device and does not provide medical advice, diagnosis or
        treatment.
      </p>
      <p>
        Prism uses health data recorded by your connected devices, together
        with information you choose to provide. The information shown is for
        general information and wellness purposes only. It is not based on a
        medical examination or a review of your medical history, and it is not
        a substitute for advice from a qualified healthcare professional.
      </p>
      <p>
        Prism can show how your health data changed after you started, stopped
        or changed a supplement. It cannot prove that the supplement caused the
        change. Other factors may affect your data, and the information shown
        depends on the accuracy and completeness of the data recorded by your
        devices and provided by you.
      </p>
      <p>
        Always speak to a doctor, pharmacist or other qualified healthcare
        professional before starting, stopping or changing any supplement, or
        before making decisions about your health based on information shown by
        Prism. This is particularly important if you are pregnant or
        breastfeeding, take medication or have a medical condition.
      </p>
      <p>
        Never disregard professional medical advice or delay seeking it because
        of information shown in the app or on this website.
      </p>
    </LegalPage>
  );
}
