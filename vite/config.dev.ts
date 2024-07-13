import { mergeConfig, type UserConfig } from 'vite'
import baseConfig from './config.base'

// 开发缓解
export default mergeConfig({
	mode: 'development',
	base: '/',
	server: {
		port: 3000,
		host: '0.0.0.0',
		open: false,
		fs: {
			// 文件打开是相对于根目录的绝对路径
			strict: true,
		},
		proxy: {
			// 授权中心地址代理
			// '/auth': {
			//     target: loadEnv('development', process.cwd()).VITE_AUTH_URL,
			//     changeOrigin: true,
			// },
		},
	},
}, baseConfig)
