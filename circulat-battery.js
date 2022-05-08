command:"pmset -g batt | grep \"%\" | awk 'BEGINN { FS = \";\" };{ print $3,$2 }' | sed -e 's/-I/I/' -e 's/-0//' -e 's/;//' -e 's/;//'",

refreshFrequency: 20000,

render: function () {
	$('head').append('<link rel="stylesheet" href="cb.css" type="text/css" /><link href="http://fonts.googleapis.com/css?family=Dosis:200,300" rel="stylesheet" type="text/css">');
	return '<img src="g1.png" width="30px">';
	},


style: "        \n\
  top: 300px     \n\
  left: 200px     \n\
  "