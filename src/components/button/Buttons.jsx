import { Button } from './Button.styled';

const PrimaryButton = ({ text }) => {
	return <Button>{text}</Button>;
};

const SecondaryButton = ({ text }) => {
	return (
		<Button secondary padded>
			{text}
		</Button>
	);
};
export { PrimaryButton, SecondaryButton };
