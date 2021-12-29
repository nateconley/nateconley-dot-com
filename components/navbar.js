import { useState, useEffect, useRef, useCallback } from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';

function Navbar() {

	// Handle toggle of mobile nav.
	const [ open, setOpen ] = useState(false);

	// Handle mobile version.
	const [ isMobile, setIsMobile ] = useState(true);

	// Set up refs for focus management.
	const openButton     = useRef(null);
	const firstFocusable = useRef(null);
	const lastFocusable  = useRef(null);

	// When nav is opened, focus on first link.
	useEffect( () => {
		if ( open ) {
			firstFocusable.current.focus();
		}
	}, [ open ] );

	useEffect( function() {
		// When user clicks "Esc" key, close the menu.
		window.addEventListener(
			'keydown',
			function( event ) {
				if ( event.key === 'Escape' ) {
					handleNavClose();
				}
			}
		);
		// When window is 768 or greater, close the menu.
		const handleResize = function() {
			if ( window.innerWidth < 768 ) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
		}
		window.addEventListener( 'resize', handleResize );
		handleResize();
	}, [] );

	// Focus loop. When tabbed back, tab to last focusable within nav.
	const handleFirstFocusableKeydown = function( event ) {
		if ( open && isMobile && event.key === 'Tab' && event.shiftKey ) {
			window.requestAnimationFrame( function() {
				lastFocusable.current.focus();
			} );
		}
	}

	// Focus loop. When tabbed, tab to first focusable within nav.
	const handleLastFocusableKeydown = function( event ) {
		if ( open && isMobile && event.key === 'Tab' && ! event.shiftKey ) {
			window.requestAnimationFrame( function() {
				firstFocusable.current.focus();
			} );
		}
	}

	// Handle close. Specifically, focus on open button.
	const handleNavClose = function() {
		setOpen( false );
		openButton.current.focus();
	}

	return (
		<header className={ styles.header } role="banner">
			<p>
				<Link href="/">
					<a>Nate Conley</a>
				</Link>
			</p>
			<button
				type="button"
				onClick={ () => { setOpen( true ) } }
				aria-label="Open the main menu"
				ref={ openButton }
			>
				<span aria-hidden="true">Menu</span>
				<svg viewBox="0 0 20 18">
					<path d="M1,1 L19,1" />
					<path d="M1,9 L19,9" />
					<path d="M1,17 L19,17" />
				</svg>
			</button>
			<nav className={ open ? styles.open: '' }>
				<button
					type="button"
					onClick={ handleNavClose }
					onKeyDown={ handleFirstFocusableKeydown }
					aria-label="Close the main menu"
					ref={ firstFocusable }
					tabIndex={ open || ! isMobile ? "0" : "-1" }
				>
					<span aria-hidden="true">Close</span>
					<svg viewBox="0 0 20 18">
						<path d="M1,1 L19,17" />
						<path d="M1,17 L19,1" />
					</svg>
				</button>
				<ul>
					<li>
						<Link href="/food">
							<a tabIndex={ open || ! isMobile ? "0" : "-1" }>Food</a>
						</Link>
					</li>
					<li>
						<Link href="/code">
							<a tabIndex={ open || ! isMobile ? "0" : "-1" }>Code</a>
						</Link>
					</li>
					<li>
						<Link href="/about">
							<a tabIndex={ open || ! isMobile ? "0" : "-1" }>About</a>
						</Link>
					</li>
					<li>
						<Link href="/contact">
							<a
								ref={ lastFocusable }
								tabIndex={ open || ! isMobile ? "0" : "-1" }
								onKeyDown={ handleLastFocusableKeydown }
							>Contact</a>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;
