import React from 'react';
import { Grid } from '@material-ui/core';
import AwesomeSlider from 'react-awesome-slider';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss'
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss';

const SectionProject = () => {
	return (
		<div className={'section_projects_container'}>
			<Grid container>
				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<div>
						<h4>Our combo projects</h4>
					</div>
				</Grid>

				<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
					<div className={'projects_slider'}>
						<AwesomeSlider
							cssModule={AwesomeSliderStyles}
							animation="fold-out-animation"
							mobileTouch={true}
							bullets={true}
							organicArrows={true}
						>
							<div>
								<p>First combo project.</p>
							</div>
							<div >
								<p>Second combo project.</p>
							</div>
							<div >
								<p>Third combo project.</p>
							</div>
						</AwesomeSlider>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}

export default SectionProject;
