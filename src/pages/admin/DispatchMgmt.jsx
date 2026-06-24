import { useState } from 'react';
import Navbar from '../../components/Navbar';
import { Search, Filter, UserPlus, X, MapPin, Navigation, Map, Zap } from 'lucide-react';

export default function DispatchMgmt() {
  const [jobs, setJobs] = useState([
    { id: '#JOB-001', title: '配電盤總開關燒毀', region: '虎尾鎮', status: '待派工', statusClass: 'badge-danger', tech: '未指派', lat: 23.708, lng: 120.431 },
    { id: '#JOB-002', title: '辦公室水管破裂', region: '斗南鎮', status: '進行中', statusClass: 'badge-warning', tech: '王大明', lat: 23.673, lng: 120.481 },
    { id: '#JOB-003', title: '加壓馬達故障無水', region: '斗六市', status: '已完工', statusClass: 'badge-success', tech: '林小華', lat: 23.709, lng: 120.541 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [newJob, setNewJob] = useState({ title: '', region: '' });

  // 派遣中心預設位置 (例如：雲林高鐵站附近)
  const dispatchCenter = { lat: 23.731, lng: 120.407 };

  // 計算兩點之間的最短距離 (Haversine Formula)
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // 地球半徑 (公里)
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return (R * c).toFixed(1);
  };

  const sortByDistance = () => {
    const sortedJobs = [...jobs].sort((a, b) => {
      const distA = parseFloat(calculateDistance(dispatchCenter.lat, dispatchCenter.lng, a.lat, a.lng));
      const distB = parseFloat(calculateDistance(dispatchCenter.lat, dispatchCenter.lng, b.lat, b.lng));
      return distA - distB;
    });
    setJobs(sortedJobs);
  };

  // 模擬可用技師及其當下位置
  const availableTechs = [
    { name: '王大明', lat: 23.700, lng: 120.450 }, // 靠近虎尾
    { name: '林小華', lat: 23.715, lng: 120.530 }, // 靠近斗六
    { name: '陳建國', lat: 23.680, lng: 120.460 }, // 靠近斗南
  ];

  // 自動計算最短距離並指派
  const autoDispatch = () => {
    let dispatchedCount = 0;
    const updatedJobs = jobs.map(job => {
      if (job.status === '待派工') {
        let closestTech = null;
        let minDistance = Infinity;
        
        // 尋找距離該案件最近的技師
        availableTechs.forEach(tech => {
          const dist = parseFloat(calculateDistance(job.lat, job.lng, tech.lat, tech.lng));
          if (dist < minDistance) {
            minDistance = dist;
            closestTech = tech;
          }
        });

        dispatchedCount++;
        return {
          ...job,
          tech: closestTech.name,
          status: '已派工',
          statusClass: 'badge-primary'
        };
      }
      return job;
    });
    
    if (dispatchedCount > 0) {
      setJobs(updatedJobs);
      alert(`✅ 智慧派工完成！已自動為 ${dispatchedCount} 個案件指派最近的技師。`);
    } else {
      alert('目前沒有需要派工的案件。');
    }
  };

  const handleAddJob = (e) => {
    e.preventDefault();
    const newId = `#JOB-00${jobs.length + 1}`;
    setJobs([{ 
      id: newId, 
      title: newJob.title, 
      region: newJob.region, 
      status: '待派工', 
      statusClass: 'badge-danger', 
      statusClass: 'badge-danger', 
      tech: '未指派',
      // 隨機產生一個附近的座標作為模擬
      lat: dispatchCenter.lat + (Math.random() * 0.1 - 0.05),
      lng: dispatchCenter.lng + (Math.random() * 0.1 - 0.05)
    }, ...jobs]);
    setIsModalOpen(false);
    setNewJob({ title: '', region: '' });
  };

  return (
    <div className="app-container">
      <Navbar role="admin" />
      <div className="main-content animate-fade-in">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <h1>派工管理</h1>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn-primary" onClick={autoDispatch} style={{ background: 'linear-gradient(135deg, var(--accent-color), var(--primary-color))' }}>
              <Zap size={18} /> 一鍵智能派工
            </button>
            <button className="btn-secondary" onClick={() => setIsModalOpen(true)}>
              <UserPlus size={18} /> 新增派工案件
            </button>
          </div>
        </div>

        <div className="card" style={{ marginBottom: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div className="input-group" style={{ flex: '1 1 300px', marginBottom: 0 }}>
            <div style={{ position: 'relative' }}>
              <Search size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input type="text" placeholder="搜尋案件名稱或編號..." style={{ paddingLeft: '2.5rem' }} />
            </div>
          </div>
          <button className="btn-secondary" onClick={sortByDistance} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Navigation size={18} /> 最短距離排序
          </button>
          <button className="btn-secondary" onClick={() => setShowMap(!showMap)} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderColor: showMap ? 'var(--primary-color)' : '' }}>
            <Map size={18} /> {showMap ? '隱藏地圖' : '顯示地圖'}
          </button>
        </div>

        {showMap && (
          <div className="card animate-fade-in" style={{ marginBottom: '1.5rem', padding: '1rem' }}>
            <div className="map-placeholder" style={{ height: '300px', width: '100%' }}>
              <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(0,0,0,0.5)', padding: '0.5rem', borderRadius: '4px', fontSize: '0.8rem' }}>
                <span style={{ color: 'var(--primary-color)' }}>●</span> 派遣中心 &nbsp;
                <span style={{ color: 'var(--danger-color)' }}>●</span> 待派工案件
              </div>
              
              {/* Dispatch Center Pin */}
              <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <MapPin size={32} color="var(--primary-color)" fill="var(--surface-color)" />
                <span style={{ fontSize: '0.75rem', fontWeight: 'bold', textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>派遣中心</span>
              </div>

              {/* Job Pins (Mock relative positioning) */}
              {jobs.map((job) => {
                // Calculate rough relative pixel positions based on lat/lng differences
                const top = 50 - (job.lat - dispatchCenter.lat) * 800;
                const left = 50 + (job.lng - dispatchCenter.lng) * 800;
                
                // Ensure they stay within bounds visually for the demo
                const boundedTop = Math.max(10, Math.min(90, top));
                const boundedLeft = Math.max(10, Math.min(90, left));

                return (
                  <div key={job.id} className="map-marker" style={{ top: `${boundedTop}%`, left: `${boundedLeft}%`, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <MapPin size={24} color={job.status === '待派工' ? 'var(--danger-color)' : 'var(--text-muted)'} fill="rgba(0,0,0,0.5)" />
                    <span style={{ fontSize: '0.7rem', background: 'rgba(0,0,0,0.7)', padding: '2px 4px', borderRadius: '4px' }}>{job.id}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <table>
            <thead>
              <tr>
                <th>案件編號</th>
                <th>案件標題</th>
                <th>地區</th>
                <th>距中心距離</th>
                <th>狀態</th>
                <th>負責技師</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id}>
                  <td>{job.id}</td>
                  <td>{job.title}</td>
                  <td>{job.region}</td>
                  <td style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>
                    {calculateDistance(dispatchCenter.lat, dispatchCenter.lng, job.lat, job.lng)} km
                  </td>
                  <td><span className={`badge ${job.statusClass}`}>{job.status}</span></td>
                  <td style={{ color: job.tech === '未指派' ? 'var(--text-muted)' : 'var(--text-primary)' }}>{job.tech}</td>
                  <td>
                    {job.status === '待派工' ? (
                      <button className="btn-primary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }} onClick={() => {
                        // 手動觸發單一派工 (此處簡單模擬轉換狀態)
                        const updated = jobs.map(j => j.id === job.id ? { ...j, status: '已派工', statusClass: 'badge-primary', tech: availableTechs[0].name } : j);
                        setJobs(updated);
                      }}>
                        派工
                      </button>
                    ) : (
                      <button className="btn-secondary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.875rem' }}>
                        {job.status === '進行中' ? '查看' : '驗收'}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="card animate-fade-in" style={{ width: '100%', maxWidth: '500px', margin: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ margin: 0 }}>新增手動派工案件</h2>
              <button onClick={() => setIsModalOpen(false)} style={{ background: 'transparent', color: 'var(--text-muted)' }}>
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleAddJob}>
              <div className="input-group">
                <label>案件標題</label>
                <input 
                  type="text" 
                  placeholder="例如：辦公室漏水維修" 
                  value={newJob.title}
                  onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                  required 
                />
              </div>
              <div className="input-group">
                <label>地區</label>
                <input 
                  type="text" 
                  placeholder="例如：斗六市" 
                  value={newJob.region}
                  onChange={(e) => setNewJob({ ...newJob, region: e.target.value })}
                  required 
                />
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                <button type="button" className="btn-secondary" style={{ flex: 1 }} onClick={() => setIsModalOpen(false)}>
                  取消
                </button>
                <button type="submit" className="btn-primary" style={{ flex: 1 }}>
                  確認新增
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
