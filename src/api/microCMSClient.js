import { client } from "../../libs/client";

const getListData = async (endpoint, limit, offset, fields, filters, id) => {
	// endpointを引数として受け取る

	let data;

	if (id) {
		data = await client.get({
			endpoint: endpoint, // 引数のendpointを使う
			contentId: id, //コンテンツIDを追加
			queries: {
				fields, // IDがある場合は、limit, offset, filtersは不要
			},
		});
	} else {
		data = await client.get({
			endpoint: endpoint, // 引数のendpointを使う
			queries: {
				limit,
				offset,
				fields,
				filters,
			},
		});
	}

	// 開発環境のみconsole.logを実行する
	if (process.env.NODE_ENV === "development") {
		//dataが取得できているのか確認
		// console.log(data.contents);
	}

	// propsオブジェクトを返す
	return {
		props: {
			data,
		},
	};
};

export default getListData;
