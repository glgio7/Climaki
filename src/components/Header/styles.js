import styled from "styled-components";

export const StyledHeader = styled.header`
	background-image: url(/assets/banner-background.jpg);
	background-position: bottom;
	background-size: cover;

	width: 100%;
	height: 180px;

	display: flex;
	flex-direction: column;

	position: relative;

	z-index: 5;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.container-top {
		width: 100%;
		height: 50%;
		display: flex;

		align-items: center;

		padding: 0 2rem;
	}

	.logo {
		display: flex;

		width: calc(100vw / 3);
		height: 54px;
		align-items: center;
		cursor: pointer;
	}

	.logo__image {
		object-fit: contain;
		width: 42px;
		opacity: 0.85;
		transition: all 250ms;
		&:hover {
			opacity: 1;
		}
	}

	.logo__title {
		color: #fff;
		margin: 0 0.5rem;
		font-weight: bold;
		font-size: 1.75rem;
		text-shadow: -3px 2px 5px rgba(0, 160, 255, 0.75);
	}

	.search-bar {
		width: calc(100vw / 3);
		display: flex;
		align-items: center;
	}

	.search-bar__input {
		width: 85%;
		padding-left: 1rem;
		border-radius: 3px 0 0 3px;
	}

	.search-bar__button {
		border-radius: 0 3px 3px 0;
		width: 15%;
		cursor: pointer;
		background-color: #000;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.25rem;
	}

	.search-bar__input,
	.search-bar__button {
		height: 30px;
	}

	.container-banner {
		width: 100%;
		height: 50%;
		/* background-image: url(/assets/banner-background.jpg); */
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		background-color: #252525;
	}
	.container-banner__item {
		width: 30%;
		opacity: 1;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.banner__item__text {
		color: #fff;
		text-align: center;
		font-weight: bold;
	}

	.banner__item__image {
		margin-top: 0.5rem;
		color: #0066ee;
		padding: 3px;
		background-color: #fff;
		border-radius: 50%;

		width: 36px;
		height: 36px;
	}

	@media screen and (max-width: 768px) {
		height: auto;
		.container-top {
			flex-wrap: wrap;
			padding: 1rem;
		}

		.search-bar,
		h1 {
			width: 100vw;
		}

		.logo__image {
			opacity: 1;
		}

		.container-banner {
			padding: 0.5rem;
		}

		.container-banner__item {
			flex-direction: row;
			justify-content: space-evenly;
			height: auto;
			width: 100%;
			&:first-child {
				margin-top: -0.5rem;
			}
		}

		.banner__item__text {
			font-size: 0.75rem;
			padding: 0.5rem;
			border-radius: 9px;
			margin-top: 0.5rem;
			width: 80%;
			background-color: rgba(255, 255, 255, 0.5);
		}

		.banner__item__image {
			width: 10%;
			display: flex;
			order: -1;
			width: 28px;
			height: 28px;
		}
	}
`;
