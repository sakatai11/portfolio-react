/*----KV-----*/
import Kv from "./Kv";
/*----Photo-----*/
import Photo from "./Photo";
/*----Category-----*/
import Category from "./Category";
/*----SelectPhoto-----*/
import Gallery from "./Gallery";
import PropTypes from "prop-types";

const Main = ({ url }) => {
	return (
		<main>
			<Kv />
			<section>
				<div className="mainArticles">
					<Photo url={url} />
					<Category />
					<Gallery />
				</div>
			</section>
		</main>
	);
};

// Main コンポーネントのpropsの型を定義します。
Main.propTypes = {
	// 'url' propは文字列であり、必須です。
	url: PropTypes.string.isRequired,
};

export default Main;
