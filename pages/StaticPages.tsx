
import React from 'react';
import { ArrowLeft } from 'lucide-react';

export const PageLayout = ({ title, children, onBack }: any) => (
  <div className="min-h-screen bg-[#F9F9F7] pt-32 px-6 pb-24">
    <div className="max-w-3xl mx-auto">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-[#FF6B00] mb-12 transition-colors"
      >
        <ArrowLeft size={16} /> Back
      </button>
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-[#111]">{title}</h1>
      <div className="prose prose-lg prose-gray">
        {children}
      </div>
    </div>
  </div>
);

export const LegalPage = ({ onBack }: any) => (
  <PageLayout title="Terms of Service" onBack={onBack}>
    <p className="text-sm text-gray-500 mb-8">Last updated: 11/21/2025</p>

    <h3 className="text-xl font-bold mt-8 mb-4">1. Acceptance of Terms</h3>
    <p>By accessing or using the Rise Alarm website, the Rise Alarm mobile application, or the Rise Alarm Pod device (collectively, "Services"), you agree to these Terms of Service. If you do not agree, do not use the Services.</p>

    <h3 className="text-xl font-bold mt-8 mb-4">2. Description of the Service</h3>
    <p>Rise Alarm provides a mobile alarm application paired with a physical device designed to help users wake up on time by requiring physical interaction to dismiss alarms. We may update, improve, or modify the Services at any time.</p>

    <h3 className="text-xl font-bold mt-8 mb-4">3. Eligibility</h3>
    <p>You must be at least 13 years old (or the minimum required age in your country) to use Rise Alarm. By using the Services, you confirm that you meet this requirement.</p>

    <h3 className="text-xl font-bold mt-8 mb-4">4. User Accounts</h3>
    <p>To use certain features, you may need to create an account. You agree to: provide accurate information, keep your login credentials secure, and notify us if you believe your account has been compromised. We reserve the right to suspend or delete accounts that violate these Terms.</p>

    <h3 className="text-xl font-bold mt-8 mb-4">5. Acceptable Use</h3>
    <p>You agree not to: use Rise Alarm for unlawful or harmful activities; attempt to reverse engineer, copy, or resell any part of the Services; interfere with or disrupt the platform; or use the Services to harm or harass others.</p>

    <h3 className="text-xl font-bold mt-8 mb-4">6. Hardware Use (Rise Alarm Pod)</h3>
    <p>If you purchase or receive a Rise Alarm Pod: You agree to use it safely and responsibly. Rise Alarm is not responsible for injuries or damage resulting from improper use. Unauthorized modification or misuse voids any warranties.</p>

    <h3 className="text-xl font-bold mt-8 mb-4">7. Payments & Purchases</h3>
    <p>If you purchase a Rise Alarm Pod or any subscription: All prices are listed at checkout. You agree to provide accurate billing information. Refunds, if offered, follow our posted refund policy. Subscriptions may automatically renew unless canceled in your account settings.</p>

    <h3 className="text-xl font-bold mt-8 mb-4">8. Intellectual Property</h3>
    <p>All content, branding, design, software, and related materials are owned by Rise Alarm and protected by law. You may not reuse, copy, or distribute our materials without permission.</p>

    <h3 className="text-xl font-bold mt-8 mb-4">9. Disclaimer of Warranties</h3>
    <p>Rise Alarm provides its Services "as is". We make no guarantees about: Wake-up results, Accuracy or availability of the app, Compatibility with all devices. Use at your own risk.</p>

    <h3 className="text-xl font-bold mt-8 mb-4">10. Limitation of Liability</h3>
    <p>To the fullest extent permitted by law, Rise Alarm is not liable for: Losses caused by inability to wake up, Missed alarms or missed obligations, Damages from misuse of the device or app, Indirect, incidental, or consequential damages. Your maximum remedy is the amount you paid us in the last 12 months.</p>

    <h3 className="text-xl font-bold mt-8 mb-4">11. Changes to These Terms</h3>
    <p>We may update these Terms at any time. Updates take effect when posted on our website. Continued use of the Services means you accept the new Terms.</p>

    <h3 className="text-xl font-bold mt-8 mb-4">12. Contact</h3>
    <p>For questions or support: support@risedaily.app</p>
  </PageLayout>
);

export const PrivacyPage = ({ onBack }: any) => (
  <PageLayout title="Privacy Policy" onBack={onBack}>
    <p className="text-sm text-gray-500 mb-8">Last updated: 11/21/2025</p>

    <h3 className="text-xl font-bold mt-8 mb-4">1. Information We Collect</h3>
    <p>We collect the following types of information when you use the Rise Alarm app or Rise Alarm Pod:</p>
    <ul className="list-disc pl-6 mb-4">
        <li><strong>Information You Provide:</strong> Name and email when creating an account, Payment details (processed securely by third-party providers), Alarm settings and wake-up preferences, Communications with our support team.</li>
        <li><strong>Automatically Collected Information:</strong> Device type, operating system, app version, Usage data (e.g., alarm triggers, interactions), Cookies and analytics, IP address and browser information when visiting our site.</li>
        <li><strong>Rise Alarm Pod Data:</strong> Tap interactions, Device pairing and identification information, Bluetooth or NFC connection logs. We do not collect audio, video, or biometric data.</li>
    </ul>

    <h3 className="text-xl font-bold mt-8 mb-4">2. How We Use Your Information</h3>
    <p>We use your data to: Operate and improve the Rise Alarm app and Rise Alarm Pod, Process orders and payments, Send important notifications, Provide customer support, Analyze usage for performance. We do not sell your personal information.</p>

    <h3 className="text-xl font-bold mt-8 mb-4">3. Sharing of Information</h3>
    <p>We may share data with: Payment processors, Email and analytics providers, Cloud hosting partners. All partners must protect your information and use it only for service-related purposes. We may also disclose information if required by law.</p>

    <h3 className="text-xl font-bold mt-8 mb-4">4. Cookies & Tracking</h3>
    <p>We use cookies and similar technologies to: Remember your preferences, Improve reliability, Analyze website performance. You may control cookie settings through your browser.</p>

    <h3 className="text-xl font-bold mt-8 mb-4">5. Data Retention</h3>
    <p>We keep data only as long as necessary to operate the Services or comply with legal obligations. You may request deletion at any time.</p>

    <h3 className="text-xl font-bold mt-8 mb-4">6. Your Rights</h3>
    <p>Depending on your region, you may have the right to: Access your information, Request deletion, Correct inaccurate data, Opt out of marketing communications. To make a request, email privacy@risedaily.app.</p>

    <h3 className="text-xl font-bold mt-8 mb-4">7. Data Security</h3>
    <p>We use encryption, secure servers, and industry-standard safeguards to protect your information. However, no data transmission method is 100% secure.</p>

    <h3 className="text-xl font-bold mt-8 mb-4">8. Children's Privacy</h3>
    <p>We do not knowingly collect personal information from children under 13. If we learn we have such data, we will delete it promptly.</p>

    <h3 className="text-xl font-bold mt-8 mb-4">9. Third-Party Links</h3>
    <p>The Rise Alarm website or app may link to external sites. We are not responsible for their content or privacy practices.</p>

    <h3 className="text-xl font-bold mt-8 mb-4">10. Changes to This Policy</h3>
    <p>We may update this Privacy Policy. Significant changes will be communicated through the app or website.</p>

    <h3 className="text-xl font-bold mt-8 mb-4">11. Contact</h3>
    <p>For privacy questions: privacy@risedaily.app</p>
  </PageLayout>
);

export const ContactPage = ({ onBack }: any) => (
  <PageLayout title="Contact" onBack={onBack}>
    <div className="grid gap-8">
      <div className="bg-white p-8 rounded-2xl border border-gray-200">
        <h3 className="font-bold text-xl mb-2">Support</h3>
        <p className="text-gray-500 mb-4">For technical issues with your pod.</p>
        <a href="mailto:support@risedaily.app" className="text-[#FF6B00] font-bold underline">support@risedaily.app</a>
      </div>
      <div className="bg-white p-8 rounded-2xl border border-gray-200">
        <h3 className="font-bold text-xl mb-2">Privacy</h3>
        <p className="text-gray-500 mb-4">For privacy related inquiries.</p>
        <a href="mailto:privacy@risedaily.app" className="text-[#FF6B00] font-bold underline">privacy@risedaily.app</a>
      </div>
    </div>
  </PageLayout>
);
