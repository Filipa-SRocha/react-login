import { Button, SmallButton } from './Button.styled';

const PrimaryButton = ({ text }) => {
	return <Button>{text}</Button>;
};

const SecondaryButton = ({ text, ...params }) => {
	return (
		<Button secondary padded {...params}>
			{text}
		</Button>
	);
};

const CrudActionButton = ({
	text,
	borderColor,
	backgroundColor,
	...params
}) => {
	return (
		<SmallButton
			borderColor={borderColor}
			backgroundColor={backgroundColor}
			{...params}
		>
			{text}
		</SmallButton>
	);
};

export { PrimaryButton, SecondaryButton, CrudActionButton };
