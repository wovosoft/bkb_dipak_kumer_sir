<b-navbar toggleable="lg" type="dark" variant="dark" tag="header" class="shadow">
    <b-container>
        <b-navbar-brand exact exact-active-class="active">
            {{env('APP_NAME')}}
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown right>
                    <!-- Using 'button-content' slot -->
                    <template #button-content>
                        <em>{{ auth()->user()->name }}</em>
                    </template>
                    <b-dropdown-item href="{{route('Frontend.Profile')}}">
                        Profile
                    </b-dropdown-item>
                    <b-dropdown-item href="#" @click="logout">
                        Sign Out
                    </b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-container>
</b-navbar>
