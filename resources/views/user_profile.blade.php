<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>BKB Loan Info Management System</title>
    <!-- Add this to <head> -->

    <!-- Load required Bootstrap and BootstrapVue CSS -->
    <link type="text/css" rel="stylesheet" href="//unpkg.com/bootstrap/dist/css/bootstrap.min.css"/>
    <link type="text/css" rel="stylesheet" href="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css"/>

    <!-- Load polyfills to support older browsers -->
    <script src="//polyfill.io/v3/polyfill.min.js?features=es2015%2CIntersectionObserver"
            crossorigin="anonymous"></script>

    <!-- Load Vue followed by BootstrapVue -->
    <script src="//unpkg.com/vue@latest/dist/vue.min.js"></script>
    <script src="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.js"></script>

    <!-- Load the following for BootstrapVueIcons support -->
    <script src="//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue-icons.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
          integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
          crossorigin="anonymous"/>
    <style>
        #menu .list-group-item.not-collapsed {
            background-color: #1a202c;
            color: white;
            transition: background-color linear 0.4s;
        }
    </style>
</head>
<body>
<div id="app">
    <x-profile.navbar/>
    <b-container class="mt-3">
        <b-form-row>
            <b-col md="4" sm="12">
                <b-card header-class="text-center bg-transparent" body-class="text-center">
                    <label style="cursor: pointer;">
                        <b-img-lazy rounded="circle" thumbnail class="m-auto mt-3"
                                    @click="openProfileDialog"
                                    :src="profile_photo_url"></b-img-lazy>
                        <b-file v-model="profile_file"
                                @input="processProfilePhoto($event)"
                                class="d-none" ref="profile_file"></b-file>
                    </label>
                    <h4 style="color: CADETBLUE" class="mt-3">
                        {{auth()->user()->name}}
                    </h4>
                </b-card>
                <b-list-group class="mt-2" id="menu">
                    <b-list-group-item v-b-toggle:contact-info>
                        Contact Information
                    </b-list-group-item>
                    <b-list-group-item v-b-toggle:personal-info>
                        Personal Information
                    </b-list-group-item>
                    <b-list-group-item v-b-toggle:academic-info>
                        Academic Information
                    </b-list-group-item>
                    <b-list-group-item v-b-toggle:professional-info>
                        Professional Information
                    </b-list-group-item>
                    <b-list-group-item v-b-toggle:family-members>
                        Family Members
                    </b-list-group-item>
                </b-list-group>
            </b-col>
            <b-col md="8" sm="12">
                <div class="accordion" role="tablist">
                    @include('components.profile.contact-info')
                    @include('components.profile.personal-info')
                    @include('components.profile.academic-info')
                    @include('components.profile.professional-info')
                    @include('components.profile.family-members')
                </div>
            </b-col>
        </b-form-row>
    </b-container>
    <br>
</div>
<form style="display: none;" action="{{route('logout')}}" id="logout_form" method="post">
    @csrf
</form>

<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js"
        integrity="sha512-bZS47S7sPOxkjU/4Bt0zrhEtWx0y0CRkhEp8IckzK+ltifIIE9EMIMTuT/mEzoIMewUINruDBIR/jJnbguonqQ=="
        crossorigin="anonymous"></script>
@include('components.profile.script')
</body>
</html>
