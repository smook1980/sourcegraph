import React from "react";

import CSSModules from "react-css-modules";
import style from "sourcegraph/components/styles/loader.css";

class Loader extends React.Component {
	render() {
		return (
			<div className={style.loader}>
				<span className={style.loader1}>●</span>
				<span className={style.loader2}>●</span>
				<span className={style.loader3}>●</span>
			</div>
		);
	}
}

Loader.propTypes = {
	stretch: React.PropTypes.bool,
};

export default CSSModules(Loader, style, {allowMultiple: true});
