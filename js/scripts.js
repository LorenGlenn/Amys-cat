$(function() {
  $("button#color-change").click(function(){
    $("body").removeClass();
    $("body").addClass("dark-background");
    $(this).attr('id', 'change-back');
    this.id = 'change-back';
  });
  $("button#change-back").click(function(){
    $("body").removeClass();
    $("body").addClass("light-background");
    $(this).attr('id', 'color-change');
    this.id = 'color-change';
  });
});
