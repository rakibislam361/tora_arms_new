(function ($) {
    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;
    var div_id = 1;

    setProgressBar(current);

    $("body")
        .on("click", ".next", function () {
            current_fs = $(this).parent();
            next_fs = $(this).parent().next();
            //Add Class Active
            $("#progressbar li")
                .eq($("fieldset").index(next_fs))
                .addClass("active");

            //show the next fieldset
            next_fs.show();

            //hide the current fieldset with style
            current_fs.animate({
                opacity: 0
            }, {
                step: function (now) {
                    // for making fielset appear animation
                    opacity = 1 - now;

                    current_fs.css({
                        display: "none",
                        position: "relative",
                    });
                    next_fs.css({
                        opacity: opacity
                    });
                },
                duration: 500,
            });
            setProgressBar(++current);
        })
        .on('change', "#district_permanent", function () {
            var upazilla = JSON.parse($("#upazilla").val());
            var selected_district = $(this).children("option:selected").val();
            var upazilla_name = '';
            upazilla.forEach(element => {
                if (element.district_id == selected_district) {
                    upazilla_name += '<option value="' + element.id + '">' + element.name + '</option>';
                }
            });

            $('#police_station_permanent').html(upazilla_name);

        })
        .on('change', "#district_present", function () {
            var upazilla = JSON.parse($("#upazilla").val());
            var selected_district = $(this).children("option:selected").val();
            var upazilla_name = '';

            upazilla.forEach(element => {
                if (element.district_id == selected_district) {
                    upazilla_name += '<option value="' + element.id + '">' + element.name + '</option>';
                }
            });

            $('#police_station_present').html(upazilla_name);
        })
        .on("click", ".previous", function () {
            current_fs = $(this).parent();
            previous_fs = $(this).parent().prev();
            //Remove class active
            $("#progressbar li")
                .eq($("fieldset").index(current_fs))
                .removeClass("active");

            //show the previous fieldset
            previous_fs.show();

            //hide the current fieldset with style
            current_fs.animate({
                opacity: 0
            }, {
                step: function (now) {
                    // for making fielset appear animation
                    opacity = 1 - now;

                    current_fs.css({
                        display: "none",
                        position: "relative",
                    });
                    previous_fs.css({
                        opacity: opacity
                    });
                },
                duration: 500,
            });
            setProgressBar(--current);
        })
        .on('change', '#same_as', function () {
            var village = $("#village_permanent").val();
            var post = $("#post_office_permanent").val();
            var district = $("#district_permanent").val();
            var polistation = $("#police_station_permanent").html();

            $("#village_present").val(village);
            $("#post_office_present").val(post);
            $("#district_present").val(district);
            $("#police_station_present").html(polistation);
            $("#police_station_present").val($("#police_station_permanent").val());
        })
        .on("keyup", '#phon_validation', function () {
            var valid = /^\d{0,11}(\.\d{0,2})?$/.test(this.value),
                val = this.value;

            if (!valid) {
                console.log("Invalid input!");
                this.value = val.substring(0, val.length - 1);
            }
        })
        .on("click", ".education_fields", function () {
            div_id++;
            $("#education_option").append(`<div class="row mb-3 px-4" id="${div_id}">
                    <div class="col-md-4 col-sm-12">
                        <input type="text" class="form-control" name="degree_name[]" placeholder="Degree name">
                    </div>
                    <div class="col-md-3 col-sm-12">
                        <div class="form-group">
                            <input type="text" class="form-control" name="grade[]" id="grade" value=""
                                placeholder="4.5">
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-12">
                        {{ html()->select('elementary_passing_year[]', collect($years)->prepend('Select', ''), old('elementary_passing_year'))->class('form-control') }}
                    </div>
                    <div class="col-md-2 col-sm-12">
                        <div class="input-group-btn">
                            <button class="btn btn-danger remove_div" type="button" value="${div_id}">
                                <span class="glyphicon glyphicon-minus" aria-hidden="true">
                                </span>Remove</button>
                        </div>
                    </div>
                </div>
            <div class="clear"></div>`);
        })
        .on("click", ".remove_div", function () {
            var div_id = $(this).val();
            $(div_id).remove();
        });

    function setProgressBar(curStep) {
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar").css("width", percent + "%");
    }

    $(".submit").click(function () {
        return false;
    });


})(jQuery);
