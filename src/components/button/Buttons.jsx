import { BiEditAlt } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

import {
	ButtonPrimary,
	ButtonSecondary,
	SmallButton,
	ButtonAdd,
	SmallerButton,
} from './Button.styled';

const PrimaryButton = ({ text, ...params }) => {
	return <ButtonPrimary {...params}>{text}</ButtonPrimary>;
};

const SecondaryButton = ({ text, width, ...params }) => {
	return (
		<ButtonSecondary width={width} {...params}>
			{text}
		</ButtonSecondary>
	);
};

const CrudActionButton = ({
	text,
	icon,
	borderColor,
	backgroundColor,
	color,
	...params
}) => {
	const Icon =
		icon === 'edit' ? (
			<BiEditAlt />
		) : icon === 'delete' ? (
			<AiOutlineClose />
		) : (
			''
		);

	return (
		<SmallButton
			borderColor={borderColor}
			backgroundColor={backgroundColor}
			color={color}
			{...params}
		>
			{Icon}
			{text}
		</SmallButton>
	);
};

const CrudSmallActionButton = ({
	text,
	icon,
	borderColor,
	backgroundColor,
	color,
	...params
}) => {
	const Icon =
		icon === 'edit' ? (
			<BiEditAlt />
		) : icon === 'delete' ? (
			<AiOutlineClose />
		) : (
			''
		);

	return (
		<SmallerButton
			borderColor={borderColor}
			backgroundColor={backgroundColor}
			color={color}
			{...params}
		>
			{Icon}
			{text}
		</SmallerButton>
	);
};

const AddButton = ({ text, ...params }) => {
	return <ButtonAdd {...params}>{text}</ButtonAdd>;
};

export {
	PrimaryButton,
	SecondaryButton,
	CrudActionButton,
	CrudSmallActionButton,
	AddButton,
};
