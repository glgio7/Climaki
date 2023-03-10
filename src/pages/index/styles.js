import styled from "styled-components";

export const Container = styled.main`
	min-height: 100vh;
	position: relative;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 1rem;
	width: 100%;

	/* PATTERNS */
	img {
		width: 100%;
	}

	p:first-letter,
	h2:first-letter,
	h3:first-letter,
	h5:first-letter {
		text-transform: uppercase;
	}
	/////////////////

	/* Out of Container */
	h1,
	span {
		color: #fff;
		background-color: rgba(0, 100, 175, 1);
		width: 80%;
		text-align: center;
		font-size: 1.5rem;
		padding: 0.5rem 0;
		border-radius: 12px 12px 0 0;
		text-shadow: 0px 5px 5px #000;
	}

	h1 {
		margin-top: 2rem;
	}

	span {
		text-shadow: none;
		font-weight: bold;
		background-color: rgba(250, 230, 210);
		color: #000;
		border-radius: 00 10px 10px;
		font-size: 1.5rem;
	}

	nav {
		background-color: #101010;
		position: fixed;
		left: 1rem;
		bottom: 1rem;
		z-index: 5;
		padding: 0 0.5rem;
		border-radius: 12px;
		pointer-events: none;
		opacity: 0;
	}

	nav.active {
		opacity: 1;
		pointer-events: all;
	}

	.nav-button {
		cursor: pointer;
		font-size: 2.5rem;
		display: block;
		margin-block: 1rem;
		color: #111;
		background-color: #fff;
		border: 3px rgba(0, 100, 175, 1) outset;
		border-radius: 50%;
	}

	/////////////////

	.container {
		min-height: calc(100vh - 180px);
		background-color: rgba(0, 0, 0, 0.75);
		border-radius: 10px;
		margin: 0 auto;
		margin-top: 2rem;
		text-align: center;
		padding-bottom: 2rem;
		width: 80%;
		color: #fff;
		position: relative;
	}

	h2 {
		width: 100%;
		border-radius: 10px 10px 0 0;
		padding: 0.5rem 0;
		background-color: #fff;
		color: rgba(0, 100, 175, 1);
	}

	.weather-icon {
		margin-top: 1rem;
		width: 42px;
		height: 42px;
		border-radius: 50%;
		background-color: #fff;
		object-fit: contain;
	}

	h3 {
		margin-top: 1rem;
	}

	.info__city {
		margin: 0 auto;
		height: auto;
		margin-block: 2rem;
	}

	.info__city h4 {
		text-align: center;
		margin-top: 1rem;
	}

	.info__city p {
		margin: 0 auto;
		border-radius: 12px;
		margin-top: 0.5rem;
		padding: 0.5rem;
		width: fit-content;
		font-weight: bold;
		background-color: #fff;
		color: rgba(0, 100, 175, 1);
	}

	button {
		cursor: pointer;

		width: 180px;
		height: 48px;

		border-radius: 10px;

		font-weight: bold;

		color: #fff;

		background-color: rgba(0, 100, 175, 1);

		transition: all 350ms;
		&:hover {
			color: #000;
			background-color: rgba(255, 255, 2555, 0.75);
		}
	}

	.weekly-container {
		overflow-y: auto;
		position: absolute;
		top: 0;
		height: 100%;
		transition: all 500ms;
		background-color: rgba(0, 0, 0, 1);
		border-radius: 10px;
		margin: 0 auto;
		text-align: center;
		padding: 0;
		width: 100%;
		color: #fff;
		pointer-events: none;
		opacity: 0;
	}

	.weekly-container.active {
		opacity: 1;
		pointer-events: all;
	}

	.weekly-list {
		display: inline-flex;
		padding: 1rem 0;
		align-items: center;
		justify-content: space-evenly;
		width: 100%;
		border-bottom: 1px solid rgba(255, 255, 255, 0.25);
	}

	.weekly-list li {
		width: 20%;
	}

	.weekly-list h3 {
		font-size: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: rgba(0, 110, 230, 1);
	}

	.weekly-list img {
		margin-left: 6px;
		width: 36px;
		object-fit: contain;
	}

	@media screen and (max-width: 900px) {
		nav {
			left: 0;
			bottom: 0;
			padding: 0 0.25rem;
			border-radius: 0 12px 0 0;
		}

		h1 {
			width: 80%;
		}

		.weekly-list {
			flex-wrap: wrap;
			flex-direction: row;
			justify-content: center;
			padding: 0;
			align-items: flex-start;
			border-bottom: 0;
		}
		.weekly-list li {
			width: 33%;
			margin-top: 1rem;
		}

		.weekly-list h3 {
			flex-direction: row;
			align-items: center;
		}

		.weekly-list li:nth-child(1),
		.weekly-list li:nth-child(2) {
			padding: 0 0.5rem;
			margin-block: 1px;
			background-color: rgba(0, 0, 0, 0.5);
			display: inline-flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
		}
	}
`;
