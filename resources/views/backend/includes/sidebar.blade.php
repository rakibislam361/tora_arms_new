<aside class="main-sidebar sidebar-light-lightblue elevation-0">
    <!-- Brand Logo -->
    <a href="/" class="brand-link">
        <img sizes="32x32" src="{{ asset('img/logo/' . get_setting('fabicon')) }}" alt="AdminLTE Logo"
            class="brand-image img-circle elevation-3" style="opacity: .8">
        <span class="brand-text font-weight-light">{{ get_setting('app_name_short') }}</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li class="nav-item">
                    <x-utils.link class="nav-link" :href="route('admin.dashboard')"
                        :active="activeClass(Route::is('admin.dashboard'), 'active')"
                        icon="nav-icon fa fa-tachometer-alt" :text="__('Dashboard')"></x-utils.link>
                </li>
                @if ($logged_in_user->hasAllAccess())
                <li class="nav-item">
                    <x-utils.link class="nav-link" :href="route('admin.agent.index')"
                        :active="activeClass(Route::is('admin.agent.index'), 'active')" icon="nav-icon fas fa-user"
                        :text="__('Manage Agents')"></x-utils.link>
                </li>
                <li class="nav-item">
                    <x-utils.link class="nav-link" :href="route('admin.agent.search')"
                        :active="activeClass(Route::is('admin.agent.search*'), 'active')"
                        icon="nav-icon fas fa-search-plus" :text="__('Process Agents')"></x-utils.link>
                </li>
                @endif

                @if ($logged_in_user->can('agent.access.member.list'))
                <li class="nav-item">
                    <x-utils.link class="nav-link" :href="route('admin.member.index')"
                        :active="activeClass(Route::is('admin.member.index'), 'active')" icon="nav-icon fas fa-user"
                        :text="__('Manage Candidate')"></x-utils.link>
                </li>

                <li class="nav-item">
                    <x-utils.link class="nav-link" :href="route('admin.member.search')"
                        :active="activeClass(Route::is('admin.member.search*'), 'active')"
                        icon="nav-icon fas fa-search-plus" :text="__('Process Candidate')"></x-utils.link>
                </li>
                @endif

                @if ($logged_in_user->hasAllAccess())
                <li
                    class="nav-item has-treeview {{ activeClass(Route::is('admin.transection-accounts.*') ||Route::is('admin.income.index') ||Route::is('admin.income.create') ||Route::is('admin.transection-expense.*') ||Route::is('admin.donation.*') ||Route::is('admin.subscription.*'),'menu-open') }}">
                    <x-utils.link class="nav-link"
                        :active="activeClass(Route::is('admin.transection-accounts.*') || ('admin.income.index') || ('admin.income.create') || ('admin.transection-expense') || ('admin.donation.*') || ('admin.subscription.*'), 'menu-open')"
                        href="#" icon="nav-icon fas fa-solid fa-money-check" rightIcon="fas fa-angle-left right"
                        :text="__('Accounts')" />

                    <ul class="nav nav-treeview">
                        <li
                            class="nav-item has-treeview {{ activeClass(Route::is('admin.transection-accounts.*'), 'menu-open') }}">
                            <x-utils.link class="nav-link"
                                :active="activeClass(Route::is('admin.transection-accounts.*'), 'active')" href="#"
                                icon="fas fa fa-bank" rightIcon="fas fa-angle-left right" :text="__('Bank Account')" />

                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <x-utils.link class="nav-link" :href="route('admin.transection-accounts.create')"
                                        :active="activeClass(Route::is('admin.transection-accounts.create'), 'active')"
                                        icon="nav-icon fas fa-long-arrow-alt-right" :text="__('Add New Account')">
                                    </x-utils.link>
                                </li>

                                <li class="nav-item">
                                    <x-utils.link class="nav-link" :href="route('admin.transection-accounts.index')"
                                        :active="activeClass(Route::is('admin.transection-accounts.index'), 'active')"
                                        icon="nav-icon fas fa-long-arrow-alt-right" :text="__('All Accounts')">
                                    </x-utils.link>
                                </li>
                            </ul>
                        </li>

                        <li class="nav-item has-treeview {{ activeClass(Route::is('admin.income.*'), 'menu-open') }}">

                            <x-utils.link class="nav-link" :href="route('admin.income.index')"
                                :active="activeClass(Route::is('admin.income.*'), 'active')" icon="nav-icon"
                                rightIcon="fas fa-angle-left right" :text="__('Incomes')">
                            </x-utils.link>

                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <x-utils.link class="nav-link" :href="route('admin.income.create')"
                                        :active="activeClass(Route::is('admin.income.create'), 'active')"
                                        icon="nav-icon fas fa-long-arrow-alt-right" :text="__('Income Head')">
                                    </x-utils.link>
                                </li>

                                <li class="nav-item">
                                    <x-utils.link class="nav-link" :href="route('admin.income.index')"
                                        :active="activeClass(Route::is('admin.income.index'), 'active')"
                                        icon="nav-icon fas fa-long-arrow-alt-right" :text="__('All Incomes')">
                                    </x-utils.link>
                                </li>
                            </ul>
                        </li>

                        <li
                            class="nav-item has-treeview {{ activeClass(Route::is('admin.transection-expense.*'), 'menu-open') }}">
                            <x-utils.link class="nav-link"
                                :active="activeClass(Route::is('admin.transection-expense.*'), 'active')" href="#"
                                icon="nav-icon" rightIcon="fas fa-angle-left right" :text="__('Expence')">
                            </x-utils.link>

                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <x-utils.link class="nav-link" :href="route('admin.transection-expense.create')"
                                        :active="activeClass(Route::is('admin.transection-expense.create'), 'active')"
                                        icon="nav-icon fas fa-long-arrow-alt-right" :text="__('Expence Head')">
                                    </x-utils.link>
                                </li>
                                <li class="nav-item">
                                    <x-utils.link class="nav-link" :href="route('admin.transection-expense.index')"
                                        :active="activeClass(Route::is('admin.transection-expense.index'), 'active')"
                                        icon="nav-icon fas fa-long-arrow-alt-right" :text="__('Expence List')">
                                    </x-utils.link>
                                </li>
                            </ul>
                        </li>

                        {{-- <li class="nav-item has-treeview">
                                <a href="#" class="nav-link">
                                    <p>@lang('Transfer')
                                        <i class="fa fa-angle-left right"></i>
                                    </p>
                                </a>

                                <ul class="nav nav-treeview">
                                    <li class="nav-item">
                                        <x-utils.link class="nav-link"
                                            :href="route('admin.transection-accounts.index')"
                                            :active="activeClass(Route::is('admin.transection-accounts.*'), 'active')"
                                            icon="nav-icon fas fa-long-arrow-alt-right" :text="__('Amount Transfer')">
                                        </x-utils.link>
                                    </li>

                                    <li class="nav-item">
                                        <x-utils.link class="nav-link"
                                            :href="route('admin.transection-accounts.create')"
                                            :active="activeClass(Route::is('admin.transection-accounts.*'), 'active')"
                                            icon="nav-icon fas fa-long-arrow-alt-right" :text="__('Transfer list')">
                                        </x-utils.link>
                                    </li>
                                </ul>
                            </li> --}}

                        <li class="nav-item has-treeview {{ activeClass(Route::is('admin.donation.*'), 'menu-open') }}">
                            <x-utils.link class="nav-link"
                                :active="activeClass(Route::is('admin.donation.*'), 'active')" href="#" icon="nav-icon"
                                rightIcon="fas fa-angle-left right" :text="__('Donation')">
                            </x-utils.link>

                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <x-utils.link class="nav-link" :href="route('admin.donation.create')"
                                        :active="activeClass(Route::is('admin.donation.create'), 'active')"
                                        icon="nav-icon fas fa-long-arrow-alt-right" :text="__('Create Donation')">
                                    </x-utils.link>
                                </li>

                                <li class="nav-item">
                                    <x-utils.link class="nav-link" :href="route('admin.donation.index')"
                                        :active="activeClass(Route::is('admin.donation.index'), 'active')"
                                        icon="nav-icon fas fa-long-arrow-alt-right" :text="__('Donation List')">
                                    </x-utils.link>
                                </li>
                            </ul>
                        </li>

                        <li
                            class="nav-item has-treeview {{ activeClass(Route::is('admin.subscription.*'), 'menu-open') }}">

                            <x-utils.link class="nav-link"
                                :active="activeClass(Route::is('admin.subscription.*'), 'active')" href="#"
                                icon="nav-icon" rightIcon="fas fa-angle-left right" :text="__('Subscription')">
                            </x-utils.link>

                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <x-utils.link class="nav-link" :href="route('admin.subscription.create')"
                                        :active="activeClass(Route::is('admin.subscription.create'), 'active')"
                                        icon="nav-icon fas fa-long-arrow-alt-right" :text="__('Create Subscription')">
                                    </x-utils.link>
                                </li>

                                <li class="nav-item">
                                    <x-utils.link class="nav-link" :href="route('admin.subscription.index')"
                                        :active="activeClass(Route::is('admin.subscription.index'), 'active')"
                                        icon="nav-icon fas fa-long-arrow-alt-right" :text="__('All Subscriptions')">
                                    </x-utils.link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                @endif


                <li
                    class="nav-item has-treeview {{ activeClass(Route::is('admin.agent-transection.*') ||Route::is('admin.transection.index') ||Route::is('admin.agent.transection.commission'),'menu-open') }}">
                    <x-utils.link class="nav-link"
                        :active="activeClass(Route::is('admin.agent-transection.*') || Route::is('admin.transection.index') || Route::is('admin.agent.transection.commission'), 'active')"
                        href="#" icon="nav-icon fas fa-money-bill-alt" rightIcon="fas fa-angle-left right"
                        :text="__('Transections')">
                    </x-utils.link>

                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <x-utils.link class="nav-link" :href="route('admin.transection.index')"
                                :active="activeClass(Route::is('admin.transection.index'), 'active')"
                                icon="nav-icon fas fa-long-arrow-alt-right" :text="__('Member Transection')">
                            </x-utils.link>
                        </li>
                        @if (!$logged_in_user->hasAllAccess())
                        <li class="nav-item">
                            <x-utils.link class="nav-link" :href="route('admin.agent.transection.commission')"
                                :active="activeClass(Route::is('admin.agent.transection.commission'), 'active')"
                                icon="nav-icon fas fa-long-arrow-alt-right" :text="__('Admin commission')">
                            </x-utils.link>
                        </li>
                        @endif
                        @if ($logged_in_user->hasAllAccess())
                        <li class="nav-item">
                            <x-utils.link class="nav-link" :href="route('admin.agent-transection.index')"
                                :active="activeClass(Route::is('admin.agent-transection.index'), 'active')"
                                icon="nav-icon fas fa-long-arrow-alt-right" :text="__('Agent Transection ')">
                            </x-utils.link>
                        </li>
                        @endif
                    </ul>
                </li>

                @if ($logged_in_user->hasAllAccess())
                <li
                    class="nav-item has-treeview {{ activeClass(Route::is('admin.payer.index') || Route::is('admin.expanse.option.index') || Route::is('admin.payment.index'),'menu-open') }}">

                    <x-utils.link class="nav-link"
                        :active="activeClass(Route::is('admin.payer.index') || Route::is('admin.expanse.option.index') || Route::is('admin.payment.index'), 'active')"
                        href="#" icon="nav-icon" icon="nav-icon fa fa-credit-card" rightIcon="fas fa-angle-left right"
                        :text="__('Transection Settings')">
                    </x-utils.link>

                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <x-utils.link class="nav-link" :href="route('admin.payer.index')"
                                :active="activeClass(Route::is('admin.payer.index'), 'active')"
                                icon="nav-icon fas fa-long-arrow-alt-right" :text="__('Payers')">
                            </x-utils.link>
                        </li>

                        <li class="nav-item">
                            <x-utils.link class="nav-link" :href="route('admin.expanse.option.index')"
                                :active="activeClass(Route::is('admin.expanse.option.index'), 'active')"
                                icon="nav-icon fas fa-long-arrow-alt-right" :text="__('Income & Expense Head')">
                            </x-utils.link>
                        </li>

                        <li class="nav-item">
                            <x-utils.link class="nav-link" :href="route('admin.payment.index')"
                                :active="activeClass(Route::is('admin.payment.index'), 'active')"
                                icon="nav-icon fas fa-long-arrow-alt-right" :text="__('Payment method')">
                            </x-utils.link>
                        </li>
                    </ul>
                </li>


                <li
                    class="nav-item has-treeview {{ activeClass(Route::is('admin.account.statement') ||Route::is('admin.transfer.statement') ||Route::is('admin.income.statement') ||Route::is('admin.expense.statement') ||Route::is('admin.income.expense') ||Route::is('admin.payer.statement') ||Route::is('admin.payee.statement'),'menu-open') }}">
                    <x-utils.link class="nav-link"
                        :active="activeClass(Route::is('admin.account.statement') || Route::is('admin.transfer.statement') || Route::is('admin.income.statement') ||Route::is('admin.expense.statement')  ||Route::is('admin.income.expense') ||Route::is('admin.payer.statement') ||Route::is('admin.payee.statement'), 'active')"
                        href="#" icon="nav-icon fas fa-chart-bar" rightIcon="fas fa-angle-left right"
                        :text="__('Reports')">
                    </x-utils.link>

                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <x-utils.link class="nav-link" :href="route('admin.account.statement')"
                                :active="activeClass(Route::is('admin.account.statement'), 'active')"
                                icon="nav-icon fas fa-long-arrow-alt-right" :text="__('Account Statement')">
                            </x-utils.link>
                        </li>
                        {{-- <li class="nav-item">
                                <x-utils.link class="nav-link" :href="route('admin.transfer.statement')"
                                    :active="activeClass(Route::is('admin.transfer.statement'), 'active')"
                                    icon="nav-icon fas fa-long-arrow-alt-right" :text="__('Transfer Report')">
                                </x-utils.link>
                            </li> --}}

                        <li class="nav-item">
                            <x-utils.link class="nav-link" :href="route('admin.income.statement')"
                                :active="activeClass(Route::is('admin.income.statement'), 'active')"
                                icon="nav-icon fas fa-long-arrow-alt-right" :text="__('Income Report')">
                            </x-utils.link>
                        </li>

                        <li class="nav-item">
                            <x-utils.link class="nav-link" :href="route('admin.expense.statement')"
                                :active="activeClass(Route::is('admin.expense.statement'), 'active')"
                                icon="nav-icon fas fa-long-arrow-alt-right" :text="__('Expense Report')">
                            </x-utils.link>
                        </li>

                        <li class="nav-item">
                            <x-utils.link class="nav-link" :href="route('admin.income.expense')"
                                :active="activeClass(Route::is('admin.income.expense'), 'active')"
                                icon="nav-icon fas fa-long-arrow-alt-right" :text="__('Income vs Expense')">
                            </x-utils.link>
                        </li>

                        <li class="nav-item">
                            <x-utils.link class="nav-link" :href="route('admin.payer.statement')"
                                :active="activeClass(Route::is('admin.payer.statement'), 'active')"
                                icon="nav-icon fas fa-long-arrow-alt-right" :text="__('Report by Payer')">
                            </x-utils.link>
                        </li>

                        <li class="nav-item">
                            <x-utils.link class="nav-link" :href="route('admin.payee.statement')"
                                :active="activeClass(Route::is('admin.payee.statement '), 'active')"
                                icon="nav-icon fas fa-long-arrow-alt-right" :text="__('Report by Payee')">
                            </x-utils.link>
                        </li>

                    </ul>
                </li>


                <li
                    class="nav-item has-treeview {{ activeClass(Route::is('admin.district.index') ||Route::is('admin.upazilla.index') ||Route::is('admin.position.index') ||Route::is('admin.status.index'),'menu-open') }}">
                    <x-utils.link class="nav-link"
                        :active="activeClass(Route::is('admin.district.*') || Route::is('admin.upazilla.index') ||Route::is('admin.position.index') ||Route::is('admin.status.index'), 'active')"
                        href="#" icon="nav-icon fas fa-tools" rightIcon="fas fa-angle-left right" :text="__('General')">
                    </x-utils.link>

                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <x-utils.link class="nav-link" :href="url('admin/district')"
                                :active="activeClass(Route::is('admin.district.index'), 'active')"
                                icon="nav-icon fas fa-long-arrow-alt-right" :text="__('District')"></x-utils.link>
                        </li>
                        <li class="nav-item">
                            <x-utils.link class="nav-link" :href="route('admin.upazilla.index')"
                                :active="activeClass(Route::is('admin.upazilla.index'), 'active')"
                                icon="nav-icon fas fa-long-arrow-alt-right" :text="__('Upazilla')"></x-utils.link>
                        </li>
                        <li class="nav-item">
                            <x-utils.link class="nav-link" :href="route('admin.position.index')"
                                :active="activeClass(Route::is('admin.position.index'), 'active')"
                                icon="nav-icon fas fa-long-arrow-alt-right" :text="__('Position')"></x-utils.link>
                        </li>
                        <li class="nav-item">
                            <x-utils.link class="nav-link" :href="route('admin.status.index')"
                                :active="activeClass(Route::is('admin.status.index'), 'active')"
                                icon="nav-icon fas fa-long-arrow-alt-right" :text="__('Status settings')">
                            </x-utils.link>
                        </li>
                    </ul>
                </li>
                @endif

                <i class="fa-solid "></i>
                @if ($logged_in_user->hasAllAccess() || ($logged_in_user->can('admin.access.user.list') ||
                $logged_in_user->can('admin.access.user.deactivate') ||
                $logged_in_user->can('admin.access.user.reactivate') ||
                $logged_in_user->can('admin.access.user.clear-session') ||
                $logged_in_user->can('admin.access.user.impersonate') ||
                $logged_in_user->can('admin.access.user.change-password')))
                <li class="nav-header">@lang('System')</li>

                <li class="nav-item has-treeview">
                    <a href="#" class="nav-link">
                        <i class="nav-icon icon-settings"></i>
                        <p>@lang('Settings')
                            <i class="fa fa-angle-left right"></i>
                        </p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <x-utils.link class="nav-link" :href="route('admin.dashboard')"
                                :active="activeClass(Route::is('admin.dashboard'), 'active')"
                                icon="fas fa-solid fa-minus" :text="__('Initial')">
                            </x-utils.link>
                        </li>
                        <li class="nav-item">
                            <x-utils.link class="nav-link" :href="route('admin.site_settings.index')"
                                :active="activeClass(Route::is('admin.site_settings'), 'active')"
                                icon="fas fa-solid fa-minus" :text="__('Site settings')">
                            </x-utils.link>
                        </li>
                    </ul>
                </li>

                <li
                    class="nav-item has-treeview {{ activeClass(Route::is('admin.auth.user.*') || Route::is('admin.auth.role.*'), 'menu-open') }}">
                    <x-utils.link class="nav-link" href="#" icon="nav-icon icon-users"
                        rightIcon="fa fa-angle-left right" :text="__('Access')"></x-utils.link>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <x-utils.link class="nav-link" :href="url('admin.permission-control.index')"
                                :active="activeClass(Route::is('admin.permission-control.*'), 'active')"
                                icon="nav-icon fas fas fa-long-arrow-alt-right" :text="__('Control Permission')">
                            </x-utils.link>
                        </li>

                        @if ($logged_in_user->hasAllAccess() || ($logged_in_user->can('admin.access.user.list') ||
                        $logged_in_user->can('admin.access.user.deactivate') ||
                        $logged_in_user->can('admin.access.user.reactivate') ||
                        $logged_in_user->can('admin.access.user.clear-session') ||
                        $logged_in_user->can('admin.access.user.impersonate') ||
                        $logged_in_user->can('admin.access.user.change-password')))
                        <li class="nav-item">
                            <x-utils.link class="nav-link" :href="route('admin.auth.user.index')"
                                :active="activeClass(Route::is('admin.auth.user.*'), 'active')"
                                icon="nav-icon fas fa-long-arrow-alt-right" :text="__('User Management')">
                            </x-utils.link>
                        </li>
                        @endif

                        @if ($logged_in_user->hasAllAccess())
                        <li class="nav-item">
                            <x-utils.link class="nav-link" :href="route('admin.auth.role.index')"
                                icon="nav-icon fas fa-long-arrow-alt-right"
                                :active="activeClass(Route::is('admin.auth.role.*'), 'active')"
                                :text="__('Role Management')">
                            </x-utils.link>
                        </li>
                        @endif
                    </ul>
                </li>
                @endif

                @if ($logged_in_user->hasAllAccess())
                <li class="nav-item has-treeview">
                    <x-utils.link class="nav-link" href="#" icon="nav-icon fa fa-list-ul"
                        rightIcon="fa fa-angle-left right" :text="__('Logs')"></x-utils.link>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <x-utils.link class="nav-link" :href="route('log-viewer::dashboard')"
                                icon="nav-icon fas fa-long-arrow-alt-right" :text="__('Dashboard')">
                            </x-utils.link>
                        </li>
                        <li class="nav-item">
                            <x-utils.link class="nav-link" :href="route('log-viewer::logs.list')"
                                icon="nav-icon fas fa-long-arrow-alt-right" :text="__('Logs')"></x-utils.link>
                        </li>
                    </ul>
                </li>
                @endif
            </ul>
        </nav> <!-- /.sidebar-menu -->
    </div> <!-- /.sidebar -->
</aside>
