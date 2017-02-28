$('document').ready(function () {

    $(".multipleSelect").each(function () {

        var placeholder = "";
        var name = $(this).attr('name');
        var width = $(this).css('width');
        var options = [];

        $("option", $(this)).each(function () {
            var checked = "";
            //Define Placeholder
            if($(this).hasClass('placeholder')){
                placeholder = $(this).text();
                return true;
            }

            //Define checked
            var selected = $(this).attr('selected');
            if(typeof selected !== typeof undefined && selected !== false){
                checked = "checked='checked'";
            }

            var value = $(this).attr('value');
            var text = $(this).text();
            var opt = {'textLen':text.length, 'element':$("<label><input type='checkbox' name='"+name+"' value='"+value+"' "+checked+">"+text+"</label>")};
            options.push(opt);
        });
        $(this).after("<div class='multipleSelectOptionsWrapper'><div class='placeholder'>"+placeholder+"</div><div class='multipleSelectOptions'></div></div>");

        var m = $(this).attr('width');
        for(var i in options){
            $('.multipleSelectOptions').append(options[i]['element']);
            if(options[i]['textLen'] > m){
                var m = options[i]['textLen'];
            }
        }

        //CSS
        $('.multipleSelectOptionsWrapper').css({'width':width});
        $('.multipleSelectOptions').css({'width':m*8+'px'});

        //Action
        $(".multipleSelectOptionsWrapper .placeholder").click(function () {
            $('.multipleSelectOptions').toggle();
        });

        $(this).hide().attr('disabled', 'disabled');

    });

});