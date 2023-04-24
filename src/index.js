import styled from 'styled-components';
import {
	border,
	color,
	fontWeight,
	position,
	space,
	variant,
} from 'styled-system';
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
			mobile: {
				position: 'relative',
				display: 'flex',
				width: '108px',
				height: '40px',
				alingItems: 'flex-start',
				flowDirection: 'row',
				background: colors.background.four,
				border: `solid 2px ${colors.primary.two}`,
				borderRadius: '8px',
				gap: '8px',
				padding: '8px 16px',
				color: colors.primary.two,
			},
			mobile_active: {
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
				color: colors.grey.ten,
			},
		},
	})
);

export const Title = styled('h1')(
	color,
	space,
	fontWeight,
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
	fontWeight,
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
	fontWeight,
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
	fontWeight,
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
	fontWeight,
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
	height: 40px;
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
				color: colors.grey.six,
				padding: '0px 10px',
				'&:hover': {
					color: colors.primary.two,
				},
			},
			active: {
				justifyContent: 'center',
				color: colors.grey.nine,
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
	width: 140px;
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
	height: 40px;
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

export const ContainerPersonalZone = styled('div')`
	width: 239px;
	height: 112px;
	background: ${colors.background.three};
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
	margin-top: 10px;
	margin-right: 24px;
`;

export const PersonalZoneTab = styled('div')(
	space,
	color,
	position,
	variant({
		variants: {
			primary: {
				position: 'fixed',
				display: 'flex',
				width: '215px',
				height: '40px',
				alignItems: 'center',
				marginLeft: '22px',
				color: colors.grey.ten,
				'&:hover': {
					color: colors.primary.two,
				},
			},
		},
	})
);

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

	background: ${colors.background.one};

	border: 1px solid ${colors.background.ten};
	border-radius: 8px;
`;

export const InputDegree = styled('input')`
	height: 2px;
	width: 320px;
	-webkit-appearance: none;
	appearance: none;
	cursor: pointer;
	z-index: 1;
	&::-webkit-slider-runnable-track {
		background: #282a29;
		height: 2px;
	}
	&::-webkit-slider-thumb {
		-webkit-appearance: none; /* Override default look */
		appearance: none;
		background: url(${'./img/iconDegree.png'}) #47bc82;
		background-size: 65%;
		background-position: center;
		background-repeat: no-repeat;
		width: 24px;
		height: 24px;
		margin-top: -10px;
		box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12),
			0px 1px 3px rgba(0, 0, 0, 0.2);
		border-radius: 16px;
	}
`;
export const ContainerRangeLabels = styled('div')`
	position: absolute;
	display: flex;
	list-style: none;
	color: white;
	top: 55%;
	left: 49%;
	transform: translate(-50%, -41%);
	text-align: center;
`;

export const ContainerMenuSettings = styled('div')(
	space,
	color,
	variant({
		variants: {
			primary: {
				width: '370px',
				height: '798px',
				background: colors.background.four,
				borderRadius: '8px',
				marginLeft: '24px',
				marginTop: '26px',
				boxShadow:
					'0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)',
			},
		},
	})
);

export const TabMenuSettings = styled('div')(
	space,
	color,
	variant({
		variants: {
			primary: {
				cursor: 'pointer',
				display: 'flex',
				width: '344px',
				height: '58px',
				background: colors.primary.two,
				border: `solid 1px ${colors.background.ten}`,
				borderRadius: '8px',
				marginLeft: '13px',
				marginTop: '16px',
				borderBottom: `1px solid ${colors.background.seven}`,
				alignItems: 'center',
			},
		},
	})
);

export const ContainerSettingOpition = styled('div')(
	space,
	color,
	variant({
		variants: {
			primary: {
				width: '1157px',
				height: '798px',
				background: colors.background.four,
				borderRadius: '8px',
				marginLeft: '24px',
				marginTop: '26px',
				boxShadow:
					'0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)',
			},
		},
	})
);

export const ContainerDeleteOption = styled('div')(
	space,
	color,
	variant({
		variants: {
			primary: {
				display: 'flex',
				marginLeft: '24px',
				marginTop: '26px',
			},
		},
	})
);

export const Button = styled('button')(
	space,
	color,
	variant({
		variants: {
			delete: {
				display: 'flex',
				width: '100px',
				height: '42px',
				background: colors.background.four,
				border: `solid 2px ${colors.feedback.error}`,
				borderRadius: '8px',
				marginRight: '24px',
				alignItems: 'center',
				justifyContent: 'center',
				color: colors.feedback.error,
				'&:hover': {
					background: colors.feedback.error,
					border: `2px solid ${colors.feedback.error}`,
					color: colors.grey.ten,
				},
			},
			confirm: {
				display: 'flex',
				width: '100px',
				height: '42px',
				background: colors.background.four,
				border: `solid 2px ${colors.feedback.succes}`,
				borderRadius: '8px',
				marginRight: '24px',
				alignItems: 'center',
				justifyContent: 'center',
				color: colors.feedback.error,
				'&:hover': {
					background: colors.feedback.succes,
					border: `2px solid ${colors.feedback.succes}`,
					color: colors.grey.ten,
				},
			},
		},
	})
);

export const ContainerModalDeleteAccount = styled('div')(
	space,
	color,
	variant({
		variants: {
			primary: {
				width: '512px',
				height: '290px',
				background: colors.background.four,
				borderRadius: '8px',
			},
		},
	})
);

export const DeleteAplicationTab = styled('div')(
	space,
	color,
	variant({
		variants: {
			primary: {
				position: 'absolute',
				zIndex: '1',
				width: '310px',
				color: colors.grey.ten,
				height: '44px',
				background: colors.background.five,
				borderRadius: '4px',
				border: `1px solid ${colors.primary.two}`,
				boxShadow:
					'0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2)',
				'&:hover': {
					color: colors.primary.two,
				},
			},
		},
	})
);

export const ModalDeleteAplication = styled('div')(
	space,
	color,
	variant({
		variants: {
			primary: {
				width: '512px',
				height: '216px',
				background: colors.background.four,
				borderRadius: '8px',
				boxShadow:
					'0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)',
			},
		},
	})
);

export const ContainerDeletedConfirm = styled('div')(
	space,
	color,
	variant({
		variants: {
			primary: {
				display: 'flex',
				width: '242px',
				height: '54px',
				background: colors.feedback.succes,
				borderRadius: '8px',
				color: colors.grey.ten,
				filter:
					'drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.14)) drop-shadow(0px 3px 14px rgba(0, 0, 0, 0.12)) drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.2))',
			},
		},
	})
);

export const CircleMetrics = styled('span')(
	space,
	color,
	variant({
		variants: {
			primary: {
				borderRadius: '50%',
				background: colors.grey.four,
				border: `1px solid ${colors.grey.six}`,
				width: '16px',
				height: '16px',
				boxShadow:
					'0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
			},
		},
	})
);
