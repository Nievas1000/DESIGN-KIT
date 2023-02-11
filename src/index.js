import styled from 'styled-components';
import { border, color, space, variant } from 'styled-system';
import { colors } from './colors';
export { colors } from './colors';
export * from './icons';

export const Container = styled('div')(space, border, color);
export const LoginButton = styled('button')(
	space,
	variant({
		variants: {
			primary: {
				position: 'relative',
				display: 'flex',
				width: '108px',
				height: '40px',
				alingItems: 'flex-start',
				flowDirection: 'row',
				background: 'transparent',
				border: `solid 1px ${colors.background.one}`,
				borderRadius: '8px',
				gap: '8px',
				padding: '8px 16px',
				'&:hover': {
					border: `solid 1px ${colors.primary.two}`,
					color: colors.primary.two,
				},
			},
			active: {
				position: 'relative',
				display: 'flex',
				width: '108px',
				height: '40px',
				alingItems: 'flex-start',
				flowDirection: 'row',
				background: colors.primary.two,
				border: 'none',
				borderRadius: '8px',
				gap: '8px',
				padding: '8px 16px',
			},
		},
	})
);

export const Title = styled('h1')(
	color,
	space,
	variant({
		variants: {
			one: {
				fontSize: '72px',
				lineHeight: '72px',
			},
			two: {
				fontSize: '60px',
				lineHeight: '72px',
			},
			three: {
				fontSize: '48px',
				lineHeight: '40px',
			},
			four: {
				fontSize: '34px',
				lineHeight: '40px',
			},
			five: {
				fontSize: '24px',
				lineHeight: '32px',
			},
			six: {
				fontSize: '20px',
				lineHeight: '28px',
			},
		},
	})
);

export const Subtitle = styled('h3')(
	color,
	space,
	border,
	variant({
		variants: {
			one: {
				fontSize: '18px',
				lineHeight: '26px',
			},
			two: {
				fontSize: '16px',
				lineHeight: '24px',
			},
		},
	})
);

export const Text = styled('p')(
	color,
	space,
	variant({
		variants: {
			one: {
				fontSize: '16px',
				lineHeight: '24px',
			},
			two: {
				fontSize: '14px',
				lineHeight: '22px',
			},
			three: {
				fontSize: '12px',
				lineHeight: '18px',
			},
		},
	})
);

export const TextLink = styled('a')(
	color,
	space,
	variant({
		variants: {
			one: {
				fontSize: '16px',
				lineHeight: '24px',
				color: colors.primary.two,
			},
			two: {
				fontSize: '14px',
				lineHeight: '22px',
				color: colors.primary.two,
			},
			three: {
				fontSize: '12px',
				lineHeight: '18px',
				color: colors.primary.two,
			},
		},
	})
);

export const ButtonText = styled('p')(
	color,
	space,
	variant({
		variants: {
			one: {
				fontSize: '18px',
				lineHeight: '26px',
			},
			two: {
				fontSize: '14px',
				lineHeight: '22px',
			},
		},
	})
);

export const NavBarContainer = styled('div')`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0px;
	gap: 722px;
	width: 100%;
	height: 32px;
	background: ${colors.background.three};
	box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12),
		0px 1px 3px rgba(0, 0, 0, 0.2);
`;

export const ContainerTabs = styled('div')`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	padding: 0px;
	height: 32px;
`;

export const Tab = styled('div')(
	color,
	space,
	variant({
		variants: {
			primary: {
				cursor: 'pointer',
				justifyContent: 'center',
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				height: '32px',
				gap: '4px',
				background: 'transparent',
				borderWidth: '0px 1px',
				borderStyle: 'solid',
				borderColor: colors.background.six,
				color: colors.grey.five,
				padding: '0px 10px',
				'&:hover': {
					color: colors.primary.two,
				},
			},
			active: {
				justifyContent: 'center',
				color: colors.grey.five,
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				height: '32px',
				gap: '4px',
				background: colors.background.one,
				borderWidth: '0px 1px',
				borderStyle: 'solid',
				borderColor: colors.background.six,
				cursor: 'pointer',
				padding: '0px 10px',
			},
			more: {
				justifyContent: 'center',
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				width: '78px',
				height: '32px',
				gap: '1em',
				background: colors.background.one,
				borderWidth: '0px 1px',
				borderStyle: 'solid',
				borderColor: colors.background.six,
				color: colors.grey.five,
				cursor: 'pointer',
			},
		},
	})
);

