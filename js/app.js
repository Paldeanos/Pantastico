
    // $("#filters :checkbox").click(function() {
    //     if (!$('.filterOption').is(":checked")) {
    //         $(".alergias").show();
    //     } else {
    //         $(".alergias").hide();
    //         var selector = ".alergias." + $("#filters :checked").map(function () {
    //             return this.value;
    //         }).toArray().join(".");
    //         $(selector).show();
    //     }
    // });

    
$("#filters :checkbox").click(function() {
    if ($(".filterOption").is(":checked")){
        var selector = ".alergias." + $("#filters :checked").map(function () {
            return this.value;
        }).toArray().join(".");
        $(selector).hide();
    }else{
        $(".alergias").show();
    }

});