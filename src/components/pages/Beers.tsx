import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

// Assets
// import search from '../../assets/search.svg';

// Imported components
import { theme } from '../utils';
// import { Beer } from '../templates';
import { inputStorage } from '../Recoil';

export const Beers: React.FC = () => {
	const [, setUserInput] = useRecoilState(inputStorage);
	const { register, handleSubmit } = useForm();
	const onSubmit = (data: any) => setUserInput(data.input);
	const [show, setShow] = useState(false);

	return (
		<Container>
			<Searchpanel>
				<ContextContainer>
					<H1>Find your beer!</H1>
					<p>
						Are you searching for a craft beer, <br />
						but doesn’t know where to buy it?
					</p>
				</ContextContainer>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<Input type='text' placeholder='Search' {...register('input')}></Input>
					{/* errors && errors.input */}
					<Button
						type='submit'
						id='submit'
						onClick={() => {
							setShow(true);
						}}
					>
						{' '}
						Press
						{/* <Img src={search} alt='search button' /> */}
					</Button>
				</Form>
			</Searchpanel>
			{/* show && <Beer /> */}
		</Container>
	);
};

const Container = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Searchpanel = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 1rem 0 3rem 0;
`;

const ContextContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const H1 = styled.h1`
	margin-bottom: 0.5rem;
`;

const Form = styled.form`
	margin-top: 1.5rem;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const Input = styled.input`
	height: 3rem;
	width: 25rem;
	padding: 1rem;
	border: 0;
	border-radius: 20px;
	box-shadow: 2px 4px 15px ${theme.shadowColor};
	outline: none;
`;

const Button = styled.button`
	padding: 0;
	background-color: transparent;
	border: none;
	position: absolute;
	top: 25%;
	right: 15px;
`;

// const Img = styled.img``;
