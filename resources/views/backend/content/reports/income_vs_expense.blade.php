@extends('backend.layouts.app')

@section('title', __('Income vs Expense'))

@section('content')

    <x-backend.card xmlns:livewire="">
        <x-slot name="header">
            @lang('Income vs Expense')
        </x-slot>

        <x-slot name="headerActions">
            <div class="d-flex">
                {{-- <a class="form-control" href="{{ route('admin.member.pdf', $member->id) }}" class="btn btn-light m-1 mr-3"
                title="download">
                <i class="fa fa-print"></i>Download</a> --}}
            </div>
        </x-slot>

        <x-slot name="body">
            <div class="card-body">
                <div class="report-params p-3" style="border: solid #d9d9d9 3px;">
                    <form class="validate" method="GET" action="{{ route('admin.income.expense') }}" novalidate="">
                        <div class="row">
                            @csrf

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label class="control-label">Start Date<span class="required"> *</span></label>
                                    <input type="date" class="form-control datepicker" name="frdate"
                                        value="{{ request('frdate') ? request('frdate') : date('Y-m-d') }}" id="date1"
                                        required="">
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label class="control-label">End Date<span class="required"> *</span></label>
                                    <input type="date" class="form-control datepicker"
                                        value="{{ request('erdate') ? request('erdate') : date('Y-m-d') }}" name="erdate"
                                        id="date2" required="">
                                </div>
                            </div>

                            <div class="col-md-2" style="margin-top:10px">
                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary btn-sm"
                                        style="margin-top: 19px; height: 37px;">View
                                        Report</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                <div class="row report-header justify-content-center mt-5">
                    <div class="col-md-6 text-center">
                        <h5>Account Statement</h5>
                        <h6> <b>{{ $from_date ? $from_date : '----' }} </b> to
                            <b>{{ $end_date ? $end_date : '----' }}</b>
                        </h6>
                    </div>
                </div>

                <div id="" class="no-footer">
                    <div class="row">
                        <div class="col-sm-12">
                            <table class="table table-bordered dataTable balance_table" role="" aria-describedby="">
                                <thead style="background-color: #737f8b; color: white">
                                    <tr>
                                        <th class="" rowspan="1" colspan="1">Income Date</th>
                                        <th class="" rowspan="1" colspan="1">Income Type</th>
                                        <th class="text-right" rowspan="1" colspan="1">Amount</th>
                                        <th class="" rowspan="1" colspan="1">Expense Date</th>
                                        <th class="" rowspan="1" colspan="1">Expense Type</th>
                                        <th class="text-right" rowspan="1" colspan="1">Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <?php
                                    $income = 0;
                                    $expense = 0;
                                    $donation = 0;
                                    $opening_balance = 0;
                                    $subscription = 0;
                                    ?>
                                    @forelse ($income_expense as $key => $value)
                                        <?php
                                        if ($value->expense_type == 'income') {
                                            $income += $value->amount;
                                        }
                                        if ($value->expense_type == 'expense') {
                                            $expense += $value->amount;
                                        }
                                        if ($value->expense_type == 'donation') {
                                            $donation += $value->amount;
                                        }
                                        if ($value->expense_type == 'subscription') {
                                            $subscription += $value->amount;
                                        }
                                        ?>
                                        <tr class="odd" id="{{ $key }}">

                                            @if ($value->expense_type == 'income' || $value->expense_type == 'subscription' || $value->expense_type == 'donation')
                                                <td>{{ date('F j, Y', strtotime($value->created_at)) }} </td>
                                                <td>{{ $value->expense_type ? $value->expense_type : '' }}</td>
                                                <td class="text-right">
                                                    {{ number_format($value->amount, 2, '.', ',') }}
                                                </td>
                                            @else
                                                <td></td>
                                                <td></td>
                                                <td class="text-right">{{ number_format(0, 2, '.', ',') }}</td>
                                            @endif

                                            @if ($value->expense_type == 'expense')
                                                <td>{{ date('F j, Y', strtotime($value->created_at)) }} </td>
                                                <td>{{ $value->expense_type ? $value->expense_type : '' }}</td>
                                                <td class="text-right">
                                                    {{ number_format($value->amount, 2, '.', ',') }}
                                                </td>
                                            @else
                                                <td></td>
                                                <td></td>
                                                <td class="text-right">{{ number_format(0, 2, '.', ',') }}</td>
                                            @endif
                                        </tr>

                                    @empty
                                    @endforelse
                                <tfoot>
                                    <tr>
                                        <td colspan="5" class="text-right text-bold">
                                            Subtotal
                                        </td>
                                        <td colspan="1" class="text-right">
                                            <b>{{ count($income_expense) > 0 ? number_format($income + $donation + $subscription - $expense, 2, '.', ',') : '' }}</b>
                                        </td>
                                    </tr>
                                    <tr style="font-size: 20px;">
                                        <td colspan="5" class="text-right"><strong>Total</strong></td>
                                        <td colspan="1" class="text-right">
                                            <b>{{ count($income_expense) > 0 ? number_format($income + $donation + $subscription - $expense, 2, '.', ',') : '' }}</b>
                                        </td>
                                    </tr>
                                </tfoot>

                                </tbody>
                                {{-- {{ dd($current_balance) }} --}}
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </x-slot>
    </x-backend.card>

@endsection

@push('after-styles')
    <livewire:styles />
@endpush

@push('after-scripts')
    <livewire:scripts />
@endpush
