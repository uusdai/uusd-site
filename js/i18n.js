// =====================================================
// UUSD Website - Internationalization (i18n)
// Supports: English (en), Chinese (zh)
// =====================================================

const TRANSLATIONS = {
    en: {
        // Nav
        'nav.uusd': 'UUSD',
        'nav.ecosystem': 'Ecosystem',
        'nav.security': 'Security',
        'nav.developers': 'Developers',
        'nav.whitepaper_nav': 'Whitepaper',
        'nav.get_uusd': 'Get UUSD',

        // Hero
        'hero.title_prefix': 'Powering the ',
        'hero.title_highlight': 'AI Agent Economy',
        'hero.subtitle': 'UUSD is the settlement currency for AI agents, applications, and global on-chain commerce.',
        'hero.definition': 'Built for the next generation of autonomous economies.',
        'hero.btn_learn': 'Learn about UUSD',
        'hero.btn_ecosystem': 'View Ecosystem',

        // Partners
        'partners.tagline': 'Trusted by leading infrastructure partners',

        // AI Economy
        'ai_economy.title': 'The Rise of AI Agent Economy',
        'ai_economy.p1': 'Autonomous AI agents are becoming independent economic actors. They negotiate contracts, execute transactions, allocate capital, and settle payments without human intervention.',
        'ai_economy.p2': 'Traditional payment rails were built for humans -- with manual approvals, slow settlement times, and centralized gatekeepers. The AI agent economy demands programmable, instant, and permissionless settlement. UUSD is purpose-built for this new paradigm.',
        'ai_economy.visual': 'AI Agent Economy Diagram',

        // UUSD Section
        'uusd.title': 'UUSD -- AI Native Stablecoin',
        'uusd.subtitle': 'A USD-pegged stablecoin designed for AI-driven financial systems.',
        'uusd.card1_title': 'AI Payments',
        'uusd.card1_desc': 'Instant, programmable payments between AI agents. Micro-transactions for API calls, compute resources, and autonomous services.',
        'uusd.card2_title': 'AI Trading',
        'uusd.card2_desc': 'Optimized for high-frequency, agent-driven trading strategies across decentralized exchanges and liquidity pools.',
        'uusd.card3_title': 'Global Settlement',
        'uusd.card3_desc': 'Cross-chain settlement across BSC, Ethereum, Base, and all EVM-compatible networks with deterministic contract addresses.',

        // TVL
        'tvl.title': 'UUSD Network Growth',
        'tvl.stat1_label': 'Total Value Locked',
        'tvl.stat2_label': 'Transactions',
        'tvl.stat3_label': 'Integrations',
        'tvl.chart': 'Growth Chart',

        // Security
        'security.title': 'Built with Security First',
        'security.card1_title': 'Smart Contracts',
        'security.card1_desc': 'Thoroughly tested and verified smart contracts deployed via CREATE2 for deterministic addresses across all EVM chains.',
        'security.card2_title': 'Audited Protocol',
        'security.card2_desc': 'Comprehensive security audits with role-based access control, freeze capabilities, and pause mechanisms for regulated use cases.',
        'security.card3_title': 'Infrastructure',
        'security.card3_desc': 'EIP-2612 Permit and EIP-3009 support for meta-transactions. Composable with smart contracts and on-chain logic for automated workflows.',

        // Ecosystem
        'ecosystem.title': 'UUSD Ecosystem',
        'ecosystem.ai_platforms': 'AI Platforms',
        'ecosystem.defi': 'DeFi',
        'ecosystem.liquidity': 'Liquidity',
        'ecosystem.infrastructure': 'Infrastructure',

        // About
        'about.title': 'About Anything Labs',
        'about.p1': 'Anything Labs is building the financial infrastructure for the AI agent economy. We believe that as autonomous agents become primary economic participants, the tools they use to transact, settle, and store value must be purpose-built for speed, programmability, and global interoperability.',
        'about.p2': 'UUSD is our foundational product -- a stablecoin designed from the ground up for AI-native commerce.',

        // Contract
        'contract.title': 'Contract Information',
        'contract.subtitle': 'Same address deployed across all supported networks',
        'contract.label': 'UUSD Contract Address',
        'contract.note': 'Deployed via CREATE2 for deterministic addresses across all EVM chains',
        'contract.add_metamask': 'Add to MetaMask',

        // Swap
        'swap.title': 'Get UUSD',
        'swap.subtitle': 'On-chain swaps are provided as a convenience for small transfers',
        'swap.header': 'Swap',
        'swap.slippage_label': 'Slippage Tolerance',
        'swap.from': 'From',
        'swap.to': 'To',
        'swap.balance': 'Balance',
        'swap.rate': 'Rate',
        'swap.min_received': 'Minimum Received',
        'swap.price_impact': 'Price Impact',
        'swap.connect_wallet': 'Connect Wallet',
        'swap.enter_amount': 'Enter Amount',
        'swap.switch_bsc': 'Switch to BSC',
        'swap.loading': 'Loading...',
        'swap.invalid_pair': 'Invalid Pair',
        'swap.swap': 'Swap',
        'swap.processing': 'Processing...',
        'swap.select_token': 'Select Token',
        'swap.note': 'Trading on PancakeSwap Infinity (LBAMM) via Universal Router. You will need BNB for gas fees.',

        // Swap TX status
        'swap.tx_approving': 'Approving token for Permit2 (if needed)...',
        'swap.tx_signing': 'Signing Permit2 message...',
        'swap.tx_confirming': 'Waiting for confirmation...',
        'swap.tx_submitted': 'Transaction submitted:',
        'swap.tx_success': 'Swap successful!',
        'swap.tx_view': 'View on BSCScan',
        'swap.tx_failed': 'Transaction failed',

        // Errors
        'error.user_rejected': 'User rejected the request',
        'error.tx_failed': 'Transaction failed',
        'error.insufficient_gas': 'Insufficient balance for gas',
        'error.nonce_low': 'Nonce too low (please try again)',

        // Wallet
        'wallet.install_prompt': 'Please install MetaMask or another Web3 wallet to continue.',
        'wallet.connect_failed': 'Failed to connect wallet:',
        'wallet.install_metamask': 'Please install MetaMask first',
        'wallet.added_metamask': 'UUSD added to MetaMask!',
        'wallet.add_failed': 'Failed to add token',

        // Toast
        'toast.copied': 'Address copied to clipboard!',

        // Footer
        'footer.docs': 'Docs',
        'footer.whitepaper': 'Whitepaper',
        'footer.security': 'Security',
        'footer.github': 'Github',
        'footer.contact': 'Contact',
        'footer.copyright': '© 2026 Anything Labs. All rights reserved.'
    },

    zh: {
        // Nav
        'nav.uusd': 'UUSD',
        'nav.ecosystem': '生态系统',
        'nav.security': '安全',
        'nav.developers': '开发者',
        'nav.whitepaper_nav': '白皮书',
        'nav.get_uusd': '获取 UUSD',

        // Hero
        'hero.title_prefix': '驱动 ',
        'hero.title_highlight': 'AI 代理经济',
        'hero.subtitle': 'UUSD 是 AI 代理、应用和全球链上商务的结算货币。',
        'hero.definition': '为下一代自主经济而生。',
        'hero.btn_learn': '了解 UUSD',
        'hero.btn_ecosystem': '查看生态系统',

        // Partners
        'partners.tagline': '受到领先基础设施合作伙伴的信赖',

        // AI Economy
        'ai_economy.title': 'AI 代理经济的崛起',
        'ai_economy.p1': '自主 AI 代理正在成为独立的经济参与者。它们协商合同、执行交易、分配资本并完成支付结算——无需人工干预。',
        'ai_economy.p2': '传统支付系统是为人类设计的——需要人工审批、结算缓慢、依赖中心化门控。AI 代理经济需要可编程、即时和无许可的结算方式。UUSD 正是为这一新范式而生。',
        'ai_economy.visual': 'AI 代理经济示意图',

        // UUSD Section
        'uusd.title': 'UUSD —— AI 原生稳定币',
        'uusd.subtitle': '专为 AI 驱动的金融系统设计的美元稳定币。',
        'uusd.card1_title': 'AI 支付',
        'uusd.card1_desc': 'AI 代理之间即时可编程支付。支持 API 调用、计算资源和自主服务的微交易。',
        'uusd.card2_title': 'AI 交易',
        'uusd.card2_desc': '针对去中心化交易所和流动性池的高频代理驱动交易策略进行优化。',
        'uusd.card3_title': '全球结算',
        'uusd.card3_desc': '支持 BSC、以太坊、Base 及所有 EVM 兼容网络的跨链结算，使用确定性合约地址。',

        // TVL
        'tvl.title': 'UUSD 网络增长',
        'tvl.stat1_label': '总锁仓价值',
        'tvl.stat2_label': '交易数量',
        'tvl.stat3_label': '集成数量',
        'tvl.chart': '增长图表',

        // Security
        'security.title': '安全优先',
        'security.card1_title': '智能合约',
        'security.card1_desc': '经过全面测试和验证的智能合约，通过 CREATE2 在所有 EVM 链上部署确定性地址。',
        'security.card2_title': '审计协议',
        'security.card2_desc': '全面的安全审计，具有基于角色的访问控制、冻结功能和暂停机制，适用于受监管场景。',
        'security.card3_title': '基础设施',
        'security.card3_desc': '支持 EIP-2612 Permit 和 EIP-3009 元交易。可与智能合约和链上逻辑组合，实现自动化工作流。',

        // Ecosystem
        'ecosystem.title': 'UUSD 生态系统',
        'ecosystem.ai_platforms': 'AI 平台',
        'ecosystem.defi': 'DeFi',
        'ecosystem.liquidity': '流动性',
        'ecosystem.infrastructure': '基础设施',

        // About
        'about.title': '关于 Anything Labs',
        'about.p1': 'Anything Labs 正在构建 AI 代理经济的金融基础设施。我们相信，随着自主代理成为主要的经济参与者，它们用于交易、结算和储值的工具必须专为速度、可编程性和全球互操作性而设计。',
        'about.p2': 'UUSD 是我们的基础产品——一款从零开始为 AI 原生商务设计的稳定币。',

        // Contract
        'contract.title': '合约信息',
        'contract.subtitle': '所有支持的网络上部署相同的地址',
        'contract.label': 'UUSD 合约地址',
        'contract.note': '通过 CREATE2 在所有 EVM 链上部署确定性地址',
        'contract.add_metamask': '添加到 MetaMask',

        // Swap
        'swap.title': '获取 UUSD',
        'swap.subtitle': '链上兑换仅作为小额转账的便捷方式提供',
        'swap.header': '兑换',
        'swap.slippage_label': '滑点容差',
        'swap.from': '支付',
        'swap.to': '接收',
        'swap.balance': '余额',
        'swap.rate': '汇率',
        'swap.min_received': '最少接收',
        'swap.price_impact': '价格影响',
        'swap.connect_wallet': '连接钱包',
        'swap.enter_amount': '输入金额',
        'swap.switch_bsc': '切换到 BSC',
        'swap.loading': '加载中...',
        'swap.invalid_pair': '无效交易对',
        'swap.swap': '兑换',
        'swap.processing': '处理中...',
        'swap.select_token': '选择代币',
        'swap.note': '通过 Universal Router 在 PancakeSwap Infinity (LBAMM) 上交易。您需要 BNB 支付 Gas 费用。',

        // Swap TX status
        'swap.tx_approving': '正在授权代币给 Permit2（如需要）...',
        'swap.tx_signing': '正在签署 Permit2 消息...',
        'swap.tx_confirming': '等待确认中...',
        'swap.tx_submitted': '交易已提交：',
        'swap.tx_success': '兑换成功！',
        'swap.tx_view': '在 BSCScan 上查看',
        'swap.tx_failed': '交易失败',

        // Errors
        'error.user_rejected': '用户拒绝了请求',
        'error.tx_failed': '交易失败',
        'error.insufficient_gas': '余额不足以支付 Gas',
        'error.nonce_low': 'Nonce 太低（请稍后重试）',

        // Wallet
        'wallet.install_prompt': '请先安装 MetaMask 或其他 Web3 钱包。',
        'wallet.connect_failed': '钱包连接失败：',
        'wallet.install_metamask': '请先安装 MetaMask',
        'wallet.added_metamask': 'UUSD 已添加到 MetaMask！',
        'wallet.add_failed': '添加代币失败',

        // Toast
        'toast.copied': '地址已复制到剪贴板！',

        // Footer
        'footer.docs': '文档',
        'footer.whitepaper': '白皮书',
        'footer.security': '安全',
        'footer.github': 'Github',
        'footer.contact': '联系我们',
        'footer.copyright': '© 2026 Anything Labs. 保留所有权利。'
    }
};

