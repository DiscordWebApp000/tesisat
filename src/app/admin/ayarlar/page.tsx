'use client'
import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';

const AdminSettings = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  const { changePassword } = useAuth();

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError('');
    setSuccessMessage('');
    setIsLoading(true);

    // Validation
    if (newPassword !== confirmPassword) {
      setPasswordError('Yeni şifreler eşleşmiyor');
      setIsLoading(false);
      return;
    }

    if (newPassword.length < 6) {
      setPasswordError('Şifre en az 6 karakter olmalıdır');
      setIsLoading(false);
      return;
    }

    if (currentPassword === newPassword) {
      setPasswordError('Yeni şifre mevcut şifre ile aynı olamaz');
      setIsLoading(false);
      return;
    }

    try {
      const result = await changePassword(currentPassword, newPassword);
      
      if (result.success) {
        setSuccessMessage('Şifreniz başarıyla güncellendi!');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        
        // Clear success message after 5 seconds
        setTimeout(() => setSuccessMessage(''), 5000);
      } else {
        setPasswordError(result.error || 'Şifre güncellenirken bir hata oluştu');
      }
    } catch (error: unknown) {
      console.error('Password change error:', error);
      setPasswordError('Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 lg:p-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Şifre Değiştir</h1>
        <p className="text-gray-600">Hesap güvenliğiniz için şifrenizi güncelleyin</p>
      </div>

      {/* Password Change Form */}
      <div className="max-w-md">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <form onSubmit={handlePasswordChange} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mevcut Şifre
              </label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="Mevcut şifrenizi girin"
                disabled={isLoading}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Yeni Şifre
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="Yeni şifrenizi girin"
                disabled={isLoading}
              />
              <p className="text-xs text-gray-500 mt-1">En az 6 karakter olmalıdır</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Yeni Şifre Tekrar
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                placeholder="Yeni şifrenizi tekrar girin"
                disabled={isLoading}
              />
            </div>

            {/* Error Message */}
            {passwordError && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
                {passwordError}
              </div>
            )}

            {/* Success Message */}
            {successMessage && (
              <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-md text-sm">
                {successMessage}
              </div>
            )}
            
            <div className="pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full px-4 py-2 rounded-lg transition-colors ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-amber-600 hover:bg-amber-700'
                } text-white font-medium`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Güncelleniyor...
                  </div>
                ) : (
                  'Şifreyi Güncelle'
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Security Tips */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-sm font-medium text-blue-900 mb-2">Güvenlik İpuçları</h3>
          <ul className="text-xs text-blue-700 space-y-1">
            <li>• Güçlü bir şifre için büyük/küçük harf, rakam ve özel karakter kullanın</li>
            <li>• Şifrenizi kimseyle paylaşmayın</li>
            <li>• Düzenli olarak şifrenizi değiştirin</li>
            <li>• Farklı hesaplar için farklı şifreler kullanın</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
