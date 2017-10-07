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

  $('.js-input').select2({
    minimumInputLength: 2,
    tags: [],
		templateResult: addUserPic,
    templateSelection: addUserPic,
    ajax: {
        url: '/data/countries.json',
        dataType: 'json',
        type: "GET",
        quietMillis: 50,
        data: function (term) {
            return {
                term: term
            };
        },
        results: function (data) {
          debugger;
            return {
                results: $.map(data, function (item) {
                    return {
                        text: item.completeName,
                        slug: item.slug,
                        id: item.id
                    }
                })
            };
        }
    }
});
})()
