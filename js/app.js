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

$(document).on('click', '.addFav', function() {
    let section = $(this).closest('section');
    let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    let index = favoritos.indexOf(section[0].outerHTML);

    if (index === -1) {
        section.addClass("favoritos");
        favoritos.push(section[0].outerHTML);
    } else {
        section.removeClass("favoritos");
        favoritos.splice(index, 1);
    }

    localStorage.setItem('favoritos', JSON.stringify(favoritos));
});

$("#favoritos").click(function() {
    if ($(this).is(':checked')) {
        let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        $(".alergias").hide();
        favoritos.forEach(function(favorito) {
            $("#menu").append(favorito);
        });
    } else {
        update();
    }
});
