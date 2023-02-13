
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
    let checkedValues = $("#filters :checked").map(function () {
        return "." + this.value;
    }).toArray();

    if (checkedValues.length === 0) {
        $(".alergias").show();
    } else {
        $(".alergias").hide();
        let selector = checkedValues.map(function(value) {
            return ":not(" + value + ")";
        }).join("");
        $(".alergias" + selector).show();
    }
});