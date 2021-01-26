MathJax.Hub.Config({
	tex2jax: {
		inlineMath: [ ['\\$','\\$'], ["\\(","\\)"] ],
		displayMath: [ ['$$','$$'], ['\\[','\\]'] ],
		skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
		processEscapes: true,
	},
	TeX: {
		equationNumbers: { autoNumber: "AMS" },
		TagSide: "left",
		Macros: {
			reals: ['\\mathbb{R}'],
			complex: ['\\mathbb{C}'],
			norm: ['\\left\\lVert#1\\right\\rVert', 1],
			given: ['\\mathbin{\\vert}'],
			data: ['\\mathcal{D}'],
			argmax: ['\\mathop{\\arg\\,\\max}\\limits'],
		}
	}
});

MathJax.Hub.Queue(function() {
	var all = MathJax.Hub.getAllJax(), i;
	for(i=0; i < all.length; i += 1) {
		all[i].SourceElement().parentNode.className += ' has-jax';
	}
});

MathJax.Ajax.loadComplete("/javascripts/MathJaxLocal.js");
