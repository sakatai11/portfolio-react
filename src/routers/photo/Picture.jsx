import Animation from "../../components/layouts/Animation";
import { useParams } from "react-router-dom";
import PicMain from "../../components/PicMain";
import useTracking from "../../components/hooks/useTracking";
import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";

function Picture({ link }) {
	//イベントフック
	useTracking();

	const { id } = useParams(); // URLからidパラメータを取得
	console.log(id);

	return (
		<>
			<Helmet>
				<title>{`${id} | TAICHI’s PHOTO `}</title>
				<meta name="description" content="写真一覧です。" />
				<meta property="og:title" content={`${id} | TAICHI’s PHOTO `} />
				<meta property="og:description" content="写真一覧です。" />
				<meta
					name="google-site-verification"
					content="vTwx4WhB59EIrxE0WLjqCeIu3qL3T65umn0UnsTj6Vo"
				/>
			</Helmet>
			<Animation>
				<PicMain id={id} url={link} />
			</Animation>
		</>
	);
}

// Picture コンポーネントのpropsの型を定義します。
Picture.propTypes = {
	link: PropTypes.string.isRequired, // 'link' propは文字列であり、必須です
};

export default Picture;
