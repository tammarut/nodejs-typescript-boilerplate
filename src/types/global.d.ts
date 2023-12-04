// global types can call directly without import
declare global {
	namespace NodeJS {
		interface ProcessEnv {
			TZ?: string
		}
	}
}

export {}
