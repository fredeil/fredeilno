	skel.init({
		reset: 'full',
		breakpoints: {
			'global': { range: '*', href: 'css/style.css', lockViewport: true, viewport: 'minimal-ui' },
			'wide': { range: '-1680', href: 'css/style-wide.css' },
			'normal': { range: '-1280', href: 'css/style-normal.css' },
			'mobile': { range: '-640', href: 'css/style-mobile.css' },
			'mobilep': { range: '-360', href: 'css/style-mobilep.css' }
		}
	});

// JavaScript Events
	// Fjerne "loading" class når siden er ferdig loaded
		window.onload = function() {
			document.body.className = '';
		}

	// Hindre scrolling på touchskjermer
		window.ontouchmove = function() {
			return false;
		}

		window.onorientationchange = function() {
			document.body.scrollTop = 0;
		}
