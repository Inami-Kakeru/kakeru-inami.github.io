import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Helmet>
        <title>プライバシーポリシー | ぴあざさるうと</title>
        <meta name="description" content="ぴあざさるうとのプライバシーポリシーです。当店での個人情報の取り扱いについてご説明いたします。" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. 個人情報の取り扱いについて</h2>
        <p className="mb-4">
          ぴあざさるうと（以下「当店」）は、お客様の個人情報の保護を最重要事項と考え、適切な収集、利用、管理に努めます。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. 収集する個人情報</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>氏名</li>
          <li>連絡先（電話番号、メールアドレス）</li>
          <li>予約情報</li>
          <li>施術履歴</li>
          <li>その他当店のサービス提供に必要な情報</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. 個人情報の利用目的</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>予約の受付・管理</li>
          <li>施術の提供</li>
          <li>お客様への連絡</li>
          <li>サービスの改善</li>
          <li>お客様への情報提供（施術案内、キャンペーン情報など）</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. 個人情報の管理</h2>
        <p className="mb-4">
          当店は、お客様の個人情報を適切に管理し、以下のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>お客様の同意がある場合</li>
          <li>法令に基づき開示することが必要である場合</li>
          <li>当店の業務委託先に対して、必要な範囲で開示する場合</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. 個人情報の安全対策</h2>
        <p className="mb-4">
          当店は、個人情報の漏洩、滅失、毀損を防止するため、適切なセキュリティ対策を実施しています。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. お客様の権利</h2>
        <p className="mb-4">
          お客様は、当店が保有する個人情報について、開示、訂正、利用停止等を請求することができます。
          請求の方法については、当店までお問い合わせください。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. プライバシーポリシーの変更</h2>
        <p className="mb-4">
          当店は、必要に応じて本プライバシーポリシーを変更することがあります。
          変更の際は、当店ウェブサイトにてお知らせいたします。
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. お問い合わせ</h2>
        <p className="mb-4">
          本プライバシーポリシーに関するお問い合わせは、以下の連絡先までお願いいたします。
        </p>
        <p>
          〒000-0000<br />
          東京都○○区○○1-1-1<br />
          ぴあざさるうと<br />
          電話：03-0000-0000<br />
          メール：info@example.com
        </p>
      </section>

      <p className="text-sm text-gray-600">
        制定日：2024年3月1日<br />
        最終更新日：2024年3月1日
      </p>
    </div>
  );
};

export default PrivacyPolicy; 