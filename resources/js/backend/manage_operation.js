const {
    default: axios
} = require("axios");

function popupCenter(url, title, w, h) {
    // Fixes dual-screen position Most browsers      Firefox
    const dualScreenLeft =
        window.screenLeft !== undefined ? window.screenLeft : window.screenX;
    const dualScreenTop =
        window.screenTop !== undefined ? window.screenTop : window.screenY;
    const width = window.innerWidth ?
        window.innerWidth :
        document.documentElement.clientWidth ?
        document.documentElement.clientWidth :
        screen.width;
    const height = window.innerHeight ?
        window.innerHeight :
        document.documentElement.clientHeight ?
        document.documentElement.clientHeight :
        screen.height;
    const systemZoom = width / window.screen.availWidth;
    const left = (width - w) / 2 / systemZoom + dualScreenLeft;
    const top = (height - h) / 2 / systemZoom + dualScreenTop;
    const newWindow = window.open(
        url,
        title,
        `scrollbars=yes, width=${w / systemZoom}, height=${h /
      systemZoom}, top=${top},left=${left}`
    );
    if (window.focus) newWindow.focus();
}

function swal_alert(alert_icon, msg) {
    Swal.fire({
        icon: alert_icon,
        text: msg
    });
}

(function ($) {
    $("body")
        .on("click", ".btn_patient_print", function (event) {
            event.preventDefault();
            var href = $(this).attr("href");
            popupCenter(href, "Patient Invoice", 800, 700);
        })
        .on("click", ".btn_barcode_show", function (event) {
            event.preventDefault();
            var href = $(this).attr("href");
            popupCenter(href, "Patient Invoice", 800, 700);
        })
        .on("click", ".btn_view_report", function (event) {
            event.preventDefault();
            var href = $(this).attr("href");
            // popupCenter(href, "Patient Invoice", 800, 700);
            swal_alert("warning", "development progress");
        })
        .on("click", ".btn_update_status", function (event) {
            event.preventDefault();
            var href = $(this).attr("href");
            $("#patient_report_status_form").attr("action", href);
            $("#changeStatusModalCenter").modal("show");
        })
        .on("click", ".btn_assistant_signature", function (event) {
            event.preventDefault();
            var href = $(this).attr("href");
            Swal.fire({
                icon: "warning",
                text: "Do you want to signature this report?",
                showCancelButton: true,
                confirmButtonText: `Confirm`
            }).then(result => {
                if (result.value) {
                    axios
                        .post(href, {})
                        .then(res => {
                            let resData = res.data;
                            swal_alert(resData.icon, resData.msg);
                        })
                        .catch(error => {
                            console.log(error);
                        })
                        .then(() => {
                            console.log("done");
                            setTimeout(() => {
                                window.location.reload();
                            }, 500);
                        });
                }
            });
        })
        .on("click", ".btn_head_signature", function (event) {
            event.preventDefault();
            var href = $(this).attr("href");
            Swal.fire({
                icon: "warning",
                text: "Do you want to signature this report?",
                showCancelButton: true,
                confirmButtonText: `Confirm`
            }).then(result => {
                if (result.value) {
                    axios
                        .post(href, {})
                        .then(res => {
                            let resData = res.data;
                            swal_alert(resData.icon, resData.msg);
                        })
                        .catch(error => {
                            console.log(error);
                        })
                        .then(() => {
                            console.log("done");
                            setTimeout(() => {
                                window.location.reload();
                            }, 500);
                        });
                }
            });
        })
        .on("submit", "#patient_report_status_form", function (event) {
            event.preventDefault();
            const changeStatusModalCenter = $("#changeStatusModalCenter");
            const action = $(this).attr("action");
            const formData = $(this).serialize();
            axios
                .post(action, formData)
                .then(res => {
                    console.log(res.data);
                })
                .catch(error => {
                    console.log(error);
                })
                .then(() => {
                    changeStatusModalCenter
                        .find(".status_submit_button")
                        .removeAttr("disabled");
                    changeStatusModalCenter.modal("hide");
                    setTimeout(() => {
                        window.location.reload();
                    }, 500);
                });
        })
        .on("submit", "#site_settings_form", function (event) {
            event.preventDefault();
            var modal = $("#siteSettingModel");
            var url = $("#url").val();
            // var formData = $(this).serialize();
            var formData = new FormData();
            var app_name = $("#app_name").val();
            var app_name_short = $("#app_name_short").val();
            var app_email = $("#app_email").val();
            var app_url = $("#app_url").val();
            var footer_text = $("#footer_text").val();
            var company_address = $("#company_address").val();
            var company_details = $("#company_details").val();

            var logo = document.querySelector("#app_logo");
            var fabicon = document.querySelector("#fabicon");


            formData.append('app_logo', logo.files[0]);
            formData.append('fabicon', fabicon.files[0]);
            formData.append('app_name', app_name);
            formData.append('app_name_short', app_name_short);
            formData.append('app_email', app_email);
            formData.append('app_url', app_url);
            formData.append('footer_text', footer_text);
            formData.append('company_address', company_address);
            formData.append('company_details', company_details);

            axios.post(url, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    },
                })
                .then(res => {
                    modal.hide();
                    Swal.fire({
                        icon: "success",
                        text: res.data.success,
                        showCancelButton: true,
                    })
                    setTimeout(() => {
                        window.location.reload();
                    }, 500);
                })
                .catch(error => {
                    console.log(error)
                });

        })
        .on("change", ".status-change", function (event) {
            event.preventDefault();
            var selector = $(this).val();
            var memerId = $(this).attr('data-key');
            var route = $('#status_update_route').val();
            $.ajax({
                type: "POST",
                url: route,
                data: {
                    'id': memerId,
                    'status': selector,
                    '_token': $('meta[name=csrf-token]').attr('content')
                },
                success: function (response) {
                    console.log('response', response)
                    Swal.fire({
                        icon: "success",
                        text: "Status changed successfull",
                        showCancelButton: true,
                    });
                    setTimeout(() => {
                        window.location.reload();
                    }, 500);
                },
                error(data) {
                    console.log(data)
                }
            });
        })
        .on("change", ".status-change-agent", function () {
            var selector = $(this).val();
            var agentId = $(this).data('key');
            var route = $('#status_update_route_agent').val();

            $.ajax({
                type: "POST",
                url: route,
                data: {
                    'id': agentId,
                    'status': selector,
                    '_token': $('meta[name=csrf-token]').attr('content')
                },
                success: function (response) {
                    Swal.fire({
                        icon: "success",
                        text: "Status changed successfull",
                        showCancelButton: true,
                    });
                    setTimeout(() => {
                        window.location.reload();
                    }, 500);
                },
                error(data) {
                    console.log(data)
                }
            });
        })
        .on("change", ".checkbox-all", function () {
            var thisElement = $(this);
            var allItem = $(".checkbox-all");
            var item = $(".checkbox-item");
            if (thisElement.is(':checked')) {
                item.prop('checked', true);
                allItem.prop('checked', true);
            } else {
                item.prop('checked', false);
                allItem.prop('checked', false);
            }
        })
        .on("change", ".checkbox-item", function () {
            var tbodyItems = $(this).closest('tbody').find(".checkbox-item");
            var checkedItem = $(this).closest('tbody').find(".checkbox-item:checked");
            var allItem = $(".checkbox-all");
            if (tbodyItems.length === checkedItem.length) {
                allItem.prop('checked', true);
            } else {
                allItem.prop('checked', false);
            }
        })
        .on("change", ".checkbox-item, .checkbox-all", function () {
            var checkedItem = $('tbody').find(".checkbox-item:checked");
            var generate = $(".generate-email");
            if (checkedItem.length > 0) {
                generate.removeClass('disabled');
            } else {
                generate.addClass('disabled');
            }
        })
        .on("click", ".generate-email", function () {
            var checkedItem = $('tbody').find(".checkbox-item:checked");
            if (checkedItem.length > 0) {
                var members = [];
                checkedItem.each(function () {
                    members.push($(this).val());
                });
                var emailSubmitForm = $("#emailSubmitForm");
                var loader = $(".loader");
                loader.show();
                axios.post('/admin/member/generate-email', {
                        members: members
                    })
                    .then(response => {
                        const resData = response.data;
                        console.log(resData);
                        if (resData.status) {
                            emailSubmitForm.find('.modal-body').html(resData.forms);
                            emailSubmitForm.modal('show');
                        } else {
                            Swal.fire({
                                icon: "warning",
                                text: 'Members not found, Try Again!',
                                showCancelButton: true,
                            })
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    })
                    .then(() => {
                        loader.hide();
                    });

            } else {
                Swal.fire({
                    icon: "warning",
                    text: 'Please select item first',
                    showCancelButton: true,
                })
            }
        })
        .on("change", ".company-select", function (e) {
            e.preventDefault();
            var option = $(this).val();
            axios.post('/admin/company-select', {
                    data: option
                })
                .then(response => {
                    const resData = response.data.email;
                    $('#email').val(resData);
                })
                .catch(error => {
                    console.log(error)
                    $('#emailSendToCompany').val('');
                })
                .then(() => {});
        })
        .on("keyup", '#phon_validation', function () {
            var valid = /^\d{0,11}(\.\d{0,2})?$/.test(this.value),
                val = this.value;

            if (!valid) {
                console.log("Invalid input!");
                this.value = val.substring(0, val.length - 1);
            }
        });

    var popover = $('[data-toggle="popover"]');
    if (popover.length) {
        popover.popover({
            trigger: "click hover focus"
        });
    }
})(jQuery);
