import { useState } from 'react';

import { AiOutlineDown } from 'react-icons/ai';
import { AiOutlineUp } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';

import { AccordeonTabStyled } from './Accordeon.styled';

export const AccordeonTab = ({ title, setIsOpen, isOpen }) => {
	const toggleAccordeon = () => {
		isOpen ? setIsOpen(false) : setIsOpen(true);
	};

	return (
		<AccordeonTabStyled onClick={toggleAccordeon}>
			<h3>{title}</h3>
			{isOpen ? <AiOutlineUp /> : <AiOutlineDown />}
		</AccordeonTabStyled>
	);
};
