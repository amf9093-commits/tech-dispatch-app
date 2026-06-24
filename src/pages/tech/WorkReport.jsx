import Navbar from '../../components/Navbar';
import { Camera, PenTool, CheckCircle } from 'lucide-react';

export default function WorkReport() {
  return (
    <div className="app-container">
      <Navbar role="tech" />
      <div className="main-content animate-fade-in">
        <h1 style={{ marginBottom: '1rem' }}>工作回報</h1>
        
        <div className="card" style={{ marginBottom: '1.5rem' }}>
          <h3>案件資訊</h3>
          <p style={{ color: 'var(--text-muted)' }}>斗六市 - 加壓馬達故障無水</p>
        </div>

        <form>
          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem' }}><Camera size={20} style={{ display: 'inline', verticalAlign: 'middle' }}/> 現場照片</h3>
            <div className="grid-2">
              <div>
                <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>施工前</p>
                <div style={{ height: '150px', background: 'var(--surface-color-light)', border: '1px dashed var(--border-color)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <span style={{ color: 'var(--text-muted)' }}>+ 上傳照片</span>
                </div>
              </div>
              <div>
                <p style={{ marginBottom: '0.5rem', fontSize: '0.875rem' }}>施工後</p>
                <div style={{ height: '150px', background: 'var(--surface-color-light)', border: '1px dashed var(--border-color)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <span style={{ color: 'var(--text-muted)' }}>+ 上傳照片</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem' }}><PenTool size={20} style={{ display: 'inline', verticalAlign: 'middle' }}/> 工作內容與備註</h3>
            <div className="input-group">
              <textarea rows="4" placeholder="請詳細描述處理過程及更換零件..."></textarea>
            </div>
          </div>

          <div className="card" style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ marginBottom: '1rem' }}><CheckCircle size={20} style={{ display: 'inline', verticalAlign: 'middle' }}/> 客戶簽收</h3>
            <div style={{ height: '200px', background: 'var(--surface-color-light)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'var(--text-muted)' }}>請客戶在此電子簽名</span>
            </div>
            <button type="button" className="btn-secondary" style={{ width: '100%' }}>清除重簽</button>
          </div>

          <button type="button" className="btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.125rem' }}>
            送出完工報告
          </button>
        </form>
      </div>
    </div>
  );
}
