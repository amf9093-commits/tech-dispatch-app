import fs from "fs";
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from "docx";

const doc = new Document({
    sections: [
        {
            properties: {},
            children: [
                new Paragraph({
                    text: "期末作業報告：TechDispatch 智慧派單與工程管理平台",
                    heading: HeadingLevel.TITLE,
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "一、專案簡介", bold: true, size: 32 }),
                    ],
                    spacing: { before: 300, after: 100 },
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "TechDispatch 是一個全方位的智慧派單與工程管理系統，專為水電工程、維修服務等相關行業打造。本系統整合了管理端、技師端以及客戶端三大角色，透過數位化的作業流程，取代傳統人工派發與紙本回報，大幅提升整體營運效率與服務品質。", size: 24 }),
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "二、開發動機與目的", bold: true, size: 32 }),
                    ],
                    spacing: { before: 300, after: 100 },
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "傳統工程維修常面臨派單混亂、資訊不透明、技師難以掌握最優路徑等問題。本專案旨在：", size: 24 }),
                    ]
                }),
                new Paragraph({ children: [new TextRun({ text: "1. 數位化管理：建立線上報修與即時派單系統。", size: 24 })] }),
                new Paragraph({ children: [new TextRun({ text: "2. 效率最佳化：提供技師AI派單媒合與GPS地圖導航功能。", size: 24 })] }),
                new Paragraph({ children: [new TextRun({ text: "3. 權限管控：實作角色權限登入系統(Role-Based Access Control)，確保資料安全性。", size: 24 })] }),
                new Paragraph({ children: [new TextRun({ text: "4. 使用者體驗：運用現代化前端技術(React)打造流暢、響應式的介面設計。", size: 24 })] }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "三、系統架構與使用技術", bold: true, size: 32 }),
                    ],
                    spacing: { before: 300, after: 100 },
                }),
                new Paragraph({ children: [new TextRun({ text: "• 核心框架：React.js (採用 Vite 進行高速建置)", size: 24 })] }),
                new Paragraph({ children: [new TextRun({ text: "• 路由管理：React Router (實現單頁應用程式 SPA 與動態路由)", size: 24 })] }),
                new Paragraph({ children: [new TextRun({ text: "• 樣式設計：原生 CSS 結合模組化架構，搭配 Lucide React 圖示庫", size: 24 })] }),
                new Paragraph({ children: [new TextRun({ text: "• 狀態與權限：運用 localStorage 進行 Session 管理與路由守衛 (Route Guards)", size: 24 })] }),
                new Paragraph({ children: [new TextRun({ text: "• 架構特色：前端元件化設計 (Component-Based)，分離業務邏輯與畫面渲染", size: 24 })] }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "四、核心功能與功能模組", bold: true, size: 32 }),
                    ],
                    spacing: { before: 300, after: 100 },
                }),
                new Paragraph({ children: [new TextRun({ text: "1. 角色身分與登入系統", bold: true, size: 26 })], spacing: { before: 200 } }),
                new Paragraph({ children: [new TextRun({ text: "   包含管理員(Admin)、技師(Technician)、客戶(Customer)三種登入身分，系統會依據登入狀態與角色動態渲染可存取的頁面與功能。", size: 24 })] }),
                new Paragraph({ children: [new TextRun({ text: "2. 管理員後台 (Admin Dashboard)", bold: true, size: 26 })], spacing: { before: 200 } }),
                new Paragraph({ children: [new TextRun({ text: "   • 即時派單管理：可視覺化檢視所有任務狀態並進行人工派發。", size: 24 })] }),
                new Paragraph({ children: [new TextRun({ text: "   • 公告管理系統：提供公告的建立、編輯、刪除(CRUD)功能，並具備權限驗證。", size: 24 })] }),
                new Paragraph({ children: [new TextRun({ text: "3. 技師專屬 APP (Technician App)", bold: true, size: 26 })], spacing: { before: 200 } }),
                new Paragraph({ children: [new TextRun({ text: "   • AI 任務媒合：根據技師專長與位置，智慧推播最合適的任務。", size: 24 })] }),
                new Paragraph({ children: [new TextRun({ text: "   • 地圖導航系統：整合 GPS 資訊顯示任務地點及最佳路線規劃。", size: 24 })] }),
                new Paragraph({ children: [new TextRun({ text: "   • 數位工作回報：取代傳統紙本，線上填寫維修紀錄並即時同步。", size: 24 })] }),
                new Paragraph({ children: [new TextRun({ text: "   • 收入統計分析：以視覺化圖表呈現技師的接單數與預估收入。", size: 24 })] }),
                new Paragraph({ children: [new TextRun({ text: "4. 客戶端入口 (Customer Portal)", bold: true, size: 26 })], spacing: { before: 200 } }),
                new Paragraph({ children: [new TextRun({ text: "   • 線上報修服務：提供直覺的表單讓客戶快速提交維修需求與上傳相關資訊。", size: 24 })] }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "五、開發過程與挑戰", bold: true, size: 32 }),
                    ],
                    spacing: { before: 300, after: 100 },
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "在開發過程中，最大的挑戰在於「跨角色的狀態同步」與「路由權限防護」。為了確保未登入者無法存取後台，實作了高階元件(HOC)與路由攔截；另外在表單設計上，為減少重複程式碼，設計了可重用的動態表單元件架構。專案也經歷了從原型設計到模組化重構的過程，將不同頁面的共用元件(如 Navbar、Card 等)抽離，大幅提升了程式碼的可維護性。", size: 24 }),
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "六、結論與未來展望", bold: true, size: 32 }),
                    ],
                    spacing: { before: 300, after: 100 },
                }),
                new Paragraph({
                    children: [
                        new TextRun({ text: "本期末作業成功完成了一個具備高度互動性與實用價值的「智慧派單與工程管理平台」前端原型。未來展望將接入正式的後端 API (如 Node.js/Express 或 Cloudflare Workers) 與資料庫，並整合真實的地圖服務 API 與 WebSocket，以實現真正的即時雙向推播與定位追蹤。", size: 24 }),
                    ]
                }),
            ],
        },
    ],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("TechDispatch_期末報告.docx", buffer);
    console.log("Word document generated successfully!");
}).catch((error) => {
    console.error("Error generating document:", error);
});
