import React from 'react';
import { connect } from 'react-redux'
import { colors, mediaQueries } from '../../styles/variables';
import Search from '../global/SearchBox';
import { Link } from '../../routes';

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: 'hide-menu'
		};
		this.toggleMenu = this.toggleMenu.bind(this);
	}

	toggleMenu() {
		var show = this.state.showMenu === 'hide-menu' ? 'show-menu' : 'hide-menu';
		this.setState({ showMenu: show });
	}

	render() {
		return (
			<nav className={this.state.showMenu + ' nav shadow'}>
				<div className="nav-left">
					<Link href="/">
						<h1>
							<img className="logo" src="/static/images/sportscard-logo.png" alt="Sports Card" />
						</h1>
					</Link>
				</div>
				<div className="nav-right">
					<div className="links">
						{this.props.authed == undefined || this.props.authed == false ? (
							<span>
								<Link href="/login">
									<a>log in</a>
								</Link>
								<Link href="/signup">
									<a id="signup">sign up</a>
								</Link>
							</span>
						) : (
							<span>
								<Link route="me">
									<a>My SportsCard</a>
								</Link>
								<Link href="/logout">
									<a>Log Out</a>
								</Link>
							</span>
						)}
					</div>
					<button
						className="hamburger hamburger--squeeze"
						type="button"
						aria-label="Menu"
						aria-controls="navigation"
						onClick={this.toggleMenu.bind(this)}
					>
						<span className="hamburger-box">
							<span className="hamburger-inner" />
						</span>
					</button>
				</div>
				{/* styles */}
				<style jsx>{`
					.nav {
						display: flex;
						justify-content: space-between;
						align-items: center;
						background: ${colors.blue};
						padding: 0 1rem;
						height: 4.25rem;
						z-index: 101;
						position: fixed;
						top: 0;
						left: 0;
						width: 100%;
					}
					.nav-left {
						display: flex;
						align-items: center;
						justify-content: flex-start;
					}
					h1 {
						margin: 0 1.5rem 0 0;
						cursor: pointer;
					}
					.logo {
						display: block;
						max-width: 170px;
					}
					.nav-right {
						flex-grow: 1;
						display: flex;
						align-items: center;
						justify-content: flex-end;
					}
					.search {
						display: none;
					}
					a {
						display: none;
						color: white;
						margin-left: 1rem;
						font-family: 'proxima-nova', sans-serif;
						font-weight: 700;
						font-style: italic;
						text-decoration: none;
					}

					a#signup {
						background: linear-gradient( 90deg,
							${colors.lightgreen} 0%,
							${colors.darkgreen} 100%);
						padding: 2px 15px;
					}

					a:hover {
						text-decoration: none;
						color: ${colors.darkorange};
					}

					@media ${mediaQueries.largeUp} {
						a,
						.search {
							display: unset;
						}
						.hamburger {
							display: none !important;
						}
					}
					@media ${mediaQueries.largeDown} {
						.show-menu .nav-right {
							position: fixed;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
                            background-color: ${colors.blue};
                            flex-direction: column;
                            justify-content: flex-start;
                            padding-top: 5rem;
                        }
						.show-menu .links,
						.show-menu .links span {
                            margin-top: 2rem;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
						}
						.show-menu .links span {
							margin-top: 0;
						}
                        .show-menu .links a {
                            margin: 0.5rem 0;
                        }
						.show-menu a,
						.show-menu .search {
							display: unset;
                        }
					}

					/* HAMBURGER MENU */
					.hamburger {
						padding: 0 15px;
						display: inline-block;
						cursor: pointer;
						transition-property: opacity, filter;
						transition-duration: 0.15s;
						transition-timing-function: linear;
						font: inherit;
						color: inherit;
						text-transform: none;
						background-color: transparent;
						border: 0;
						margin: 0;
						overflow: visible;
						cursor: pointer;
						-webkit-appearance: none;
                        -moz-appearance: none;
                        position: fixed;
                        top: 0;
                        right: 1rem;
                        height: 4.25rem;
					}
					.hamburger:hover {
						opacity: 0.7;
					}

					.hamburger-box {
						width: 40px;
						height: 24px;
						display: inline-block;
						position: relative;
					}

					.hamburger-inner {
						display: block;
						top: 50%;
						margin-top: -2px;
					}
					.hamburger-inner,
					.hamburger-inner::before,
					.hamburger-inner::after {
						width: 40px;
						height: 4px;
						background-color: ${colors.white};
						border-radius: 4px;
						position: absolute;
						transition-property: transform;
						transition-duration: 0.15s;
						transition-timing-function: ease;
					}
					.hamburger-inner::before,
					.hamburger-inner::after {
						content: "";
						display: block;
					}
					.hamburger-inner::before {
						top: -10px;
					}
					.hamburger-inner::after {
						bottom: -10px;
					}
					.hamburger--squeeze .hamburger-inner {
						transition-duration: 0.075s;
						transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
					}
					.hamburger--squeeze .hamburger-inner::before {
						transition: top 0.075s 0.12s ease, opacity 0.075s ease;
					}
					.hamburger--squeeze .hamburger-inner::after {
						transition: bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);
					}
					.show-menu .hamburger--squeeze .hamburger-inner {
						transform: rotate(45deg);
						transition-delay: 0.12s;
						transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
					}
					.show-menu .hamburger--squeeze .hamburger-inner::before {
						top: 0;
						opacity: 0;
						transition: top 0.075s ease, opacity 0.075s 0.12s ease;
					}
					.show-menu .hamburger--squeeze .hamburger-inner::after {
						bottom: 0;
						transform: rotate(-90deg);
						transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
					}
				`}</style>
			</nav>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		authed: state.authed
	}
}

export default connect(mapStateToProps)(Nav)
