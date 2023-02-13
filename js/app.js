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
    $(this).toggleClass('favoritos');
    let section = $(this).closest('section');
    if (section.hasClass('favoritos')) {

        let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        favoritos.push(section[0].outerHTML);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        section.classList.remove("favoritos");

    } else {

        section.addClass("favoritos");

        let favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

        let index = favoritos.indexOf(section[0].outerHTML);

        if (index > -1) {
            favoritos.splice(index, 1);
        }

        localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }
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