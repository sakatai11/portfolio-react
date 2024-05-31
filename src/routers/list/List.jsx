import Animation from "../../components/layouts/Animation";
import ListMain from "../../components/ListMain";
import PropTypes from 'prop-types';

function List({ link }) {
	return (
		<>
			<Animation>
				<ListMain url={link} />
			</Animation>
		</>
	);
}

// List コンポーネントのpropsの型を定義します。
List.propTypes = {
  // 'link' propは文字列であり、必須です。
  link: PropTypes.string.isRequired,
};

export default List;
