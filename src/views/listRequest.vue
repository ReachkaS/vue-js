<template>
    <!-- ======= mainPanel ======= -->
    <main id="main" class="main">
        <section class="section">
            <div class="row">
                <div class="col-lg-12">
                    <div class="card mb-3 col-12 col-md-12 col-lg-12">
                        <div
                            class="card-body d-flex justify-content-between align-items-center col-12 mt-3 d-block d-lg-flex col-lg-9">
                            <div class="txt">
                                <h4>Event</h4>
                                <nav>
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><router-link to="/">Dashboard</router-link></li>
                                        <li class="breadcrumb-item"><router-link to="/LISTEVENT">List
                                                Event</router-link></li>
                                        <li class="breadcrumb-item"><router-link to="/LISTREQUEST"><span
                                                    style="color:rgba(17, 134, 203, 1)">List
                                                    Request</span></router-link></li>
                                    </ol>
                                </nav>
                            </div>

                            <div class="btn-createEvent shadow-none d-md-block d-lg-flex col-lg-2">
                                <a class="btn filter border-0 bg-white m-1 col-8 col-md-8 col-lg-12 btn-sm"><i
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
                            <table class="table table_listrequest">
                                <!--datatable-->
                                <thead>
                                    <tr style="font-size: 11px; padding: 1px;">
                                        <th>&numero; <i class="bi bi-arrow-down"></i> </th>
                                        <th>Date<i class="bi bi-arrow-down"></i> </th>
                                        <th>Reference No <i class="bi bi-arrow-down"></i> </th>
                                        <th>Event Name <i class="bi bi-arrow-down"></i> </th>
                                        <th>Location <i class="bi bi-arrow-down"></i> </th>
                                        <th>Number of Item <i class="bi bi-arrow-down"></i> </th>
                                        <th>Status <i class="bi bi-arrow-down"></i> </th>
                                        <th>Image <i class="bi bi-arrow-down"></i> </th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody style="font-size: 12px;">
                                    <tr>
                                        <td>1</td>
                                        <td>10-June-2024</td>
                                        <td>1NCCCCC</td>
                                        <td>Cambodia</td>
                                        <td style="font-family: Hanuman;">សាលមហាស្របកោះបពេជ្រ</td>
                                        <td>100</td>
                                        <td><img src="../assets/images/Badgebase.png" alt=""></td>
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
                                                    <li><router-link to="/LISTREQUEST" class="dropdown-item"><i
                                                                class="bi bi-eye"></i> View Detail</router-link></li>
                                                    <li><router-link to="/RETURNITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (3).png" alt=""
                                                                width="19px"> Return Item</router-link></li>
                                                    <li><router-link to="/DEPOSEITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (4).png" alt=""
                                                                width="19px"> Depose</router-link></li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>10-June-2024</td>
                                        <td>1NCCCCC</td>
                                        <td>Cambodia Kun Khmer Boxing</td>
                                        <td style="font-family: Hanuman;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>100</td>
                                        <td><img src="../assets/images/Badgebase.png" alt=""></td>
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
                                                    <li><router-link to="/LISTREQUEST" class="dropdown-item"><i
                                                                class="bi bi-eye"></i> View Detail</router-link></li>
                                                    <li><router-link to="/RETURNITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (3).png" alt=""
                                                                width="19px"> Return Item</router-link></li>
                                                    <li><router-link to="/DEPOSEITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (4).png" alt=""
                                                                width="19px"> Depose</router-link></li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>10-June-2024</td>
                                        <td>1NCCCCC</td>
                                        <td>Cambodia Kun Khmer Boxing</td>
                                        <td style="font-family: Hanuman;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>100</td>
                                        <td><img src="../assets/images/Badgebase.png" alt=""></td>
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
                                                    <li><router-link to="/LISTREQUEST" class="dropdown-item"><i
                                                                class="bi bi-eye"></i> View Detail</router-link></li>
                                                    <li><router-link to="/RETURNITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (3).png" alt=""
                                                                width="19px"> Return Item</router-link></li>
                                                    <li><router-link to="/DEPOSEITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (4).png" alt=""
                                                                width="19px"> Depose</router-link></li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>10-June-2024</td>
                                        <td>1NCCCCC</td>
                                        <td>Cambodia</td>
                                        <td style="font-family: Hanuman;">សាលមហាស្របកោះបពេជ្រ</td>
                                        <td>100</td>
                                        <td><img src="../assets/images/Badgebase.png" alt=""></td>
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
                                                    <li><router-link to="/LISTREQUEST" class="dropdown-item"><i
                                                                class="bi bi-eye"></i> View Detail</router-link></li>
                                                    <li><router-link to="/RETURNITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (3).png" alt=""
                                                                width="19px"> Return Item</router-link></li>
                                                    <li><router-link to="/DEPOSEITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (4).png" alt=""
                                                                width="19px"> Depose</router-link></li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>10-June-2024</td>
                                        <td>1NCCCCC</td>
                                        <td>Cambodia Kun Khmer Boxing</td>
                                        <td style="font-family: Hanuman;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>100</td>
                                        <td><img src="../assets/images/Badgebase.png" alt=""></td>
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
                                                    <li><router-link to="/LISTREQUEST" class="dropdown-item"><i
                                                                class="bi bi-eye"></i> View Detail</router-link></li>
                                                    <li><router-link to="/RETURNITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (3).png" alt=""
                                                                width="19px"> Return Item</router-link></li>
                                                    <li><router-link to="/DEPOSEITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (4).png" alt=""
                                                                width="19px"> Depose</router-link></li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>10-June-2024</td>
                                        <td>1NCCCCC</td>
                                        <td>Cambodia Kun Khmer Boxing</td>
                                        <td style="font-family: Hanuman;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>100</td>
                                        <td><img src="../assets/images/Badgebase.png" alt=""></td>
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
                                                    <li><router-link to="/LISTREQUEST" class="dropdown-item"><i
                                                                class="bi bi-eye"></i> View Detail</router-link></li>
                                                    <li><router-link to="/RETURNITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (3).png" alt=""
                                                                width="19px"> Return Item</router-link></li>
                                                    <li><router-link to="/DEPOSEITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (4).png" alt=""
                                                                width="19px"> Depose</router-link></li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>10-June-2024</td>
                                        <td>1NCCCCC</td>
                                        <td>Cambodia Kun Khmer Boxing</td>
                                        <td style="font-family: Hanuman;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>100</td>
                                        <!-- <td><button type="button" style="background-color: rgb(217, 228, 254); color: rgb(144, 177, 245); border: none; border-radius: 100px; width: 70px;"> <i class="bi bi-circle-fill"></i> View </button></td> -->
                                        <td><img src="../assets/images/Badge.png" alt=""></td>
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
                                                    <li><router-link to="/LISTREQUEST" class="dropdown-item"><i
                                                                class="bi bi-eye"></i> View Detail</router-link></li>
                                                    <li><router-link to="/RETURNITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (3).png" alt=""
                                                                width="19px"> Return Item</router-link></li>
                                                    <li><router-link to="/DEPOSEITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (4).png" alt=""
                                                                width="19px"> Depose</router-link></li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>10-June-2024</td>
                                        <td>1NCCCCC</td>
                                        <td>Cambodia Kun Khmer Boxing</td>
                                        <td style="font-family: Hanuman;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>100</td>
                                        <!-- <td><button type="button" style="background-color: rgb(217, 228, 254); color: rgb(144, 177, 245); border: none; border-radius: 100px; width: 70px;"> <i class="bi bi-circle-fill"></i> View</button></td> -->
                                        <td><img src="../assets/images/Badge.png" alt=""></td>
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
                                                    <li><router-link to="/LISTREQUEST" class="dropdown-item"><i
                                                                class="bi bi-eye"></i> View Detail</router-link></li>
                                                    <li><router-link to="/RETURNITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (3).png" alt=""
                                                                width="19px"> Return Item</router-link></li>
                                                    <li><router-link to="/DEPOSEITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (4).png" alt=""
                                                                width="19px"> Depose</router-link></li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>10-June-2024</td>
                                        <td>1NCCCCC</td>
                                        <td>Cambodia Kun Khmer Boxing</td>
                                        <td style="font-family: Hanuman;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>100</td>
                                        <td><img src="../assets/images/Badgebase.png" alt=""></td>
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
                                                    <li><router-link to="/LISTREQUEST" class="dropdown-item"><i
                                                                class="bi bi-eye"></i> View Detail</router-link></li>
                                                    <li><router-link to="/RETURNITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (3).png" alt=""
                                                                width="19px"> Return Item</router-link></li>
                                                    <li><router-link to="/DEPOSEITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (4).png" alt=""
                                                                width="19px"> Depose</router-link></li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>10-June-2024</td>
                                        <td>1NCCCCC</td>
                                        <td>Cambodia Kun Khmer Boxing</td>
                                        <td style="font-family: Hanuman;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>100</td>
                                        <td><img src="../assets/images/Badgebase.png" alt=""></td>
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
                                                    <li><router-link to="/LISTREQUEST" class="dropdown-item"><i
                                                                class="bi bi-eye"></i> View Detail</router-link></li>
                                                    <li><router-link to="/RETURNITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (3).png" alt=""
                                                                width="19px"> Return Item</router-link></li>
                                                    <li><router-link to="/DEPOSEITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (4).png" alt=""
                                                                width="19px"> Depose</router-link></li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td>10-June-2024</td>
                                        <td>1NCCCCC</td>
                                        <td>Cambodia Kun Khmer Boxing</td>
                                        <td style="font-family: Hanuman;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>100</td>
                                        <td><img src="../assets/images/Badgebase.png" alt=""></td>
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
                                                    <li><router-link to="/LISTREQUEST" class="dropdown-item"><i
                                                                class="bi bi-eye"></i> View Detail</router-link></li>
                                                    <li><router-link to="/RETURNITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (3).png" alt=""
                                                                width="19px"> Return Item</router-link></li>
                                                    <li><router-link to="/DEPOSEITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (4).png" alt=""
                                                                width="19px"> Depose</router-link></li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>12</td>
                                        <td>10-June-2024</td>
                                        <td>1NCCCCC</td>
                                        <td>Cambodia Beer Concer</td>
                                        <td style="font-family: Hanuman;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>100</td>
                                        <td><img src="../assets/images/Badgebase.png" alt=""></td>
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
                                                    <li><router-link to="/LISTREQUEST" class="dropdown-item"><i
                                                                class="bi bi-eye"></i> View Detail</router-link></li>
                                                    <li><router-link to="/RETURNITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (3).png" alt=""
                                                                width="19px"> Return Item</router-link></li>
                                                    <li><router-link to="/DEPOSEITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (4).png" alt=""
                                                                width="19px"> Depose</router-link></li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>13</td>
                                        <td>10-June-2024</td>
                                        <td>1NCCCCC</td>
                                        <td>Cambodia Beer Concer</td>
                                        <td style="font-family: Hanuman;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>100</td>
                                        <td><img src="../assets/images/Badgebase.png" alt=""></td>
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
                                                    <li><router-link to="/LISTREQUEST" class="dropdown-item"><i
                                                                class="bi bi-eye"></i> View Detail</router-link></li>
                                                    <li><router-link to="/RETURNITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (3).png" alt=""
                                                                width="19px"> Return Item</router-link></li>
                                                    <li><router-link to="/DEPOSEITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (4).png" alt=""
                                                                width="19px"> Depose</router-link></li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>14</td>
                                        <td>10-June-2024</td>
                                        <td>1NCCCCC</td>
                                        <td>Cambodia Beer Concer</td>
                                        <td style="font-family: Hanuman;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>100</td>
                                        <td><img src="../assets/images/Badgebase.png" alt=""></td>
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
                                                    <li><router-link to="/LISTREQUEST" class="dropdown-item"><i
                                                                class="bi bi-eye"></i> View Detail</router-link></li>
                                                    <li><router-link to="/RETURNITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (3).png" alt=""
                                                                width="19px"> Return Item</router-link></li>
                                                    <li><router-link to="/DEPOSEITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (4).png" alt=""
                                                                width="19px"> Depose</router-link></li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>15</td>
                                        <td>10-June-2024</td>
                                        <td>1NCCCCC</td>
                                        <td>Cambodia Beer Concer</td>
                                        <td style="font-family: Hanuman;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>100</td>
                                        <td><img src="../assets/images/Badgebase.png" alt=""></td>
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
                                                    <li><router-link to="/LISTREQUEST" class="dropdown-item"><i
                                                                class="bi bi-eye"></i> View Detail</router-link></li>
                                                    <li><router-link to="/RETURNITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (3).png" alt=""
                                                                width="19px"> Return Item</router-link></li>
                                                    <li><router-link to="/DEPOSEITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (4).png" alt=""
                                                                width="19px"> Depose</router-link></li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>16</td>
                                        <td>10-June-2024</td>
                                        <td>1NCCCCC</td>
                                        <td>Cambodia Beer Concer</td>
                                        <td style="font-family: Hanuman;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>100</td>
                                        <td><img src="../assets/images/Badgebase.png" alt=""></td>
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
                                                    <li><router-link to="/LISTREQUEST" class="dropdown-item"><i
                                                                class="bi bi-eye"></i> View Detail</router-link></li>
                                                    <li><router-link to="/RETURNITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (3).png" alt=""
                                                                width="19px"> Return Item</router-link></li>
                                                    <li><router-link to="/DEPOSEITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (4).png" alt=""
                                                                width="19px"> Depose</router-link></li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>17</td>
                                        <td>10-June-2024</td>
                                        <td>1NCCCCC</td>
                                        <td>Cambodia Beer Concer</td>
                                        <td style="font-family: Hanuman;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>100</td>
                                        <td><img src="../assets/images/Badgebase.png" alt=""></td>
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
                                                    <li><router-link to="/LISTREQUEST" class="dropdown-item"><i
                                                                class="bi bi-eye"></i> View Detail</router-link></li>
                                                    <li><router-link to="/RETURNITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (3).png" alt=""
                                                                width="19px"> Return Item</router-link></li>
                                                    <li><router-link to="/DEPOSEITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (4).png" alt=""
                                                                width="19px"> Depose</router-link></li>
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>18</td>
                                        <td>10-June-2024</td>
                                        <td>1NCCCCC</td>
                                        <td>Cambodia Beer Concer</td>
                                        <td style="font-family: Hanuman;">ស្ថានីយ៍ទូរទស្សMYTVព្រែកលាប</td>
                                        <td>100</td>
                                        <td><img src="../assets/images/Badgebase.png" alt=""></td>
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
                                                    <li><router-link to="/LISTREQUEST" class="dropdown-item"><i
                                                                class="bi bi-eye"></i> View Detail</router-link></li>
                                                    <li><router-link to="/RETURNITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (3).png" alt=""
                                                                width="19px"> Return Item</router-link></li>
                                                    <li><router-link to="/DEPOSEITEM" class="dropdown-item"><img
                                                                src="../assets/images/Frame (4).png" alt=""
                                                                width="19px"> Depose</router-link></li>
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
                                    <a href="" type="button"><i class="bi bi-chevron-left"></i> </a>
                                    <a href="" type="button"
                                        style=" background: rgba(17, 134, 203, 1); color: white;">1</a>
                                    <p style="margin: 5px;">of</p>
                                    <a href="" type="button"
                                        style="border:1px solid rgba(17, 134, 203, 1); background: white; color:rgba(17, 134, 203, 1);">24</a>
                                    <a href="" type="button"><i class="bi bi-chevron-right"
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
    name: 'listRequest',
    props: {
        msg: String
    }
}
</script>