import React, { useState } from 'react';
import FormInput from './Form/FormInput';
import {
  validateRequired,
  validateEmail,
  validatePhone,
  validateDate,
  validateTime
} from '../utils/validation';
import { handleApiError } from '../utils/apiErrorHandler';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return validateRequired(value);
      case 'email':
        return validateEmail(value);
      case 'phone':
        return validatePhone(value);
      case 'date':
        return validateDate(value);
      case 'time':
        return validateTime(value);
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // エラーがある場合のみバリデーションを実行
    if (errors[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    // 全フィールドのバリデーション
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // APIリクエストの例
      const response = await fetch('/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('予約の送信に失敗しました。');
      }

      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        message: ''
      });
    } catch (error) {
      setSubmitError(handleApiError(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-mincho mb-6">予約フォーム</h2>
      
      {submitError && (
        <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-md" role="alert">
          {submitError}
        </div>
      )}
      
      {submitSuccess && (
        <div className="mb-4 p-4 bg-green-50 text-green-600 rounded-md" role="alert">
          予約を受け付けました。確認メールをお送りしますので、ご確認ください。
        </div>
      )}

      <FormInput
        label="お名前"
        name="name"
        value={formData.name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.name}
        required
      />

      <FormInput
        label="メールアドレス"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email}
        required
      />

      <FormInput
        label="電話番号"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.phone}
        required
        placeholder="例: 090-1234-5678"
      />

      <FormInput
        label="希望日"
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.date}
        required
      />

      <FormInput
        label="希望時間"
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.time}
        required
      />

      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          ご要望・ご質問
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`
          w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white
          bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
          ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        {isSubmitting ? '送信中...' : '予約を送信'}
      </button>
    </form>
  );
};

export default ReservationForm; 