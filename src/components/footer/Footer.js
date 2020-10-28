import React from 'react';
import StyledFooter from './FooterStyles';

export default function Footer() {
	return (
		<StyledFooter>
			<div>
				<p>© Jake Grella</p>
				<a href='jakegrella.com' target='blank'>
					Resume
				</a>
			</div>
			<div>
				<p>(708) 205-1007</p>
				<a href='jakegrella.com' target='blank'>
					jake@jakegrella.com
				</a>
			</div>
			<div>
				<a href='https://www.jakegrella.com' target='blank'>
					Photo
				</a>
				<a href='https://www.dwylco.com' target='blank'>
					Dwylco
				</a>
			</div>
		</StyledFooter>
	);
}
