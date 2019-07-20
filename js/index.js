require.config({
    baseUrl: 'js',
    paths : {
        "jquery" : "jquery-2.1.4.min",
		"header" :"header",
		"footer" :"footer",
    }
})

require(['header','jquery','footer'],function(header,$,footer){
	header($('#head'))
	footer($('#foot'))
})