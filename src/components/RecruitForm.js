import React, { useState } from 'react';

const RecruitForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    employmentType: '',
    message: '',
    resume: null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'お名前を入力してください';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = '電話番号を入力してください';
    }
    if (!formData.employmentType) {
      newErrors.employmentType = '雇用形態を選択してください';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // ここに実際の送信処理を実装
      await new Promise(resolve => setTimeout(resolve, 1000)); // 仮の送信処理
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        experience: '',
        employmentType: '',
        message: '',
        resume: null
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
    // エラーをクリア
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <section 
      className="py-16"
      aria-labelledby="recruit-form-heading"
    >
      <div className="container-custom">
        <h2 
          id="recruit-form-heading" 
          className="text-3xl font-mincho text-center mb-12"
        >
          応募フォーム
        </h2>
        <div className="max-w-2xl mx-auto">
          {submitStatus === 'success' ? (
            <div 
              className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
              role="alert"
            >
              <p className="text-green-800">
                ご応募ありがとうございます。<br />
                内容を確認次第、担当者よりご連絡させていただきます。
              </p>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-md p-8"
              noValidate
            >
              <div className="space-y-6">
                {/* お名前 */}
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    お名前 <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p 
                      id="name-error" 
                      className="mt-1 text-sm text-red-600"
                      role="alert"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* メールアドレス */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    メールアドレス <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p 
                      id="email-error" 
                      className="mt-1 text-sm text-red-600"
                      role="alert"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* 電話番号 */}
                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    電話番号 <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    aria-required="true"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p 
                      id="phone-error" 
                      className="mt-1 text-sm text-red-600"
                      role="alert"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* 経験年数 */}
                <div>
                  <label 
                    htmlFor="experience" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    経験年数
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">選択してください</option>
                    <option value="未経験">未経験</option>
                    <option value="1-3年">1-3年</option>
                    <option value="3-5年">3-5年</option>
                    <option value="5-10年">5-10年</option>
                    <option value="10年以上">10年以上</option>
                  </select>
                </div>

                {/* 雇用形態 */}
                <div>
                  <fieldset>
                    <legend className="block text-sm font-medium text-gray-700 mb-1">
                      希望雇用形態 <span className="text-red-500" aria-hidden="true">*</span>
                    </legend>
                    <div className="space-y-2">
                      {['正社員', 'パート'].map((type) => (
                        <div key={type} className="flex items-center">
                          <input
                            type="radio"
                            id={`employmentType-${type}`}
                            name="employmentType"
                            value={type}
                            checked={formData.employmentType === type}
                            onChange={handleChange}
                            className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                            aria-required="true"
                            aria-invalid={!!errors.employmentType}
                          />
                          <label 
                            htmlFor={`employmentType-${type}`}
                            className="ml-2 text-sm text-gray-700"
                          >
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                    {errors.employmentType && (
                      <p 
                        className="mt-1 text-sm text-red-600"
                        role="alert"
                      >
                        {errors.employmentType}
                      </p>
                    )}
                  </fieldset>
                </div>

                {/* 志望動機・メッセージ */}
                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    志望動機・メッセージ
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* 履歴書 */}
                <div>
                  <label 
                    htmlFor="resume" 
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    履歴書（PDF形式）
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    ※5MB以下のPDFファイル
                  </p>
                </div>

                {/* 送信ボタン */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary px-8 py-3 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    aria-busy={isSubmitting}
                  >
                    {isSubmitting ? '送信中...' : '応募する'}
                  </button>
                </div>

                {submitStatus === 'error' && (
                  <div 
                    className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-center"
                    role="alert"
                  >
                    <p className="text-red-800">
                      申し訳ありません。送信に失敗しました。<br />
                      時間をおいて再度お試しください。
                    </p>
                  </div>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default RecruitForm; 