export const OpenAppTab = styled('div')`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0px 24px;
	gap: 16px;
	width: 169px;
	height: 32px;
`;

export const AddApplication = styled('div')`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 0px 16px;
	gap: 4px;
	width: 144px;
	height: 32px;
	cursor: pointer;
`;

export const UserTab = styled('div')`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 0px 16px;
	width: 80px;
	height: 32px;
`;

export const Settings = styled('div')`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 0px 16px;
	gap: 4px;
	width: 76px;
	height: 32px;
	border-width: 0px 1px;
	border-style: solid;
	border-color: ${colors.background.six};
`;

export const Others = styled('div')(
	color,
	space,
	variant({
		variants: {
			container: {
				display: 'flex',
				flexdirection: 'row',
				alignitems: 'center',
				gap: '1em',
				padding: '0 1em',
				borderwidth: '0px 1px',
				borderstyle: 'solid',
				bordercolor: color,
				'&:hover': {
					background: color,
				},

				'&::selection': {
					background: color,
				},
			},
		},
	})
);

export const ContainerMoreApps = styled('div')`
	position: absolute;
	background: ${colors.background.five};
	width: 200px;
	height: 312px;
	border: solid 1px ${colors.primary.two};
	box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.14),
		0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2);
	border-radius: 4px;
	height: auto;
	max-height: 312px;
	overflow-x: hidden;
`;

export const ContainerSignOut = styled('div')`
	width: 96px;
	height: 28px;
	background: ${colors.background.five};
	border: 1px solid ${colors.primary.two};
	box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.14),
		0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2);
	border-radius: 4px;
`;

export const TabDropdown = styled('div')(
	color,
	space,
	variant({
		variants: {
			primary: {
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				padding: '8px 16px',
				height: '38px',
				background: 'transparent',
				color: colors.grey.ten,
				cursor: 'pointer',
				'&:hover': {
					background: colors.background.three,
					color: colors.primary.two,
				},
			},
			active: {
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				padding: '8px 16px',
				height: '38px',
				background: colors.primary.two,
				cursor: 'pointer',
			},
		},
	})
);

export const SelectClasses = styled('button')(
	space,
	variant({
		variants: {
			primary: {
				display: 'flex',
				width: '160px',
				height: '40px',
				alignItems: 'center',
				justifyContent: 'center',
				flowDirection: 'row',
				background: 'transparent',
				border: `solid 1px ${colors.background.ten}`,
				color: colors.grey.ten,
				borderRadius: '4px',
				gap: '16px',
				'&:hover': {
					border: `solid 1px ${colors.primary.two}`,
					color: colors.primary.two,
				},
			},
			active: {
				display: 'flex',
				width: '160px',
				height: '40px',
				alignItems: 'center',
				justifyContent: 'center',
				flowDirection: 'row',
				background: 'transparent',
				border: `solid 1px ${colors.primary.two}`,
				color: colors.primary.two,
				borderRadius: '4px',
				gap: '16px',
			},
		},
	})
);

export const ContainerClasses = styled('div')`
	position: absolute;
	background: ${colors.background.five};
	width: 310px;
	height: 301px;
	border: solid 1px ${colors.primary.two};
	box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.14),
		0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2);
	border-radius: 4px;
	height: auto;
	max-height: 312px;
	overflow-x: hidden;
`;

export const InputSearchClass = styled('input')`
	background: transparent;
	border: none;
	width: 100%;
	text-indent: 10px;
	height: 34px;
	color: ${colors.grey.six};
`;

export const ContainerInfoAddApplication = styled('div')`
box-sizing: border-box;

    max-width: 629px;
    margin: 3rem 5rem;
    padding: 1rem;
    
background:${colors.background.one};

border: 1px solid ${colors.background.ten};
border-radius: 8px;
`;
