import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const LegalNotice = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Helmet>
        <title>特定商取引法に基づく表記 | ぴあざさるうと</title>
        <meta name="description" content="ぴあざさるうとの特定商取引法に基づく表記です。予約に関する取引条件をご確認いただけます。" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-8">特定商取引法に基づく表記</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">事業者情報</h2>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <dt className="font-semibold">事業者名</dt>
          <dd>ぴあざさるうと</dd>

          <dt className="font-semibold">所在地</dt>
          <dd>
            〒178-0064<br />
            東京都練馬区南大泉5-35-8<br />
            （保谷駅北口徒歩1分）
          </dd>

          <dt className="font-semibold">電話番号</dt>
          <dd>03-3978-4800</dd>

          <dt className="font-semibold">営業時間</dt>
          <dd>
            10:00〜17:30<br />
            定休日：木曜日・日曜日
          </dd>

          <dt className="font-semibold">アクセス</dt>
          <dd>
            保谷駅北口徒歩1分<br />
            駐車場完備<br />
            バリアフリー対応（ベビーカー・車椅子OK）
          </dd>
        </dl>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">取引条件</h2>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <dt className="font-semibold">商品・サービスの名称</dt>
          <dd>
            美容室サービス<br />
            （カット、カラー、パーマ、トリートメント、ヘッドスパ等）
          </dd>

          <dt className="font-semibold">商品・サービスの価格</dt>
          <dd>
            各メニューにより異なります。<br />
            詳細は<a href="/menu" className="text-blue-600 hover:underline">メニュー</a>ページをご覧ください。<br />
            ※表示価格は全て税込価格です。
          </dd>

          <dt className="font-semibold">商品代金以外の必要料金</dt>
          <dd>
            ・消費税<br />
            ・クーポン利用時は別途条件がございます
          </dd>

          <dt className="font-semibold">支払方法</dt>
          <dd>
            ・現金<br />
            ・各種クレジットカード<br />
            ・電子マネー
          </dd>

          <dt className="font-semibold">支払時期</dt>
          <dd>施術完了時</dd>

          <dt className="font-semibold">予約方法</dt>
          <dd>
            ・オンライン予約（ホットペッパービューティー）<br />
            ・電話予約（03-3978-4800）<br />
            ・店頭予約
          </dd>
        </dl>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">キャンセルポリシー</h2>
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="mb-4">
            ご予約のキャンセルは、施術の24時間前までにご連絡をお願いいたします。
          </p>
          <ul className="list-disc pl-6">
            <li>24時間前までのキャンセル：キャンセル料は発生しません</li>
            <li>24時間以内のキャンセル：施術料金の50%をキャンセル料として頂戴いたします</li>
            <li>無断キャンセル：施術料金の100%をキャンセル料として頂戴いたします</li>
          </ul>
          <p className="mt-4 text-sm text-gray-600">
            ※キャンセル料のお支払いは、次回ご来店時にお願いいたします。
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">サービスについて</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">特徴</h3>
            <ul className="list-disc pl-6">
              <li>軟水を使用した施術で、肌の弱い方も安心</li>
              <li>バリアフリー対応で、ベビーカー・車椅子もそのまま入店可能</li>
              <li>ママさん美容師多数在籍</li>
              <li>豊富なトリートメントメニュー</li>
              <li>TOKIOインカラミ取扱い</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">お子様連れの方へ</h3>
            <p>
              お子様同伴OKのサロンです。全面バリアフリーなので、ベビーカーもそのまま入店できます。
              ママさん美容師が多数在籍しているので、お子様連れでもお気軽にご来店いただけます。
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">その他の注意事項</h2>
        <ul className="list-disc pl-6">
          <li>施術内容や仕上がりについて、ご不明な点がございましたらお気軽にご相談ください</li>
          <li>アレルギーや体調不良等がございましたら、事前にスタッフまでお申し付けください</li>
          <li>クーポンをご利用の際は、予約時にご提示ください</li>
          <li>駐車場をご利用の際は、スタッフまでお申し付けください</li>
        </ul>
      </section>

      <p className="text-sm text-gray-600">
        制定日：2024年3月1日<br />
        最終更新日：2024年3月1日
      </p>
    </div>
  );
};

export default LegalNotice; 