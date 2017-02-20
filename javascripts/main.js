
var modal = $( ".foobar" ).dialog( "modal" );

function insert_modal(content) {

  return $('<div></div)').attr('id', 'modal').html(content).appendTo('body');
}

function delete_modal() {
  $('body').find('modal').remove();
}

$(function() {

  $('[data-modal]').on('click', function(event) {
    var element = event.target || event.srcElement;
    var modal = insert_modal($(element).data('modal'));
  modal.dialog({
    height: 435,
    width:680,
    close: function(event, ui) {
      modal.remove();
    }
  });
  });

  $('[data-image]').on('click', function(event) {
    var element = event.target || event.srcElement;
    var modal = insert_modal($('<img>').attr('src', $(element).attr('src')));
  modal.dialog({
    height: $(element).prop('naturalHeight') + 70,
    width:$(element).prop('naturalWidth') + 40,
    close: function(event, ui) {
      modal.remove();
    }
  });
  });

})
