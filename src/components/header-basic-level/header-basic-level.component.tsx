import React from 'react';
import './header-basic-level.component.styles.scss';

const HeaderBasicLevel: React.FC = () => {
	return (
		<div className="cg-header__basic-level">
			<span className="spacer" />
			<div className="cg-header__basic-level__info">
				<span className="cg-header__basic-level__info--display-email">
					info@computergross.it
				</span>
				<span className="cg-header__basic-level__info--display-phone">
					+39 05719977
				</span>
			</div>
		</div>
	);
};

export default HeaderBasicLevel;
