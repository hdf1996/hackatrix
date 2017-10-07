(function() {

  function addUserPic (opt) {
  	if (!opt.id) {
  		return opt.text;
  	}
  	var optimage = $(opt.element).data('image');
  	if(!optimage){
  		return opt.text;
  	} else {
  		var $opt = $(
  		'<span class="userName"><img src="' + optimage + '" class="userPic" /> ' + $(opt.element).text() + '</span>'
  		);
  		return $opt;
  	}
  };
  var data = [{ id: 0, text: 'enhancement' }, { id: 1, text: 'bug' }, { id: 2, text: 'duplicate' }, { id: 3, text: 'invalid' }, { id: 4, text: 'wontfix' }];

  $('.js-input').select2({
    url: "https://api.github.com/search/repositories",
    data: data,
    allowClear: true,
    placeholder: "Selecciona tu producto",
    processResults: function (data, page) {
      // parse the results into the format expected by Select2.
      // since we are using custom formatting functions we do not need to
      // alter the remote JSON data
      return data;
    },
  })
})()
