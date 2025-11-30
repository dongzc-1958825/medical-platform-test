import { HashRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🏥 医案平台 - 极简测试版</h1>
      <p><strong>目标：</strong>解决SPA路由刷新404问题</p>
      <p><strong>当前方案：</strong>HashRouter + basename配置</p>
      
      <nav style={{ margin: '20px 0', padding: '10px', backgroundColor: '#f5f5f5' }}>
        <Link to="/" style={{ marginRight: '15px', textDecoration: 'none' }}>首页</Link>
        <Link to="/about" style={{ marginRight: '15px', textDecoration: 'none' }}>关于</Link>
        <Link to="/cases" style={{ marginRight: '15px', textDecoration: 'none' }}>医案</Link>
        <Link to="/contact" style={{ textDecoration: 'none' }}>联系</Link>
      </nav>

      <div style={{ border: '2px solid #007acc', padding: '20px', borderRadius: '8px' }}>
        <h2>🚀 路由测试区域</h2>
        <Routes>
          <Route path="/" element={<div>🎉 <strong>欢迎来到首页！</strong><br/>HashRouter + basename配置测试。</div>} />
          <Route path="/about" element={<div>📖 <strong>关于页面</strong><br/>测试basename配置是否生效。</div>} />
          <Route path="/cases" element={<div>📋 <strong>医案列表页面</strong><br/>核心功能页面路由测试。</div>} />
          <Route path="/contact" element={<div>📞 <strong>联系我们页面</strong><br/>测试直接URL访问。</div>} />
        </Routes>
      </div>

      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        <p>当前路径: <code>{window.location.pathname}</code></p>
        <p>完整URL: <code>{window.location.href}</code></p>
        <p>Hash: <code>{window.location.hash}</code></p>
        <p>Basename配置: <code>/medical-platform-test</code></p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter basename="/medical-platform-test">
      <Home />
    </HashRouter>
  );
}