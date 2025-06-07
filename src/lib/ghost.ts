import GhostContentAPI from '@tryghost/content-api';

// 使用站点凭证创建 API 实例
export const ghostClient = new GhostContentAPI({
    url: 'http://pmosred.alotus.com.cn:80', // 这是 Ghost 站点运行在本地环境中的默认 URL
    key: import.meta.env.CONTENT_API_KEY,
    version: 'v5.0',
});
