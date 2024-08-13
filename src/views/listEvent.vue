<template>
    <!-- ======= mainPanel ======= -->
    <main id="main" class="main">
        <section class="section">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card mb-3 col-12 col-md-12 col-lg-12">
                        <div
                            class="card-body d-flex justify-content-between align-items-center col-12 mt-3 d-block d-lg-flex col-lg-9">
                            <div class="txt col-lg-9">
                                <h4>Event</h4>
                                <nav>
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"> <router-link to="/">Dashboard</router-link></li>
                                        <li class="breadcrumb-item">
                                            <router-link to="/LISTREQUEST">
                                                <span style="color:rgba(17, 134, 203, 1)">List Event</span>
                                            </router-link>
                                        </li>
                                    </ol>
                                </nav>
                            </div>

                            <div class="btn-createEvent shadow-none d-md-block d-lg-flex col-lg-2 ">
                                <a type="button" class="btn filter border-0 bg-white m-1 col-8 col-md-8 col-lg-12 btn-sm"><i
                                        class="bi bi-filter"></i> Filter</a>
                                <a type="button" class="btn border-black btn-sm m-1 col-8 col-md-8 col-lg-12"><i
                                        class="bi bi-cloud-download "></i> Export</a>
                                <router-link to="/" class=" col-lg-12 btn btnSavePublish btn-sm col-8  m-1 col-lg-12"><i
                                        class="bi bi-plus-lg"></i>
                                    AddEvent
                                </router-link>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <div class="row d-flex mt-3">
                <section class="section">
                    <div class="card">
                        <div class="card-body">
                            <table class="table table-Request col-5 col-lg-12">
                                <thead>
                                    <tr>
                                        <th scope="col">&numero;</th>
                                        <th scope="col">Name Event</th>
                                        <th scope="col">Start Date</th>
                                        <th scope="col">End Date</th>
                                        <th scope="col">Location</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Action</th>
                                    </tr>

                                </thead>
                                <tbody>
                                    <tr>
                                        <td scope="row">1</td>
                                        <td>Cambodia</td>
                                        <td>10-June-2024</td>
                                        <td>11-June-2024</td>
                                        <td style="font-family: Kantumruy Pro;">សាលមហាស្របកោះពេជ្រ</td>
                                        <td>
                                            <img src="../assets/images/87f9ea30ca57732eff8d875f49bb4cde.png" alt=""
                                                height="25px">
                                        </td>
                                        <td class="iconView">
                                            <div class="dropdown">
                                                <button class="btn dropdown border-0" type="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <router-link to="/LISTREQUEST" class="dropdown-item">
                                                            <i class="bi bi-eye"></i> View Detail
                                                        </router-link>

                                                    </li>
                                                    <li>
                                                        <router-link to="/REQUESTITEM" class="dropdown-item">
                                                            <i class="bi bi-diagram-2"></i> Request item
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link to="" class="dropdown-item">
                                                            <i class="bi bi-pencil-square"></i> Edit
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row">2</td>
                                        <td>Cambodia Beer Concert</td>
                                        <td>10-June-2024</td>
                                        <td>11-June-2024</td>
                                        <td style="font-family: Kantumruy Pro;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>
                                            <img src="../assets/images/87f9ea30ca57732eff8d875f49bb4cde.png" alt=""
                                                height="25px">
                                        </td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn dropdown border-0" type="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <router-link to="/LISTREQUEST" class="dropdown-item">
                                                            <i class="bi bi-eye"></i> View Detail
                                                        </router-link>

                                                    </li>
                                                    <li>
                                                        <router-link to="/REQUESTITEM" class="dropdown-item">
                                                            <i class="bi bi-diagram-2"></i> Request item
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link to="" class="dropdown-item">
                                                            <i class="bi bi-pencil-square"></i> Edit
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row">3</td>
                                        <td>Oven (Ehite/Black)</td>
                                        <td>10-June-2024</td>
                                        <td>11-June-2024</td>
                                        <td style="font-family: Kantumruy Pro;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>
                                            <img src="../assets/images/87f9ea30ca57732eff8d875f49bb4cde.png" alt=""
                                                height="25px">
                                        </td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn dropdown border-0" type="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <router-link to="/LISTREQUEST" class="dropdown-item">
                                                            <i class="bi bi-eye"></i> View Detail
                                                        </router-link>

                                                    </li>
                                                    <li>
                                                        <router-link to="/REQUESTITEM" class="dropdown-item">
                                                            <i class="bi bi-diagram-2"></i> Request item
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link to="" class="dropdown-item">
                                                            <i class="bi bi-pencil-square"></i> Edit
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row">4</td>
                                        <td>Lucky draw</td>
                                        <td>10-June-2024</td>
                                        <td>11-June-2024</td>
                                        <td style="font-family: Kantumruy Pro;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>
                                            <img src="../assets/images/87f9ea30ca57732eff8d875f49bb4cde.png" alt=""
                                                height="25px">
                                        </td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn dropdown border-0" type="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <router-link to="/LISTREQUEST" class="dropdown-item">
                                                            <i class="bi bi-eye"></i> View Detail
                                                        </router-link>

                                                    </li>
                                                    <li>
                                                        <router-link to="/REQUESTITEM" class="dropdown-item">
                                                            <i class="bi bi-diagram-2"></i> Request item
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link to="" class="dropdown-item">
                                                            <i class="bi bi-pencil-square"></i> Edit
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row">5</td>
                                        <td>Excerise Running</td>
                                        <td>10-June-2024</td>
                                        <td>11-June-2024</td>
                                        <td style="font-family: Kantumruy Pro;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>
                                            <img src="../assets/images/87f9ea30ca57732eff8d875f49bb4cde.png" alt=""
                                                height="25px">
                                        </td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn dropdown border-0" type="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <router-link to="/LISTREQUEST" class="dropdown-item">
                                                            <i class="bi bi-eye"></i> View Detail
                                                        </router-link>

                                                    </li>
                                                    <li>
                                                        <router-link to="/REQUESTITEM" class="dropdown-item">
                                                            <i class="bi bi-diagram-2"></i> Request item
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link to="" class="dropdown-item">
                                                            <i class="bi bi-pencil-square"></i> Edit
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row">6</td>
                                        <td>Excerise Running</td>
                                        <td>10-June-2024</td>
                                        <td>11-June-2024</td>
                                        <td style="font-family: Kantumruy Pro;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>
                                            <img src="../assets/images/87f9ea30ca57732eff8d875f49bb4cde.png" alt=""
                                                height="25px">
                                        </td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn dropdown border-0" type="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <router-link to="/LISTREQUEST" class="dropdown-item">
                                                            <i class="bi bi-eye"></i> View Detail
                                                        </router-link>

                                                    </li>
                                                    <li>
                                                        <router-link to="/REQUESTITEM" class="dropdown-item">
                                                            <i class="bi bi-diagram-2"></i> Request item
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link to="" class="dropdown-item">
                                                            <i class="bi bi-pencil-square"></i> Edit
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row">6</td>
                                        <td>Excerise Running</td>
                                        <td>10-June-2024</td>
                                        <td>11-June-2024</td>
                                        <td style="font-family: Kantumruy Pro;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>
                                            <img src="../assets/images/87f9ea30ca57732eff8d875f49bb4cde.png" alt=""
                                                height="25px">
                                        </td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn dropdown border-0" type="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <router-link to="/LISTREQUEST" class="dropdown-item">
                                                            <i class="bi bi-eye"></i> View Detail
                                                        </router-link>

                                                    </li>
                                                    <li>
                                                        <router-link to="/REQUESTITEM" class="dropdown-item">
                                                            <i class="bi bi-diagram-2"></i> Request item
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link to="" class="dropdown-item">
                                                            <i class="bi bi-pencil-square"></i> Edit
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row">8</td>
                                        <td>Excerise Running</td>
                                        <td>10-June-2024</td>
                                        <td>11-June-2024</td>
                                        <td style="font-family: Kantumruy Pro;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>
                                            <img src="../assets/images/87f9ea30ca57732eff8d875f49bb4cde.png" alt=""
                                                height="25px">
                                        </td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn dropdown border-0" type="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <router-link to="/LISTREQUEST" class="dropdown-item">
                                                            <i class="bi bi-eye"></i> View Detail
                                                        </router-link>

                                                    </li>
                                                    <li>
                                                        <router-link to="/REQUESTITEM" class="dropdown-item">
                                                            <i class="bi bi-diagram-2"></i> Request item
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link to="" class="dropdown-item">
                                                            <i class="bi bi-pencil-square"></i> Edit
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row">9</td>
                                        <td>Excerise Running</td>
                                        <td>10-June-2024</td>
                                        <td>11-June-2024</td>
                                        <td style="font-family: Kantumruy Pro;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>
                                            <img src="../assets/images/87f9ea30ca57732eff8d875f49bb4cde.png" alt=""
                                                height="25px">
                                        </td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn dropdown border-0" type="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <router-link to="/LISTREQUEST" class="dropdown-item">
                                                            <i class="bi bi-eye"></i> View Detail
                                                        </router-link>

                                                    </li>
                                                    <li>
                                                        <router-link to="/REQUESTITEM" class="dropdown-item">
                                                            <i class="bi bi-diagram-2"></i> Request item
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link to="" class="dropdown-item">
                                                            <i class="bi bi-pencil-square"></i> Edit
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row">10</td>
                                        <td>Excerise Running</td>
                                        <td>10-June-2024</td>
                                        <td>11-June-2024</td>
                                        <td style="font-family: Kantumruy Pro;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>
                                            <img src="../assets/images/87f9ea30ca57732eff8d875f49bb4cde.png" alt=""
                                                height="25px">
                                        </td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn dropdown border-0" type="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <router-link to="/LISTREQUEST" class="dropdown-item">
                                                            <i class="bi bi-eye"></i> View Detail
                                                        </router-link>

                                                    </li>
                                                    <li>
                                                        <router-link to="/REQUESTITEM" class="dropdown-item">
                                                            <i class="bi bi-diagram-2"></i> Request item
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link to="" class="dropdown-item">
                                                            <i class="bi bi-pencil-square"></i> Edit
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row">11</td>
                                        <td>Excerise Running</td>
                                        <td>10-June-2024</td>
                                        <td>11-June-2024</td>
                                        <td style="font-family: Kantumruy Pro;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>
                                            <img src="../assets/images/87f9ea30ca57732eff8d875f49bb4cde.png" alt=""
                                                height="25px">
                                        </td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn dropdown border-0" type="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <router-link to="/LISTREQUEST" class="dropdown-item">
                                                            <i class="bi bi-eye"></i> View Detail
                                                        </router-link>

                                                    </li>
                                                    <li>
                                                        <router-link to="/REQUESTITEM" class="dropdown-item">
                                                            <i class="bi bi-diagram-2"></i> Request item
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link to="" class="dropdown-item">
                                                            <i class="bi bi-pencil-square"></i> Edit
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row">12</td>
                                        <td>Excerise Running</td>
                                        <td>10-June-2024</td>
                                        <td>11-June-2024</td>
                                        <td style="font-family: Kantumruy Pro;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>
                                            <img src="../assets/images/87f9ea30ca57732eff8d875f49bb4cde.png" alt=""
                                                height="25px">
                                        </td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn dropdown border-0" type="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <router-link to="/LISTREQUEST" class="dropdown-item">
                                                            <i class="bi bi-eye"></i> View Detail
                                                        </router-link>

                                                    </li>
                                                    <li>
                                                        <router-link to="/REQUESTITEM" class="dropdown-item">
                                                            <i class="bi bi-diagram-2"></i> Request item
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link to="" class="dropdown-item">
                                                            <i class="bi bi-pencil-square"></i> Edit
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row">13</td>
                                        <td>Excerise Running</td>
                                        <td>10-June-2024</td>
                                        <td>11-June-2024</td>
                                        <td style="font-family: Kantumruy Pro;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>
                                            <img src="../assets/images/87f9ea30ca57732eff8d875f49bb4cde.png" alt=""
                                                height="25px">
                                        </td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn dropdown border-0" type="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <router-link to="/LISTREQUEST" class="dropdown-item">
                                                            <i class="bi bi-eye"></i> View Detail
                                                        </router-link>

                                                    </li>
                                                    <li>
                                                        <router-link to="/REQUESTITEM" class="dropdown-item">
                                                            <i class="bi bi-diagram-2"></i> Request item
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link to="" class="dropdown-item">
                                                            <i class="bi bi-pencil-square"></i> Edit
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row">14</td>
                                        <td>Excerise Running</td>
                                        <td>10-June-2024</td>
                                        <td>11-June-2024</td>
                                        <td style="font-family: Kantumruy Pro;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>
                                            <img src="../assets/images/87f9ea30ca57732eff8d875f49bb4cde.png" alt=""
                                                height="25px">
                                        </td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn dropdown border-0" type="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <router-link to="/LISTREQUEST" class="dropdown-item">
                                                            <i class="bi bi-eye"></i> View Detail
                                                        </router-link>

                                                    </li>
                                                    <li>
                                                        <router-link to="/REQUESTITEM" class="dropdown-item">
                                                            <i class="bi bi-diagram-2"></i> Request item
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link to="" class="dropdown-item">
                                                            <i class="bi bi-pencil-square"></i> Edit
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row">15</td>
                                        <td>Excerise Running</td>
                                        <td>10-June-2024</td>
                                        <td>11-June-2024</td>
                                        <td style="font-family: Kantumruy Pro;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>
                                            <img src="../assets/images/87f9ea30ca57732eff8d875f49bb4cde.png" alt=""
                                                height="25px">
                                        </td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn dropdown border-0" type="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <router-link to="/LISTREQUEST" class="dropdown-item">
                                                            <i class="bi bi-eye"></i> View Detail
                                                        </router-link>

                                                    </li>
                                                    <li>
                                                        <router-link to="/REQUESTITEM" class="dropdown-item">
                                                            <i class="bi bi-diagram-2"></i> Request item
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link to="" class="dropdown-item">
                                                            <i class="bi bi-pencil-square"></i> Edit
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row">16</td>
                                        <td>Excerise Running</td>
                                        <td>10-June-2024</td>
                                        <td>11-June-2024</td>
                                        <td style="font-family: Kantumruy Pro;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>
                                            <img src="../assets/images/87f9ea30ca57732eff8d875f49bb4cde.png" alt=""
                                                height="25px">
                                        </td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn dropdown border-0" type="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <router-link to="/LISTREQUEST" class="dropdown-item">
                                                            <i class="bi bi-eye"></i> View Detail
                                                        </router-link>

                                                    </li>
                                                    <li>
                                                        <router-link to="/REQUESTITEM" class="dropdown-item">
                                                            <i class="bi bi-diagram-2"></i> Request item
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link to="" class="dropdown-item">
                                                            <i class="bi bi-pencil-square"></i> Edit
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row">17</td>
                                        <td>Excerise Running</td>
                                        <td>10-June-2024</td>
                                        <td>11-June-2024</td>
                                        <td style="font-family: Kantumruy Pro;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>
                                            <img src="../assets/images/87f9ea30ca57732eff8d875f49bb4cde.png" alt=""
                                                height="25px">
                                        </td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn dropdown border-0" type="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <router-link to="/LISTREQUEST" class="dropdown-item">
                                                            <i class="bi bi-eye"></i> View Detail
                                                        </router-link>

                                                    </li>
                                                    <li>
                                                        <router-link to="/REQUESTITEM" class="dropdown-item">
                                                            <i class="bi bi-diagram-2"></i> Request item
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link to="" class="dropdown-item">
                                                            <i class="bi bi-pencil-square"></i> Edit
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td scope="row">18</td>
                                        <td>Excerise Running</td>
                                        <td>10-June-2024</td>
                                        <td>11-June-2024</td>
                                        <td style="font-family: Kantumruy Pro;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>
                                            <img src="../assets/images/87f9ea30ca57732eff8d875f49bb4cde.png" alt=""
                                                height="25px">
                                        </td>
                                        <td>
                                            <div class="dropdown">
                                                <button class="btn dropdown border-0" type="button"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots-vertical"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <router-link to="/LISTREQUEST" class="dropdown-item">
                                                            <i class="bi bi-eye"></i> View Detail
                                                        </router-link>

                                                    </li>
                                                    <li>
                                                        <router-link to="/REQUESTITEM" class="dropdown-item">
                                                            <i class="bi bi-diagram-2"></i> Request item
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <router-link to="" class="dropdown-item">
                                                            <i class="bi bi-pencil-square"></i> Edit
                                                        </router-link>
                                                    </li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="pagination d-flex justify-content-end">
                                <div class="boxcontent d-flex justify-content-between align-items-center">
                                    <a href="#" type="button"><i class="bi bi-chevron-left"></i></a>
                                    <a href="#" type="button"
                                        style="background: rgba(17, 134, 203, 1); color:white;">1</a>
                                    <p style="margin: 5px;">of</p>
                                    <a href="#" type="button"
                                        style="border:1px solid rgba(17, 134, 203, 1); background: white; color:rgba(17, 134, 203, 1);">24</a>
                                    <a href="#" type="button"><i class="bi bi-chevron-right"
                                            style="color: rgba(17, 134, 203, 1);"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    </main>
    <!-- End mainPanel-->
</template>
<script>
export default {
    name: 'listEvent',
    props: {
        msg: String
    }
}
</script>