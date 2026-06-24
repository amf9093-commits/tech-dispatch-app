import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { Camera, AlertCircle } from 'lucide-react';

export default function RepairRequest() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('報修單已送出，系統將為您媒合最佳技術員！');
    navigate('/customer');
  };

  return (
    <div className="app-container">
      <Navbar role="customer" />
      <div className="main-content animate-fade-in" style={{ maxWidth: '800px' }}>
        <h1 style={{ marginBottom: '1.5rem' }}>線上報修表單</h1>

        <div className="card">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>問題主旨</label>
              <input type="text" placeholder="例如：浴室水管漏水、無熔絲開關跳脫..." required />
            </div>

            <div className="grid-2">
              <div className="input-group">
                <label>服務類別</label>
                <select required>
                  <option value="">請選擇類別</option>
                  <option value="water">水電工程</option>
                  <option value="electrical">機電設備</option>
                  <option value="network">弱電/網路</option>
                  <option value="other">其他維修</option>
                </select>
              </div>
              <div className="input-group">
                <label>緊急程度</label>
                <select required defaultValue="normal">
                  <option value="normal">一般 (48小時內)</option>
                  <option value="high">高 (24小時內)</option>
                  <option value="emergency">緊急 (4小時內，將加收急件費)</option>
                </select>
              </div>
            </div>

            <div className="input-group">
              <label>詳細問題描述</label>
              <textarea rows="4" placeholder="請盡可能詳細描述發生狀況..." required></textarea>
            </div>

            <div className="input-group" style={{ marginBottom: '2rem' }}>
              <label>上傳現場照片 (最多3張)</label>
              <div style={{ height: '120px', background: 'var(--surface-color-light)', border: '2px dashed var(--border-color)', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <Camera size={32} color="var(--text-muted)" style={{ marginBottom: '0.5rem' }} />
                <span style={{ color: 'var(--text-muted)' }}>點擊上傳或拖曳照片至此</span>
              </div>
            </div>

            <div style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid var(--warning-color)', borderRadius: 'var(--radius-md)', padding: '1rem', marginBottom: '1.5rem', display: 'flex', gap: '0.5rem' }}>
              <AlertCircle color="var(--warning-color)" size={20} style={{ flexShrink: 0 }} />
              <p style={{ fontSize: '0.875rem', color: 'var(--text-primary)' }}>送出報修後，系統將自動透過 AI 演算法，為您媒合距離最近、評價最高且具備相關證照的技術員前往處理。</p>
            </div>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <button type="button" className="btn-secondary" style={{ flex: 1 }} onClick={() => navigate(-1)}>取消</button>
              <button type="submit" className="btn-primary" style={{ flex: 2 }}>送出報修</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
