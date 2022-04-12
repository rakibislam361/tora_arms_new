<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="{{ asset('assets/plugins/print/order_print.css') }}" type="text/css" />

    <title>View Invoice no : {{ $transection_details->transection_id }}</title>

</head>

<body>


    <div id="wrapper">
        <div id="receiptData">
            <div>
                <div id="receipt-data" class="mb-3">
                    <div class="logo_header">
                        <div style="padding-top:10px">
                            <img style="width: 25%" src="{{ asset('img/logo/' . get_setting('logo')) }}">
                        </div>
                        <div
                            style="position: absolute; top: 0; left:0; text-align:center;display: table;height: 100%;width: 100%;">
                            <h2
                                style="margin: 0; font-weight:600;font-size: 33px;vertical-align: middle;display: table-cell;">
                                Invoice
                            </h2>
                        </div>
                    </div> <!-- logo_header -->
                    <div class="heade_content clear-both d-flex">
                        <div class="content_left" style="width: 70%; float:left">
                            <h3 class="site_title">{{ get_setting('app_name') }}</h3>
                            <p class=" paragraph">{{ get_setting('app_address') }} </p>
                        </div>
                        <div class="content_right" style="width: 30%; float:right">
                            <table class="table table-sm table-borderless">
                                <tr>
                                    <th class="text-right py-0" scope="col"><b>Invoice No:</b></th>
                                    <td class="py-0" scope="col"></td>
                                </tr>
                                <tr>
                                    <th class="text-right py-0" scope="col"><b>Date:</b></th>
                                    <td class="py-0" scope="col">
                                        {{-- {{ $transection_details->transection_id ? date('M d, Y', strtotime($order->order_date_time)) : 'N/A' }} --}}
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div> <!-- heade_content -->

                    <div class="heade_content clear-both d-flex">
                        <div class="content_left" style="width: 75%; float:left">
                            <p class="paragraph"><b>Bill to:</b>
                            </p>
                            <p class="paragraph"><b>Phone No:</b>
                            </p>
                            <p class="paragraph"><b>Area:</b> </p>
                            <p class="paragraph"><b>Address:</b>
                            </p>
                        </div>
                    </div> <!-- heade_content -->
                </div>

                <div>
                    <table class="table table-sm table_details">
                        <thead style="background-color: #d9d9d9;">
                            <tr>
                                <th scope="col" class="text-center">SL</th>
                                <th scope="col">Product</th>
                                <th scope="col" class="text-center">Unit</th>
                                <th scope="col" class="text-center">Qty</th>
                                <th scope="col" class="text-center">Savings</th>
                                <th scope="col" class="text-center">UnitPrice</th>
                                <th scope="col" class="text-right">SubTotal</th>
                            </tr>
                        </thead>
                        <tbody>

                            @foreach ($transection_details as $transection)
                                <tr>
                                    <td class="text-center align-middle"></td>
                                    <td class=" align-middle"></td>
                                    <td class="text-center align-middle">
                                    </td>
                                    <td class="text-center align-middle"></td>
                                    <td class="text-center align-middle">
                                    </td>
                                    <td class="text-center align-middle">
                                    </td>
                                    <td class="text-right align-middle"></td>
                                </tr>
                            @endforeach
                        </tbody>

                        <tfoot>
                            <tr>
                                <th colspan="6" class="text-right">Subtotal</th>
                                <th class="text-right"></th>
                            </tr>
                            <tr>
                                <th colspan="6" class="text-right">Delivery Charge</th>
                                <th class="text-right"></th>
                            </tr>
                            <tr>
                                <th colspan="6" class="text-right">Coupon Discount</th>
                                <th class="text-right"></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div> <!-- receiptData -->

        <div style="margin-top: 40px ">
            <img class="w-100" src="{{ asset('img/invoice/comments.png') }}">
            <img class="w-100" src="{{ asset('img/invoice/qrcode.png') }}">
        </div>

    </div> <!-- wrapper -->
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    {{-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script> --}}
    <script src="{{ asset(' assets/plugins/print/print/custom.js') }}"></script>


</body>

</html>
