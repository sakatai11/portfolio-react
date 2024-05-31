import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import getListData from "../api/microCMSClient";
import PhotoList from "./PhotoList";
import LoadButton from "./parts/LoadButton";
import LinkState from "./hooks/LinkState";
import loadingImg from "../assets/images/loading-img.png";
import styles from "./layouts/ListArea.module.css";
import PropTypes from 'prop-types'; // PropTypesをインポートする


const ListPhoto = ({ pageUrl, filter }) => {
	const [photo, setPhoto] = useState([]); ////prevPhotosとuniqueNewPhotosの結合データ
	const [count, setCount] = useState(0); // ロードされた写真セットのカウント
	const [isLoadingImg, setIsLoadingImg] = useState(true); // 写真データの読み込み表示
	const [isLoading, setIsLoading] = useState(false); // ボタンをクリックした時の文言の表示
	const [hasMore, setHasMore] = useState(true); // さらに写真があるかどうかのフラグ
	const [button, setButton] = useState(false); // 画像が読み込まれたら表示

	console.log(hasMore);
	console.log(pageUrl);

	// LinkコンポーネントのState読み込み
	// const title = LinkState();

	// 新しい写真を既存のリストに追加する前に重複をチェックする
	const addNewPhotos = (photos) => {
		setPhoto((prevPhotos) => {
			const newPhotos = photos.slice(0, 9);
			console.log(newPhotos);
			setButton(true);
			console.log(prevPhotos);
			const existingIds = new Set(prevPhotos.map((li) => li.id));
			console.log(existingIds);
			const uniqueNewPhotos = newPhotos.filter((li) => !existingIds.has(li.id));
			console.log(prevPhotos);
			console.log(uniqueNewPhotos);
			//prevPhotos・・・既存で格納している写真データ
			//uniqueNewPhotos・・・新しく追加する写真データ
			return [...prevPhotos, ...uniqueNewPhotos];
		});
		// 写真が9件もしくは9件未満の場合、さらに写真がないと判断
		console.log(photos.length);
		setHasMore(photos.length > 9);
	};

	// ページURLに基づいてフィルター条件を返すヘルパー関数
	const getFilterForPageUrl = (pageUrl) => {
		const filters = {
			"/list/outing/": "tag[contains]おでかけ",
			"/list/random_note/": "tag[contains]雑記",
			"/list/sports/": "tag[contains]スポーツ",
		};
		console.log(filters[pageUrl]);
		return filters[pageUrl] || ""; // マッチするフィルターがなければ空文字を返す
	};

	useEffect(() => {
		// APIから写真データを取得する
		const fetchData = async () => {
			try {
				let data; // data変数を関数スコープで定義する
				console.log(filter);
				const staticFilter = getFilterForPageUrl(pageUrl);
				console.log(staticFilter);
				const appliedFilter = filter ? `tag[contains]${filter}` : staticFilter;
				console.log(appliedFilter);
				data = await getListData(
					"photo",
					10,
					count * 9,
					["id", "date", "tag", "title", "image", "url"],
					appliedFilter
				);

				console.log(count);
				console.log(data.props.data.contents); // ここでは全ての写真が取得される
				setIsLoadingImg(false);
				// 取得した写真データが空の場合、ロードモアを停止
				if (data && data.props.data.contents.length === 0) {
					setHasMore(false);
					return;
				}
				// 重複をチェックしてから新しい写真をリストに追加する
				addNewPhotos(data.props.data.contents);
			} catch (error) {
				console.error(error);
				setHasMore(false); // エラーが発生した場合もロードモアを停止
			}
		};

		if (hasMore) {
			fetchData().then(() => {
				setIsLoading(false); // 読み込み完了時にisLoadingをfalseに設定
			});
		}
	}, [count, hasMore, pageUrl, filter]); // count,hasMore,pageUrlが変更されるたびにuseEffectをトリガーする

	const loadMore = () => {
		console.log(hasMore);
		if (hasMore) {
			setIsLoading(true); // 読み込み開始時にisLoadingをtrueに設定
			setCount((prev) => prev + 1); // 次の9枚をロードする
			console.log(count);
		}
	};

	return (
		<div className={styles.listArea}>
			<div className="titleArea">
				<LinkState name={filter ? filter : getFilterForPageUrl(pageUrl)} />
			</div>
			<ul className={`${styles.photoContents} ${"photoContents"}`}>
				{isLoadingImg
					? Array.from({ length: 9 }, (_, index) => (
							<li key={`loading-${index}`} className={styles.loadingContent}>
								<img src={loadingImg} alt="読み込み中" />
							</li>
						))
					: photo.map((photoList) => (
							<li key={photoList.id}>
								<PhotoList list={photoList} LinkRouter={Link} />
							</li>
						))}
			</ul>
			{hasMore && (
				<div className="linkContent">
					<LoadButton
						id="btnClick"
						onClick={loadMore}
						style={{ display: button ? "block" : "none" }} // buttonの状態に応じて表示/非表示を切り替える
						isLoading={isLoading} // isLoading状態をLoadButtonに渡す
					/>
				</div>
			)}
		</div>
	);
};

// ListPhoto コンポーネントのpropsの型を定義します。
ListPhoto.propTypes = {
  // 'pageUrl' propは文字列であり、必須です。
  pageUrl: PropTypes.string.isRequired,
  // 'filter' propは文字列であり、必須ではありません。
  filter: PropTypes.string,
};

export default ListPhoto;
