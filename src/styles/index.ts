import styled from "styled-components";

export const Home = styled.main`
	width: 100%;
	height: 100vh;

	background-image: url("/assets/wallpaper2.jpg");
	background-size: cover;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;

	h1 {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.logo__image {
		width: 120px;
	}

	span {
		margin-block: 1rem;

		color: #fff;

		font-weight: bold;
		font-size: 2rem;
		text-shadow: -3px 2px 5px rgba(0, 100, 255, 0.75);
	}

	.text-container {
		width: 50%;
		height: 180px;

		display: flex;
		align-items: center;
		gap: 6px;
	}

	.text-container li {
		display: flex;
		flex-direction: column;
		justify-content: center;

		min-width: 240px;
		height: 100%;

		padding: 6px;

		background-color: rgba(0, 0, 0, 0.5);
	}

	p {
		font-size: 1rem;
		font-weight: normal;
		text-align: center;
		text-shadow: 0px 0px 2px #fff;

		color: #fff;
	}

	button {
		cursor: pointer;

		width: 240px;
		height: 48px;

		border: 1px rgba(0, 100, 255) solid;

		color: rgba(0, 100, 255);
		font-weight: bold;

		transition: all 200ms;
	}

	@media screen and (max-width: 900px) {
		.text-container {
			flex-direction: column;

			width: 90%;
		}

		.text-container li {
			width: 100%;

			padding: 1rem;
		}
	}
`;
