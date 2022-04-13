@extends('backend.layouts.app')

@section('title', __('Dashboard'))

@section('content')
    <x-backend.card>
        <x-slot name="body">
            <div class="row">
                <div class="col-lg-6 md-6 col-6">
                    <!-- small box -->

                    <div class="small-box bg-primary">
                        <div class="inner">
                            <h1><span
                                    style="font-size: 60px;">৳</span>{{ $agent_payment ? number_format($agent_payment->sum('total_amount'), 2, '.', ',') : '0.00' }}
                            </h1>
                            <p>Admin Commission</p>
                        </div>
                        <div class="icon">
                            <i class="ion ion-cash"></i>
                        </div>
                        <a href="{{ route('admin.member.index') }}" class="small-box-footer">More info <i
                                class="fas fa-arrow-circle-right"></i></a>
                    </div>
                </div>

                <div class="col-lg-6 md-6 col-6">
                    <!-- small box -->
                    <div class="small-box bg-warning">
                        <div class="inner">
                            <h1><span
                                    style="font-size: 60px;">৳</span>{{ $member_payment ? number_format($member_payment->sum('total_amount'), 2, '.', ',') : '0.00' }}
                            </h1>
                            <p>Member Payment</p>
                        </div>
                        <div class="icon">
                            <i class="ion ion-cash"></i>
                        </div>
                        <a href="{{ route('admin.member.index') }}" class="small-box-footer">More info <i
                                class="fas fa-arrow-circle-right"></i></a>
                    </div>
                </div>
            </div>
        </x-slot>
    </x-backend.card>

    <x-backend.card>
        <x-slot name="body">
            <?php
            $newMember = $members->where('status', '1');
            $activeMember = $members->where('status', '2');
            $rejectMember = $members->where('status', '3');
            
            $newAgent = $agents->where('status', '1');
            $activeAgent = $agents->where('status', '2');
            $rejectAgent = $agents->where('status', '3');
            ?>
            <span>
                <h4><strong>CANDIDATES</strong></h4>
            </span>
            <hr>

            <div class="row">
                <div class="col-lg-3 md-3 col-6">
                    <!-- small box -->
                    <div class="small-box bg-primary">
                        <div class="inner">
                            <h3>{{ count($members) }}</h3>
                            <p>Total Candidate</p>
                        </div>
                        <div class="icon">
                            <i class="ion ion-person-add"></i>
                        </div>
                        <a href="{{ route('admin.member.index') }}" class="small-box-footer">More info <i
                                class="fas fa-arrow-circle-right"></i></a>
                    </div>
                </div>

                <div class="col-lg-3 md-3 col-6">
                    <!-- small box -->
                    <div class="small-box bg-info">
                        <div class="inner">
                            <h3>{{ count($newMember) }}</h3>
                            <p>New Candidates</p>
                        </div>
                        <div class="icon">
                            <i class="ion ion-person-add"></i>
                        </div>
                        <a href="{{ route('admin.member.index') }}" class="small-box-footer">More info <i
                                class="fas fa-arrow-circle-right"></i></a>
                    </div>
                </div>

                <!-- ./col -->
                <div class="col-lg-3 md-3 col-6">
                    <!-- small box -->
                    <div class="small-box bg-success">
                        <div class="inner">
                            <h3>{{ count($activeMember) }}</h3>
                            <p>Active Candidates</p>
                        </div>
                        <div class="icon">
                            <i class="ion ion-pie-graph"></i>
                        </div>
                        <a href="{{ route('admin.member.index') }}" class="small-box-footer">More info <i
                                class="fas fa-arrow-circle-right"></i></a>
                    </div>
                </div>

                <!-- ./col -->
                <div class="col-lg-3 md-3 col-6">
                    <!-- small box -->
                    <div class="small-box bg-danger">
                        <div class="inner">
                            <h3>{{ count($rejectMember) }}</h3>
                            <p>Rejected Candidates</p>
                        </div>
                        <div class="icon">
                            <i class="ion ion-pie-graph"></i>
                        </div>
                        <a href="{{ route('admin.member.index') }}" class="small-box-footer">More info <i
                                class="fas fa-arrow-circle-right"></i></a>
                    </div>
                </div>
                <!-- ./col -->
            </div>

            @if ($logged_in_user->hasAllAccess())
                <span>
                    <h4><strong>AGENTS</strong></h4>
                </span>
                <hr>
                <div class="row">
                    <div class="col-lg-3 md-3 col-6">
                        <!-- small box -->
                        <div class="small-box bg-primary">
                            <div class="inner">
                                <h3>{{ count($agents) }}</h3>
                                <p>Total Agents</p>
                            </div>
                            <div class="icon">
                                <i class="ion ion-person-add"></i>
                            </div>
                            <a href="{{ route('admin.agent.index') }}" class="small-box-footer">More info <i
                                    class="fas fa-arrow-circle-right"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-3 md-3 col-6">
                        <!-- small box -->
                        <div class="small-box bg-info">
                            <div class="inner">
                                <h3>{{ count($newAgent) }}</h3>
                                <p>New Agents</p>
                            </div>
                            <div class="icon">
                                <i class="ion ion-person-add"></i>
                            </div>
                            <a href="{{ route('admin.agent.index') }}" class="small-box-footer">More info <i
                                    class="fas fa-arrow-circle-right"></i></a>
                        </div>
                    </div>

                    <div class="col-lg-3 md-3 col-6">
                        <!-- small box -->
                        <div class="small-box bg-success">
                            <div class="inner">
                                <h3>{{ count($activeAgent) }}</h3>
                                <p>Active Agents</p>
                            </div>
                            <div class="icon">
                                <i class="ion ion-pie-graph"></i>
                            </div>
                            <a href="{{ route('admin.member.index') }}" class="small-box-footer">More info <i
                                    class="fas fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <!-- ./col -->
                    <!-- ./col -->
                    <div class="col-lg-3 md-3 col-6">
                        <!-- small box -->
                        <div class="small-box bg-danger">
                            <div class="inner">
                                <h3>{{ count($rejectAgent) }}</h3>
                                <p>Rejected Agents</p>
                            </div>
                            <div class="icon">
                                <i class="ion ion-pie-graph"></i>
                            </div>
                            <a href="{{ route('admin.member.index') }}" class="small-box-footer">More info <i
                                    class="fas fa-arrow-circle-right"></i></a>
                        </div>
                    </div>
                    <!-- ./col -->
                </div>
            @endif

        </x-slot>
    </x-backend.card>


    <x-backend.card>
        <x-slot name="header">
            @lang('Recent Canditates')
        </x-slot>
        <x-slot name="body">
            <livewire:backend.member-table />
        </x-slot>
    </x-backend.card>

    @if ($logged_in_user->hasAllAccess())
        <x-backend.card>
            <x-slot name="header">
                @lang('Recent Agents')
            </x-slot>
            <x-slot name="body">
                <livewire:backend.agent-table />
            </x-slot>
        </x-backend.card>
    @endif

@endsection
