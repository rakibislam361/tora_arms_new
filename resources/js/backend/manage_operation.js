const {
    default: axios
} = require("axios");
const {
    defaultsDeep
} = require("lodash");

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

$(document).ready(function () {
    $(".dropify").dropify();
    $('.js-example-basic-single').select2();

    $('.balance_table').removeAttr('width').DataTable({
        dom: 'Bfrtip',
        order: [
            [0, "desc"]
        ],
        ordering: false,
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ]
    });
});

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
            var memberId = $(this).attr('data-key');
            var route = $('#status_update_route').val();
            Swal.fire({
                icon: "warning",
                text: "Do you really want to change status?",
                showCancelButton: true,
                confirmButtonText: `Confirm`
            }).then(result => {
                if (result.isConfirmed == true) {
                    $.ajax({
                        type: "POST",
                        url: route,
                        data: {
                            'id': memberId,
                            'status': selector,
                            '_token': $('meta[name=csrf-token]').attr('content')
                        },
                        success: function (response) {
                            console.log('response', response)
                            Swal.fire({
                                icon: "success",
                                text: "Status changed successfully",
                            });
                            setTimeout(() => {
                                window.location.reload();
                            }, 2000);
                        },
                        error(data) {
                            console.log(data)
                        }
                    });
                }
            });

        })
        .on("change", "#status-change-transection", function () {
            var selector = $(this).val();
            var trId = $(this).data('key');
            var route = $('#status_update_route_transection').val();

            Swal.fire({
                icon: "warning",
                text: "Do you really want to change status?",
                showCancelButton: true,
                confirmButtonText: `Confirm`
            }).then(result => {
                if (result.isConfirmed == true) {
                    $.ajax({
                        type: "POST",
                        url: route,
                        data: {
                            'id': trId,
                            'status': selector,
                            '_token': $('meta[name=csrf-token]').attr('content')
                        },
                        success: function (response) {
                            Swal.fire({
                                icon: "success",
                                text: "Status changed successfully",
                            });
                            setTimeout(() => {
                                window.location.reload();
                            }, 2000);
                        },
                        error(data) {
                            console.log(data)
                        }
                    });
                }

            });

        })
        .on("change", ".status-change-agent", function () {
            var selector = $(this).val();
            var trId = $(this).data('key');
            var route = $('#status_update_route_agent').val();

            Swal.fire({
                icon: "warning",
                text: "Do you really want to change status?",
                showCancelButton: true,
                confirmButtonText: `Confirm`
            }).then(result => {
                if (result.isConfirmed == true) {
                    $.ajax({
                        type: "POST",
                        url: route,
                        data: {
                            'id': trId,
                            'status': selector,
                            '_token': $('meta[name=csrf-token]').attr('content')
                        },
                        success: function (response) {
                            Swal.fire({
                                icon: "success",
                                text: "Status changed successfully",
                            });
                            setTimeout(() => {
                                window.location.reload();
                            }, 2000);
                        },
                        error(data) {
                            console.log(data)
                        }
                    });
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
        .on('change', '#same_as', function () {
            var village = $("#village_present").val();
            var post = $("#post_office_present").val();
            var district = $("#district_present").val();
            var policestation = $("#police_station_present").html();

            $("#village_permanent").val(village);
            $("#post_office_permanent").val(post);
            $("#district_permanent").val(district);
            $("#police_station_permanent").html(policestation);
            $("#police_station_permanent").val($("#police_station_permanent").val());
        })
        .on("keyup", '#phon_validation', function () {
            var valid = /^\d{0,11}(\.\d{0,2})?$/.test(this.value),
                val = this.value;

            if (!valid) {
                console.log("Invalid input!");
                this.value = val.substring(0, val.length - 1);
            }
        })
        .on("keyup", '.exam_grade', function () {
            var valid = /^\d{0,2}(\.\d{0,2})?$/.test(this.value),
                val = this.value;
            if (!valid) {
                console.log("Invalid input!");
                this.value = val.substring(0, val.length - 1);
            }
        })
        .on('change', "#police_clearance_issue", function () {
            var issue_date = new Date($("#police_clearance_issue").val());
            var nextDate = new Date(issue_date.setDate(issue_date.getDate() + 180));
            const today = new Date();
            const time = Math.abs(today - nextDate);

            const day = Math.ceil(time / (1000 * 60 * 60 * 24));

            nextDate = `${nextDate.getDate()} ${nextDate.toLocaleString('default', { month: 'long' })} ${nextDate.getFullYear()}`;

            var fields = `<div class="col-md-6 col-sm-12">
                            <div class="form-group">
                                <label for="clearance_expire_date" class="form-label">Expire date</label>
                                <input type="text" class="form-control" name="police_clearance_expired"
                                    id="clearance_expire_date" value="${nextDate}" readonly>
                            </div>
                        </div>

                        <div class="col-md-6 col-sm-12">
                            <div class="form-group">
                                <label for="clearance_remaining" class="form-label">Remaining day</label>
                                <input type="text" class="form-control" name="polisce_clearance_remaning"
                                    id = "police_clearance"
                                    value = "${day}"
                                    readonly >
                            </div>
                        </div>`;

            $("#police_clearanc").html(fields);

        })
        .on("keyup", '.transection_amount', function () {
            var valid = /^\d{0,20}(\.\d{0,20})?$/.test(this.value),
                val = this.value;
            if (!valid) {
                this.value = val.substring(0, val.length - 1);
            }
        })
        .on("keyup", '.phon_validation', function () {
            var valid = /^\d{0,11}(\.\d{0,2})?$/.test(this.value),
                val = this.value;

            if (!valid) {
                console.log("Invalid input!");
                this.value = val.substring(0, val.length - 1);
            }
        })
        .on("change", "#payment_type", function () {
            var change = $(this).val();
            $value = "";
            if (change == "bank") {
                $value = `<div class="col-md-6 col-sm-12">
                        <label for="transection_or_ac_number" class="form-label">Account No</label>
                        <input type="text" class="form-control" name="transection_or_ac_number"
                            id="transection_or_ac_number" value="" placeholder="Account number">
                        </div>
                        <div class="col-md-6 col-sm-12">
                        <label for="mobile" class="form-label">Account holder name</label>
                        <input type="text" class="form-control" name="mobile" id="name"
                            value="" placeholder="Name">
                        </div>
                        `;
            }
            if ((change == "bkash") || (change == "roket") || (change == "nagad")) {
                $value = `<div class="col-md-6 col-sm-12">
                            <label for="transection_or_ac_number" class="form-label">Transection ID</label>
                            <input type="text" class="form-control" name="transection_or_ac_number"
                                id="transection_or_ac_number" value="" placeholder="Transection number">
                        </div>
                         <div class = "col-md-6">
                            <label for="mobile" class="form-label">Mobile number</label>
                            <div class="input-group mb-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">+88</div>
                                </div>
                                <input type="text" class="form-control phon_validation" name="mobile" id="mobile" value=""
                                    placeholder="Mobile number">
                            </div>
                        </div>
                    `;
            }
            if (change == "cash") {
                $value = "";
            }
            $("#account_phone_feild").html($value);
        })
        .on("click", ".add-more", function () {
            var content = $(this).attr("data");
            var expanseModal = $("#expenseModal");
            var _token = $('meta[name="csrf-token"]').attr('content');
            var addAccount = $("#add_account").val();
            var addExpenseType = $("#add_expense_id").val();
            var paymentMethod = $("#payment_method").val();
            var payer = $("#payer").val();

            var modalContent;
            var modalTitle;
            var dynamicRoute;

            if (content === "add-account") {
                modalContent = `<input type="hidden" name="_token" id="token" value="${_token}" />
                                    <div class="form-group">
                                        <label for="account_title">Account Title</label>
                                        <input type="text" name="account_title" id="account_title" class="form-control" />
                                    </div> <!-- form-group -->
                                    <div class="form-group">
                                        <label for="opening_date">Opening Date</label>
                                        <input type="date" name="opening_date" id="opening_date" class="form-control" />
                                    </div> <!-- form-group -->
                                    <div class="form-group">
                                        <label for="account_number">Account Number</label>
                                        <input type="text" name="account_number" id="account_number" class="form-control" />
                                    </div> <!-- form-group -->
                                    <div class="form-group">
                                        <label for="opening_balance">Opening balance</label>
                                        <input type="text" name="opening_balance" id="opening_balance" class="form-control" />
                                    </div> <!-- form-group -->
                                    <div class="form-group">
                                        <label for="note" class="col-form-label">Extra Note</label>
                                        <textarea class="form-control" name="note" id="note"></textarea>
                                    </div>
                                      <div class="form-group">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="submit" class="btn btn-primary">Save</button>
                                </div>`;
                modalTitle = "Add New Account";
                dynamicRoute = addAccount;
            } else if (content === "expense-type") {
                modalContent = `<input type="hidden" name="_token" id="token" value="${_token}" />
                                    <div class="form-group">
                                        <label for="expanse_name" class="col-form-label">Name:</label>
                                        <input type="text" class="form-control" name="expanse_name" id="expanse_name">
                                    </div>
                                    <div class="form-group">
                                        <label for="expanse_type" class="col-form-label">Transection Type:</label>
                                        <select class="form-control" name="expanse_type" id="expanse_type">
                                            <option value="income">Income</option>
                                            <option value="expense">Expense</option>
                                            <option value="donation">Donation</option>
                                            <option value="subscription">Subscription</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="submit" class="btn btn-primary">Save</button>
                                </div>`;
                modalTitle = "Add Transection type";
                dynamicRoute = addExpenseType;
            } else if (content === "payment-method") {
                modalContent = `<input type="hidden" name="_token" id="token" value="${_token}" />
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">Payment Method:</label>
                                    <input type="text" class="form-control" name="payment_name" id="recipient-name">
                                </div>
                                <div class="form-group">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary">Save</button>
                                </div>`;
                modalTitle = "Add Payment";
                dynamicRoute = paymentMethod;
            } else if (content === "add-payer") {
                modalContent = `<input type="hidden" name="_token" id="token" value="${_token}" />
                                <div class="form-group">
                                    <label for="name" class="col-form-label">Payer Name:</label>
                                    <input type="text" class="form-control" name="name" id="payer_name">
                                </div>
                                <div class = "form-group">
                                    <label for="name" class="col-form-label">Phone:</label>
                                    <div class="input-group">
                                    <div class="input-group-prepend">
                                            <div class="input-group-text">+88</div>
                                        </div>
                                        <input type="text" name="phone" class="form-control phon_validation" id="phone">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="submit" class="btn btn-primary">Save</button>
                                </div>`;
                modalTitle = "Add Payer";
                dynamicRoute = payer;
            } else {}
            expanseModal.find('.expanse-modal-form').html(modalContent);
            expanseModal.find('.expanse-modal-form').attr('action', dynamicRoute);
            expanseModal.find('#expenseModalLabel').text(modalTitle);
            expanseModal.find('#token').val(_token);
            expanseModal.modal("show");

        })
        .on("submit", ".expanse-modal-form", function (e) {
            e.preventDefault();
            var expenseModal = $("#expenseModal");
            var action = $(this).attr('action');
            var formData = $(this).serialize();

            var expense_id = $("#expense_id");
            var payment_method = $("#payment_method");
            var payer = $("#payer");
            var account_id = $("#account_id");

            var component = $(".js-example-basic-single").attr("data-select2-id");
            console.log(component);

            axios.post(action, formData)
                .then(res => {
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                    // if (expense_id == "expense_id") {
                    //     expense_id.append($(`<option value="${res.data.value}" selected>${res.data.value}</option>`));
                    // } else if (payment_method == "payment_method") {
                    //     payment_method.append($(`<option value="${res.data.value}" selected>${res.data.value}</option>`));
                    // } else if (payer == "payer") {
                    //     payer.append($(`<option value="${res.data.value}" selected>${res.data.value}</option>`));
                    // } else if (account_id == "account_id") {
                    //     account_id.append($(`<option value="${res.data.value}" selected>${res.data.value}</option>`));
                    // }
                    expenseModal.modal("hide");
                })
                .catch(error => {
                    console.log(error)
                });
        })
        .on("keyup", '.bankaccount_number', function () {
            var valid = /^\d{0,15}(\.\d{0,2})?$/.test(this.value),
                val = this.value;

            if (!valid) {
                console.log("Invalid input!");
                this.value = val.substring(0, val.length - 1);
            }
        });
})(jQuery);
