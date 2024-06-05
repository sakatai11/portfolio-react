import SitemapGenerator from "sitemap-generator";

// サイトマップを生成するウェブサイトのURL
const websiteUrl = "https://www.taichi-portfolio.com";

// サイトマップジェネレーターのインスタンスを作成
const generator = SitemapGenerator(websiteUrl, {
	filepath: "./dist/sitemap.xml",
});

// 'done'イベントが発生したら実行される関数
generator.on("done", () => {
	console.log("サイトマップの生成が完了しました！");
});

// サイトマップの生成を開始
generator.start();
