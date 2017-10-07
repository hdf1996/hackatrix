(function() {
  function formatSelection (data) {
    if (!data.id) { return data.text; }
    var $result= $(
      '<span>' + data.text + '</span>'
    );
    return $result;
  };
  function formatResult (data) {
    if (!data.id) { return data.text; }
    var $result= $(
      '<div class="selectli"><img src="' + data.image + '"/><div> ' + data.text + '<br/>$30.9</div></div>'
    );
    return $result;
  };
  var data = [{
    id: 0,
    image: 'https://ichef.bbci.co.uk/news/ws/660/amz/worldservice/live/assets/images/2014/11/05/141105131956_leche_624x351_thinkstock.jpg',
    text: 'Leche',
    category: 'Comestible'
  },{
    id: 1,
    image: 'https://ichef.bbci.co.uk/news/ws/660/amz/worldservice/live/assets/images/2014/11/05/141105131956_leche_624x351_thinkstock.jpg',
    text: 'enhancement'
  }
];

  $('.js-input').select2({
    data: data,
    allowClear: true,
    templateResult: formatResult,
    templateSelection: formatSelection,
    placeholder: "Selecciona tu producto",
    processResults: function (data, page) {
      return data;
    },
  })
})()
