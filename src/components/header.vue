<template>
  <!-- ======= Header ======= -->
  <header id="header" class="header fixed-top d-flex align-items-center">

    <div class="header-logo d-flex align-items-center justify-content-between col-lg-2">
      <router-link to="/" class="logo d-flex align-items-center">
        <span class="d-none d-lg-block logo-title">LOGO</span>
      </router-link>
        <div>
           <img src="../assets/images/bell.png" alt="">
           <img src="../assets/images/threeBars.png" alt="" class="toggle-sidebar-btn"
              v-toggle-class:body="'toggle-sidebar'">       
        </div>  
    </div><!-- End Logo -->
    <div class="header-title col-lg-5 px-5">
      Event Management
    </div>
    <nav class="header-nav ms-auto">
      <ul class="d-flex align-items-center">

        <li class="nav-item dropdown pe-3">

          <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
            <img src="../assets/images/avatar.png" alt="Profile" class="rounded-circle">
            <span class="d-block">
              <span class="d-none d-md-block dropdown-toggle ps-2">Bryan Doe</span>
              <span class="d-none d-md-block ps-2 adminSpan">Admin</span>
            </span>

          </a><!-- End Profile Iamge Icon -->

          <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
            <li class="dropdown-header">
              <h6>Kevin Anderson</h6>
              <span>Web Designer</span>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>

            <li>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <i class="bi bi-person"></i>
                <span>My Profile</span>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>

            <li>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <i class="bi bi-gear"></i>
                <span>Account Settings</span>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>

            <li>
              <a class="dropdown-item d-flex align-items-center" href="pages-faq.html">
                <i class="bi bi-question-circle"></i>
                <span>Need Help?</span>
              </a>
            </li>
            <li>
              <hr class="dropdown-divider">
            </li>

            <li>
              <a class="dropdown-item d-flex align-items-center" href="#">
                <i class="bi bi-box-arrow-right"></i>
                <span>Sign Out</span>
              </a>
            </li>

          </ul><!-- End Profile Dropdown Items -->
        </li><!-- End Profile Nav -->

      </ul>
    </nav><!-- End Icons Navigation -->

  </header><!-- End Header -->

</template>

<script>
export default {
  name: 'HeaderNavbar',
  props: {
    msg: String
  },
}
</script>
