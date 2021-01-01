module.exports = {
	productionSourceMap: false,
	pwa: {
		name: "Pencyl Lists",
		themeColor: "#00796b",
		msTileColor: "#000000",
		appleMobileWebAppCapable: "yes",
		appleMobileWebAppStatusBarStyle: "black",
	},
	configureWebpack: {
		optimization: {
			splitChunks: {
				minSize: 10000,
				maxSize: 250000,
			},
		},
	},
};
