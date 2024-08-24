<template>
    <!-- ======= Sidebar ======= -->
    <aside id="sidebar" class="sidebar">

        <ul class="sidebar-nav" id="sidebar-nav">
            <li class="nav-item d-flex align-items-center">
                <form class="search-form d-flex align-items-center form-control" method="POST" action="#">
                    <button type="submit" title="Search" class="bg-white border-0"><i class="bi bi-search"></i></button>
                    <input type="text" name="query" placeholder="Search" title="Enter search keyword" class="border-0 "
                        style="outline:none;">

                </form>
                <!-- End Search Bar -->
            </li>
            <li class="nav-item">
                <router-link to="/" class="nav-link">
                    <i class="bi bi-columns-gap"></i><span>Dashboard</span>
                </router-link>
            </li><!-- End Dashboard Nav -->
            <li class="nav-item">
                <router-link to="/listEvent" class="nav-link collapsed"><i class="bi bi-ticket-perforated"></i><span>Event Management</span></router-link>
            </li><!-- End Forms Nav -->
            </ul>

    </aside>
    <!-- End Sidebar-->
</template>

<script>
export default {
    name: 'SideBar',
    props: {
        msg: String
    }
}
</script>
