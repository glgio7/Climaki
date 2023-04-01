import styled from "styled-components";

export const ListContainer = styled.ul`
	background-color: rgba(255, 255, 255, 0.5);

	padding: 1rem;

	border-radius: 0 0 10px 10px;

	width: 80%;

	@media screen and (max-width: 900px) {
		padding: 0;
	}
`;

export const Item = styled.li`
	height: 48px;
	width: 100%;

	cursor: pointer;

	display: flex;
	justify-content: space-between;
	align-items: center;

	margin-bottom: 1rem;
	padding: 0 1rem;

	border-radius: 10px;

	background-color: rgba(0, 75, 150, 0.75);

	transition: all 350ms;

	&:hover {
		background-color: rgba(0, 0, 0, 0.75);
	}

	img {
		width: 100%;
	}

	.icon {
		height: 36px;
		width: 36px;

		border-radius: 50%;

		background-color: rgba(255, 255, 255, 0.75);

		object-fit: cover;
	}

	h4 {
		font-size: 1rem;

		text-align: left;

		width: 30%;

		color: #fff;
	}

	.min-max {
		width: 30%;
		height: 75%;

		border-radius: 10px;

		display: flex;
		align-items: center;
		justify-content: space-evenly;

		background-color: rgba(230, 210, 190);
	}

	p {
		color: #000;

		font-weight: bold;

		display: inline-block;

		border-left: #000 3px solid;

		width: 35%;
	}

	@media screen and (max-width: 900px) {
		padding: 0 0.5rem;
		margin-block: 0;

		border-radius: 0;
		border-bottom: 1px #fff solid;

		&:last-child {
			border-bottom: none;
		}

		h4 {
			width: 40%;

			font-size: 0.9rem;
		}
		.icon {
			width: 24px;
			height: 24px;
		}

		.min-max {
			width: 40%;
		}

		p {
			border-left: none;

			text-align: center;
			font-size: 0.75rem;
		}
	}
`;