class I18n {
    constructor() {
        this.lang = this.detectLanguage();
    }

    detectLanguage() {
        // 1. Check localStorage
        const saved = localStorage.getItem('uusd-lang');
        if (saved && TRANSLATIONS[saved]) return saved;

        // 2. Check browser language
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang && browserLang.startsWith('zh')) return 'zh';

        // 3. Default to English
        return 'en';
    }

    t(key) {
        const dict = TRANSLATIONS[this.lang] || TRANSLATIONS.en;
        return dict[key] || TRANSLATIONS.en[key] || key;
    }

    setLang(lang) {
        if (!TRANSLATIONS[lang]) return;
        this.lang = lang;
        localStorage.setItem('uusd-lang', lang);
        document.documentElement.lang = lang;
        this.apply();
        this.updateSwitcher();
    }

    apply() {
        // Translate data-i18n text content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = this.t(key);
        });

        // Translate data-i18n-html (for elements needing innerHTML)
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            el.innerHTML = this.t(key);
        });

        // Translate data-i18n-placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            el.placeholder = this.t(key);
        });

        // Translate data-i18n-title
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            el.title = this.t(key);
        });
    }

    updateSwitcher() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === this.lang);
        });
    }

    init() {
        document.documentElement.lang = this.lang;
        this.apply();
        this.updateSwitcher();

        // Bind language switcher buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                this.setLang(btn.dataset.lang);
            });
        });
    }
}

// Create global instance
window.I18n = new I18n();
window.TRANSLATIONS = TRANSLATIONS;
